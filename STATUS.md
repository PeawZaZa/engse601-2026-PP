# Weekly Submission Status

ใช้ [SUBMISSIONS.md](SUBMISSIONS.md) เป็นหน้าส่งหลักสำหรับ G1–G9 หน้านี้สรุปความพร้อมและประวัติการส่ง ณ 2026-10-23

## ความพร้อมของ repository

| รายการ | สถานะ |
| --- | --- |
| Repository | [PeawZaZa/engse601-2026-PP](https://github.com/PeawZaZa/engse601-2026-PP) · Public |
| โครงงานและ feature | E-Filing Phase 1 · UC-A-10 ยืนยันรับทราบเอกสารหลังเข้าถึงฉบับที่ได้รับมอบหมาย |
| ทีมและผู้ส่ง | PP · ปวริศ คูณศรี · PeawZaZa ตาม [TEAM.md](TEAM.md) |
| เอกสาร G1–G9 | มีไฟล์ครบใน snapshot แรกและ main; รายการและข้อจำกัดอยู่ใน SUBMISSIONS.md |
| เอกสารอ้างอิง | [input-register.md](INPUTS/input-register.md) และ [project-links.md](INPUTS/project-links.md) สอบกลับ version/source/hash; SRS v1.2 ยังเป็น Working Draft |
| ความเป็นส่วนตัว | ตรวจไฟล์ที่ติดตามด้วย Git 89 ไฟล์ ไม่พบรูปแบบรหัสนักศึกษา/credential ที่ตรวจหา; ไม่รวม StudentPack และงานเดี่ยว |
| การยืนยันของสมาชิก | เจ้าของทำเครื่องหมายยืนยันอ่านและอธิบายงานได้ใน [commit f670825](https://github.com/PeawZaZa/engse601-2026-PP/commit/f670825373090976316ebd89ed30268ffc6f4813); ไม่ใช่ independent review หรือ sign-off |

## ประวัติการส่งและแก้ไข

| รายการ | Snapshot / reference | วันที่และหมายเหตุ |
| --- | --- | --- |
| ส่งครั้งแรก | Snapshot `engse601-submit` · [9ba29f8](https://github.com/PeawZaZa/engse601-2026-PP/commit/9ba29f804c4cb1b6d00d4e07c877a50872dfb4f9) · [หน้า Releases](https://github.com/PeawZaZa/engse601-2026-PP/releases) | ผู้ส่งยืนยันส่งวันที่ 2026-10-23; ไม่บันทึกเวลาเผยแพร่ที่ยังตรวจยืนยันไม่ได้ |
| ข้อมูลสมาชิกและคำยืนยัน | [c3bee71](https://github.com/PeawZaZa/engse601-2026-PP/commit/c3bee71b21e6cf94a63ff3a81262549a62c54a9b) → [f670825](https://github.com/PeawZaZa/engse601-2026-PP/commit/f670825373090976316ebd89ed30268ffc6f4813) | 2026-10-23; ผู้ส่งแก้ TEAM.md และยืนยันใน STATUS.md บน GitHub |
| main ก่อนปรับเอกสารสถานะรอบนี้ | f670825373090976316ebd89ed30268ffc6f4813 | เวลา commit 22:55:11 +07:00; ประวัติล่าสุดดู [main commits](https://github.com/PeawZaZa/engse601-2026-PP/commits/main/) |
| เอกสารสถานะฉบับส่ง | SUBMISSIONS.md · STATUS.md · PROJECT.md · TEAM.md · AI-LOG.md | 2026-10-23; ปรับสถานะและลิงก์ตามไฟล์จริง ไม่เปลี่ยน tag เดิมหรือผลทดสอบ |
| หลักฐานรันชุดรายวิชาใหม่ | [TAP](03-test-execution/evidence/TC-01-08_execution_2026-10-23.txt) · [metadata](03-test-execution/evidence/TC-01-08_execution_2026-10-23.json) | 2026-10-23 23:29 +07:00; Pass 7/Fail 1 จากฐานแยก; ไม่แทน UAT |

## ผลตรวจและข้อจำกัด

- ตรวจไฟล์อ้างอิง G1–G9 ใน snapshot แรก 16 ไฟล์ เปิด URL ได้ทั้งหมด; ตรวจลิงก์ภายในทะเบียนและหน้าส่งงานแล้ว
- Instructor checker พบไฟล์ครบ 12 จุด; เตือนงานเดี่ยว 4 ไฟล์ในโฟลเดอร์ local ที่ Git ignore ซึ่งไม่อยู่ในไฟล์ติดตามหรือรายการส่ง ไม่ใช่การรับรองเนื้อหา ผลทดสอบ หรือ Gate
- Log API เดิมวันที่ 2026-10-05 คง bytes/SHA256; รอบใหม่ 2026-10-23 รัน TC-01–08 แล้ว: Pass 7 / Fail 1 / Not Executed 0; TC-02 ผ่าน Chrome หยุดที่ download HTTP 204 ขณะที่ backend/proxy fetch ได้ 200 ดู [ผลจริงและหลักฐาน](03-test-execution/execution-report.md); UAT-01 ยัง Not Executed ไม่มีผู้ใช้จริงเข้าร่วม
- ขอบเวลา Proposed AC, independent review/re-check, คำตัดสิน support ของ W05 และ Gate A/Gate B sign-off ยังไม่มีหลักฐานยืนยัน ห้ามอ่านสถานะส่งเอกสารเป็นการรับรองกิจกรรมเหล่านี้
- E-Filing ใช้อ่านอ้างอิงเท่านั้น ไม่แก้ไฟล์ branch HEAD หรือสถานะงานที่ค้างอยู่
