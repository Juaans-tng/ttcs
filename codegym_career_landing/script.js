/**
 * CodeGym Career Material Design Landing Page Script
 * Custom interactions, form handling, and smooth scrolling
 */

$(document).ready(function () {
    // 1. Smooth Scrolling for Navbar Anchor Links
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 800);

            // Close responsive menu on mobile after click
            if ($('.navbar-collapse').hasClass('show')) {
                $('.navbar-toggler').click();
            }
        }
    });

    // 2. Hero Quick Form Submission Handler
    $('#hero-quick-form').on('submit', function (e) {
        e.preventDefault();

        const name = $('#hero-name').val().trim();
        const phone = $('#hero-phone').val().trim();
        const email = $('#hero-email').val().trim();

        if (!name || !phone || !email) {
            alert('⚠️ Vui lòng điền đầy đủ thông tin để nhận tư vấn học bổng!');
            return;
        }

        alert('🎉 Chúc mừng ' + name + '! Yêu cầu nhận học bổng và tư vấn lộ trình của bạn đã được ghi nhận. Chuyên viên tư vấn CodeGym sẽ liên hệ lại trong vòng 15 phút.');
        this.reset();
    });

    // 3. Main Contact Lead Form Submission Handler
    $('#contact-lead-form').on('submit', function (e) {
        e.preventDefault();

        const name = $('#lead-name').val().trim();
        const phone = $('#lead-phone').val().trim();
        const email = $('#lead-email').val().trim();
        const course = $('#lead-course').val();

        if (!name || !phone || !email) {
            alert('⚠️ Vui lòng điền đầy đủ các trường thông tin bắt buộc (*)!');
            return;
        }

        alert('🚀 Đăng ký thành công!\n\nHọ tên: ' + name + '\nKhóa học quan tâm: ' + course + '\n\nCodeGym đã giữ suất học bổng ưu đãi 30% cho bạn. Chúng tôi sẽ gọi lại hỗ trợ ngay!');
        this.reset();
    });

    // 4. Navbar Background Color Change on Scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#navbar-main').addClass('shadow-lg');
        } else {
            $('#navbar-main').removeClass('shadow-lg');
        }
    });
});
