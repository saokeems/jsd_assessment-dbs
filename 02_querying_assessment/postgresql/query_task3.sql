-- Task 3: Staff Performance Review
-- At the end of the month, the owner wants to reward the hardest-working cashiers.
-- To decide fairly, they want to see how many orders each staff member has processed,
-- with the busiest staff member appearing at the top of the list.
--
-- Hint: Write a query to find the total number of orders processed by each staff member.
-- The result should show the staff member's full name (concatenated) and their total order count,
-- ordered by the count in descending order.
SELECT
  first_name || ' ' || last_name AS full_name,
  COUNT(orders.order_id) AS order_count
FROM
  staff
  LEFT JOIN orders ON staff.staff_id = orders.staff_id
GROUP BY
  staff.staff_id
ORDER BY
  order_count DESC;

-- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- Write the equivalent query for MongoDB. See query_task3_bonus.mongodb.js
-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- ในข้อนี้โจทย์ต้องการให้เราแสดงข้อมูล ผลรวมของ order ของแต่ละคน
-- เข้าไปดูข้อมูลในตาราง orders และ staff ก่อนเป็นอย่างแรก
-- จากนั้นก็ทำการเลือกตารางที่จะแสดงโดย
-- รวม column first_name และ last_name และประกาศเป็น full_name แทน
-- และให้นับจำนวน order ตามแต่ละ order_id และประกาศเป็น order_count แทน
-- ทำการ Left join ตาราง เพราะเราต้องการข้อมูลของทุกคน ถึงแม้จะไม่มี order ก็ตาม
-- จากนั้นเราก็จะ groub ให้เป็นข้อมูลเดียวกัน เพื่อไม่ให้มีข้อมูลเยอะเกินไป
-- แล้วก็จัดเรียงจากมากไปน้อย ตามที่โจทย์กำหนด