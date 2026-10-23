# ผลการรันจริง (B1)

| รายการ | ข้อมูล |
| --- | --- |
| ทีม · feature | PP · ยืนยันรับทราบเอกสารหลังเข้าถึงฉบับที่ได้รับมอบหมาย |
| รุ่นของระบบที่รัน | รอบใหม่ยังไม่รัน; source อ้างอิง bd303e8; commit ของรอบเดิมไม่ระบุใน metadata |
| ชุดอ้างอิงที่ใช้ | [S2 v1](../02-test-design/S2-B_PP.docx) · [ตาราง TC](../02-test-design/test-cases.md) · จัดทำ 2026-10-23; ยังไม่เปลี่ยน expected |
| เครื่องมือ | แผน: Node test/fetch API; หลักฐานเดิม: Node v22.23.1 Supertest PostgreSQL 17.10 |
| วันที่รัน · ผู้รัน | รอบรายวิชา Not Executed; ไม่ระบุชื่อผู้รันเดิมเพราะ metadata ไม่ยืนยัน |

## ขั้นที่ 1 เลือกระดับ (3 คะแนน)

| TC | ระดับ | เหตุผล (พฤติกรรมอยู่ที่ไหน) |
| --- | --- | --- |
| TC-01 | Integration/API | ผ่าน route/service กับ access audit และฐานข้อมูล; ไม่ใช่ Unit ฟังก์ชันเดี่ยว |
| TC-02 | System | ผู้รับทำงานผ่านหน้าจอและตรวจสถานะปลายทางพร้อมหลักฐาน backend |
| TC-03 | Integration/API | ผ่าน route/service กับ access audit และฐานข้อมูล; ไม่ใช่ Unit ฟังก์ชันเดี่ยว |
| TC-04 | Integration/API | ผ่าน route/service กับ access audit และฐานข้อมูล; ไม่ใช่ Unit ฟังก์ชันเดี่ยว |
| TC-05 | Integration/API | ผ่าน route/service กับ access audit และฐานข้อมูล; ไม่ใช่ Unit ฟังก์ชันเดี่ยว |
| TC-06 | Integration/API | ผ่าน route/service กับ access audit และฐานข้อมูล; ไม่ใช่ Unit ฟังก์ชันเดี่ยว |
| TC-07 | Integration/API | ผ่าน route/service กับ access audit และฐานข้อมูล; ไม่ใช่ Unit ฟังก์ชันเดี่ยว |
| TC-08 | Integration/API | ผ่าน route/service กับ access audit และฐานข้อมูล; ไม่ใช่ Unit ฟังก์ชันเดี่ยว |

## ขั้นที่ 2 กรณีทดสอบอัตโนมัติ (6 คะแนน)

| รายการ | ข้อมูล |
| --- | --- |
| TC และระดับ | TC-01 · API (Integration) |
| ไฟล์โค้ดทดสอบ | [tests/acknowledgement.api.test.mjs](tests/acknowledgement.api.test.mjs) และ [source tests](tests/LINKS.md) |
| คำสั่งที่ใช้รัน | ยังไม่ได้รัน; แผน node --test 03-test-execution/tests/acknowledgement.api.test.mjs หลัง environment แยกพร้อม |
| หลักฐาน | [log เดิม](evidence/TC-01_api_2026-10-05.txt) / [บริบทและคำสั่งเดิม](evidence/README.md) เป็น historical support เท่านั้น |
| สถานะ | Not Executed — ไม่อนุญาตทดสอบที่เปลี่ยน source/data; ยังไม่มีระบบแยกและ fixture/session ที่พร้อม |

ผลเทอร์มินัลรอบใหม่: ไม่มี เพราะยังไม่ได้รัน ไม่คัดลอกผลเก่ามาอ้างเป็นผลใหม่

ขอบเขตโค้ดใหม่: ตรวจ HTTP rejection และสถานะ confirmation ที่อ่านผ่าน API; ต้องให้ผู้มีสิทธิ์ตรวจจำนวน ACKNOWLEDGE ในฐานข้อมูลของระบบแยกเพิ่ม จึงจะครอบคลุมผลที่คาดหวังของ TC-01 ทั้งหมด

หลักฐานเดิมที่ตรวจได้: IT-ACK-001 และ IT-ACK-EX-001 มีสถานะสำเร็จตาม TAP เดิมวันที่ 5 ต.ค. โดย suite แรกตรวจ access ก่อนเวลา assignment และ suite ที่สองตรวจ access/ตัวผู้รับ/ฉบับ/ผลซ้ำ; เป็น 2 top-level suites ไม่ใช่ผล 8 TC ชุดใหม่

## ขั้นที่ 3 System ทำมือ (4 คะแนน)

| รายการ | ข้อมูล |
| --- | --- |
| TC | TC-02 |
| ขั้นตอน | 1. เข้า environment แยกเป็น A เปิดงาน V1 ที่มอบหมายและยังไม่ยืนยัน; 2. ดาวน์โหลด V1; 3. กลับมาตรวจว่ายังรอรับทราบ; 4. กดยืนยันและตรวจ A/เวลา/V1/audit; เก็บภาพก่อน/หลังโดยไม่มีข้อมูลจริง |
| ผลที่คาดหวัง | ดาวน์โหลดลำพังยังไม่รับทราบ; ยืนยันแล้วบันทึก A เวลา V1 และ audit อย่างละหนึ่ง |
| ผลจริง | ยังไม่มี; ไม่มีภาพหน้าจอการรันในบริบทนี้; API log ไม่แทน System UI |
| สถานะ | Not Executed; ปวริศ คูณศรี เตรียมระบบแยกและขออนุญาตนัดรันหลัง review ก่อนอ้างผล |

