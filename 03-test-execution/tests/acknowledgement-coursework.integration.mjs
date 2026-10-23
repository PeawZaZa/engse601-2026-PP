// Executes S2 v1 against the actual E-Filing application and a disposable database.
// Never point DATABASE_URL or storage at the existing project environment.
// Passwords, sessions and connection settings are supplied only through environment.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID, createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
const execFileAsync = promisify(execFile);

assert.equal(process.env.EFILING_TEST_ISOLATED, '1');
const connection = new URL(process.env.DATABASE_URL);
assert.equal(connection.hostname, '127.0.0.1');
assert.match(connection.pathname, /^\/engse601_coursework_[a-z0-9_]+$/);
const source = resolve(process.env.EFILING_SOURCE_ROOT);
const storage = resolve(process.env.DOCUMENT_STORAGE_DIR);
const evidence = resolve(process.env.EFILING_EVIDENCE_DIR);
assert.ok(storage.includes('execution-2026-10-23'), 'Use this run\'s isolated storage');
assert.ok(process.env.EFILING_TEST_PASSWORD, 'Supply the local demonstration credential privately');
const requireApi = createRequire(resolve(source, 'efiling/api/package.json'));
const request = requireApi('supertest');
const load = path => import(pathToFileURL(resolve(source, path)).href);
let db, disconnect, app, server, apiBase, reader, other, dcc, dbUserId, browser, vite;
const cookies = {};

before(async () => {
  ({ database: db, disconnectDatabase: disconnect } = await load('efiling/api/src/lib/prisma.ts'));
  db = db();
  const [actual] = await db.$queryRawUnsafe('SELECT current_database() AS name');
  assert.equal(actual.name, connection.pathname.slice(1));
  ({ dbUserId } = await load('efiling/api/src/services/documentRules.ts'));
  for (const [who, role] of [['dcc', 'ISO_QA_ADMIN'], ['reader', 'END_USER'], ['owner', 'DOC_OWNER']]) {
    const id = dbUserId(who);
    await db.user.create({ data: { id, username: `coursework_${who}`, fullName: `Synthetic ${who}`,
      email: `${who}@example.test`, passwordHash: 'unused-demo-auth-fixture' } });
    await db.userRole.create({ data: { userId: id, role } });
  }
  const { createApp } = await load('efiling/api/src/app.ts');
  app = createApp(async () => { await db.$queryRawUnsafe('SELECT 1'); });
  server = await new Promise(done => { const handle = app.listen(0, '127.0.0.1', () => done(handle)); });
  apiBase = `http://127.0.0.1:${server.address().port}`;
  const agents = {};
  for (const who of ['dcc', 'reader', 'owner']) {
    const agent = request.agent(app);
    const login = await agent.post('/api/auth/login').set('X-EFiling-Client', 'web')
      .send({ email: `${who}@example.test`, password: process.env.EFILING_TEST_PASSWORD }).expect(200);
    cookies[who] = login.headers['set-cookie'][0].split(';')[0];
    agents[who] = agent;
  }
  ({ dcc, reader, owner: other } = agents);
  await mkdir(storage, { recursive: true });
  console.log(`Runtime Node ${process.version}; database: isolated PostgreSQL; application: original source, no mocks`);
});

