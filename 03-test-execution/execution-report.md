# ผลการรันจริง (B1)

| รายการ | ข้อมูล |
| --- | --- |
| ทีม · feature | PP · ยืนยันรับทราบเอกสารหลังเข้าถึงฉบับที่ได้รับมอบหมาย |
| รุ่นของระบบที่รัน | โค้ด E-Filing จริงจาก working tree ที่ HEAD bd303e8; hashes ของไฟล์ที่ใช้รอบนี้อยู่ใน [run metadata](evidence/TC-01-08_execution_2026-10-23.json); ไม่อ้างว่า HEAD เดียวระบุทุกไฟล์ที่ค้างแก้ได้ |
| ชุดอ้างอิงที่ใช้ | [S2 v1](../02-test-design/S2-B_PP.docx) · [ตาราง TC](../02-test-design/test-cases.md) · จัดทำ 2026-10-23; ยังไม่เปลี่ยน expected |
| เครื่องมือ | Node v22.23.1 / node:test / Supertest / Prisma / PostgreSQL 17.11 แยก cluster ที่ loopback:55439; System ใช้ Playwright + Google Chrome จริงผ่าน Vite |
| วันที่รัน · ผู้รัน | 2026-10-23 23:29:36–23:29:42 +07:00 (รอบรวมสุดท้าย); Codex ดำเนินการตามคำอนุญาตของ ปวริศ คูณศรี; ไม่อ้างว่ามนุษย์รันทดสอบหรือทำ UAT |

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
| ไฟล์โค้ดทดสอบ | [ชุดรัน TC-01–08](tests/acknowledgement-coursework.integration.mjs) เรียก [TC-01 black-box เดิม](tests/acknowledgement.api.test.mjs) จริงด้วย; [source references](tests/LINKS.md) |
| คำสั่งที่ใช้รัน | `node --import <EFILING_SOURCE_ROOT>/efiling/node_modules/tsx/dist/loader.mjs --test --test-reporter=tap --test-concurrency=1 03-test-execution/tests/acknowledgement-coursework.integration.mjs`; ตั้ง environment สำหรับฐาน/ไฟล์ทดสอบแยกและ credential แบบ local เท่านั้น ดู evidence/README.md |
| หลักฐาน | [TAP รอบรวม](evidence/TC-01-08_execution_2026-10-23.txt) · [TC-01 black-box](evidence/TC-01_api_2026-10-23.txt) · [metadata/hashes](evidence/TC-01-08_execution_2026-10-23.json) |
| สถานะ | Pass — TC-01 ได้ HTTP 409, confirmation เป็นศูนย์ และไม่เพิ่ม ACKNOWLEDGE; กรณี API ทั้ง 7 กรณีผ่านในรอบรวม |

ผลเทอร์มินัลรอบรวม: `tests 8 · pass 7 · fail 1 · skipped 0 · exit code 1` คง log เดิม ผู้ใช้ชี้แจงภายหลังว่า IDM รับ download แล้วผู้ใช้กดยกเลิก และยืนยันให้ TC-02 เป็น Pass จึงแยกคำยืนยันนี้จากผลอัตโนมัติ ไม่สรุป HTTP 204 ว่าเป็น application defect

ขอบเขตโค้ด TC-01 black-box: HTTP rejection และสถานะผ่าน API; ชุด integration รอบนี้เพิ่มการตรวจ confirmation และ ACKNOWLEDGE ในฐานแยกจริง จึงมีหลักฐานครบผลที่คาดหวังของ TC-01 ไม่ใช้ mock ผลธุรกิจ

หลักฐานเดิมที่ตรวจได้: IT-ACK-001 และ IT-ACK-EX-001 มีสถานะสำเร็จตาม TAP เดิมวันที่ 5 ต.ค. โดย suite แรกตรวจ access ก่อนเวลา assignment และ suite ที่สองตรวจ access/ตัวผู้รับ/ฉบับ/ผลซ้ำ; เป็น 2 top-level suites ไม่ใช่ผล 8 TC ชุดใหม่

## ขั้นที่ 3 System ทำมือ (4 คะแนน)

