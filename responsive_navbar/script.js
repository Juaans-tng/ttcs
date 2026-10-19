// =========================================================
// BÀI 1: [THỰC HÀNH] TẠO THANH ĐIỀU HƯỚNG RESPONSIVE
// Xử lý bật/tắt (toggle) menu trên màn hình mobile
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links a");

    // Xử lý khi nhấn vào biểu tượng ☰ (hamburger menu)
    if (menuIcon && navLinks) {
        menuIcon.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            
            // Cập nhật trạng thái biểu tượng (☰ hoặc ✕) để tăng trải nghiệm người dùng
            if (navLinks.classList.contains("active")) {
                menuIcon.textContent = "✕";
                menuIcon.setAttribute("aria-expanded", "true");
            } else {
                menuIcon.textContent = "☰";
                menuIcon.setAttribute("aria-expanded", "false");
            }
        });

        // Tự động đóng menu sau khi người dùng click vào một link (trên mobile)
        links.forEach(link => {
            link.addEventListener("click", function () {
                if (navLinks.classList.contains("active")) {
                    navLinks.classList.remove("active");
                    menuIcon.textContent = "☰";
                    menuIcon.setAttribute("aria-expanded", "false");
                }
            });
        });

        // Đóng menu khi người dùng nhấn phím Escape
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                menuIcon.textContent = "☰";
                menuIcon.setAttribute("aria-expanded", "false");
            }
        });
    }
});
