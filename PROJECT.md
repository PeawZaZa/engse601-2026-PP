# Project Profile — ENGSE212 × ENGSE601

> ข้อมูลโครงงานและแหล่งอ้างอิง ณ 2026-10-23; สถานะส่งเอกสารดู [SUBMISSIONS.md](SUBMISSIONS.md)

## ข้อมูลโครงงาน

| รายการ | ข้อมูลของทีม |
| --- | --- |
| ชื่อโครงงานภาษาไทย | ระบบ E-Filing Phase 1 — โมดูลควบคุมเอกสารและโมดูลตรวจติดตามและใบคำร้อง |
| ชื่อโครงงานภาษาอังกฤษ | E-Filing Phase 1 — Document Control and Audit/Request Modules |
| ชื่อทีมสำหรับใช้ในชื่อไฟล์ (`TeamName`) | PP |
| ปัญหาที่โครงงานต้องการแก้ | การติดตามเอกสาร ฉบับ หลักฐาน และใบคำร้องต้องสอบกลับได้ตามสิทธิ์ ระบบรวมทะเบียนและกระบวนการเพื่อแยกฉบับและผู้กระทำ ลดความคลาดเคลื่อนในการติดตามงาน |
| ผู้ใช้/ผู้มีส่วนได้ส่วนเสียหลัก | DCC ผู้คุมทะเบียน QMR ผู้ขอ ผู้ทบทวน ผู้อนุมัติ ผู้รับทราบ Auditor และผู้รับผิดชอบ CAR/NCR |
| ขอบเขตสำคัญของรุ่นที่กำลังพัฒนา | MVP ระบบเดียว; DAR เอกสาร/รับทราบ Records Audit Finding CAR/NCR และ Dashboard; งานรายวิชาเลือก UC-A-10 |
| สิ่งที่อยู่นอกขอบเขต | งานรายวิชาไม่แก้ระบบ ไม่ยืนยัน production auth สมรรถนะ หรือ UAT; source ระบุ UC-A-07/B-02/B-03/B-16 เป็นงานพัก |
| Milestone/Sprint ปัจจุบัน | จัดหลักฐานรายวิชา 23 ต.ค. 2026; ไม่พบหลักฐาน sprint ของทีม ENGSE601 |
| สถานะ SDLC ปัจจุบัน | Implement / Test / Review; มีโค้ดและผลทดสอบย้อนหลัง ไม่ใช่ release approval |
| อาจารย์ที่ปรึกษา/ผู้ให้ข้อมูล | ยังไม่ยืนยันข้อมูลที่อนุญาตให้เผยแพร่ |

## Repository และระบบที่เกี่ยวข้อง

| รายการ | URL / Reference | หมายเหตุ |
| --- | --- | --- |
| ENGSE212 project repository | https://github.com/PeawZaZa/E-FIling-ISO-9001 | Public ยืนยัน 2026-10-23; remote codex/document-registry @ f8cc942; local coursework snapshot bd303e8 ยังไม่มีบน remote |
| Issue/Project board | Not Ready | ยังไม่มี URL ที่ตรวจยืนยัน |
| Prototype/Demo | Not Ready | ไม่ได้เริ่มบริการหรือเข้าฐานข้อมูล |
| Course materials / LMS | https://github.com/se-rmutl/ENGSE601 | เอกสารทางการ; ไม่ใช้คำตอบทีมตัวอย่าง |
| Repository นี้ | https://github.com/PeawZaZa/engse601-2026-PP | Public; บันทึกความคืบหน้าด้วย Git ตามคำสั่งผู้ใช้ |

## Critical context เริ่มต้น

