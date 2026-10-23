# Source test references

source เป็น Public แล้ว; remote branch อยู่ที่ f8cc942 แต่ local snapshot ที่ใช้ทำงานคือ bd303e8 บางไฟล์ยังไม่มีหรือเนื้อหาต่างบน remote จึงแยกความพร้อมรายไฟล์ตามทะเบียน

| Test | Versioned reference | Scope |
|---|---|---|
| IT-ACK-001 | [source path/hash และ availability](../../INPUTS/design/references.md#in-13) — ack-access.integration.ts ยังไม่พบบน remote f8cc942; ไม่ทำลิงก์ GitHub ที่เปิดไม่ได้ | access ก่อนมอบหมายไม่พอ; access ใหม่แล้ว explicit confirm; ผลเดิมอยู่ evidence/ |
| IT-ACK-EX-001 (evidence alias) | [efiling/api/tests/acknowledgements.integration.ts](https://github.com/PeawZaZa/E-FIling-ISO-9001/blob/f8cc9427fcaf3cd814cd0bcf37843273698d9899/efiling/api/tests/acknowledgements.integration.ts#L78) — ตรวจ blob ตรงกับ local bd303e8 | ไม่มี access, ผิดคน/ฉบับ, ผล/เวลา/audit ซ้ำ |

คำสั่งประวัติอยู่ใน evidence/README.md; ไม่รัน suite เดิมซ้ำหรือคัดลอก credential จาก source

รอบใหม่ 2026-10-23: [acknowledgement-coursework.integration.mjs](acknowledgement-coursework.integration.mjs) รัน API 7 กรณีและ System ผ่าน Chrome 1 กรณีบนฐานแยก ใช้ application จริง ไม่มี mocks และเรียก `acknowledgement.api.test.mjs` จริงด้วย ผล [TAP](../evidence/TC-01-08_execution_2026-10-23.txt): Pass 7 / Fail 1; [metadata](../evidence/TC-01-08_execution_2026-10-23.json) ระบุ source/test hashes และเวลา TC-02 ล้มเหลวที่ browser download; ไม่อ้างเป็น manual acceptance หรือ UAT
