# Bài 4: [Bài tập] Tạo gallery đơn giản sử dụng RWD

## 🎯 Mục tiêu
Luyện tập sử dụng **Media Query** trong CSS để tạo bố cục Responsive thích ứng linh hoạt cho bộ sưu tập ảnh (Image Gallery).

---

## 📋 Yêu cầu bài toán
Xây dựng Gallery theo đúng chuẩn bản mẫu [CodeGym Gallery Demo](http://demo.codegym.vn/web/15/gallery/gallery.html):
- **Màn hình lớn (> 700px):** Hiển thị **4 ảnh trên cùng một dòng** (`width: 24.99999%;` hoặc `25%`).
- **Màn hình vừa & nhỏ (≤ 700px):** Hiển thị **2 ảnh trên cùng một dòng** (`width: 49.99999%;` hoặc `50%`).
- **Màn hình điện thoại (≤ 500px):** Hiển thị **1 ảnh trên một dòng** xếp chồng theo chiều dọc (`width: 100%;`).
- Thẻ cha sử dụng kỹ thuật `.clearfix:after` để triệt tiêu thuộc tính `float`.
- Hiệu ứng hover viền đổi màu, phóng to nhẹ ảnh mượt mà.

---

## 📂 Cấu trúc thư mục
```
responsive_gallery/
├── index.html          # Khung HTML thư viện ảnh (.responsive, .gallery, a, img, .desc)
├── style.css           # CSS định dạng, float, clearfix và Media Queries (700px, 500px)
├── img_fjords.jpg      # Ảnh minh họa Fjords Norway
├── img_forest.jpg      # Ảnh minh họa Rừng xanh Forest
├── img_lights.jpg      # Ảnh minh họa Cực quang Northern Lights
├── img_mountains.jpg   # Ảnh minh họa Dãy núi Mountains
└── README.md           # Hướng dẫn chi tiết bài tập
```

---

## 🚀 Cách chạy và kiểm tra
1. Mở file `index.html` trong trình duyệt web.
2. Nhấn **F12** để mở công cụ Developer Tools, chuyển chế độ Responsive.
3. Kéo thanh điều chỉnh kích thước màn hình:
   - Trên `700px`: 4 thẻ ảnh dàn đều 1 dòng.
   - Từ `501px` đến `700px`: 4 thẻ ảnh chia đều thành 2 hàng, mỗi hàng 2 ảnh.
   - Từ `500px` trở xuống: Các thẻ ảnh tự động xếp dọc (1 ảnh/dòng).