| รายการ | ข้อมูล |
| --- | --- |
| TC | TC-02 |
| ขั้นตอน | 1. เข้า environment แยกเป็น A เปิดงาน V1 ที่มอบหมายและยังไม่ยืนยัน; 2. ดาวน์โหลด V1; 3. กลับมาตรวจว่ายังรอรับทราบ; 4. กดยืนยันและตรวจ A/เวลา/V1/audit; เก็บภาพก่อน/หลังโดยไม่มีข้อมูลจริง |
| ผลที่คาดหวัง | ดาวน์โหลดลำพังยังไม่รับทราบ; ยืนยันแล้วบันทึก A เวลา V1 และ audit อย่างละหนึ่ง |
| ผลจริง | เปิด UI เป็น A และพบงาน V1/ปุ่มยืนยันที่ยัง disabled; คลิกดาวน์โหลดแล้ว Chrome ได้ GET HTTP 204 ไม่มี Content-Disposition และ `net::ERR_ABORTED` จึงหยุดก่อนยืนยัน; diagnostic fetch ภายหลังผ่าน backend และ Vite proxy ได้ HTTP 200 attachment ทั้งคู่ ไม่ใช้ diagnostic แทนการดาวน์โหลดผ่าน UI |
| สถานะ | Pass ตามคำยืนยันของ ปวริศ คูณศรี: ไฟล์ถูกส่งต่อไป IDM แล้วผู้ใช้กดยกเลิก ไม่ใช่การดาวน์โหลดล้มเหลวของระบบ; ผลอัตโนมัติเดิมหยุดก่อน explicit confirm จึงยังไม่ใช่หลักฐานว่าเส้นทาง UI ครบทุก assertion |

ภาพจริง: [ก่อนดาวน์โหลด](evidence/TC-02_system_2026-10-23_before.png) · [หลังคลิกดาวน์โหลดที่ส่งต่อ IDM ตามคำชี้แจงผู้ใช้](evidence/TC-02_system_2026-10-23_download-failure.png) คงชื่อไฟล์หลักฐานเดิม ไม่มีภาพยืนยันสำเร็จจาก automation

## ขั้นที่ 4 UAT (3 คะแนน)

| รายการ | ข้อมูล |
| --- | --- |
| ชื่อสถานการณ์ · ผู้ทดสอบ | UAT-01 ผู้รับทราบทำงานกับฉบับที่ DCC มอบหมาย; ยังไม่มีตัวแทนผู้ใช้ยืนยันเข้าร่วม |
| ขั้นตอน (ลำดับงานของผู้ใช้) | 1. DCC มอบหมาย V1 ให้ตัวแทนผู้รับ; 2. ผู้รับเปิดงานและดาวน์โหลด; 3. ผู้รับอธิบายว่าดาวน์โหลดยังไม่ใช่รับทราบแล้วกดยืนยัน; 4. DCC ตรวจบุคคล ฉบับ เวลา และสถานะจากงานเดียวกัน |
| ถือว่าผ่านเมื่อ | ผู้รับทำงานจบด้วยตนเอง ไม่สับสน download/confirm และ DCC ตรวจผลของบุคคล/ฉบับถูกต้อง; วัดจากการสังเกตจริงและบันทึกที่ได้รับอนุญาต |
| สถานะ และแผน | Not Executed; ยังไม่มีตัวแทนผู้ใช้จริงหรือการสังเกตการใช้งานโดยผู้เข้าร่วม ปวริศ คูณศรี ประสาน DCC/ผู้รับตัวแทนหลังแก้ข้อขัดข้อง TC-02; การอนุญาตให้ AI รันไม่ถือเป็นการเข้าร่วม UAT |

## ขั้นที่ 5 ตารางผลของทุกกรณีทดสอบ (3 คะแนน)

