# W03 Work — Critical Requirement Review

## Review scope

- Project/team: E-Filing Phase 1 / PP
- SRS/Requirement artifact + version/commit: อ้าง E-Filing commit `bd303e8`; `SRS v1.2 Working Draft — Implementation Reconciled` ยังไม่ใช่ Approved Baseline; ดูทะเบียน IN-02–IN-06 ใน INPUTS/input-register.md. เอกสารรายวิชาจัดทำย้อนหลังวันที่ 2026-10-23; ไม่ใช่หลักฐานว่ามีกิจกรรมทบทวนในอดีต
- Critical slice / linked W01 risk / W02 route: ยืนยันรับทราบเอกสารหลังเข้าถึงฉบับที่ได้รับมอบหมาย; QR-01–03; W02 route
- Authors: Codex ร่างให้ ปวริศ คูณศรี; ไม่ใช่ผล peer review
- Decision owner(s): ปวริศ คูณศรี ประสานผู้มีอำนาจ/อาจารย์; ยังไม่แต่งตั้งผู้ตรวจ

## Requirement Record — REQ-01

### A. Source and risk

| Field | Record |
| --- | --- |
| Original Requirement ID | FR-A-14 |
| Original text | เมื่อผู้ได้รับมอบหมายเข้าถึง/ดาวน์โหลดฉบับที่มอบหมายแล้วกดยืนยันรับทราบอย่างชัดแจ้ง ระบบต้องบันทึกผู้ยืนยัน เวลา ฉบับ และ audit event โดยป้องกันการยืนยันซ้ำของผู้ใช้และฉบับเดียวกัน |
| Source/version/location | SRS v1.2 Working Draft — Implementation Reconciled; §4.13 L1745; §5.5 L2819; Appendix D L3475 |
| Linked risk/stakeholder | QR-01; ผู้รับทราบ/DCC |

### B. Lightweight review

| Check / issue type | Pass / Finding | Evidence, question or counterexample |
| --- | --- | --- |
| Clear / unambiguous | Finding — AI-assisted, รอผู้ตรวจ | เกณฑ์เดิมระบุ access ก่อนยืนยัน แต่ไม่แจกแจงขอบเขตเวลา; คำว่า implementation discrepancy ที่ L1722/3475 ล้ากว่า confirm() และหลักฐานเดิม |
| Complete | Finding — ต้องจำกัด scope | เฉพาะ UC-A-10 ไม่ยืนยันทุกเหตุการณ์/ทุกสิทธิ์ของ FR |
| Consistent | รอมนุษย์ทบทวน | เก็บ original กับ Proposed แยก ไม่แก้ SRS |
| Feasible | มี implementation reference | confirm() และ integration tests; ไม่ใช่หลักฐานรันใหม่ |
| Testable / observable | เสนอ AC/TC ที่วัดได้ | ตรวจ API/confirmation/audit; exact-time BVA ยังไม่รัน |

### C. Revision and open decision

- Revised wording: **Proposed revision สำหรับรายวิชาเท่านั้น — สำหรับงานของผู้รับที่ยังไม่ยืนยัน ระบบต้องยอมรับการกดยืนยันหลังมี access ของผู้รับต่อฉบับที่มอบหมายเท่านั้น; การดาวน์โหลดลำพังและ access ของบุคคล/ฉบับอื่นไม่สร้างผลรับทราบ**
- Assumption ที่ยังไม่ใช่ decision: เวลา access ตั้งแต่ assignedAt รวมค่าเท่ากับเป็น inference จากโค้ด ไม่ใช่มติธุรกิจที่อนุมัติใหม่
- Open question: ให้เจ้าของยืนยันเกณฑ์เวลา/ขอบเขต AC และหา reviewer อิสระ
- Decision owner + due/decision point: ปวริศ คูณศรี ประสานผู้มีอำนาจก่อนใช้ตัดสินผล และก่อนส่ง
- Status: Proposed / Conditional; ไม่ใช่ Approved Baseline

### D. Acceptance Criteria

| AC ID | Context/Input/State | Event/Rule | Observable expected result | Type/risk covered |
| --- | --- | --- | --- | --- |
| PP-AC-01 | ผู้รับ A ได้รับมอบหมาย V1 ยังไม่มี access ของตนต่อ V1 | When A เรียก confirm โดยตรง | Then ปฏิเสธ และไม่มี confirmation หรือ ACKNOWLEDGE ใหม่ | Negative |
| PP-AC-02 | A ดาวน์โหลด V1 ที่ได้รับมอบหมายแล้ว ยังไม่กดยืนยัน | When ตรวจงานรับทราบ | Then ยังไม่รับทราบ; เมื่อ A ยืนยันชัดแจ้งจึงบันทึกบุคคล เวลา V1 และ audit | Normal |
| PP-AC-03 | มี access ของ A ต่อ V1 ก่อนเวลามอบหมาย tA เท่านั้น | When A ยืนยันงานใหม่ | Then ปฏิเสธ; หลังมี access ใหม่ตั้งแต่ tA จึงยืนยันได้ (ข้อเสนอขอบเขตจากโค้ด ต้องทบทวน) | Boundary |