async function fixture(label, twoVersions = false) {
  const document = await db.document.create({ data: { documentCode: `QP-2301-${label}-${randomUUID().slice(0, 6)}`,
    title: `ENGSE601 ${label} synthetic fixture`, docType: 'QP' } });
  const versions = [];
  for (let revision = 0; revision < (twoVersions ? 2 : 1); revision++) {
    const version = await db.documentVersion.create({ data: { documentId: document.id, issueNo: 1,
      revisionNo: revision, status: revision ? 'DOC_OBSOLETE' : 'DOC_PUBLISHED', reviewStatus: 'VERIFIED', effectiveDate: new Date('2026-01-01') } });
    const key = `${randomUUID()}.pdf`;
    const bytes = Buffer.from(`%PDF-1.4\nENGSE601 synthetic fixture ${key}\n%%EOF`);
    await writeFile(resolve(storage, key), bytes);
    const file = await db.documentFile.create({ data: { versionId: version.id, fileName: 'coursework.pdf',
      mimeType: 'application/pdf', sizeBytes: bytes.length, storagePath: key,
      sha256: createHash('sha256').update(bytes).digest('hex'), uploadedById: dbUserId('dcc') } });
    versions.push({ version, file });
  }
  await dcc.post(`/api/acknowledgements/versions/${versions[0].version.id}/assign`)
    .set('X-EFiling-Client', 'web').send({ assigneeIds: [dbUserId('reader')] }).expect(200);
  const assignment = await db.acknowledgementAssignment.findUniqueOrThrow({ where: {
    versionId_assigneeId: { versionId: versions[0].version.id, assigneeId: dbUserId('reader') } } });
  return { assignment, document, ...versions[0], second: versions[1] };
}
const confirm = (agent, f) => agent.post(`/api/acknowledgements/${f.assignment.id}/confirm`)
  .set('X-EFiling-Client', 'web').send({});
async function counts(f) {
  const confirmations = await db.acknowledgementConfirmation.findMany({ where: { assignmentId: f.assignment.id } });
  const audit = await db.auditEvent.findMany({ where: { action: 'ACKNOWLEDGE', entityType: 'AcknowledgementConfirmation',
    entityId: { in: confirmations.map(row => row.id) } } });
  return { confirmations, audit };
}
async function expectRejected(f, agent = reader, status = 409) {
  const totalBefore = await db.auditEvent.count({ where: { action: 'ACKNOWLEDGE' } });
  await confirm(agent, f).expect(status);
  assert.equal((await counts(f)).confirmations.length, 0);
  assert.equal(await db.auditEvent.count({ where: { action: 'ACKNOWLEDGE' } }), totalBefore);
}
async function access(agent, file) {
  await agent.get(`/api/documents/files/${file.id}?download=1`).expect(200);
}
async function expectConfirmed(f) {
  const result = await counts(f);
  assert.equal(result.confirmations.length, 1);
  assert.equal(result.audit.length, 1);
  const record = result.confirmations[0];
  assert.equal(record.confirmedById, dbUserId('reader'));
  assert.equal(record.assignmentId, f.assignment.id);
  assert.ok(record.confirmedAt instanceof Date);
  assert.equal(result.audit[0].actorUserId, dbUserId('reader'));
  assert.deepEqual(result.audit[0].afterValue, { assignmentId: f.assignment.id,
    versionId: f.version.id, confirmedById: dbUserId('reader') });
  return record;
}

test('TC-01 API: no access -> HTTP 409, zero confirmation and zero new ACKNOWLEDGE', async t => {
  const f = await fixture('TC01');
  await expectRejected(f);
  const child = await execFileAsync(process.execPath, ['--test', resolve('03-test-execution/tests/acknowledgement.api.test.mjs')], {
    encoding: 'utf8', env: { ...process.env, EFILING_TEST_BASE_URL: apiBase,
      EFILING_TEST_SESSION_COOKIE: cookies.reader, EFILING_TEST_ASSIGNMENT_ID: f.assignment.id } });
  await writeFile(resolve(evidence, 'TC-01_api_2026-10-23.txt'), child.stdout + child.stderr);
  await expectRejected(f);
  t.diagnostic('Original black-box test executed successfully; database assertions verified separately in this case.');
});

