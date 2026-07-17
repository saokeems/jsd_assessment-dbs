// Task 2: Shift Activity Report
// Jane Doe has an upcoming performance review and the manager wants to look at her order history
// ahead of the meeting. They only need to see when each order was placed and what it was worth —
// no other details are required for this particular review.
//
// Hint: Write a query to find all orders handled by the staff member "Jane Doe".
// Your query should only return the order_date and total_price fields for these orders.

use("chrome-burger-db");

// เศษซากอารยธรรม
// db.orders.aggregate([
//   {
//     $lookup: {
//       from: "staff",
//       localField: "staff_id",
//       foreignField: "_id",
//       as: "staff_info",
//     },
//   },
//   {
//     $match: {
//       "staff_info.first_name": "Jane",
//       "staff_info.last_name": "Doe",
//     },
//   },
//   {
//     $project: {
//       order_date: 1,
//       total_price: 1,
//       _id: 0,
//     },
//   },
// ]);

db.orders.find(
  { "staff.first_name": "Jane", "staff.last_name": "Doe" },
  { order_date: 1, total_price: 1, _id: 0 },
);

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task2_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// ในขั้นแรกเหมือนเดิม เลือกใช้ cluster0 ที่มีตัว chrome-burger-db
// แล้้วเลือกใช้ use chrome-burger-db
// จากโจทย์ต้องการให้แสดง orders ที่จัดการโดย "Jane Doe"
// ตัวผมเลยเลือกที่จะใช้คำสั่ง aggregate เนื่องจากภายในตัว orders ไม่มี field ที่แสดงชื่อ "Jane Doe" โดยตรง
// เลยเลือก aggregate เข้ากับตัวของ staff เพื่อเชื่อมข้อมูลเข้าด้วยกัน
// แล้วให้ match กันโดยที่ให้ match ทั้ง first_name และ last_name ให้ตรงกัน
// โจทย์ต้องการให้แสดงแค่ field order_date และ total_price จึงเลือกให้สแดงเฉพาะโดยใช้คำสั่ง $project
// ในวิธีคิดผมคิดออก แต่ในส่วนของการเขียน query ผมคิดออกถึงแค่ส่วนของการ aggregate เลยใช้ ai ไกด์ในส่วนของ match และ project
// * อันข้างบนที่ comment เอาไว้คืออันที่ผมยังไม่ได้ mock data อันใหม่ ไปใช้ตัวเก่า 555555 (ในเลข 5 มีน้ำตา)

// ในขั้นแรกเหมือนเดิม เลือกใช้ cluster0 ที่มีตัว chrome-burger-db
// แล้้วเลือกใช้ use chrome-burger-db
// จากโจทย์ต้องการให้แสดง orders ที่จัดการโดย "Jane Doe"
// จากนั้นให้เรา find โดยการเข้าถึงข้อมูลของ staff ที่แยก first กับ last ให้ตรงกับ "Jane Doe"
// และให้ทำการแสดงข้อมูลเฉพาะ order_date และ total_price