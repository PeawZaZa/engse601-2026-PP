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
- ชุดรายวิชา S2 v1 จัดทำ 23 ต.ค.; log วันที่ 5 ต.ค. ไม่ใช่ผลชุดนี้และไม่มีผลเดิมตรงค่าขอบเวลา exact ของ TC-06/07 ผลรอบใหม่อยู่ด้านล่าง

## New coursework execution — 2026-10-23

ผู้ใช้อนุญาตให้เริ่มระบบและฐานข้อมูลเพื่อทดสอบ Codex จึงรัน source application จริงกับ cluster PostgreSQL 17.11 ใหม่ที่ 127.0.0.1:55439 ใช้เฉพาะฐานชื่อ `engse601_coursework_*` และไฟล์ fixture ใต้ `tmp/execution-2026-10-23/` ของ ENGSE601 ไม่ใช้ฐาน/ไฟล์เดิมและไม่คัดลอก project หรือ source code มาส่ง

| หลักฐาน | สิ่งที่พิสูจน์ได้ |
| --- | --- |
| [TC-01-08_execution_2026-10-23.txt](TC-01-08_execution_2026-10-23.txt) | รอบรวมสุดท้าย 23:29:36–23:29:42 +07:00; 8 tests, Pass 7, Fail 1, exit 1; ความล้มเหลว TC-02 อยู่ที่ download ผ่าน Chrome |
| [TC-01-08_execution_2026-10-23.json](TC-01-08_execution_2026-10-23.json) | เวลา UTC, command, runtime, source HEAD พร้อม hashes ของ source/schema/migrations, test และ raw log; working tree เป็นตัวที่ execute จึงไม่ใช้ HEAD อย่างเดียวแทน version |
| [TC-01_api_2026-10-23.txt](TC-01_api_2026-10-23.txt) | Black-box TC-01 เดิมถูกรันจริงและผ่าน; assertion audit ในฐานอยู่ใน integration runner |
| [TC-02_system_2026-10-23_before.png](TC-02_system_2026-10-23_before.png) | UI ก่อนคลิก download: งานของ fixture A รอรับทราบและปุ่มยืนยัน disabled |
| [TC-02_system_2026-10-23_download-failure.png](TC-02_system_2026-10-23_download-failure.png) | UI หลังคลิก download ขณะ browser ได้ HTTP 204/ERR_ABORTED; ยังไม่มีภาพ confirm สำเร็จ |

คำสั่งรอบรวมจาก repository ENGSE601 (ต้องจัดฐานแยกที่ว่างและ apply 5 SQL migrations ของ source ก่อน):

```text
node --import <EFILING_SOURCE_ROOT>/efiling/node_modules/tsx/dist/loader.mjs --test --test-reporter=tap --test-concurrency=1 03-test-execution/tests/acknowledgement-coursework.integration.mjs
```

Environment ที่จำเป็น: `EFILING_TEST_ISOLATED=1`, `EFILING_SOURCE_ROOT`, `DATABASE_URL` ของฐานใหม่ชื่อ `engse601_coursework_*` ที่ 127.0.0.1, `DOCUMENT_STORAGE_DIR` ใต้พื้นที่ execution ของงานนี้, `EFILING_EVIDENCE_DIR`, `EFILING_TEST_PASSWORD` ของบัญชีเดโม local, `EFILING_PLAYWRIGHT_MODULE` และ `EFILING_CHROME_PATH` ห้ามใส่ค่ารหัสผ่าน/session/.env ลง repository; ต้องมี dependencies ของ source และ Playwright พร้อม และ port 55441 ว่างสำหรับ Vite

TC-06/07 ใช้ audit timestamp fixture ที่ควบคุมไว้ที่ tA−1 ms และ tA; ผล Pass เป็นการเทียบ implementation กับ Proposed PP-AC-03 ไม่ใช่การอนุมัติ business rule TC-05 สร้าง V1/V2 ในเอกสารเดียวและสลับสถานะเฉพาะ fixture ในฐานแยกเพื่อให้ download V2 จริงโดยไม่ฝ่าฝืน unique published-version constraint

## Earlier attempts and diagnostics

เก็บ log ตามที่ออกจาก runner ไม่ลบ failure หรือปรับ expected ให้ผ่าน:

| รอบ | Log | ข้อค้นพบ/การแก้ |
| --- | --- | --- |
| 1 | [attempt-1](TC-01-08_execution_2026-10-23_attempt-1.txt) | Pass 1/Fail 7; fixture PDF มี hash ซ้ำ จึงแก้เนื้อหา fixture ให้แต่ละไฟล์ต่างกัน; ไม่ใช่ defect ของ application |
| 2 | [attempt-2](TC-01-08_execution_2026-10-23_attempt-2.txt) | Pass 6/Fail 2; browser download timeout และ fixture สอง published versions ชน constraint; แก้ fixture ให้มี published version เดียว |
| 3 | [attempt-3](TC-01-08_execution_2026-10-23_attempt-3.txt) | Pass 7/Fail 1; ตรวจพบ browser GET 204 ที่ TC-02 |
| 4 | [attempt-4](TC-01-08_execution_2026-10-23_attempt-4.txt) | รันเฉพาะ TC-02 เพื่อแยกวิธีเรียก: GET 204/ERR_ABORTED |
| 5 | [attempt-5](TC-01-08_execution_2026-10-23_attempt-5.txt) | Pass 7/Fail 1; diagnostic มี TypeError จากการเรียก status เป็น method จึงแก้เฉพาะ diagnostic |
| 6 | [attempt-6](TC-01-08_execution_2026-10-23_attempt-6.txt) | รันเฉพาะ TC-02: browser 204 แต่ backend/Vite fetch 200 attachment; ยังไม่ยุติสาเหตุ ไม่สรุปว่า application business rule ผิด |

รอบรวมสุดท้ายใช้ code ที่แก้ fixture/diagnostic แล้ว ผลยัง Pass 7/Fail 1 ตาม raw TAP; Chrome เป็น automated System check ไม่ใช่ manual acceptance หรือ UAT

## User confirmation — 2026-10-23

ปวริศ คูณศรี ชี้แจงในบทสนทนาว่า “มันขึ้นใน IDM เลยกดยกเลิกไป เอาเป็นว่ามันผ่าน” จึงบันทึก TC-02 เป็น **Pass ตามคำยืนยันผู้ใช้** และแก้การตีความว่า browser download ล้มเหลวเป็นการส่งต่อ IDM/ยกเลิกโดยผู้ใช้ คำชี้แจงนี้ไม่ได้ระบุว่าได้กด explicit confirm หรือตรวจ actor/version/time/audit ผ่าน UI แล้ว จึงไม่เพิ่มข้อกล่าวอ้างเหล่านั้น ไม่สร้างภาพ IDM หรือแก้ raw TAP/metadata ให้เป็น 8 automated passes

## Missing acceptance evidence

UAT-01 ยัง Not Executed เพราะไม่มีผู้ใช้จริงเข้าร่วม และ TC-02 ยังไม่จบเส้นทาง download → explicit confirm ผ่าน UI Owner ปวริศ คูณศรี ต้องประสานผู้รับ/DCC และบันทึกการทดสอบจริงก่อนรับรอง UAT ไม่มีผล UAT จำลอง
