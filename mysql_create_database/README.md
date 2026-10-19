# [Thực hành] Tạo CSDL trên MySQL Workbench

Bài thực hành hướng dẫn hai cách tạo Cơ sở dữ liệu (Database / Schema) mới trên MySQL Workbench và qua câu lệnh SQL.

---

## 🎯 Mục tiêu
- Nắm vững thao tác tạo Cơ sở dữ liệu bằng giao diện đồ họa (GUI) trên MySQL Workbench.
- Sử dụng thành thạo câu lệnh SQL `CREATE DATABASE` để khởi tạo CSDL mới.
- Hiểu cách kiểm tra và quản lý các Schema trên hệ quản trị MySQL.

---

## 🛠️ Hướng dẫn thực hiện

### Cách 1: Sử dụng giao diện đồ họa (GUI) trên MySQL Workbench

1. **Khởi động và kết nối**:
   - Mở ứng dụng **MySQL Workbench**.
   - Nhấp vào kết nối máy chủ cục bộ (thường là **Local instance MySQL80**).
   - Nhập mật khẩu tài khoản `root` (đã đặt lúc cài đặt) và nhấn **OK**.

2. **Tạo Schema mới**:
   - Tại thanh công cụ phía trên (hoặc trong tab **SCHEMAS** ở thanh điều hướng bên trái), click vào biểu tượng **"Create a new schema in the connected server"** (biểu tượng hình trụ cơ sở dữ liệu có dấu cộng ➕).

3. **Cấu hình thông số**:
   - **Name**: Nhập tên CSDL mới: `my_database1`.
   - **Charset**: Khuyến nghị chọn `utf8mb4` (hỗ trợ đầy đủ tiếng Việt Unicode và emoji).
   - **Collation**: Khuyến nghị chọn `utf8mb4_unicode_ci` hoặc `utf8mb4_0900_ai_ci`.
   - Nhấn nút **Apply** ở góc dưới bên phải.

4. **Xác nhận câu lệnh**:
   - MySQL Workbench sẽ hiển thị cửa sổ xem trước câu lệnh SQL:
     ```sql
     CREATE SCHEMA `my_database1` DEFAULT CHARACTER SET utf8mb4 ;
     ```
   - Tiếp tục nhấn **Apply**, sau đó nhấn **Finish**.
   - CSDL mới `my_database1` sẽ xuất hiện trong danh sách **SCHEMAS** ở cột bên trái.

---

### Cách 2: Sử dụng câu lệnh SQL trong Query Tab

1. **Mở tab truy vấn mới**:
   - Tại cửa sổ làm việc chính, click vào biểu tượng **SQL ➕ (Create a new SQL tab for executing queries)** hoặc bấm phím tắt `Ctrl + T`.

2. **Viết câu lệnh tạo CSDL**:
   - Nhập câu lệnh sau vào khung soạn thảo:
     ```sql
     CREATE DATABASE `my_database1`;
     ```

3. **Thực thi câu lệnh**:
   - Nhấn vào biểu tượng **Tia sét ⚡ (Execute)** hoặc bấm tổ hợp phím `Ctrl + Enter` (hoặc `Ctrl + Shift + Enter`).
   - Quan sát tab **Action Output** bên dưới: xuất hiện dấu tích xanh ✅ thông báo `CREATE DATABASE my_database1 1 row(s) affected`.

4. **Làm mới danh sách Schemas**:
   - Nhấp chuột phải vào khu vực **SCHEMAS** bên trái và chọn **Refresh All** (hoặc click vào nút vòng tròn xoay 🔄) để thấy database `my_database1` xuất hiện.

---

## 💡 Các câu lệnh SQL hữu ích mở rộng

```sql
-- 1. Tạo CSDL an toàn (chỉ tạo nếu chưa tồn tại, tránh báo lỗi)
CREATE DATABASE IF NOT EXISTS `my_database1`
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

-- 2. Chọn CSDL làm việc hiện tại
USE `my_database1`;

-- 3. Xem danh sách toàn bộ các CSDL trên máy chủ
SHOW DATABASES;

-- 4. Xem thông số cấu hình của CSDL vừa tạo
SHOW CREATE DATABASE `my_database1`;

-- 5. Xóa CSDL khi không còn dùng đến (CẨN THẬN: Xóa vĩnh viễn dữ liệu)
-- DROP DATABASE IF EXISTS `my_database1`;
```
