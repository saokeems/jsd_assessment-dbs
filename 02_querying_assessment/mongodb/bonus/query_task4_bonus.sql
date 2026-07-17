-- Task 4 Bonus: Total Revenue Summary
-- At the end of the trading period, the owner wants a single figure that shows how much revenue
-- the truck has generated across all recorded orders. This number will be used in their
-- financial summary report, so the result should be returned as a single value named total_revenue.
--
-- The dataset is identical in PostgreSQL — the same business insight can be retrieved.
--
-- Hint: Write a query that uses an aggregate function on the Orders table
-- to sum the total_price across all orders, returning the result as total_revenue.
SELECT
  SUM(total_price) AS total_revenue
FROM
  orders;
  -- ---------------------------------------------------------------
  -- Your thinking process (required)
  -- ---------------------------------------------------------------
  -- Before writing your query, explain in your own words how you
  -- interpreted the task, what data you need, which table(s) are
  -- involved, and what SQL concepts you plan to use.
  -- Write in English or Thai. Do not skip this step.
  --
  -- Your thinking:
  -- โจทย์ต้องการให้เราคำนวณผลรวมกำไรของผลรวมราคาในแต่ละ orders
  -- เราก็จะเข้าไปเช็ค column ภายใน orders เหมือนเดิม
  -- จากนั้นก็จะทำการเลือก SUM ข้อมูลใน column ของ total_price
  -- โดยที่ผมรวมนั้นโจทย์ให้แสดงเป็น column total_revenue ก็จะใช้สำคั่ง AS total_revenue ให้แสดงเฉพาะ column นั้นออกมา