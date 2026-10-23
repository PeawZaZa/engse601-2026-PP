# W04-04 — Quality Gate A Decision

## Evidence reviewed

- SRS/Requirement version: SRS v1.2 Working Draft — Implementation Reconciled @ bd303e8
- W03-OUT: week-03/work/critical-requirement-review.md v1
- Review Log: 02-srs-review-log.md ร่างท้องถิ่น ยังไม่ commit
- RTM v1: 03-rtm-lite.csv ร่างท้องถิ่น ยังไม่ commit
- Reviewers/decision owner/date: ผู้ตรวจอิสระยังไม่ยืนยัน; Codex เสนอเกณฑ์ให้ ปวริศ คูณศรี ตรวจ 2026-10-23

## Decision

- [ ] `Ready`
- [x] `Conditional` — **ข้อเสนอเพื่อให้เจ้าของตรวจ ไม่ใช่ Gate ที่ทีมอนุมัติแล้ว**
- [ ] `Not Ready`

## Evidence-based rationale

RV-01–03 และ RTM สามแถวมีต้นทาง/AC/code/test references เพียงพอให้ร่าง test design ต่อได้ แต่ exact-time boundary และ independent review ยังไม่พร้อม จึงไม่ใช้ข้อเสนอเป็น baseline หรือยืนยันการรับงาน

## Conditions / blockers / actions

| ID | Condition or blocker | Affected requirement / Phase 2 work | Action | Owner | Due | Re-check evidence |
| --- | --- | --- | --- | --- | --- | --- |
| GA-01 | ยังไม่มีผู้ตรวจอิสระ | ทุก REQ; W04/W05 | หาอาจารย์/ผู้ตรวจภายนอกผู้เขียน | ปวริศ คูณศรี | ก่อนส่ง | review จริงพร้อมวันที่ |
| GA-02 | ยังไม่ยืนยัน inclusive time boundary | FR-A-14; TC-06/07 | ยืนยัน PP-AC-03 หรือคง Proposed | ปวริศ คูณศรี | ก่อนตัดสินผล | มติจริงที่เปิดเผยได้ |
| GA-03 | ไม่มี environment แยก/ผู้ใช้ UAT | B1 System/UAT | ขออนุญาตเตรียมระบบแยกและนัดตัวแทน | ปวริศ คูณศรี | ก่อนรันและก่อนรับรอง | ผลจริง/ภาพ/บันทึกผู้ใช้ที่ยินยอม |

## Sign-off

- Requirement owner/representative: Not Available
- Reviewer: Not Available
- Team: PP / รอ ปวริศ คูณศรี ตรวจ; ยังไม่ลงชื่อ

ไม่อ้าง sign-off รายวิชาเป็นการอนุมัติของ stakeholder
