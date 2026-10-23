// TC-01, S2 v1. Executed 2026-10-23 by the isolated coursework integration runner.
// Run only against a separately authorized disposable E-Filing instance.
// Provision fixture A/V1, assignment and a session externally; A must have no
// EXPORT access for V1 since assignment and no confirmation. No source setup,
// migrations, seeding, credentials or persistent project data belong here.
import test from 'node:test';
import assert from 'node:assert/strict';

test('TC-01 rejects explicit confirmation without prior authorized access', async () => {
  assert.equal(process.env.EFILING_TEST_ISOLATED, '1',
    'An authorized disposable environment is required');
  const base = new URL(process.env.EFILING_TEST_BASE_URL ?? '');
  assert.ok(['127.0.0.1', 'localhost', '[::1]'].includes(base.hostname),
    'Only a locally provisioned isolated test instance is allowed');
  const cookie = process.env.EFILING_TEST_SESSION_COOKIE;
  const assignmentId = process.env.EFILING_TEST_ASSIGNMENT_ID;
  assert.ok(cookie && assignmentId, 'Provide the isolated fixture/session via environment');
  assert.match(assignmentId, /^[0-9a-f-]{36}$/i);
  const headers = { Cookie: cookie, 'X-EFiling-Client': 'web' };
  const mine = async () => {
    const response = await fetch(new URL('/api/acknowledgements/mine', base), {
      headers, redirect: 'error', signal: AbortSignal.timeout(10000),
    });
    assert.equal(response.status, 200);
    const body = await response.json();
    return body.assignments.find(item => item.id === assignmentId);
  };
  const before = await mine();
  assert.ok(before, 'Assignment belongs to the authenticated fixture user');
  assert.equal(before.confirmedAt, null, 'Fixture must be unconfirmed');
  const response = await fetch(new URL(`/api/acknowledgements/${assignmentId}/confirm`, base), {
    method: 'POST', headers: { ...headers, 'Content-Type': 'application/json' },
    body: '{}', redirect: 'error', signal: AbortSignal.timeout(10000),
  });
  // 409 is the implementation-specific transport mapping of AC-A-12 rejection.
  assert.equal(response.status, 409);
  const after = await mine();
  assert.ok(after);
  assert.equal(after.confirmedAt, null);
  assert.equal(after.versionId, before.versionId);
  // This black-box test observes rejection and unchanged visible confirmation.
  // To complete TC-01, an authorized read-only inspector of the disposable DB
  // must also verify zero new ACKNOWLEDGE audit rows. Not claimed here.
});
