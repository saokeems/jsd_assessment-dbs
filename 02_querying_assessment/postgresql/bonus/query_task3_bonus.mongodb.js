// Task 3 Bonus: Staff Performance Review
// At the end of the month, the owner wants to reward the hardest-working cashiers.
// To decide fairly, they want to see how many orders each staff member has processed,
// with the busiest staff member appearing at the top of the list.
//
// The dataset is identical in MongoDB — the same business insight can be retrieved.
//
// Hint: Write an aggregation query on the orders collection to count the number of orders
// per staff member. Each order embeds the staff member's first and last name directly.
// The result should show each staff member's full name and their total order count,
// ordered by the count in descending order.
use("chrome-burger-db");

db.orders.aggregate([
  {
    $group: {
      _id: {
        first_name: "$staff.first_name",
        last_name: "$staff.last_name",
      },
      order_count: { $sum: 1 },
    },
  },
  {
    $project: {
      _id: 0,
      full_name: { $concat: ["$_id.first_name", " ", "$_id.last_name"] },
      order_count: 1,
    },
  },
  {
    $sort: {
      order_count: -1,
    },
  },
]);

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// โจทย์ต้องการให้แสดงชื่อ นามสกุล และเรียงลำดับจำนวน order จากมากไปน้อย
// ใช้การ aggregate collection orders
// จากนั้นก็ group โดย group ทั้ง first_name และ last_name
// และให้รวมจำนวน orders ที่เหมือนกัน
// โจทย์อยากให้แสดงเป็น ชื่อเต็ม full_name และจำนวน order ก็ให้แสดงเฉพาะ
// ทำการรวม first_name และ last_name เข้าด้วยกัน
// จากนั้นก็เรียงลำดับจาก order มากไปหาน้อย
