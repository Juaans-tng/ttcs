# Bài 2: [Thực hành] Xây dựng trang web Landing Page Responsive

## 🎯 Mục đích
Luyện tập sử dụng **HTML**, **CSS** (Flexbox, Media Queries) để xây dựng một trang web landing page hoàn chỉnh có khả năng co giãn linh hoạt (responsive), hiển thị tối ưu trên cả desktop và thiết bị di động.

---

## 📋 Yêu cầu bài toán
- **Trên desktop:**
  - Header: Thanh điều hướng ngang gồm logo thương hiệu và các liên kết menu.
  - Hero section: Giới thiệu thông điệp chính, slogan và nút kêu gọi hành động (Call to Action).
  - Services section: Hiển thị các khối dịch vụ nằm ngang cạnh nhau (Thiết kế web, Phát triển phần mềm, Marketing số) bằng CSS Flexbox.
  - Testimonial section: Nhận xét đánh giá từ khách hàng bố trí cân đối.
  - Footer: Thông tin bản quyền chân trang.
- **Trên mobile (≤ 768px):**
  - Thanh menu thu gọn chống tràn giao diện.
  - Khối dịch vụ tự động chuyển sang xếp chồng theo chiều dọc (`flex-direction: column; width: 100%;`).
  - Hero và các vùng đệm (padding) co giãn hợp lý, không phát sinh thanh cuộn ngang ngoài ý muốn.

---

## 📂 Cấu trúc thư mục
```
responsive_landing_page/
├── index.html   # Cấu trúc HTML ngữ nghĩa (header, hero, services, testimonials, footer)
├── style.css    # CSS Flexbox, màu sắc hiện đại và Media Queries @media (max-width: 768px)
└── README.md    # Hướng dẫn chi tiết bài thực hành
```

---

## 🚀 Cách chạy và kiểm tra
1. Mở file `index.html` trong trình duyệt web.
2. Kiểm tra trên màn hình máy tính: Bố cục dàn đều nhiều cột đẹp mắt.
3. Thu nhỏ cửa sổ hoặc mở chế độ F12 (Mobile View): Kiểm tra nội dung tự động co giãn, các khối dịch vụ xếp dọc gọn gàng không bị vỡ bố cục.
