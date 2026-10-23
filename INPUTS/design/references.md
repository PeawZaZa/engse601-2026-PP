# Design and supporting evidence references

## IN-03

- E-Filing ADR: `GroupB_Architecture_Decisions.md`; ไม่พบเลขรุ่นที่ประกาศ; หัวเอกสารวันที่ 2026-08-30
- แหล่ง `GroupB_Architecture_Decisions.md` @ `bd303e87429e0fc5ef18ea8bb36545e47c9f9e30`; commit ล่าสุดของไฟล์ `6f54f2ab1e941ca5f20880ae559d594e3a0fa7ee` (2026-09-03); SHA256 ของไฟล์ local `b84f48175713cd635c837c5b2a6ff7213af61e935d6efa4da9854cb858d05fec`. เนื้อหาตรง Git snapshot หลังปรับเฉพาะ CRLF/LF สำหรับการเปรียบเทียบ ไม่แก้ไฟล์ต้นทาง
- แหล่ง: [GitHub f8cc942 — เนื้อหาตรงฉบับใช้งาน](https://github.com/PeawZaZa/E-FIling-ISO-9001/blob/f8cc9427fcaf3cd814cd0bcf37843273698d9899/GroupB_Architecture_Decisions.md); [เปิดต้นทาง local — สำรอง](</F:/Work/myProject/E-FIling-ISO-9001/GroupB_Architecture_Decisions.md>); ใช้ ADR-01–03/05 เป็นบริบท W02/W04/S1 ไม่ใช่ HLD ปัจจุบันที่อนุมัติสำหรับ UC-A-10
- **Excluded from copy**: มีชื่อผู้ร่วมจัดทำที่ไม่ได้รับการยืนยันสิทธิ์เผยแพร่ในงานนี้ และยังไม่มีหลักฐานให้เผยแพร่เอกสาร private ทั้งฉบับ ไม่สร้าง sanitized copy
- แผนที่ Ack ที่อยู่ใน [S1-B_PP.docx](../../01-plan/S1-B_PP.docx) เป็นงานรายวิชาสร้างย้อนหลัง 2026-10-23 จากโค้ด IN-13; ไม่ใช่ต้นฉบับ ADR หรือหลักฐานการออกแบบก่อนพัฒนา

## IN-08

- สำเนาต้นฉบับ: [ENGSE601_CaseX_HLD_v0_9_Draft_for_Review_TH.docx](ENGSE601_CaseX_HLD_v0_9_Draft_for_Review_TH.docx) — **0.9 Draft for Review**, ไม่ใช่ approved design
- GitHub source snapshot: ยังไม่พบฉบับใช้งานบน GitHub — อ้าง local Git `bd303e8`
- Source Git: `ENGSE601_S1_Student_Pack/ENGSE601_S1_Student_Pack/2_เอกสารอ้างอิง_CaseX/ENGSE601_CaseX_HLD_v0_9_Draft_for_Review_TH.docx` @ `bd303e87429e0fc5ef18ea8bb36545e47c9f9e30`; ไฟล์ใน working tree ถูกลบอยู่เดิม อ่านจาก Git blob โดยไม่ restore
- Public source ที่เปิดได้: [Case X HLD v0.9](https://se-rmutl.github.io/engse601/materials/casex/ENGSE601_CaseX_HLD_v0_9_Draft_for_Review_TH.docx) — HTTP 200 เมื่อ 2026-10-23
- SHA256 ของสำเนา/source Git/public download ตรงกัน: `1f88627b696ffa1b4ae7294eb0ff183f6cd22dbb2124f5ceb28e5e62e7d34d9e`; 19,332 bytes; ไม่แก้เนื้อหา/metadata
- สิทธิ์ใช้สำหรับรายวิชา: [ข้อกำหนดสื่อ ENGSE601](https://github.com/se-rmutl/ENGSE601/blob/6f7d449d3286b5eabf35de436511421e93c09dd9/LICENSE.md) อนุญาตนักศึกษาใช้และดัดแปลงสำหรับงานรายวิชาโดยอ้างที่มาและปกป้องข้อมูลโครงงาน; สำเนานี้เก็บต้นฉบับและ attribution
- ตรวจ DOCX text/metadata/comments: ไม่พบรูปแบบรหัสนักศึกษาหรือ token ที่ตรวจหา ไม่มี media หรือ comment entries; creator/lastModifiedBy เป็น `Un-named`; เนื้อหาสมมติ Case X ไม่ใช่ข้อมูลปฏิบัติงาน E-Filing
- ใช้ใน W05 ตาราง 2/3/4/5 และ D-02/D-03; ต้นฉบับ SRS ที่ใช้คู่กันยังเป็น v1.0 ใน IN-07

## IN-10

- แหล่งหลักสำหรับอ้าง database design: [Database_Design.md](Database_Design.md) — **v0.2 Current Implemented Model / Working Draft**; วันที่ทบทวน 29 ก.ย. 2569; ไม่ใช่ Approved Baseline หรือ real-user acceptance
- คัดลอกตามคำสั่งผู้ใช้ให้เก็บไฟล์อ้างอิงใน INPUTS จาก `Database_Design.md` @ `bd303e87429e0fc5ef18ea8bb36545e47c9f9e30` โดยไม่แก้เนื้อหา; 22,691 bytes
- SHA256 ตรงต้นฉบับ `c70d4a173579cbc62545b91bc40843bc2e81ef52276743b69b0fdc7a2068a1ce`; Git blob `088f4f043d8e4da1365f705024f0c55507828464`; SHA256 ของ Git-normalized content `23e05dcf8906c5eb4ebcf435614f4656af074f96eac55d080eb46104f03f384d`
- รายงาน inventory 38 models เป็นข้อเท็จจริงจากเอกสาร ไม่ใช่ผลการรันฐานข้อมูลใหม่; ไม่คัดลอก schema/migrations/database/storage
- คงข้อความจำกัดการเผยแพร่ต้นฉบับครบ; การคัดลอกตามคำสั่งในแชตไม่ใช่หลักฐานอนุมัติจากอาจารย์/หน่วยงาน
- ตรวจข้อความก่อนคัดลอก ไม่พบรูปแบบรหัสนักศึกษา อีเมล เบอร์โทรที่มีป้าย token หรือ connection credential ที่ตรวจหา
- GitHub f8cc942 มี v0.2 วันที่ทบทวน 27 ก.ย. ซึ่งเนื้อหาต่าง จึงอ้างไฟล์ใน INPUTS นี้แทน. ลิงก์ภาพ relative ภายในต้นฉบับคงเดิม ไม่คัดลอก assets ทั้งชุด

## IN-11

- `PROJECT_STATE.md` — current-state record; ระบุอัปเดต 2026-10-05
- แหล่ง `PROJECT_STATE.md` @ `bd303e87429e0fc5ef18ea8bb36545e47c9f9e30`; commit ล่าสุดของไฟล์ `60f687cf952918e025f8e26eeeba2cdd4519772d` (2026-10-15); SHA256 ของไฟล์ local `acf48ca00d96a6f761e4d672c2e713b86b0fd02fc09e3168881bc4d887a4e55e`. เนื้อหาตรง Git snapshot หลังปรับเฉพาะ CRLF/LF สำหรับการเปรียบเทียบ ไม่แก้ไฟล์ต้นทาง
- แหล่ง: [GitHub f8cc942 — ฉบับก่อนหน้า เนื้อหาต่างจากฉบับใช้งาน](https://github.com/PeawZaZa/E-FIling-ISO-9001/blob/f8cc9427fcaf3cd814cd0bcf37843273698d9899/PROJECT_STATE.md); [เปิดต้นทาง local — สำรอง](</F:/Work/myProject/E-FIling-ISO-9001/PROJECT_STATE.md>); ใช้ตรวจบริบท/สถานะ ไม่ใช่หลักฐาน approval
- ไม่คัดลอกทั้งฉบับ; public PROJECT_STATE ที่ f8cc942 อัปเดต 2026-09-27 ต่างจาก local 2026-10-05 ที่ใช้อ้างอิง; current-source availability บน remote ยังไม่พร้อม

## IN-12

| เอกสาร | รุ่น/การใช้ | GitHub reference / local สำรอง | SHA256 |
| --- | --- | --- | --- |
| docs/TEST_EXECUTION_EVIDENCE.md | 2026-10-05; บริบท Node/PostgreSQL และ scope ของ log | ยังไม่พบฉบับใช้งานบน GitHub — อ้าง local Git `bd303e8`; [เปิดต้นทาง local — สำรอง](</F:/Work/myProject/E-FIling-ISO-9001/docs/TEST_EXECUTION_EVIDENCE.md>) | 95f7ad05beccb298f3bbd50b868b61c03a16a1bec4c13e21e8b5d7b7247a8636 |
| docs/FINAL_TESTING_COMPLETION_REPORT.md | 2026-10-05; ข้อจำกัด UAT และ coverage | ยังไม่พบฉบับใช้งานบน GitHub — อ้าง local Git `bd303e8`; [เปิดต้นทาง local — สำรอง](</F:/Work/myProject/E-FIling-ISO-9001/docs/FINAL_TESTING_COMPLETION_REPORT.md>) | e64b132b783000d63a12a4a1cf95c3de265f88b5d56ee0d2e79909feb4503285 |

ทั้งสองเอกสารตรง snapshot `bd303e87429e0fc5ef18ea8bb36545e47c9f9e30` หลังเทียบ CRLF/LF; commit ล่าสุด `60f687cf952918e025f8e26eeeba2cdd4519772d`. ยังไม่พบรายงานสองไฟล์นี้บน remote f8cc942; ไม่คัดลอกรายงานทั้งฉบับ; ใช้ log ที่มีอยู่ใน IN-06 และเปิดเผยข้อจำกัดตามจริง ไม่แทนผลรันใหม่

## IN-13

โค้ด/definitions ที่ใช้ trace จริง ไม่ใช่เอกสารที่อนุญาตให้คัดลอกเข้า public INPUTS. ทุกพาธด้านล่างมีอยู่และเนื้อหาตรง `bd303e87429e0fc5ef18ea8bb36545e47c9f9e30` หลังเทียบ CRLF/LF; GitHub access ตรวจแบบไม่ใช้ credential แล้ว: controller/routes/UI/acknowledgements.integration ตรงฉบับใช้งาน; acknowledgementService/documentService ต่างเนื้อหา; ack-access.integration ยังไม่พบ remote

| Source path | GitHub availability / local สำรอง | SHA256 local bytes |
| --- | --- | --- |
| efiling/api/src/services/acknowledgementService.ts | [GitHub f8cc942 — ฉบับก่อนหน้า เนื้อหาต่างจากฉบับใช้งาน](https://github.com/PeawZaZa/E-FIling-ISO-9001/blob/f8cc9427fcaf3cd814cd0bcf37843273698d9899/efiling/api/src/services/acknowledgementService.ts); [เปิดต้นทาง local — สำรอง](</F:/Work/myProject/E-FIling-ISO-9001/efiling/api/src/services/acknowledgementService.ts>) | 0573747f1ccde5ccbc8d93d87324ca9912016dcda1a714569638f06981ac30f9 |
| efiling/api/src/services/documentService.ts | [GitHub f8cc942 — ฉบับก่อนหน้า เนื้อหาต่างจากฉบับใช้งาน](https://github.com/PeawZaZa/E-FIling-ISO-9001/blob/f8cc9427fcaf3cd814cd0bcf37843273698d9899/efiling/api/src/services/documentService.ts); [เปิดต้นทาง local — สำรอง](</F:/Work/myProject/E-FIling-ISO-9001/efiling/api/src/services/documentService.ts>) | e1251749af2434983c56cafb98abb0acac4af5ea5d6a10d8a1bd08385c157466 |
| efiling/api/src/routes/acknowledgementRoutes.ts | [GitHub f8cc942 — เนื้อหาตรงฉบับใช้งาน](https://github.com/PeawZaZa/E-FIling-ISO-9001/blob/f8cc9427fcaf3cd814cd0bcf37843273698d9899/efiling/api/src/routes/acknowledgementRoutes.ts); [เปิดต้นทาง local — สำรอง](</F:/Work/myProject/E-FIling-ISO-9001/efiling/api/src/routes/acknowledgementRoutes.ts>) | 580e9b2a0062fed93dfa013e884c794e9ada43eb0f47f749b28846a03eb935f8 |
| efiling/api/src/controllers/acknowledgementController.ts | [GitHub f8cc942 — เนื้อหาตรงฉบับใช้งาน](https://github.com/PeawZaZa/E-FIling-ISO-9001/blob/f8cc9427fcaf3cd814cd0bcf37843273698d9899/efiling/api/src/controllers/acknowledgementController.ts); [เปิดต้นทาง local — สำรอง](</F:/Work/myProject/E-FIling-ISO-9001/efiling/api/src/controllers/acknowledgementController.ts>) | 1674a447fbd7fe77176e637c79bae0cd9377ac0907e2d9172dc9183f44d4fd12 |
| efiling/frontend/src/pages/AcknowledgementsPage.tsx | [GitHub f8cc942 — เนื้อหาตรงฉบับใช้งาน](https://github.com/PeawZaZa/E-FIling-ISO-9001/blob/f8cc9427fcaf3cd814cd0bcf37843273698d9899/efiling/frontend/src/pages/AcknowledgementsPage.tsx); [เปิดต้นทาง local — สำรอง](</F:/Work/myProject/E-FIling-ISO-9001/efiling/frontend/src/pages/AcknowledgementsPage.tsx>) | 569b0fc588b6477741764bc7f5d587256b9c5aab8dbc175de11a45af243da0e0 |
| efiling/api/tests/ack-access.integration.ts | ยังไม่พบฉบับใช้งานบน GitHub — อ้าง local Git `bd303e8`; [เปิดต้นทาง local — สำรอง](</F:/Work/myProject/E-FIling-ISO-9001/efiling/api/tests/ack-access.integration.ts>) | b509caaeedfc8ace02a58f4c717500dda683def79af8122d329a760c278eb139 |
| efiling/api/tests/acknowledgements.integration.ts | [GitHub f8cc942 — เนื้อหาตรงฉบับใช้งาน](https://github.com/PeawZaZa/E-FIling-ISO-9001/blob/f8cc9427fcaf3cd814cd0bcf37843273698d9899/efiling/api/tests/acknowledgements.integration.ts); [เปิดต้นทาง local — สำรอง](</F:/Work/myProject/E-FIling-ISO-9001/efiling/api/tests/acknowledgements.integration.ts>) | 27beeace2bb6252a38d27233234bcc764380aa3acf442d530f6cff128bdacdb1 |

ไม่คัดลอกโค้ด fixture หรือ source directories; ตัวอย่าง credential ใน tests ไม่ถูกนำมาใส่เอกสารอ้างอิงนี้ โค้ดทดสอบใหม่ของรายวิชาอยู่ใน [B1 tests](../../03-test-execution/tests/acknowledgement.api.test.mjs) และยังไม่ได้รัน

## IN-14

- หลักฐานตัวเลือก feature ก่อนงานนี้: `ENGSE601_S1_Student_Pack/outputs/ENGSE601_S1_PartB_Evidence_Draft.md` @ `bd303e87429e0fc5ef18ea8bb36545e47c9f9e30`; Git blob `1310f954dfa1a18a648a3eaafbb28c6bbb28cdfe` มีอยู่จริง แม้ไฟล์ถูกลบจาก working tree อยู่เดิม
- ยังไม่พบฉบับใช้งานบน GitHub — อ้าง local Git `bd303e8`; ไม่ทำลิงก์ไปยังไฟล์ local ที่ถูกลบ; ผู้มีสิทธิ์อ่านได้ด้วย `git --no-optional-locks -C F:/Work/myProject/E-FIling-ISO-9001 show bd303e87429e0fc5ef18ea8bb36545e47c9f9e30:ENGSE601_S1_Student_Pack/outputs/ENGSE601_S1_PartB_Evidence_Draft.md` โดยไม่เปลี่ยน working tree
- ใช้เพียงยืนยันว่า S1 เดิมเลือก Acknowledgement จึงคง feature; ไม่ถือเป็น requirement approval หรือ review ของทีม
- ยังไม่พบ draft ฉบับนี้บน remote; ไม่คัดลอก draft ส่วนตัว และไม่คัดลอกงานส่วน A

## Access limitation

GitHub เป็น Public แล้วและตรวจ URL จริงแบบไม่ใช้ credential; local links เป็นสำรอง. ต้องแยก snapshot ที่เข้าถึงได้ f8cc942 ออกจาก snapshot ที่ใช้ทำงาน bd303e8 ซึ่งยังไม่พบ remote; ไม่ใช้ผลอ่านไฟล์คนละ revision แทนหลักฐานฉบับใช้งาน

Publication checkpoint 2026-10-23: ผู้ใช้ยืนยันว่าเอกสารทั้งหมดเป็นของตนและสั่งให้รวม SRS/Database Design ใน commit/push ของ public ENGSE601 โดยตรง หลังแจ้งข้อจำกัดในต้นฉบับแล้ว; คงต้นฉบับและข้อความเดิม ไม่อ้างเป็นการอนุมัติ baseline/ผลทดสอบ
