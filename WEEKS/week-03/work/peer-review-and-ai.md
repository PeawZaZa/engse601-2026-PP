# W03 Peer Review, Revision and AI Record

## Peer review

- Draft commit/version: v1 จัดทำ 2026-10-23; ยังไม่ commit
- Author(s): Codex ร่างให้ ปวริศ คูณศรี; รอเจ้าของตรวจ
- Reviewer(s): ยังไม่มีผู้ตรวจอิสระ ไม่ถือ AI เป็น peer
- Date: Not Executed สำหรับกิจกรรม peer review

| Finding ID | Requirement/AC location | Finding/question | Disposition | Revision made / open action | Owner | Re-check |
| --- | --- | --- | --- | --- | --- | --- |
| W03-PR-01 | REQ-01 / PP-AC-03 | ขอบเวลา access มาจากโค้ด ต้องยืนยันก่อนใช้ตัดสิน | Defer | คงป้าย Proposed และรอผู้ตรวจ | ปวริศ คูณศรี | Not Executed |
| W03-PR-02 | FR-A-18 / REQ-02 | จำกัด assertion scope เฉพาะ ACKNOWLEDGE | Clarify (ข้อเสนอ AI) | ไม่อ้างผลทั้ง FR | ปวริศ คูณศรี | รอมนุษย์ตรวจ |

## Revision note

- จาก draft → revision commit/version: แบบว่าง → ร่าง v1 ท้องถิ่น; ไม่มีประวัติ peer revision ที่แต่งขึ้น
- เปลี่ยนอะไรและเพราะอะไร: ระบุ exact-time BVA เป็นข้อเสนอ และไม่ใช้ log ที่ตรวจเพียงก่อน/หลังแทนผลค่าขอบพอดี
- ยังมี open issue ใด: independent reviewer; authority ยืนยันเวลา; สิทธิ์เข้าถึง private source
- Reviewer re-check result: Not Executed

## AI Use Declaration

- ใช้ AI: Yes / Codex
- ใช้เพื่อ: ร่างภาษา/AC ตารางความเสี่ยง และสอบกลับเอกสารกับโค้ด
- Input ที่ให้/วิธีปกป้องข้อมูล: ข้อความ requirement และไฟล์เกี่ยวข้องเฉพาะส่วน ไม่คัดลอก credential/ข้อมูลจริง/งานเดี่ยว
- ข้อเสนอที่ใช้/แก้/ปฏิเสธ: ใช้ Codex ช่วยร่างและสอบกลับกับไฟล์จริง; รับการจัดตาราง แก้คำกล่าวว่า API ยังไม่ตรวจ access และปฏิเสธการนับผลเดิมเป็นการรันใหม่; ปวริศต้องตรวจเนื้อหาก่อนส่ง
- ตรวจสอบกับ SRS/owner อย่างไร: AI อ่าน SRS v1.2, confirm(), source tests; เจ้าของยังต้องตรวจ
- Verification owner/date: ปวริศ คูณศรี; วันที่มนุษย์ตรวจยังไม่ยืนยัน

ไม่มีการสร้างผลทดสอบ log screenshot หรือ approval ขึ้นแทนกิจกรรมจริง
