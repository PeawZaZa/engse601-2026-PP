# หลักฐาน B1

## Existing historical evidence

- `TC-01_api_2026-10-05.txt` เป็นสำเนา bytes เดิมจาก `docs/testing-evidence/2026-10-05/integration-api.log` ที่ source commit `bd303e87429e0fc5ef18ea8bb36545e47c9f9e30` ไม่แก้ข้อความหรือสร้างผลใหม่
- SHA256: `3a255efa2cd7bedd08e9883083cbb56e01ff8f13b87dd045a92cd79139350f4d`
- วันที่รันเดิม: 5 ต.ค. 2026 Asia/Bangkok; metadata เริ่ม `2026-10-04T19:04:30.711Z` UTC; Node v22.23.1 / PostgreSQL 17.10 / Express + Supertest / disposable schemas
- Working directory เดิม: `efiling/`; คำสั่งจริงจาก execution.json:

```text
node --import tsx --test --test-reporter=tap --test-concurrency=1 api/tests/ack-access.integration.ts api/tests/acknowledgements.integration.ts api/tests/audit.integration.ts api/tests/car.integration.ts api/tests/dashboard.integration.ts api/tests/documents.integration.ts api/tests/records.integration.ts
```

- exit code เดิม 0; log รวม 7 top-level suites แต่เกี่ยวกับ feature นี้โดยตรงเพียง 2 suites ต้นไฟล์ ไม่แปลงเป็นจำนวน TC รายวิชา
- Metadata การรันเดิมไม่ระบุ source commit: `bd303e8` เป็น commit ที่เก็บหลักฐานและไฟล์อ้างอิงที่ตรวจ ไม่ใช่การยืนยัน commit ที่ถูก execute
- ชุดรายวิชา S2 v1 จัดทำ 23 ต.ค.; TC-01–08 ใหม่ทั้งหมด `Not Executed` แม้มีหลักฐานเดิมช่วยเทียบ; TC-06/07 ค่าขอบเวลาแบบ exact ยังไม่มีผลเดิมตรงตัว

## Missing execution evidence

ยังไม่มีผลการรัน test ใหม่ `acknowledgement.api.test.mjs`, ภาพ System TC-02 หรือ UAT ผู้ใช้จริงในบริบทชุดรายวิชา ไม่สร้างไฟล์จำลองแทน
Owner: ปวริศ คูณศรี; เตรียมระบบแยกและผู้ตรวจ/ผู้ใช้ก่อนนัดรัน โดยต้องไม่แตะ source เดิม