test('TC-02 System: real Chrome UI download does not confirm; explicit button records actor/version/time and one audit', async t => {
  const f = await fixture('TC02');
  const requireWeb = createRequire(resolve(source, 'efiling/frontend/package.json'));
  const { createServer } = await import(pathToFileURL(requireWeb.resolve('vite')).href);
  const react = (await import(pathToFileURL(requireWeb.resolve('@vitejs/plugin-react')).href)).default;
  vite = await createServer({ configFile: false, root: resolve(source, 'efiling/frontend'),
    envDir: storage, cacheDir: resolve(storage, '../vite-cache'), plugins: [react()],
    server: { host: '127.0.0.1', port: 55441, strictPort: true, proxy: { '/api': apiBase } } });
  await vite.listen();
  const { chromium } = await import(pathToFileURL(process.env.EFILING_PLAYWRIGHT_MODULE).href);
  browser = await chromium.launch({ executablePath: process.env.EFILING_CHROME_PATH, headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, timezoneId: 'Asia/Bangkok' });
  page.on('response', response => {
    if (response.url().includes('/api/documents/files/')) t.diagnostic(`File request ${response.request().method()} -> ${response.status()}`);
  });
  page.on('requestfailed', req => {
    if (req.url().includes('/api/documents/files/')) t.diagnostic(`File request failed: ${req.method()} ${req.failure()?.errorText}`);
  });
  await page.goto('http://127.0.0.1:55441', { waitUntil: 'networkidle' });
  await page.locator('#email').fill('reader@example.test');
  await page.locator('#password').fill(process.env.EFILING_TEST_PASSWORD);
  await page.getByRole('button', { name: 'เข้าสู่ระบบ', exact: true }).click();
  await page.waitForFunction(() => !document.querySelector('#password'));
  await page.goto('http://127.0.0.1:55441/#ack');
  const row = page.getByRole('row').filter({ hasText: f.document.documentCode });
  const button = row.getByRole('button', { name: 'ยืนยันรับทราบ', exact: true });
  await row.waitFor();
  assert.equal(await button.isDisabled(), true);
  await page.screenshot({ path: resolve(evidence, 'TC-02_system_2026-10-23_before.png'), fullPage: true });
  const download = page.waitForEvent('download', { timeout: 8000 }).then(value => ({ value }), error => ({ error }));
  const fileResponse = page.waitForResponse(response => response.request().method() === 'GET' && response.url().includes(`/api/documents/files/${f.file.id}`));
  await row.getByRole('link', { name: 'ดาวน์โหลด PDF', exact: true }).click();
  const actualFile = await fileResponse;
  t.diagnostic(`Browser file response: HTTP ${actualFile.status()}, disposition ${actualFile.headers()['content-disposition'] ?? 'absent'}`);
  if (actualFile.status() !== 200) {
    await page.screenshot({ path: resolve(evidence, 'TC-02_system_2026-10-23_download-failure.png'), fullPage: true });
    const direct = await fetch(`${apiBase}/api/documents/files/${f.file.id}?download=1`, { headers: { Cookie: cookies.reader } });
    t.diagnostic(`Diagnostic backend fetch after browser failure: HTTP ${direct.status}, disposition ${direct.headers.get('content-disposition') ?? 'absent'}`);
    await direct.arrayBuffer();
    const proxy = await fetch(`http://127.0.0.1:55441/api/documents/files/${f.file.id}?download=1`, { headers: { Cookie: cookies.reader } });
    t.diagnostic(`Diagnostic Vite-proxy fetch after browser failure: HTTP ${proxy.status}, disposition ${proxy.headers.get('content-disposition') ?? 'absent'}`);
    await proxy.arrayBuffer();
  }
  assert.equal(actualFile.status(), 200);
  const downloadResult = await download;
  if (downloadResult.error) throw downloadResult.error;
  const downloaded = downloadResult.value;
  assert.equal(await downloaded.failure(), null);
  const before = await counts(f);
  assert.equal(before.confirmations.length, 0);
  assert.equal(before.audit.length, 0);
  assert.match(await row.innerText(), /รอรับทราบ/);
  assert.equal(await button.isEnabled(), true);
  await page.screenshot({ path: resolve(evidence, 'TC-02_system_2026-10-23_downloaded.png'), fullPage: true });
  await button.click();
  await page.getByRole('status').filter({ hasText: 'บันทึกการรับทราบแล้ว' }).waitFor();
  await page.waitForFunction(code => [...document.querySelectorAll('tr')].some(tr =>
    tr.textContent.includes(code) && !tr.textContent.includes('รอรับทราบ') && tr.textContent.includes('รับทราบ')), f.document.documentCode);
  await expectConfirmed(f);
  await page.screenshot({ path: resolve(evidence, 'TC-02_system_2026-10-23_confirmed.png'), fullPage: true });
  t.diagnostic(`Real browser ${await browser.version()}; automated System execution, not manual acceptance or UAT.`);
  await browser.close(); browser = undefined;
  await vite.close(); vite = undefined;
});

