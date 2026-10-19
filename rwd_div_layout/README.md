# Bài 3: [Bài tập] Tạo layout với RWD (Responsive Web Design)

## 🎯 Mục tiêu
Luyện tập sử dụng các thẻ `<div>` và **CSS (Media Queries, Flexbox)** để tạo bố cục phân vùng hoàn chỉnh cho trang web có khả năng thích ứng linh hoạt trên nhiều kích thước màn hình thiết bị (Desktop, Tablet, Mobile).

---

## 📋 Cấu trúc phân vùng trang web
1. **`#main`**: Khung bao toàn bộ nội dung trang web, căn giữa màn hình với `margin: 0 auto`.
2. **`#head`**: Vùng đầu trang chứa logo, khẩu hiệu và thanh biểu ngữ (Banner).
3. **`#head-link`**: Thanh điều hướng ngang chứa danh sách các trang chính.
4. **`#container`**: Khu vực thân trang chứa 3 cột:
   - **`#left`**: Cột Sidebar bên trái (Danh mục khóa học).
   - **`#content`**: Cột hiển thị nội dung chính ở giữa (Bài viết nổi bật, kiến thức RWD).
   - **`#right`**: Cột Sidebar bên phải (Lịch khai giảng, hỗ trợ, thống kê học viên).
5. **`#footer`**: Chân trang web với thông tin bản quyền và chứng thực RWD.

---

## 📱 Khả năng thích ứng (Responsive Breakpoints)
- **Desktop (> 992px):** Hiển thị đầy đủ bố cục 3 cột cạnh nhau cân đối (`#left`: 250px, `#content`: flex giãn nở, `#right`: 260px).
- **Tablet (≤ 992px):** Chuyển sang bố cục 2 cột, cột `#right` tự động xếp xuống phía dưới theo dạng lưới widget.
- **Mobile (≤ 768px):** Tất cả các cột `#left`, `#content`, `#right` đều chuyển về `width: 100%`, xếp chồng theo chiều dọc (stacked layout), không tràn viền, hỗ trợ chạm cảm ứng tối ưu.
- **Mobile nhỏ (≤ 480px):** Menu điều hướng xếp dọc theo dạng danh sách dễ bấm.

---

## 📂 Cấu trúc thư mục
```
rwd_div_layout/
├── index.html   # Cấu trúc HTML phân vùng bằng thẻ <div> (#main, #head, #left, #content, #right, #footer)
├── style.css    # CSS định dạng, màu sắc hiện đại và các Media Queries thích ứng
└── README.md    # Hướng dẫn chi tiết bài tập
```

---

## 🚀 Cách chạy và kiểm tra
1. Mở file `index.html` trong trình duyệt web bất kỳ.
2. Mở công cụ Developer Tools (**F12**) và kéo đổi chiều rộng trình duyệt qua các mốc: `1200px` ➔ `900px` ➔ `700px` ➔ `400px`.
3. Kiểm tra các phân vùng tự động co giãn và sắp xếp lại mượt mà, không xuất hiện thanh cuộn ngang.
