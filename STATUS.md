# Weekly Submission Status

> ใช้ SUBMISSIONS.md เป็นหน้าส่งหลัก; สถานะนี้เป็นการจัดเตรียมท้องถิ่น 2026-10-23 ไม่ใช่การส่งหรือการรับรอง

## Onboarding checklist

- [x] ยืนยัน source repo Public ตามผู้ใช้เปลี่ยน; ตรวจ remote branch และไฟล์อ้างอิงจริงแล้ว
- [ ] จัด remote snapshot ให้ตรงหลักฐาน local bd303e8 ก่อนอ้างว่าหลักฐานล่าสุดทั้งหมดเปิดได้บน GitHub
- [x] กรอก PROJECT.md จาก source จริงและเปิดเผยข้อจำกัด
- [x] กรอก TEAM.md เฉพาะข้อมูลผู้ใช้ยืนยัน; ยังรอ username/บทบาท/คำยืนยัน
- [x] ลงทะเบียน SRS/Design/test references; Proposal ไม่คัดลอก PII; remote snapshot บางไฟล์ต่าง/ขาดจากฉบับใช้งาน
- [x] กรอก INPUTS/input-register.md พร้อม version/source of truth
- [x] คัดลอก SRS v1.2, Database Design v0.2 และ Case X SRS v1.0 เข้า INPUTS ตามคำสั่งผู้ใช้; SHA256 ตรงต้นฉบับทุกไฟล์ ใช้สำเนาเป็นแหล่งอ้างอิงหลัก
- [x] ตรวจไฟล์ที่เปลี่ยนด้วย checker และ PDF/DOCX XML extraction: ไม่พบรูปแบบรหัสนักศึกษาหรือ credential ที่ตรวจหา; ไม่เก็บ Part A coursework
- [x] สมาชิกยืนยันอ่านและอธิบายงานได้; ยังไม่ลงชื่อแทน

## Submission ledger

| Week | Output | Status | Submitted file/path | Tag | Commit hash | Submitted by/date | Feedback / revision |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01 | Quality Risk Cards v1 | Ready for Review (ร่างยังไม่ส่ง) | WEEKS/week-01/submission/W01_PP_Quality-Risk-Cards_v1.pdf | — | — | ยังไม่ส่ง | เตรียม PDF 3 risk cards แล้ว; รอเจ้าของ/peer ตรวจ; ยังไม่ส่ง |
| 02 | Project Quality Route Map v1 | Ready for Review (ร่างยังไม่ส่ง) | WEEKS/week-02/submission/W02_PP_Project-Quality-Route-Map_v1.pdf | — | — | ยังไม่ส่ง | เตรียม route map แล้ว; ยังไม่จัด Gate/peer review จริง; ยังไม่ส่ง |
| 03 | Revised Critical Requirements v1 | Ready for Review (ร่างยังไม่ส่ง) | WEEKS/week-03/submission/W03_PP_Revised-Critical-Requirements_v1.pdf | — | — | ยังไม่ส่ง | เตรียม 3 requirements และ Proposed AC; รอยืนยันขอบเวลา/ผู้ตรวจ; ยังไม่ส่ง |
| 04 | SRS Review and RTM v1 | Ready for Review (ร่างยังไม่ส่ง) | WEEKS/week-04/submission/W04_PP_SRS-Review-and-RTM_v1.pdf | — | — | ยังไม่ส่ง | เตรียม review draft/RTM 3 แถว; Conditional เป็นข้อเสนอ ไม่มี sign-off; ยังไม่ส่ง |
| 05 | HLD Review and Requirement-to-Design Trace v1 | Ready for Review (ร่างยังไม่ส่ง) | WEEKS/week-05/submission/W05_PP_Requirement-to-Design-Trace_v1.pdf | — | — | ยังไม่ส่ง | มี Case X SRS1.0/HLD0.9; trace/risk/RTM 3 แถว; รอมนุษย์ตัดสิน support/ตรวจข้ามทีม; ยังไม่ส่ง |