test('TC-03 API: other readable user cannot confirm A assignment -> HTTP 403, no writes', async () => {
  const f = await fixture('TC03');
  await access(other, f.file);
  await expectRejected(f, other, 403);
});
test('TC-04 API: B access cannot satisfy A -> HTTP 409, no writes', async () => {
  const f = await fixture('TC04');
  await access(other, f.file);
  await expectRejected(f);
});
test('TC-05 API: A access to V2 cannot satisfy assigned V1 -> HTTP 409, no writes', async () => {
  const f = await fixture('TC05', true);
  // Isolated lifecycle fixture: only one published version per document is allowed.
  // Obtain real access to V2 while it is current, then restore V1 before confirming.
  await db.documentVersion.update({ where: { id: f.version.id }, data: { status: 'DOC_OBSOLETE' } });
  await db.documentVersion.update({ where: { id: f.second.version.id }, data: { status: 'DOC_PUBLISHED' } });
  await access(reader, f.second.file);
  await db.documentVersion.update({ where: { id: f.second.version.id }, data: { status: 'DOC_OBSOLETE' } });
  await db.documentVersion.update({ where: { id: f.version.id }, data: { status: 'DOC_PUBLISHED' } });
  await expectRejected(f);
});
test('TC-06 API: exact access at assignment minus 1 ms -> HTTP 409, no writes (Proposed AC)', async t => {
  const f = await fixture('TC06');
  const at = new Date(f.assignment.assignedAt.getTime() - 1);
  const event = await db.auditEvent.create({ data: { actorUserId: dbUserId('reader'), actorRole: 'END_USER',
    action: 'EXPORT', entityType: 'DocumentFile', entityId: f.file.id, occurredAt: at,
    afterValue: { versionId: f.version.id } } });
  assert.equal(event.occurredAt.getTime() - f.assignment.assignedAt.getTime(), -1);
  await expectRejected(f);
  t.diagnostic('Controlled synthetic access timestamp; result verifies implementation against Proposed PP-AC-03, not stakeholder approval.');
});
test('TC-07 API: exact access at assignment time -> HTTP 200, one confirmation/audit (Proposed AC)', async t => {
  const f = await fixture('TC07');
  const event = await db.auditEvent.create({ data: { actorUserId: dbUserId('reader'), actorRole: 'END_USER',
    action: 'EXPORT', entityType: 'DocumentFile', entityId: f.file.id, occurredAt: f.assignment.assignedAt,
    afterValue: { versionId: f.version.id } } });
  assert.equal(event.occurredAt.getTime() - f.assignment.assignedAt.getTime(), 0);
  await confirm(reader, f).expect(200);
  await expectConfirmed(f);
  t.diagnostic('Exact boundary fixture; acceptance authority for PP-AC-03 remains unconfirmed.');
});
test('TC-08 API: duplicate confirm preserves id/time and exactly one confirmation/audit', async () => {
  const f = await fixture('TC08');
  await access(reader, f.file);
  await confirm(reader, f).expect(200);
  const first = await expectConfirmed(f);
  const response = await confirm(reader, f).expect(200);
  const again = await expectConfirmed(f);
  assert.equal(again.id, first.id);
  assert.equal(again.confirmedAt.getTime(), first.confirmedAt.getTime());
  assert.equal(response.body.confirmation.id, first.id);
  assert.equal(response.body.confirmation.confirmedAt, first.confirmedAt.toISOString());
});

after(async () => {
  await browser?.close();
  await vite?.close();
  if (server) await new Promise(done => server.close(done));
  await disconnect?.();
});