| TC | ระดับ | ผลที่คาดหวัง | ผลจริง | สถานะ | หลักฐาน |
| --- | --- | --- | --- | --- | --- |
| TC-01 | Integration/API | ปฏิเสธการยืนยัน; ไม่เพิ่ม confirmation และ ACKNOWLEDGE | HTTP 409; confirmation 0; audit ไม่เพิ่ม | Pass | [TAP TC-01](evidence/TC-01-08_execution_2026-10-23.txt); [black-box](evidence/TC-01_api_2026-10-23.txt) |
| TC-02 | System | ดาวน์โหลดลำพังยังไม่รับทราบ; ยืนยันแล้วบันทึก A เวลา V1 และ audit อย่างละหนึ่ง | ผู้ใช้ยืนยัน Pass และชี้แจงว่า IDM รับ download แล้วกดยกเลิก; automation หยุดก่อน explicit confirm ไม่ได้พิสูจน์ UI ครบทุก assertion | Pass (ผู้ใช้ยืนยัน) | [คำชี้แจงผู้ใช้](evidence/README.md#user-confirmation--2026-10-23); [TAP เดิม](evidence/TC-01-08_execution_2026-10-23.txt); [ภาพหลังคลิก](evidence/TC-02_system_2026-10-23_download-failure.png) |
| TC-03 | Integration/API | ปฏิเสธ; ผลรับทราบของ A ไม่เปลี่ยนและไม่เพิ่ม audit รับทราบแทน A | B อ่านได้ แต่ confirm งาน A ได้ HTTP 403; confirmation 0; audit ไม่เพิ่ม | Pass | [TAP TC-03](evidence/TC-01-08_execution_2026-10-23.txt) |
| TC-04 | Integration/API | ปฏิเสธ; access ของ B ใช้แทน A ไม่ได้; ไม่เพิ่ม confirmation และ ACKNOWLEDGE | B download 200; A confirm 409; confirmation 0; audit ไม่เพิ่ม | Pass | [TAP TC-04](evidence/TC-01-08_execution_2026-10-23.txt) |
| TC-05 | Integration/API | ปฏิเสธ; access V2 ไม่แทน V1; ไม่เพิ่ม confirmation และ ACKNOWLEDGE | A download V2 ได้ 200; confirm งาน V1 ได้ 409; confirmation 0; audit ไม่เพิ่ม | Pass | [TAP TC-05](evidence/TC-01-08_execution_2026-10-23.txt); fixture สลับฉบับ published ในฐานแยกเพื่อรักษา unique constraint |
| TC-06 | Integration/API | ปฏิเสธ; หลักฐานก่อนมอบหมายไม่เพียงพอตาม PP-AC-03 ที่ยังรอทบทวน | timestamp ต่าง −1 ms ตรวจตรงตัว; HTTP 409; confirmation 0; audit ไม่เพิ่ม | Pass | [TAP TC-06](evidence/TC-01-08_execution_2026-10-23.txt); ผ่านเทียบ Proposed AC ไม่ใช่มติ stakeholder |
| TC-07 | Integration/API | ยอมรับและบันทึก A เวลา V1 และ audit อย่างละหนึ่ง ตาม PP-AC-03 ที่ยังรอทบทวน | timestamp ต่าง 0 ms; HTTP 200; confirmation/audit อย่างละ 1; actor/version/time ถูกต้อง | Pass | [TAP TC-07](evidence/TC-01-08_execution_2026-10-23.txt); ผ่านเทียบ Proposed AC ไม่ใช่มติ stakeholder |
| TC-08 | Integration/API | คืนผลเดิมและเวลาเดิม; confirmation และ audit ของงานนี้ยังมีอย่างละหนึ่ง | เรียกซ้ำได้ HTTP 200; id/time เดิม; confirmation/audit ยังอย่างละ 1 | Pass | [TAP TC-08](evidence/TC-01-08_execution_2026-10-23.txt) |

สรุปสถานะที่บันทึก TC-01–08: Pass 8 (อัตโนมัติ 7 + ผู้ใช้ยืนยัน 1) · Fail 0 · Blocked 0 · Not Executed 0; ไม่ใช่คำกล่าวว่า automated suite ผ่าน 8/8 — raw TAP ยังคง Pass 7/Fail 1 และ TC-02 ไม่ได้ตรวจ UI ครบเส้นทาง; UAT-01 แยกต่างหาก Not Executed 1

ผู้ใช้อนุญาตให้เริ่มระบบแล้ว จึงรัน application จาก source เดิมกับ PostgreSQL cluster/ฐาน/ไฟล์ fixture ใหม่ใต้ tmp ของ ENGSE601 ไม่เชื่อมฐานเดิม ไม่แก้ expected หรือ source; TC-06/07 ใช้ timestamp fixture ที่ควบคุมไว้และยังต้องยืนยัน PP-AC-03 แยกจากผลรัน เก็บรอบ fixture/diagnostic ที่ไม่สำเร็จไว้ใน [ทะเบียนหลักฐาน](evidence/README.md)
ไม่ต้องทำ B2 ตาม SUBMISSIONS.md; หน้าที่และ AI อยู่ TEAM.md / AI-LOG.md
