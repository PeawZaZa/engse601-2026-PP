# บันทึกการใช้ AI

ใช้ AI ร่างงานตามคำขอ ไม่สร้างผลการรัน ภาพหน้าจอ มติ peer review หรือการยืนยันแทนมนุษย์

| วันที่ | ผู้ใช้ | เครื่องมือ | ใช้ทำอะไร | ตรวจหรือแก้อะไรก่อนใช้ | ส่วนที่ได้รับผล |
| --- | --- | --- | --- | --- | --- |
| 2026-10-23 | ปวริศ คูณศรี | Codex | อ่านแหล่งเกี่ยวข้อง ร่างไทย/AC/TC/RTM และกรอกสำเนา template | AI สอบกลับ SRS/service/tests/log; มนุษย์ยังต้องตรวจ; ไม่คัดลอก credential/รหัสนักศึกษา/Part A | G1–G9 |
| 2026-10-23 | ปวริศ คูณศรี | Codex | เตรียมเอกสาร W05 จาก Case X SRS1.0/HLD0.9 | รับ: ยกข้อความเอกสารตรง; แก้: ใช้ Case X เฉพาะ W05; ปฏิเสธ: ตัดสิน support โดย AI; ทุกแถวรอมนุษย์ตรวจ | G5 |
| 2026-10-23 | ปวริศ คูณศรี | Codex | จัด test design v1 และ historical evidence | รับ: log เดิมตรง bytes; แก้: แยกวันรัน/commit อ้างอิงจาก execution; ปฏิเสธ: นับ API เดิมเป็น UI/UAT หรือผล 8 TC ใหม่ | G6–G8 |
| 2026-10-23 | ปวริศ คูณศรี | Codex | ตรวจและเติม INPUTS จากเอกสารที่ใช้จริง | ตรวจข้อจำกัดการเผยแพร่/PII และ source hashes; คัดลอกเฉพาะ Case X HLD v0.9 ที่ตรง public portal; แยก local access ออกจากสิทธิ์ผู้สอน; ไม่ทำ sanitized copy ของเอกสารภายใน | INPUTS / G1–G9 references |
| 2026-10-23 | ปวริศ คูณศรี | Codex | ตรวจ GitHub หลังผู้ใช้เปลี่ยน source repo เป็น Public และแก้ references | ยืนยัน visibility; remote f8cc942 เทียบ local bd303e8: ตรง 7 ต่าง 5 ไม่พบ 5; เลิกใช้ URL commit ที่ยังไม่พบ remote โดยไม่เปลี่ยนหลักฐานเดิมหรือ push | INPUTS / PROJECT / STATUS |
| 2026-10-23 | ปวริศ คูณศรี | Codex | คัดลอกเอกสารอ้างอิงจาก local เข้า INPUTS ตามคำสั่งผู้ใช้ | ตรวจ PII/credential ที่กำหนดและ SHA256; คงต้นฉบับ SRS/Database Design/Case X SRS ทุก byte; ไม่คัดลอก Proposal หรือ source code; ไม่อ้าง institutional approval | INPUTS / PROJECT |
| 2026-10-23 | ปวริศ คูณศรี | Codex | กันแพ็ก local ที่มี Part A ออกจาก Git | checker พบ Part A 4 ไฟล์ในแพ็กที่ยังไม่ถูกติดตาม จึงเพิ่ม .gitignore เฉพาะโฟลเดอร์แพ็ก ไม่ลบงานหรือแก้ checker; เอกสารที่คัดเลือกใน INPUTS ยังนำส่งได้ | .gitignore / STATUS |
| 2026-10-23 | ปวริศ คูณศรี | Codex | ปรับ component diagram ใน S1-B ตามคำขอ | สอบกลับส่วนประกอบและจุดบังคับกฎจาก source เดิม; คงเนื้อหาและแบบฟอร์มงานกลุ่ม; ไม่สร้างผลรัน | G6 · commit 94c996c |
| 2026-10-23 | ปวริศ คูณศรี | Codex | จัดหน้าส่งงานและสรุปสถานะให้สอดคล้องไฟล์จริง | เทียบโครงสร้าง 5 เอกสารของ Team00; ตรวจ snapshot 9ba29f8/main, URL ไฟล์ 16 รายการ, ลิงก์ภายใน, privacy และ source hashes; ใช้คำยืนยันจากเจ้าของใน c3bee71/f670825; ไม่เปลี่ยน Not Executed เป็น PASS หรือแต่ง peer review/Gate/UAT | SUBMISSIONS / STATUS / PROJECT / TEAM / AI-LOG |

การยืนยันอ่านและอธิบายงานได้ของ ปวริศ คูณศรี บันทึกผ่าน STATUS.md (`f670825`); การตัดสิน support ของ W05 และการอนุมัติข้อเสนอ/Gate ต้องอาศัยหลักฐานของกิจกรรมนั้นแยกต่างหาก ไม่มีการลงชื่อหรือ approval แทน

ผู้ใช้ยืนยัน ownership และสั่งให้รวม SRS/Database Design หลังแจ้งข้อความจำกัดการเผยแพร่ คงต้นฉบับและ hash ตาม INPUTS; กัน StudentPack/งานเดี่ยว/รหัสนักศึกษาออกจากไฟล์ที่เผยแพร่ ไม่สร้างผลทดสอบหรือคำยืนยันกิจกรรมย้อนหลัง