## ขั้นที่ 4 UAT (3 คะแนน)

| รายการ | ข้อมูล |
| --- | --- |
| ชื่อสถานการณ์ · ผู้ทดสอบ | UAT-01 ผู้รับทราบทำงานกับฉบับที่ DCC มอบหมาย; ยังไม่มีตัวแทนผู้ใช้ยืนยันเข้าร่วม |
| ขั้นตอน (ลำดับงานของผู้ใช้) | 1. DCC มอบหมาย V1 ให้ตัวแทนผู้รับ; 2. ผู้รับเปิดงานและดาวน์โหลด; 3. ผู้รับอธิบายว่าดาวน์โหลดยังไม่ใช่รับทราบแล้วกดยืนยัน; 4. DCC ตรวจบุคคล ฉบับ เวลา และสถานะจากงานเดียวกัน |
| ถือว่าผ่านเมื่อ | ผู้รับทำงานจบด้วยตนเอง ไม่สับสน download/confirm และ DCC ตรวจผลของบุคคล/ฉบับถูกต้อง; วัดจากการสังเกตจริงและบันทึกที่ได้รับอนุญาต |
| สถานะ และแผน | Not Executed; ไม่มีผู้ใช้จริง/วันนัดยืนยัน; ปวริศ คูณศรี ประสาน DCC/ผู้รับตัวแทนและขอความยินยอม หลังระบบแยกพร้อม ก่อนรับรอง UAT |

## ขั้นที่ 5 ตารางผลของทุกกรณีทดสอบ (3 คะแนน)

| TC | ระดับ | ผลที่คาดหวัง | ผลจริง | สถานะ | หลักฐาน |
| --- | --- | --- | --- | --- | --- |
| TC-01 | Integration/API | ปฏิเสธการยืนยัน; ไม่เพิ่ม confirmation และ ACKNOWLEDGE | ยังไม่รันชุด v1 | Not Executed | [บริบท/เหตุผล](evidence/README.md); historical support: IT-ACK-EX-001 assertions L80–83 |
| TC-02 | System | ดาวน์โหลดลำพังยังไม่รับทราบ; ยืนยันแล้วบันทึก A เวลา V1 และ audit อย่างละหนึ่ง | ยังไม่รันชุด v1 | Not Executed | [บริบท/เหตุผล](evidence/README.md); historical support: API เดิม L90–102 สนับสนุนเฉพาะ backend; ไม่แทน System UI |
| TC-03 | Integration/API | ปฏิเสธ; ผลรับทราบของ A ไม่เปลี่ยนและไม่เพิ่ม audit รับทราบแทน A | ยังไม่รันชุด v1 | Not Executed | [บริบท/เหตุผล](evidence/README.md); historical support: IT-ACK-EX-001 L78–79 |
| TC-04 | Integration/API | ปฏิเสธ; access ของ B ใช้แทน A ไม่ได้; ไม่เพิ่ม confirmation และ ACKNOWLEDGE | ยังไม่รันชุด v1 | Not Executed | [บริบท/เหตุผล](evidence/README.md); historical support: IT-ACK-EX-001 L84–85 |
| TC-05 | Integration/API | ปฏิเสธ; access V2 ไม่แทน V1; ไม่เพิ่ม confirmation และ ACKNOWLEDGE | ยังไม่รันชุด v1 | Not Executed | [บริบท/เหตุผล](evidence/README.md); historical support: IT-ACK-EX-001 L86–88 |
| TC-06 | Integration/API | ปฏิเสธ; หลักฐานก่อนมอบหมายไม่เพียงพอตาม PP-AC-03 ที่ยังรอทบทวน | ยังไม่รันชุด v1 | Not Executed | [บริบท/เหตุผล](evidence/README.md); historical support: IT-ACK-001 ตรวจเพียง tAccess < tA ไม่ได้พิสูจน์ tA−1 ms ตรงตัว |
| TC-07 | Integration/API | ยอมรับและบันทึก A เวลา V1 และ audit อย่างละหนึ่ง ตาม PP-AC-03 ที่ยังรอทบทวน | ยังไม่รันชุด v1 | Not Executed | [บริบท/เหตุผล](evidence/README.md); historical support: ไม่มีผลเดิมตรงค่าเท่ากับ tA |
| TC-08 | Integration/API | คืนผลเดิมและเวลาเดิม; confirmation และ audit ของงานนี้ยังมีอย่างละหนึ่ง | ยังไม่รันชุด v1 | Not Executed | [บริบท/เหตุผล](evidence/README.md); historical support: IT-ACK-EX-001 L103–108 |

สรุปชุดรายวิชา: Pass 0 · Fail 0 · Blocked 0 · Not Executed 8; UAT-01 แยกต่างหาก Not Executed 1

เหตุผลทุกแถว: ไม่มี environment แยกที่ได้รับอนุญาต ไม่ใช้ฐานข้อมูล/source เดิม; owner ปวริศ คูณศรี จัด fixture/session/screenshot ที่ปลอดภัยก่อนรัน; TC-06/07 ต้องยืนยัน PP-AC-03 เพิ่ม
ไม่ต้องทำ B2 ตาม SUBMISSIONS.md; หน้าที่และ AI อยู่ TEAM.md / AI-LOG.md
