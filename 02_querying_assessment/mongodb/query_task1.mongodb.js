// Task 1: Budget Meal Deal
// The owner wants to introduce a budget-friendly meal deal promotion and needs to identify
// which menu items could be included. To qualify, an item must be priced under $10.00,
// so they can offer good value without cutting too deep into margins.
//
// Hint: Write a query to find all menu items in the menu_items collection that have a price less than 10.00.

use("chrome-burger-db");

db.menu_items.find({ price: { $lt: 10.0 } });

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task1_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// อย่างแรกสุดผมเลือกเชื่อมกับตัว cluster0 ที่มีตัว chrome-burger-db
// หลังจากนั้นก็ใช้คำสั่ง use ให้มันเชื่อมต่อกับตัว chrome-burger-db เพื่อให้รู้ว่าเราต้องการใช้ db ตัวนี้
// และหลังจากนั้นจะใช้ คำสั่ง db เพื่อเข้าถึงตัว collection menu_items ที่อยู่ภายใน chrome-burger-db
// แล้วก็ใช้คำสั่ง find ให้ค้นหา price ที่มีราคาต่ำกว่า 10.00 โดยใช้คำสั่ง $lt ที่เป็นคำสั่ง น้อยกว่าเข้ามาช่วยกรอง
