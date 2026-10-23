# W04-02 — SRS Review Log

บันทึกข้อค้นพบจาก AI-assisted source inspection; ยังไม่มี independent reviewer หรือ disposition ที่อนุมัติ

| Finding ID | Req ID / version / location | Lens | Pass/Finding + evidence/counterexample | Impact / priority | Disposition | Revision / decision | Owner / due | Re-check status/evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RV-01 | FR-A-14 v1.2 L1722/3475 | Consistent | Finding: SRS ยังระบุ API discrepancy; confirm() มี priorAccess guard และ log IT-ACK-001 | Major: ทำให้ตีความสถานะผิด | Deferred (proposed) | แจ้งต้นทางแยก; ไม่แก้ SRS | ปวริศ คูณศรี ก่อนส่ง | รอผู้ตรวจ; source ref IN-02/04/06 |
| RV-02 | FR-A-14 / PP-AC-03 | Complete/Testable | Finding: tAccess >= tA มาจาก implementation; SRS ไม่ระบุ inclusive boundary ตรงตัว | Major: acceptance basis BVA | Deferred (proposed) | แยก TC-06/07 รอยืนยัน | ปวริศ คูณศรี ก่อนตัดสินผล | Not Executed / ยังไม่มีมติ |
| RV-03 | FR-A-18/19 v1.2 §4.13 | Traceable | Finding: assertion เฉพาะ Ack ไม่พิสูจน์ทั้ง FR ที่ครอบคลุมระบบ | Major: coverage เกินหลักฐาน | Revised (course draft only) | REQ-02/03 จำกัด scope; ไม่เปลี่ยนต้นฉบับ | ปวริศ คูณศรี ก่อนส่ง | รอ independent re-check |

## Requirement status after review

| Requirement ID | Status | Acceptance basis | Remaining open issue | Owner/due | Reason/evidence |
| --- | --- | --- | --- | --- | --- |
| FR-A-14 | Conditional — ข้อเสนอรอยืนยัน | REQ-01 AC-A-12; BR-A-07 | review/authority ยืนยัน; RV-01–03 | ปวริศ คูณศรี ก่อนส่ง | W03 record และ RTM; ยังไม่อนุมัติ baseline |
| FR-A-18 | Conditional — ข้อเสนอรอยืนยัน | REQ-02 AC-A-12; BR-A-07 | review/authority ยืนยัน; RV-01–03 | ปวริศ คูณศรี ก่อนส่ง | W03 record และ RTM; ยังไม่อนุมัติ baseline |
| FR-A-19 | Conditional — ข้อเสนอรอยืนยัน | REQ-03 AC-A-16; UC-A-10 E1 | review/authority ยืนยัน; RV-01–03 | ปวริศ คูณศรี ก่อนส่ง | W03 record และ RTM; ยังไม่อนุมัติ baseline |

ข้อเสนอแก้ไขไม่ใช่ stakeholder decision; ไม่ลงชื่อหรือบันทึกการอนุมัติแทนผู้มีอำนาจ