งาน W06–W17 ไม่ใช้ส่งภาคนี้ตาม SUBMISSIONS.md. G6/G7 อยู่ 01-plan และ 02-test-design; G8 อยู่ 03-test-execution; G9 อยู่ TEAM.md/AI-LOG.md

## Revision history

| Date | Week/artifact | From → To | Reason / feedback | Owner | New tag/commit |
| --- | --- | --- | --- | --- | --- |
| 2026-10-23 | G1–G9 | แบบว่าง → ร่างรอตรวจ | จัดทำย้อนหลังจาก source จริง; ไม่สร้างกิจกรรมทดสอบ/peer review | ปวริศ คูณศรี | ยังไม่มี |

## Local verification 2026-10-23

- `python tools/check_submission.py`: ผ่านการตรวจความครบ 12 รายการ ไม่มีคำเตือน; checker ไม่ตัดสินเนื้อหาหรือการรับรอง
- PDF 7 ไฟล์เปิดอ่านได้ รวม 29 หน้า; S1/S2 คงแบบฟอร์มเดิมเฉพาะ B; ไม่มีคอลัมน์ผลจริงใน S2
- `git diff --check` ผ่าน; โค้ด API ใหม่ผ่าน syntax check เท่านั้น ไม่ได้ execute test
- Log เดิมวันที่ 5 ต.ค. ตรง bytes/SHA256 ตาม IN-06; ชุดใหม่ 8 TC และ UAT ยัง Not Executed
- E-Filing HEAD ยัง `bd303e87429e0fc5ef18ea8bb36545e47c9f9e30`; Git status ตรง snapshot เดิมทั้ง 3,312 รายการ; SRS SHA256 คงเดิม ไม่มีการเขียนหรือรันระบบต้นทาง
- งานทั้งหมดจัดเตรียมใน repository ENGSE601 เท่านั้น; รอบนี้ผู้ใช้สั่ง commit/push เป็น progress checkpoint; ไม่สร้าง tag/Release และไม่เปลี่ยนสถานะเป็นส่งแล้ว

Reference update 2026-10-23: source repo เป็น Public แล้วตามที่ผู้ใช้เปลี่ยน; remote f8cc942 ไม่ตรง local bd303e8 ทั้ง snapshot จึงใช้สำเนาเอกสารใน INPUTS. ก่อน/หลังการคัดลอก HEAD และ Git status ตรงกัน (3,313 รายการ ณ รอบนี้); ไม่เขียน source project หรือ push. ตัวเลข 3,312 ในบันทึกรอบก่อนเป็นสถานะที่ตรวจในเวลานั้น

Latest checker 2026-10-23: ความครบ G1–G9 ผ่าน 12 จุด แต่ checker ตรวจพบ Part A 4 ไฟล์ในแพ็ก local ENGSE601_S1_Student_Pack ที่เข้ามาระหว่างการทำงานรอบต่อมา จึงกันแพ็กทั้งโฟลเดอร์ด้วย .gitignore โดยไม่ลบไฟล์. แพ็กนี้ไม่เคยถูกติดตาม Git; checker ใช้ os.walk จึงยังอาจเตือนไฟล์ ignored บนเครื่อง การตรวจ public-eligible paths แยกต้องไม่มี Part A/รหัสนักศึกษา

Progress checkpoint check 2026-10-23: instructor checker รอบนี้พบไฟล์ครบ 12 จุด ไม่มีคำเตือน (ข้อความเตือน 4 ไฟล์ข้างต้นเป็นประวัติรอบก่อน); ตรวจรายการที่จะ stage แยก ไม่มี StudentPack/Part A/รหัสนักศึกษาหรือ credential ตามรูปแบบที่ตรวจหา. SRS/Database Design รวมตามคำยืนยัน ownership และคำสั่งเผยแพร่โดยตรงของผู้ใช้; ยังคงร่างและรายการค้าง G1–G9. เก็บ bytes ของ historical log ด้วย .gitattributes เพื่อให้ SHA256 เดิมตรวจได้หลัง clone
