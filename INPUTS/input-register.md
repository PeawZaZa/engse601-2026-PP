# Input Register and Source of Truth

| Input ID | Artifact | File path / URL | Version / date / commit | Owner | Status | Used by | Notes / change impact |
| --- | --- | --- | --- | --- | --- | --- | --- |
| IN-01 | Proposal | [GitHub f8cc942 — เนื้อหาตรงฉบับใช้งาน](https://github.com/PeawZaZa/E-FIling-ISO-9001/blob/f8cc9427fcaf3cd814cd0bcf37843273698d9899/Proposal/SE02%20Group%20B.docx); [Proposal reference](proposal/references.md#in-01) | ไม่ระบุเลขรุ่น; วันเสนอในเอกสาร 20 มี.ค. 2569; snapshot bd303e8 | ปวริศ คูณศรี | Not Ready | W01–W04 | ต้นฉบับ Proposal เปิดจาก GitHub ได้และเนื้อหาตรง; ไม่คัดลอกเพราะ PII; ไม่อ้างอนุมัติหัวข้อจากชื่อไฟล์ |
| IN-02 | Requirement/SRS | [SRS v1.2 file](requirements-srs/SRS_v1.md); [provenance](requirements-srs/references.md#in-02) | 1.2 Working Draft — Implementation Reconciled; bd303e87429e0fc5ef18ea8bb36545e47c9f9e30; SHA256 cfe04b33ef4484cdfe1d789f2b03bab982d096d4b7a96d5d0b0a83efc61f611d | ปวริศ คูณศรี | Current | W01–W04; S1/S2/B1 | สำเนาตรง bytes/hash จาก local bd303e8 ตามคำสั่งผู้ใช้; ใช้ไฟล์นี้เป็นหลักเพราะ remote SRS เนื้อหาต่าง; ยังเป็น Working Draft |
| IN-03 | Design / implementation map | [GitHub f8cc942 — เนื้อหาตรงฉบับใช้งาน](https://github.com/PeawZaZa/E-FIling-ISO-9001/blob/f8cc9427fcaf3cd814cd0bcf37843273698d9899/GroupB_Architecture_Decisions.md); [ADR / retrospective Ack map](design/references.md#in-03) | ADR ไม่มีเลขรุ่น; 2026-08-30; snapshot bd303e8 | ปวริศ คูณศรี | Draft | W02/W04; S1; W05 handoff | ใช้ ADR-01–03/05 เป็นบริบท; แผนที่ Ack เป็นงานย้อนหลัง ไม่ใช่ HLD อนุมัติ; ADR ไม่คัดลอกเพราะสิทธิ์และข้อมูลผู้ร่วมจัดทำ |
| IN-04 | ENGSE212 repository | [E-Filing — GitHub](https://github.com/PeawZaZa/E-FIling-ISO-9001); [Verified source access and code refs](design/references.md#in-13) | codex/document-registry @ bd303e87429e0fc5ef18ea8bb36545e47c9f9e30 | ปวริศ คูณศรี | Current | G1–G9 | repo Public ยืนยันแล้ว; remote branch f8cc942 ต่างจาก local bd303e8; ใช้ผลตรวจรายไฟล์ ไม่แทนทั้ง snapshot |
| IN-05 | Stakeholder/business rules | [SRS v1.2 business rules](requirements-srs/SRS_v1.md); [scope](requirements-srs/references.md#in-05) | SRS v1.2; snapshot bd303e8 | ปวริศ คูณศรี | Current | W01–W04; S1/S2 | ใช้สำเนาเดียวกับ IN-02; ไม่สร้างมติ/approval ใหม่ |
| IN-06 | Historical automated evidence | [Historical API evidence](../03-test-execution/evidence/TC-01_api_2026-10-05.txt) | 2026-10-05 Asia/Bangkok; SHA256 3a255efa2cd7bedd08e9883083cbb56e01ff8f13b87dd045a92cd79139350f4d | ปวริศ คูณศรี | Current | B1 historical support | ไฟล์เดิมมีอยู่ใน B1 ไม่คัดลอกซ้ำ; ไม่ใช่ผลของชุดใหม่หรือ UAT; provenance ดู evidence/README.md |
| IN-07 | Case X SRS | [Case X SRS v1.0 file](requirements-srs/ENGSE206_CaseX_SRS_v1.0_TH.docx); [provenance](requirements-srs/references.md#in-07) | 1.0 Review Candidate; SHA256 3595feccd8fde335b8a2389621a6d5ce859c887fcaa1ebe6353374dbcc9b0790 | ผู้สอน | Current | W05 | คัดลอกต้นฉบับ; bytes/hash ตรง local และ GitHub f8cc942; ใช้ W05 v1.0 ไม่แทนด้วย v1.1 |
| IN-08 | Case X HLD | [Case X HLD v0.9](design/ENGSE601_CaseX_HLD_v0_9_Draft_for_Review_TH.docx) | 0.9 Draft for Review; SHA256 1f88627b696ffa1b4ae7294eb0ff183f6cd22dbb2124f5ceb28e5e62e7d34d9e | ผู้สอน | Draft | W05 | คัดลอกต้นฉบับ 19,332 bytes จาก source Git; ตรง public portal HTTP200; สิทธิ์ใช้/attribution และ source path อยู่ design/references.md#in-08 |
| IN-09 | Official worksheet templates | [Verified official worksheet URLs](requirements-srs/references.md#in-09) | S1/S2 hashes ตรงฉบับใช้จริง; ตรวจ 2026-10-23 | ผู้สอน | Current | S1/S2 | ลิงก์สาธารณะ HTTP200; ไม่เก็บแบบว่างที่รวมส่วน A ซ้ำ; ใช้สำเนา filled Part B เดิม |
| IN-10 | Database Design | [Database Design v0.2 file](design/Database_Design.md); [provenance](design/references.md#in-10) | 0.2 Working Draft; 2026-09-29; bd303e8 | ปวริศ คูณศรี | Draft | INPUTS verification / design context | สำเนา local ฉบับทบทวน 29 ก.ย. ตรง bytes/hash; ไม่ใช่ public snapshot วันที่ 27 ก.ย.; ไม่รัน DB ใหม่ |
| IN-11 | Current project state | [GitHub f8cc942 — ฉบับก่อนหน้า เนื้อหาต่างจากฉบับใช้งาน](https://github.com/PeawZaZa/E-FIling-ISO-9001/blob/f8cc9427fcaf3cd814cd0bcf37843273698d9899/PROJECT_STATE.md); [Current state reference](design/references.md#in-11) | 2026-10-05; snapshot bd303e8 | ปวริศ คูณศรี | Current | PROJECT / W02/W04 context | source local 2026-10-05; public record 2026-09-27 ต่าง revision; ไม่คัดลอก record ทั้งฉบับ |
| IN-12 | Historical test context/reports | ยังไม่พบฉบับใช้งานบน GitHub — อ้าง local Git `bd303e8`; [Testing report references](design/references.md#in-12) | 2026-10-05; snapshot bd303e8 | ปวริศ คูณศรี | Current | B1 provenance / limitations | reports ยังไม่พบใน remote snapshot ไม่คัดลอกทั้งฉบับ; UAT ยังไม่ดำเนินการ; metadata ไม่ระบุ commit ที่รันเดิม |
| IN-13 | Implementation and test definitions | [GitHub f8cc942 — ฉบับก่อนหน้า เนื้อหาต่างจากฉบับใช้งาน](https://github.com/PeawZaZa/E-FIling-ISO-9001/blob/f8cc9427fcaf3cd814cd0bcf37843273698d9899/efiling/api/src/services/acknowledgementService.ts); [Verified code references](design/references.md#in-13) | bd303e87429e0fc5ef18ea8bb36545e47c9f9e30 | ปวริศ คูณศรี | Current | S1/S2/B1 trace | GitHub versioned refs ที่ตรวจใหม่เทียบ local hashes; แยก exact match / different / missing; ไม่คัดลอก source/fixtures |
| IN-14 | Earlier S1 feature choice | ยังไม่พบฉบับใช้งานบน GitHub — อ้าง local Git `bd303e8`; [Existing Git blob reference](design/references.md#in-14) | bd303e87429e0fc5ef18ea8bb36545e47c9f9e30 | ปวริศ คูณศรี | Draft | S1 feature continuity | working-tree file ถูกลบอยู่เดิม; blob ยังมี; ไม่ restore หรือคัดลอก draft ส่วนตัว |

สถานะ Current หมายถึง working reference ที่เลือก ไม่ใช่ approval. เอกสารหลักที่คัดลอกแล้วให้อ้างไฟล์ใน INPUTS; GitHub ใช้เฉพาะ URL ที่เปิดได้จริงและระบุว่าตรง/ต่างจากฉบับใช้งาน ไม่ใช้ commit local ที่ยังไม่พบ remote เป็น accessible link

## Status meaning

- `Current`: working reference ปัจจุบัน ไม่ใช่การอนุมัติ baseline
- `Draft`: ใช้ทบทวนได้แต่ยังไม่เป็น baseline
- `Superseded`: มีฉบับใหม่กว่า
- `Not Ready`: ต้องเติมข้อมูลหรือสิทธิ์เข้าถึงก่อนใช้ตัดสิน

## Input change log

| Date | Input ID | Old → New | Reason | Week/artifact affected | Action/owner |
| --- | --- | --- | --- | --- | --- |
| 2026-10-23 | IN-01–IN-09 | แบบว่าง → อ้างอิงจริง | จัดทำรายวิชาย้อนหลัง; ไม่แก้ต้นทาง | G1–G9 | ปวริศ คูณศรี ตรวจการเปิดเผยและสิทธิ์ผู้สอนก่อนส่ง |
| 2026-10-23 | IN-01–IN-14 | ข้อความอ้างอิงกว้าง → ไฟล์/พาธ/รุ่น/hash ที่ตรวจจริง | เพิ่ม HLD ต้นฉบับที่อนุญาตใช้; แยกข้อมูลภายใน/PII/สิทธิ์เข้าถึงที่ยังขาด | G1–G9 reference trace | ปวริศ คูณศรี จัด restricted access และการอนุญาตก่อนส่ง |
| 2026-10-23 | IN-01–IN-14 | Local เป็นหลัก → GitHub เป็นหลัก / local สำรอง | ใช้ URL ของเจ้าของโครงงานพร้อมตรึง commit; แยกข้อจำกัด connector ออกจากความถูกต้องของ reference | G1–G9 reference access | ปวริศ คูณศรี ยืนยันสิทธิ์ผู้สอนก่อนส่ง |
| 2026-10-23 | IN-02/05/07/10 | อ้างไฟล์ local ต้นทาง → สำเนาต้นฉบับใน INPUTS | ผู้ใช้สั่งให้คัดลอก SRS/ไฟล์อ้างอิงแทนการรอ remote; ตรวจ PII/credential และ byte hashes ก่อนคัดลอก | G1–G9 reference material | ปวริศ คูณศรี ตรวจเอกสารก่อน Git submission; ไม่อ้าง institutional approval |
