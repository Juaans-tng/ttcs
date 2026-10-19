-- =========================================================
-- [THỰC HÀNH] TẠO CƠ SỞ DỮ LIỆU TRÊN MYSQL WORKBENCH
-- Mục tiêu: Luyện tập các thao tác tạo CSDL bằng câu lệnh SQL
-- =========================================================

-- 1. Tạo cơ sở dữ liệu cơ bản theo yêu cầu bài học
CREATE DATABASE `my_database1`;

-- 2. Phiên bản nâng cao an toàn (Tránh lỗi nếu CSDL đã tồn tại)
-- Kèm hỗ trợ đầy đủ tiếng Việt có dấu với bảng mã utf8mb4
CREATE DATABASE IF NOT EXISTS `my_database1`
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- 3. Sử dụng/chọn cơ sở dữ liệu vừa tạo để bắt đầu làm việc
USE `my_database1`;

-- 4. Kiểm tra danh sách các cơ sở dữ liệu trên máy chủ MySQL
SHOW DATABASES;

-- 5. Xem câu lệnh cấu hình chi tiết của CSDL vừa tạo
SHOW CREATE DATABASE `my_database1`;
