# Bài 1: [Thực hành] Tạo thanh điều hướng responsive

## 🎯 Mục đích
Luyện tập sử dụng **HTML**, **CSS** (Flexbox, Media Queries) và **JavaScript** để tạo thanh điều hướng (navbar) responsive, giúp hiển thị tối ưu trên cả máy tính và thiết bị di động.

---

## 📋 Yêu cầu bài toán
- **Trên desktop (> 768px):** Hiển thị đầy đủ menu ngang sử dụng CSS Flexbox. Biểu tượng hamburger menu ẩn đi.
- **Trên mobile (≤ 768px):**
  - Biểu tượng menu (`☰`) xuất hiện ở góc phải.
  - Danh sách menu (`.nav-links`) mặc định ẩn (`display: none;`).
  - Khi người dùng nhấn vào biểu tượng `☰`, JavaScript sẽ kích hoạt class `.active` (`display: flex;`) để mở danh sách menu dạng cột trượt xuống.
  - Bấm lại biểu tượng hoặc chọn một liên kết sẽ tự động thu gọn menu.

---

## 📂 Cấu trúc thư mục
```
responsive_navbar/
├── index.html   # Cấu trúc HTML với nav, logo, menu links và menu icon
├── style.css    # CSS Flexbox, bố cục nền tối hiện đại và Media Queries @media (max-width: 768px)
├── script.js   # Xử lý sự kiện click toggle class active trên mobile
└── README.md    # Tài liệu hướng dẫn bài thực hành
```

---

## 🚀 Cách chạy và kiểm tra
1. Mở file `index.html` trực tiếp bằng trình duyệt (Google Chrome, Firefox, Edge).
2. Kiểm tra trên màn hình lớn: Các nút menu nằm thẳng hàng ngang.
3. Nhấn **F12** > Bật **Toggle device toolbar** (hoặc co nhỏ chiều rộng cửa sổ trình duyệt xuống dưới 768px).
4. Quan sát menu chuyển thành icon `☰`, nhấp chuột để kiểm tra đóng/mở menu.