### E. Planned evidence

- Planned test level: Integration/API; System; UAT แยกต่างหาก
- Planned evidence: ชุด S2 v1 และ B1; source tests efiling/api/tests/ack-access.integration.ts / efiling/api/tests/acknowledgements.integration.ts
- Current status: Proposed design / Not Executed; มี historical API support IN-06
- Owner/next action: ปวริศ คูณศรี ขอ review และเตรียม environment แยก ไม่รันกับ source

## Requirement Record — REQ-02

### A. Source and risk

| Field | Record |
| --- | --- |
| Original Requirement ID | FR-A-18 |
| Original text | ระบบต้องบันทึกผู้ดำเนินการ การกระทำ เวลา และรายการที่เกี่ยวข้อง สำหรับการส่ง ตรวจรับ ทบทวน อนุมัติ ไม่อนุมัติ ประกาศใช้ ยกเลิก รับทราบ และปิดคำขอ |
| Source/version/location | SRS v1.2 Working Draft — Implementation Reconciled; §4.13 L1746; Appendix D L3475 |
| Linked risk/stakeholder | QR-03; ผู้รับทราบ/DCC |

### B. Lightweight review

| Check / issue type | Pass / Finding | Evidence, question or counterexample |
| --- | --- | --- |
| Clear / unambiguous | Finding — AI-assisted, รอผู้ตรวจ | ข้อกำหนดรวมหลายเหตุการณ์; ต้องจำกัด acceptance basis ของรายวิชาเฉพาะ ACKNOWLEDGE และระบุการเรียกซ้ำ ไม่อ้างครอบคลุมทุกเหตุการณ์ |
| Complete | Finding — ต้องจำกัด scope | เฉพาะ UC-A-10 ไม่ยืนยันทุกเหตุการณ์/ทุกสิทธิ์ของ FR |
| Consistent | รอมนุษย์ทบทวน | เก็บ original กับ Proposed แยก ไม่แก้ SRS |
| Feasible | มี implementation reference | confirm() และ integration tests; ไม่ใช่หลักฐานรันใหม่ |
| Testable / observable | เสนอ AC/TC ที่วัดได้ | ตรวจ API/confirmation/audit; exact-time BVA ยังไม่รัน |

### C. Revision and open decision

- Revised wording: **Proposed revision สำหรับรายวิชาเท่านั้น — เมื่อยืนยันงานรับทราบสำเร็จ ระบบต้องเชื่อมผู้ยืนยัน เวลา และฉบับกับ confirmation และ ACKNOWLEDGE; เมื่อส่งคำยืนยันเดิมซ้ำต้องคืนผลเดิมโดยไม่เพิ่มผลหรือเปลี่ยนเวลายืนยันเดิม**
- Assumption ที่ยังไม่ใช่ decision: เวลา access ตั้งแต่ assignedAt รวมค่าเท่ากับเป็น inference จากโค้ด ไม่ใช่มติธุรกิจที่อนุมัติใหม่
- Open question: ให้เจ้าของยืนยันเกณฑ์เวลา/ขอบเขต AC และหา reviewer อิสระ
- Decision owner + due/decision point: ปวริศ คูณศรี ประสานผู้มีอำนาจก่อนใช้ตัดสินผล และก่อนส่ง
- Status: Proposed / Conditional; ไม่ใช่ Approved Baseline

### D. Acceptance Criteria

| AC ID | Context/Input/State | Event/Rule | Observable expected result | Type/risk covered |
| --- | --- | --- | --- | --- |
| PP-AC-04 | A มี assignment ของ V1 และ access ที่อนุญาตแล้ว | When ยืนยันครั้งแรก | Then confirmation และ audit ระบุ A/assignment/V1 พร้อมเวลา และมีอย่างละหนึ่งรายการ | Normal |
| PP-AC-05 | งานเดิมของ A ต่อ V1 ยืนยันแล้ว | When A ส่ง confirm ซ้ำ | Then คืน confirmation เดิม เวลาเดิม จำนวน confirmation และ audit ของงานนี้ยังเป็น 1 | Boundary |

### E. Planned evidence

- Planned test level: Integration/API; System; UAT แยกต่างหาก
- Planned evidence: ชุด S2 v1 และ B1; source tests efiling/api/tests/ack-access.integration.ts / efiling/api/tests/acknowledgements.integration.ts
- Current status: Proposed design / Not Executed; มี historical API support IN-06
- Owner/next action: ปวริศ คูณศรี ขอ review และเตรียม environment แยก ไม่รันกับ source

