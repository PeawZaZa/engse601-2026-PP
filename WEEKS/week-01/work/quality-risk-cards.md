# W01 Work — Quality Risk Cards

## Submission context

- Project/team: E-Filing Phase 1 / PP
- Proposal/SRS source + version: อ้าง E-Filing commit `bd303e8`; `SRS v1.2 Working Draft — Implementation Reconciled` ยังไม่ใช่ Approved Baseline; ดูทะเบียน IN-02–IN-06 ใน INPUTS/input-register.md. เอกสารรายวิชาจัดทำย้อนหลังวันที่ 2026-10-23; ไม่ใช่หลักฐานว่ามีกิจกรรมทบทวนในอดีต
- Authors: ร่างโดย Codex ตามคำขอของ ปวริศ คูณศรี; เจ้าของรอตรวจ
- Peer reviewer: ยังไม่มีผู้ตรวจอิสระ
- Review date/commit: จัดทำ 2026-10-23; ยังไม่ commit หรือรับรองการทบทวน

## Card QR-01

| Field | Team record |
| --- | --- |
| Requirement/feature/stakeholder source | FR-A-14; BR-A-07; AC-A-12; UC-A-10; SRS v1.2 §4.13/Appendix D |
| Situation/context | ผู้รับเรียก confirm ตรงโดยไม่ดาวน์โหลด |
| Quality risk statement | หาก API เชื่อเพียงสถานะปุ่ม อาจบันทึกว่ารับทราบทั้งที่ผู้รับยังไม่เข้าถึงฉบับนั้น ทำให้ DCC เชื่อหลักฐานผิด |
| Quality concern | Functional suitability / security |
| Impact and rationale | กระทบความน่าเชื่อถือของหลักฐานรับทราบ |
| Verification question/action | ตรวจ confirm และ EXPORT; ออกแบบ TC-01/04/05/06/07 ข้าม UI |
| Validation question/action | ให้ตัวแทนผู้รับอธิบายความแตกต่างดาวน์โหลดกับยืนยัน; UAT ยังไม่รัน |
| Planned evidence | case v1, API log, screenshot System และบันทึก UAT ที่เกิดจริง |
| Evidence status | SRS/โค้ด Existing; log 5 ต.ค. Existing เฉพาะ API; ชุดรายวิชา Not Executed |
| Evidence path/owner/next action | IN-02/04/06; ปวริศ คูณศรี จัด environment แยกและผู้ตรวจ ก่อนขออนุญาตรัน |

## Card QR-02

| Field | Team record |
| --- | --- |
| Requirement/feature/stakeholder source | FR-A-19; UC-A-10 E1; AC-A-16; SRS v1.2 §4.13/Appendix D |
| Situation/context | ผู้ใช้อ่านเอกสารได้แต่ assignment เป็นของคนอื่น |
| Quality risk statement | หากตรวจเพียงสิทธิ์อ่าน อาจยืนยันแทนผู้อื่นหรือใช้ access ผิดฉบับ ทำให้หลักฐานผูกผิดคน/ฉบับ |
| Quality concern | Security / integrity |
| Impact and rationale | สิทธิ์อ่านไม่เท่ากับสิทธิ์ยืนยันแทน |
| Verification question/action | ตรวจ assigneeId/user active และ API ของผู้ใช้อื่น TC-03; แยก fixture A/B/V1/V2 |
| Validation question/action | ให้ DCC และผู้รับตัวแทนตรวจขอบเขตงานของตน โดยไม่ใช้บัญชีจริงในหลักฐานสาธารณะ |
| Planned evidence | case v1, API log, screenshot System และบันทึก UAT ที่เกิดจริง |
| Evidence status | โค้ด/ข้อกำหนด Existing; review ผู้ใช้งาน Planned |
| Evidence path/owner/next action | IN-02/04/06; ปวริศ คูณศรี จัด environment แยกและผู้ตรวจ ก่อนขออนุญาตรัน |

## Card QR-03

| Field | Team record |
| --- | --- |
| Requirement/feature/stakeholder source | FR-A-18; FR-A-14; UC-A-10 A2; AC-A-12; SRS v1.2 §4.13/Appendix D |
| Situation/context | ผู้รับยืนยันซ้ำหลังตอบกลับล่าช้า |
| Quality risk statement | หากบันทึกซ้ำหรือ audit ไม่สอดคล้อง อาจนับยอดเกินและสอบกลับเวลาผิด |
| Quality concern | Reliability / traceability |
| Impact and rationale | ต้องมีผลเดิมครั้งเดียวต่อผู้ใช้/ฉบับ |
| Verification question/action | ตรวจ transaction/ผลเดิมใน confirm และออกแบบ TC-08 พร้อมตรวจ id/เวลา/จำนวน |
| Validation question/action | ให้ DCC ตรวจว่าสถานะที่แสดงเข้าใจได้เมื่อส่งซ้ำ; ยังไม่มีการรับรองจาก DCC |
| Planned evidence | case v1, API log, screenshot System และบันทึก UAT ที่เกิดจริง |
| Evidence status | service และ log เดิม Existing; System UI/UAT Not Executed |
| Evidence path/owner/next action | IN-02/04/06; ปวริศ คูณศรี จัด environment แยกและผู้ตรวจ ก่อนขออนุญาตรัน |

## Peer check and revision

| Check | Result / comment | Revision made / open action |
| --- | --- | --- |
| ทุก card trace ไปยัง source จริงได้ | รอผู้ตรวจอิสระ; AI สอบกลับแหล่งแล้ว | เจ้าของนัดผู้ตรวจ ก่อนส่ง |
| risk statement มี event/condition และ impact | รอผู้ตรวจอิสระ; AI สอบกลับแหล่งแล้ว | เจ้าของนัดผู้ตรวจ ก่อนส่ง |
| V&V action ตอบ risk ไม่ใช่คำกว้าง | รอผู้ตรวจอิสระ; AI สอบกลับแหล่งแล้ว | เจ้าของนัดผู้ตรวจ ก่อนส่ง |
| evidence status เป็นความจริง | รอผู้ตรวจอิสระ; AI สอบกลับแหล่งแล้ว | เจ้าของนัดผู้ตรวจ ก่อนส่ง |

## Team conclusion

- Critical risk/feature ที่เลือกไป Week 02: QR-01 / ยืนยันรับทราบเอกสารหลังเข้าถึงฉบับที่ได้รับมอบหมาย; คงตัวเลือก S1 เดิมที่พบใน source Git
- สิ่งที่ยังไม่รู้และ owner: การทบทวนอิสระ/ผู้ใช้ตัวแทน; ปวริศ คูณศรี ยืนยันก่อนส่ง
- AI Use Declaration: ใช้ Codex ช่วยร่างและสอบกลับกับไฟล์จริง; รับการจัดตาราง แก้คำกล่าวว่า API ยังไม่ตรวจ access และปฏิเสธการนับผลเดิมเป็นการรันใหม่; ปวริศต้องตรวจเนื้อหาก่อนส่ง; รายละเอียด AI-LOG.md