| ID | Requirement / Feature / Risk | เหตุผลที่สำคัญ | Source + version | Owner |
| --- | --- | --- | --- | --- |
| QR-01 | FR-A-14 / REQ-01 | เกณฑ์เดิมระบุ access ก่อนยืนยัน แต่ไม่แจกแจงขอบเขตเวลา; คำว่า implementation discrepancy ที่ L1722/3475 ล้ากว่า confirm() และหลักฐานเดิม | SRS v1.2 Working Draft — Implementation Reconciled §4.13 | ปวริศ คูณศรี |
| QR-03 | FR-A-18 / REQ-02 | ข้อกำหนดรวมหลายเหตุการณ์; ต้องจำกัด acceptance basis ของรายวิชาเฉพาะ ACKNOWLEDGE และระบุการเรียกซ้ำ ไม่อ้างครอบคลุมทุกเหตุการณ์ | SRS v1.2 Working Draft — Implementation Reconciled §4.13 | ปวริศ คูณศรี |
| QR-02 | FR-A-19 / REQ-03 | ต้องแยกสิทธิ์อ่านเอกสารออกจากสิทธิ์ยืนยัน assignment และพิสูจน์ที่ API เพราะผู้ใช้ข้าม UI ได้; เดโมไม่แทนระบบยืนยันตัวตน production | SRS v1.2 Working Draft — Implementation Reconciled §4.13 | ปวริศ คูณศรี |

## Constraints และข้อมูลที่ต้องปกป้อง

- ข้อจำกัดด้านเวลา/ทรัพยากร: กำหนดส่ง 23 ต.ค. 2026 23:59 Asia/Bangkok; ทีมหนึ่งคนตามผู้ใช้แจ้ง ยังไม่มีผู้ตรวจอิสระ
- ระบบหรือบริการภายนอกที่พึ่งพา: PostgreSQL/ไฟล์จัดเก็บ; รอบ 2026-10-23 ผู้ใช้อนุญาตให้เริ่มระบบแล้ว จึงรัน application จริงกับ PostgreSQL 17.11 และ fixture แยกใน ENGSE601 tmp; ไม่ใช้ฐานเดิม ผล TC-01–08 Pass 7/Fail 1 ดู execution-report.md
- ข้อมูลส่วนบุคคล/ข้อมูลลับที่เกี่ยวข้อง: บัญชี เอกสารองค์กร และข้อมูลรับทราบ ไม่คัดลอกข้อมูลจริง
- สิ่งที่ห้ามส่งให้เครื่องมือ AI หรือเผยแพร่สาธารณะ: credential, .env, token, รหัสนักศึกษา, งานเดี่ยวส่วน A และเอกสารลับต้นฉบับ
- ข้อตกลงอื่นของทีม/หน่วยงาน: E-Filing อ่านอย่างเดียว; งานกลุ่มและเอกสารอ้างอิงที่อนุญาตให้เผยแพร่อยู่ใน ENGSE601 เท่านั้น; ไม่เผยแพร่งานเดี่ยว

## Current truth

- Requirement/SRS version ที่ใช้อยู่: สำเนาอ้างอิง `INPUTS/requirements-srs/SRS_v1.md`;  SRS v1.2 Working Draft — Implementation Reconciled; มีข้อความ implementation discrepancy ที่ล้ากว่าโค้ดใน UC-A-10; ยังไม่แก้ต้นทาง
- Design version ที่ใช้อยู่: GroupB_Architecture_Decisions.md ADR-01–03/05 ใช้บริบทเท่านั้น; แผนที่ Ack จากโค้ดใน S1 สร้างย้อนหลัง ไม่อ้างเป็น HLD ที่อนุมัติแล้ว
- Latest build/commit ที่อ้างอิง: `bd303e87429e0fc5ef18ea8bb36545e47c9f9e30`; ไม่อ้างว่าเป็น commit ของการรัน 5 ต.ค. ซึ่ง metadata ไม่ระบุ commit
- อัปเดตล่าสุดโดย/วันที่: Codex ตามคำขอของ ปวริศ คูณศรี / 2026-10-23; คงสถานะ Draft และข้อจำกัดของแหล่งอ้างอิงตามจริง

Remote visibility update 2026-10-23: ผู้ใช้เปลี่ยน source repo เป็น Public; agent ตรวจอ่านเท่านั้น. SRS v1.2/implementation/test evidence ที่ใช้ทำงานยังยึด local bd303e8; remote f8cc942 มีบางไฟล์ต่างหรือขาด ดู INPUTS/project-links.md ไม่เปลี่ยน requirement หรือผลการทดสอบ

Reference copies: SRS v1.2 และ Case X v1.0 อยู่ INPUTS/requirements-srs; Database Design v0.2 อยู่ INPUTS/design. คัดลอกต้นฉบับตามคำสั่งผู้ใช้พร้อม hashes; ไม่เปลี่ยนความต้องการหรือสถานะ approval