## Requirement Record — REQ-03

### A. Source and risk

| Field | Record |
| --- | --- |
| Original Requirement ID | FR-A-19 |
| Original text | ระบบต้องตรวจสิทธิ์การอ่านและดำเนินการจากบัญชี บทบาทที่กำลังใช้งาน และขอบเขตข้อมูล โดยปฏิเสธคำสั่งที่ไม่ได้รับอนุญาต |
| Source/version/location | SRS v1.2 Working Draft — Implementation Reconciled; §4.13 L1731/1747; Appendix D AC-A-16 |
| Linked risk/stakeholder | QR-02; ผู้รับทราบ/DCC |

### B. Lightweight review

| Check / issue type | Pass / Finding | Evidence, question or counterexample |
| --- | --- | --- |
| Clear / unambiguous | Finding — AI-assisted, รอผู้ตรวจ | ต้องแยกสิทธิ์อ่านเอกสารออกจากสิทธิ์ยืนยัน assignment และพิสูจน์ที่ API เพราะผู้ใช้ข้าม UI ได้; เดโมไม่แทนระบบยืนยันตัวตน production |
| Complete | Finding — ต้องจำกัด scope | เฉพาะ UC-A-10 ไม่ยืนยันทุกเหตุการณ์/ทุกสิทธิ์ของ FR |
| Consistent | รอมนุษย์ทบทวน | เก็บ original กับ Proposed แยก ไม่แก้ SRS |
| Feasible | มี implementation reference | confirm() และ integration tests; ไม่ใช่หลักฐานรันใหม่ |
| Testable / observable | เสนอ AC/TC ที่วัดได้ | ตรวจ API/confirmation/audit; exact-time BVA ยังไม่รัน |

### C. Revision and open decision

- Revised wording: **Proposed revision สำหรับรายวิชาเท่านั้น — API ต้องปฏิเสธผู้ใช้ที่ไม่ใช่ผู้รับของ assignment แม้มีสิทธิ์อ่านฉบับเดียวกัน และไม่สร้าง confirmation/audit ในนามผู้รับเป้าหมาย; ผู้รับต้องยังมีบัญชีและบทบาท active**
- Assumption ที่ยังไม่ใช่ decision: เวลา access ตั้งแต่ assignedAt รวมค่าเท่ากับเป็น inference จากโค้ด ไม่ใช่มติธุรกิจที่อนุมัติใหม่
- Open question: ให้เจ้าของยืนยันเกณฑ์เวลา/ขอบเขต AC และหา reviewer อิสระ
- Decision owner + due/decision point: ปวริศ คูณศรี ประสานผู้มีอำนาจก่อนใช้ตัดสินผล และก่อนส่ง
- Status: Proposed / Conditional; ไม่ใช่ Approved Baseline

### D. Acceptance Criteria

| AC ID | Context/Input/State | Event/Rule | Observable expected result | Type/risk covered |
| --- | --- | --- | --- | --- |
| PP-AC-06 | B อ่าน V1 ได้ แต่ assignment เป็นของ A | When B เรียก confirm ของ A โดยตรง | Then ปฏิเสธ และผลรับทราบของ A ไม่เปลี่ยน | Negative |
| PP-AC-07 | A เป็นผู้รับ active มีบทบาทและสิทธิ์อ่าน V1 พร้อม access ที่อนุญาต | When A ยืนยันงานของตน | Then อนุญาตภายในขอบเขต V1 และบันทึกชื่อผู้กระทำเป็น A | Normal |

### E. Planned evidence

- Planned test level: Integration/API; System; UAT แยกต่างหาก
- Planned evidence: ชุด S2 v1 และ B1; source tests efiling/api/tests/ack-access.integration.ts / efiling/api/tests/acknowledgements.integration.ts
- Current status: Proposed design / Not Executed; มี historical API support IN-06
- Owner/next action: ปวริศ คูณศรี ขอ review และเตรียม environment แยก ไม่รันกับ source

## Handoff summary for Week 04

| Requirement ID | Revision status | Acceptance basis ready? | Open decision/blocker | Owner/due | Candidate test level |
| --- | --- | --- | --- | --- | --- |
| FR-A-14 / REQ-01 | Proposed | Conditional | ยืนยันคำปรับ/เวลา/ผู้ตรวจ | ปวริศ คูณศรี ก่อนส่ง | Integration/API; System |
| FR-A-18 / REQ-02 | Proposed | Conditional | ยืนยันคำปรับ/เวลา/ผู้ตรวจ | ปวริศ คูณศรี ก่อนส่ง | Integration/API; System |
| FR-A-19 / REQ-03 | Proposed | Conditional | ยืนยันคำปรับ/เวลา/ผู้ตรวจ | ปวริศ คูณศรี ก่อนส่ง | Integration/API; System |
