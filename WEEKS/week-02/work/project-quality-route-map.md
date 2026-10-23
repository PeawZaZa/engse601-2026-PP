# W02 Work — Project Quality Route Map

## Context

- Project/team: E-Filing Phase 1 / PP
- Current SDLC status: Implement / Test / Review; มีหลักฐานเดิม ไม่อ้าง sprint/gate ที่จัดขึ้นจริง
- Milestone/sprint/date: เอกสารรายวิชาย้อนหลัง 2026-10-23; ไม่พบ sprint record
- Critical requirement/feature/risk: ยืนยันรับทราบเอกสารหลังเข้าถึงฉบับที่ได้รับมอบหมาย; QR-01; FR-A-14/18/19
- Source/version: SRS v1.2 Draft; source `bd303e8`; IN-02/04/06
- Authors/reviewer: Codex ร่างให้ ปวริศ คูณศรี; ผู้ตรวจอิสระรอยืนยัน

## Route Map — one critical slice

| Phase / Gate | V&V question | Evidence + status | Decision / feedback | Owner / when |
| --- | --- | --- | --- | --- |
| Requirements/SRS — Gate A | access/ผู้รับ/ฉบับ/ผลซ้ำชัดพอหรือไม่ | FR-A-14/18/19 Existing; PP-AC Proposed | ข้อเสนอ Conditional; รอทบทวนเวลา access และข้อความล้าสมัย | ปวริศ คูณศรี ก่อนส่ง |
| HLD/Detail Design — Gate B | กฎตรวจที่ API และ trace ไป audit ได้หรือไม่ | service/UI Existing; แผนที่ S1 สร้างย้อนหลัง | รอผู้ตรวจรับแผนที่; ไม่ใช่ Gate B ที่อนุมัติแล้ว | ปวริศ คูณศรี ก่อนใช้เป็นฐานทดสอบ |
| Implement/Build — Gate C | เรียกตรงข้าม UI แล้ว guard ยังทำงานหรือไม่ | confirm และ tests ที่ bd303e8 Existing | ไม่สร้าง build ใหม่; เปิดข้อจำกัดเดโมไว้ | ปวริศ คูณศรี ก่อนรอบรันใหม่ |
| Test/Defect — Gate C | ไม่มี access/ผิดคน/ซ้ำให้ผลตาม AC หรือไม่ | log 5 ต.ค. Existing API; TC-01–08 ใหม่ Not Executed | ไม่ยก API เป็น System/UAT; ต้อง environment แยก | ปวริศ คูณศรี หลังได้รับอนุญาตรัน |
| Release/Portfolio — Gate D | หลักฐานและ residual risks พอสำหรับรับงานหรือไม่ | PDF ร่าง Existing; review/UAT Not Ready | ยังไม่ตัดสินรับ/ไม่ publish; ขอเจ้าของตรวจ | ปวริศ คูณศรี ก่อน Git/Release |

## Feedback loop

| Trigger/finding | ย้อนกลับไปแก้ artifact ใด | Evidence ที่ต้องอัปเดต | Owner/when |
| --- | --- | --- | --- |
| SRS กล่าว API ไม่ตรวจ access แต่โค้ดตรวจแล้ว | W03/RV-01; แจ้ง issue ต้นทางแยก ไม่แก้ E-Filing | ร่าง AC/RTM และแผนตรวจเวลา access | ปวริศ คูณศรี ก่อนส่ง |

## Evidence gap and next action

| Gap / Not Ready item | Why | Next action | Owner | Target milestone |
| --- | --- | --- | --- | --- |
| review/System/UAT | ไม่มีผู้ตรวจอิสระ/ภาพ UI ใหม่/ผู้ใช้ตัวแทน | ยืนยันผู้ตรวจและ environment แยก | ปวริศ คูณศรี | ก่อนรับรองและก่อน Release |

## Peer review and handoff

- Reviewer + date/commit: รอยืนยัน ไม่มี peer review ที่เกิดจริง
- Revision made: แยกผลเดิม 5 ต.ค. ออกจากกรณีใหม่ 23 ต.ค.
- Requirement IDs ที่จะเข้า Week 03: FR-A-14, FR-A-18, FR-A-19
- AI Use Declaration: ใช้ Codex ช่วยร่างและสอบกลับกับไฟล์จริง; รับการจัดตาราง แก้คำกล่าวว่า API ยังไม่ตรวจ access และปฏิเสธการนับผลเดิมเป็นการรันใหม่; ปวริศต้องตรวจเนื้อหาก่อนส่ง; AI-LOG.md
