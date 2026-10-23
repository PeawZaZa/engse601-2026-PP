# Requirement and SRS references

## IN-02

- แหล่งหลักสำหรับ coursework: [SRS_v1.md](SRS_v1.md) — **v1.2 Working Draft — Implementation Reconciled**; ไม่ใช่ Baseline Candidate หรือ Approved Baseline
- คัดลอกตามคำสั่งผู้ใช้ในแชตวันที่ 2026-10-23 จาก `E-FIling-ISO-9001/SRS_v1.md` @ `bd303e87429e0fc5ef18ea8bb36545e47c9f9e30` โดยไม่แก้เนื้อหา/metadata หรือสร้าง sanitized copy
- SHA256 ของไฟล์ที่คัดลอกตรงต้นฉบับ: `cfe04b33ef4484cdfe1d789f2b03bab982d096d4b7a96d5d0b0a83efc61f611d`; 816,045 bytes; Git blob `d21156d13f5a9be7ff4df81982b7a40757d3fa76`
- SHA256 ของ Git-normalized content: `31829369b717159b50b6149cbe652437c8ba0544f12794442daf57c2a90a18db`; บันทึกแยกเพราะ Git อาจปรับ CRLF/LF ตามกติกา text ของ repo โดยเนื้อหาข้อกำหนดเดิม
- วันที่หัวเอกสาร 26 ก.ย. 2569; revision history มีรายการ 29 ก.ย. 2569; commit ล่าสุดของไฟล์ 60f687cf952918e025f8e26eeeba2cdd4519772d (15 ต.ค. 2026) ไม่ใช่วันที่อนุมัติ
- ใช้ W01–W04/S1/S2/B1: FR-A-14 L1745, FR-A-18 L1746, FR-A-19 L1747; UC-A-10 §4.13, BR-A-07 L2819, AC-A-12 L3475 และ AC-A-16
- คงข้อความจำกัดการเผยแพร่ในต้นฉบับไว้ครบ การคัดลอกตามคำสั่งนี้ไม่ใช่หลักฐานอนุมัติจากอาจารย์/หน่วยงานหรือการอนุมัติ requirement
- ตรวจข้อความก่อนคัดลอก ไม่พบรูปแบบรหัสนักศึกษา อีเมลส่วนบุคคล เบอร์โทรที่มีป้ายกำกับ token หรือ connection URI พร้อม credential ที่ตรวจหา
- GitHub source ที่เปิดได้มี v1.2 ชื่อเดียวกันที่ f8cc942 แต่เนื้อหาต่างจาก bd303e8 จึงไม่ใช้แทนไฟล์นี้; ใช้ไฟล์ใน INPUTS เป็นหลัก
- ลิงก์ภาพ/ไฟล์ประกอบแบบ relative ภายในต้นฉบับคงเดิมและอาจชี้ไป assets ของ source project; ไม่คัดลอกภาพหรือเอกสารองค์กรทั้งชุด

## IN-05

- Stakeholder/business rules/glossary ใช้ [SRS v1.2 ใน INPUTS](SRS_v1.md) ฉบับเดียวกับ IN-02: §1.2, §2.3, §4.13, §5.5, BR-A-07 และ TBD-A-06
- ไม่มีสำเนามติผู้ใช้จริงเพิ่มเติม; Current หมายถึง working reference ที่เลือก ไม่ใช่การอนุมัติของหน่วยงาน

## IN-07

- แหล่งหลัก W05: [ENGSE206_CaseX_SRS_v1.0_TH.docx](ENGSE206_CaseX_SRS_v1.0_TH.docx) — **v1.0 Review Candidate**
- คัดลอกจาก `guide/ENGSE206_CaseX_SRS_v1.0_TH.docx` @ `bd303e87429e0fc5ef18ea8bb36545e47c9f9e30` ตามคำสั่งให้เก็บไฟล์อ้างอิงใน INPUTS; SHA256 `3595feccd8fde335b8a2389621a6d5ce859c887fcaa1ebe6353374dbcc9b0790`; 1,918,286 bytes
- เนื้อหา/bytes ตรง local Git blob `9b5ad651b02e85e85b57f16bc9b071fdf555f826` และตรงไฟล์ที่อ่านจาก GitHub remote f8cc942 แบบไม่ใช้ credential; ไม่ใช้ v1.1 แทน
- แหล่งสาธารณะ: [GitHub snapshot f8cc942](https://github.com/PeawZaZa/E-FIling-ISO-9001/blob/f8cc9427fcaf3cd814cd0bcf37843273698d9899/guide/ENGSE206_CaseX_SRS_v1.0_TH.docx)
- ใช้ §4 FR-X-02/05/09 Must, §5.5 BR-X-01, Appendix D AC-X-03/05/09 คู่กับ HLD v0.9 ใน IN-08
- ตรวจ DOCX XML ก่อนคัดลอก ไม่พบรูปแบบรหัสนักศึกษา/อีเมล/token/connection credential ที่ตรวจหา; เก็บ package ต้นฉบับ ไม่ดัดแปลงหรือรับรองเป็น approved SRS

## IN-06

- หลักฐาน API ที่ใช้อ้างเทียบ: [TC-01_api_2026-10-05.txt](../../03-test-execution/evidence/TC-01_api_2026-10-05.txt)
- ที่มา `docs/testing-evidence/2026-10-05/integration-api.log` @ `bd303e87429e0fc5ef18ea8bb36545e47c9f9e30`; SHA256 `3a255efa2cd7bedd08e9883083cbb56e01ff8f13b87dd045a92cd79139350f4d`
- มีสำเนาที่ตรวจไว้แล้วใน B1 จึงไม่คัดลอกซ้ำเข้า INPUTS; วันที่รัน 5 ต.ค. 2026 Asia/Bangkok ไม่ใช่วันจัดทำชุด TC รายวิชา และไม่ใช่หลักฐาน UAT

## IN-09

แบบฟอร์มผู้สอนที่ใช้จริง เปิดสาธารณะได้และ hash ตรงฉบับที่กรอกเมื่อ 2026-10-23; ไม่คัดลอกแบบว่างที่รวมส่วน A เพราะไม่จำเป็นต่อชุดอ้างอิง

| แบบฟอร์ม | Public URL ที่ตรวจ HTTP 200 | SHA256 |
| --- | --- | --- |
| S1 | [S1 official template](https://se-rmutl.github.io/engse601/materials/s1/ENGSE601_S1_Worksheet_TH.docx) | 86789842ab9e55002d4adc5b0fd663ca4bf207b08c22d6dcfb253e587cdabc87 |
| S2 | [S2 official template](https://se-rmutl.github.io/engse601/materials/s2/ENGSE601_S2_Worksheet_TH.docx) | eeef4dd8145cbf8b972db1f35623ecd5afda9911dc42687319cad3750527eefc |

Publication checkpoint 2026-10-23: ผู้ใช้ยืนยันว่าเอกสารทั้งหมดเป็นของตนและสั่งให้รวม SRS/Database Design ใน commit/push ของ public ENGSE601 โดยตรง หลังแจ้งข้อจำกัดในต้นฉบับแล้ว; คงต้นฉบับและข้อความเดิม ไม่อ้างเป็นการอนุมัติ baseline/ผลทดสอบ
