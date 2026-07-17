-- Task 3 Bonus: Stock Replenishment Check
-- Before placing the weekly supply order, the manager wants to avoid over-ordering ingredients
-- that are already well-stocked. They need a list of every ingredient with a stock level
-- of 100 or more so those can be deprioritised in this week's order.
--
-- The dataset is identical in PostgreSQL — the same business insight can be retrieved.
--
-- Hint: Write a query to find the name of all rows in the Ingredients table
-- where the stock_level is greater than or equal to 100.
SELECT
  name, stock_level
FROM
  ingredients
WHERE
  stock_level >= 100;

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- โจทย์ต้องการให้แสดงชื่อของ ingredients ที่มีมากกว่าเท่ากับ 100
-- ทำการเช็คข้อมูล column ในตาราง ingredient 
-- ทำการเลือก column ที่จะแสดง โดยในข้อนี้ผมเลือกที่จะแสดง name, stock_level เพื่อที่จะได้รู้ทั้งชื่อและ จำนวนที่เหลือ
-- จากนั้นก็ตั้งเงื่อนไขว่าให้แสดงเฉพาะ stock_level >= 100