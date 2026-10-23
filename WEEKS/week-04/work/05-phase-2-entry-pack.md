# W04-05 — Phase 2 Entry Pack (Week 05–08)

| Phase 2 week | Candidate scope from RTM | Input/evidence ready now | Conditional / Not Ready item | Owner/next action | Entry status |
| --- | --- | --- | --- | --- | --- |
| 05 HLD Review (ฉบับปรับ) | Case X FR-X-02/05/09; E-Filing handoff | SRS v1.0/HLD v0.9 Existing | ต้องให้คนตัดสิน support ตามกติกา AI | ปวริศ คูณศรี ตรวจ trace | Conditional |
| 06 Integration (ไม่ใช้ส่งภาคนี้) | Ack API/EXPORT/confirmation | SRS/service/source tests | environment แยกยังไม่พร้อม | ปวริศ คูณศรี ประเมินเมื่อได้รับอนุญาต | Not Ready |
| 07 System/UAT (ใช้แนวคิดใน B1) | download → explicit confirm | S2 TC-02 และ UAT scenario | ไม่มีภาพ UI ใหม่/ผู้ใช้ตัวแทน | ปวริศ คูณศรี นัดผู้ใช้และเตรียมระบบแยก | Not Ready |
| 08 Test Design (ใช้แนวคิดใน S2) | EP/Decision/BVA เวลา | PP-AC และ S2 v1 | ขอบเวลารอยืนยัน | ปวริศ คูณศรี ขอทบทวนก่อนตัดสินผล | Conditional |

## Priority handoff

- Critical slice ที่ควร trace ต่อก่อน: UC-A-10 confirm ฝั่ง API และหลักฐาน access
- Requirement/AC ที่พร้อมที่สุด: FR-A-14/AC-A-12 ข้อดาวน์โหลดไม่ยืนยันและผู้รับกดเอง
- Open decision ที่เสี่ยง block หลายสัปดาห์: PP-AC-03 และ reviewer อิสระ
- สิ่งที่ ENGSE212 ต้องทบทวน/อัปเดต: สถานะ discrepancy ล้าสมัยใน SRS ผ่าน workflow ต้นทางแยก; งานนี้ไม่แก้
- AI Use Declaration: ใช้ Codex ช่วยร่างและสอบกลับกับไฟล์จริง; รับการจัดตาราง แก้คำกล่าวว่า API ยังไม่ตรวจ access และปฏิเสธการนับผลเดิมเป็นการรันใหม่; ปวริศต้องตรวจเนื้อหาก่อนส่ง
