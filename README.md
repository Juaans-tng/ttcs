# BỘ BÀI TẬP THỰC HÀNH THIẾT KẾ UI/UX & LẬP TRÌNH WEB (CODEGYM)

Chào mừng bạn đến với kho lưu trữ tổng hợp các bài thực hành và bài tập về thiết kế UI/UX, phối màu, Responsive Web Design (RWD), Bootstrap 5, Material Design và Git/GitHub.

---

## 📂 Danh Sách Các Bài Tập Trong Kho Lưu Trữ

### 🌐 Chuyên Đề: Responsive Web Design (RWD) & Layout

#### 🧭 1. [Thực hành] Tạo thanh điều hướng responsive
- **Thư mục**: [`/responsive_navbar`](./responsive_navbar)
- **Mô tả**: Áp dụng HTML, CSS (Flexbox, Media Queries) và JavaScript để tạo navbar thích ứng: hiển thị menu ngang trên desktop và menu icon hamburger (`☰`) mở/đóng mượt mà trên mobile (≤ 768px).
- **File chính**: [`responsive_navbar/index.html`](./responsive_navbar/index.html), [`responsive_navbar/style.css`](./responsive_navbar/style.css), [`responsive_navbar/script.js`](./responsive_navbar/script.js)

#### 🚀 2. [Thực hành] Xây dựng trang web Landing Page Responsive
- **Thư mục**: [`/responsive_landing_page`](./responsive_landing_page)
- **Mô tả**: Landing Page chuẩn responsive gồm Header, Hero banner, Services 3 cột Flexbox, Testimonials và Footer. Tự động chuyển xếp dọc và tối ưu trên mobile (≤ 768px) không phát sinh thanh cuộn ngang.
- **File chính**: [`responsive_landing_page/index.html`](./responsive_landing_page/index.html), [`responsive_landing_page/style.css`](./responsive_landing_page/style.css)

#### 📐 3. [Bài tập] Tạo layout với RWD
- **Thư mục**: [`/rwd_div_layout`](./rwd_div_layout)
- **Mô tả**: Phân vùng trang web bằng thẻ `<div>` và CSS Media Queries: Header (#head), Menu (#head-link), 3 cột (#left, #content, #right) trên Desktop, chuyển 2 cột trên Tablet (≤ 992px) và xếp chồng 100% trên Mobile (≤ 768px).
- **File chính**: [`rwd_div_layout/index.html`](./rwd_div_layout/index.html), [`rwd_div_layout/style.css`](./rwd_div_layout/style.css)

#### 🖼️ 4. [Bài tập] Tạo gallery đơn giản sử dụng RWD
- **Thư mục**: [`/responsive_gallery`](./responsive_gallery)
- **Mô tả**: Xây dựng bộ sưu tập ảnh theo bản mẫu CodeGym với Media Queries: > 700px hiển thị 4 ảnh/dòng (25%), ≤ 700px hiển thị 2 ảnh/dòng (50%), và ≤ 500px hiển thị 1 ảnh/dòng (100%). Kèm hiệu ứng hover viền và clearfix triệt để.
- **File chính**: [`responsive_gallery/index.html`](./responsive_gallery/index.html), [`responsive_gallery/style.css`](./responsive_gallery/style.css)

---

### 🎨 Chuyên Đề: UI/UX & Phối Màu

#### 🎨 5. Thực Hành Phối Màu Đơn Tông (Monochromatic Palette)
- **Thư mục**: [`/Pra`](./Pra)
- **Mô tả**: Phối màu đơn tông dựa trên màu xanh logo `#00ADEE` với 9 cấp độ màu và hệ thống chuyển đổi chủ đề (Blue, Purple, Emerald, Amber).
- **File chính**: [`Pra/index.html`](./Pra/index.html), [`Pra/style.css`](./Pra/style.css)

#### 📱 6. Bài Tập Thiết Kế UI/UX Trang Đăng Ký Người Dùng
- **Thư mục**: [`/register_app`](./register_app)
- **Mô tả**: Giao diện đăng ký 2 trang (Form Đăng Ký & Trang Xác Nhận Thành Công) áp dụng Định luật Fitts (Fitts' Law), kiểm tra lỗi thời gian thực, đo độ mạnh mật khẩu và thiết kế Dark Glassmorphism.
- **File chính**: [`register_app/index.html`](./register_app/index.html), [`register_app/style.css`](./register_app/style.css), [`register_app/script.js`](./register_app/script.js)

#### 🌊 7. Bài Tập Phối Màu Newsletter (Bootstrap 5 & Adobe Color)
- **Thư mục**: [`/newsletter_app`](./newsletter_app)
- **Mô tả**: Xây dựng 2 phiên bản Newsletter với 2 bảng màu Adobe Color khác biệt (Version 1: Ocean Cyan & Tech Teal vs. Version 2: Warm Sunset Coral & Amber).
- **File chính**: [`newsletter_app/index.html`](./newsletter_app/index.html), [`newsletter_app/newsletter_v1.html`](./newsletter_app/newsletter_v1.html), [`newsletter_app/newsletter_v2.html`](./newsletter_app/newsletter_v2.html)

#### 💼 8. Bài Tập Xây Dựng Landing Page CodeGym Career (Material Design)
- **Thư mục**: [`/codegym_career_landing`](./codegym_career_landing)
- **Mô tả**: Landing Page hoàn chỉnh cho CodeGym Career phong cách Google Material Design bằng MDBootstrap, hiệu ứng z-depth, sóng nước Wave Ripple, 4 khóa học thực chiến và Form đăng ký tư vấn.
- **File chính**: [`codegym_career_landing/index.html`](./codegym_career_landing/index.html), [`codegym_career_landing/style.css`](./codegym_career_landing/style.css), [`codegym_career_landing/script.js`](./codegym_career_landing/script.js)

#### 🐙 9. Thực Hành Tạo Dự Án Mới Trên GitHub
- **Thư mục**: [`/my-new-project`](./my-new-project)
- **Mô tả**: Luyện tập quy trình khởi tạo Local Repository, liên kết Remote Repository và đẩy commit với lệnh CLI.
- **File chính**: [`my-new-project/README.md`](./my-new-project/README.md)

---

## 🛠️ Công Nghệ Sử Dụng
- HTML5 Semantic, CSS3 (Flexbox, CSS Grid, Media Queries, Float & Clearfix)
- JavaScript ES6 (DOM Event Handling)
- Bootstrap 5, MDBootstrap (Material Design)
- Font Awesome 5, Google Fonts (Inter, Roboto, Plus Jakarta Sans, Pacifico)
- Git & GitHub
