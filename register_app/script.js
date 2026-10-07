/**
 * UI/UX Interactive Registration Form Script
 * Features: Real-time Validation, Password Strength Meter, Password Toggle, Smooth Page Transition
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const pageRegister = document.getElementById('page-register');
    const pageSuccess = document.getElementById('page-success');
    const registerForm = document.getElementById('register-form');
    
    const inputFullname = document.getElementById('fullname');
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');
    const inputConfirmPassword = document.getElementById('confirm-password');
    const checkboxTerms = document.getElementById('terms');
    
    const btnTogglePw = document.querySelector('.btn-toggle-pw');
    const meterFill = document.getElementById('meter-fill');
    const meterText = document.getElementById('meter-text');
    
    const resName = document.getElementById('res-name');
    const resEmail = document.getElementById('res-email');
    const resTime = document.getElementById('res-time');
    const btnBackForm = document.getElementById('btn-back-form');
    const btnExplore = document.getElementById('btn-explore');

    // 1. Toggle Password Visibility
    if (btnTogglePw) {
        btnTogglePw.addEventListener('click', () => {
            const isPassword = inputPassword.type === 'password';
            inputPassword.type = isPassword ? 'text' : 'password';
            btnTogglePw.setAttribute('aria-label', isPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu');
            btnTogglePw.innerHTML = isPassword ? `
                <svg class="icon-eye" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
            ` : `
                <svg class="icon-eye" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
            `;
        });
    }

    // 2. Real-time Password Strength Meter
    inputPassword.addEventListener('input', () => {
        const val = inputPassword.value;
        const strength = evaluatePasswordStrength(val);

        meterFill.style.width = strength.percent + '%';
        meterFill.style.backgroundColor = strength.color;
        meterText.textContent = strength.label;
        meterText.style.color = strength.color;
    });

    function evaluatePasswordStrength(pw) {
        if (!pw) {
            return { percent: 0, color: 'transparent', label: 'Nhập mật khẩu' };
        }
        let score = 0;
        if (pw.length >= 8) score += 25;
        if (/[A-Z]/.test(pw)) score += 25;
        if (/[0-9]/.test(pw)) score += 25;
        if (/[^A-Za-z0-9]/.test(pw)) score += 25;

        if (score <= 25) {
            return { percent: 25, color: '#ff4b5c', label: 'Yếu' };
        } else if (score <= 50) {
            return { percent: 50, color: '#f59e0b', label: 'Trung bình' };
        } else if (score <= 75) {
            return { percent: 75, color: '#3b82f6', label: 'Ká mạnh' };
        } else {
            return { percent: 100, color: '#10b981', label: 'Rất mạnh 🔥' };
        }
    }

    // 3. Real-time Clear Error on Input
    [inputFullname, inputEmail, inputPassword, inputConfirmPassword, checkboxTerms].forEach(el => {
        el.addEventListener('input', () => clearFieldError(el.id));
    });

    function setFieldError(fieldId, message) {
        const group = document.getElementById(fieldId).closest('.form-group');
        const errorEl = document.getElementById(`${fieldId}-error`);
        if (group) group.classList.add('has-error');
        if (errorEl) errorEl.textContent = message;
    }

    function clearFieldError(fieldId) {
        const group = document.getElementById(fieldId).closest('.form-group');
        const errorEl = document.getElementById(`${fieldId}-error`);
        if (group) group.classList.remove('has-error');
        if (errorEl) errorEl.textContent = '';
    }

    // 4. Form Submit & Validation Logic
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;

        // Validate Họ và tên
        const nameVal = inputFullname.value.trim();
        if (!nameVal) {
            setFieldError('fullname', 'Vui lòng nhập họ và tên của bạn.');
            isValid = false;
        } else if (nameVal.length < 2) {
            setFieldError('fullname', 'Họ và tên phải có tối thiểu 2 ký tự.');
            isValid = false;
        } else {
            clearFieldError('fullname');
        }

        // Validate Email
        const emailVal = inputEmail.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailVal) {
            setFieldError('email', 'Vui lòng nhập địa chỉ email.');
            isValid = false;
        } else if (!emailRegex.test(emailVal)) {
            setFieldError('email', 'Định dạng email không hợp lệ (ví dụ: name@domain.com).');
            isValid = false;
        } else {
            clearFieldError('email');
        }

        // Validate Mật khẩu
        const pwVal = inputPassword.value;
        if (!pwVal) {
            setFieldError('password', 'Vui lòng đặt mật khẩu.');
            isValid = false;
        } else if (pwVal.length < 8) {
            setFieldError('password', 'Mật khẩu phải có độ dài từ 8 ký tự trở lên.');
            isValid = false;
        } else {
            clearFieldError('password');
        }

        // Validate Xác nhận Mật khẩu
        const confirmPwVal = inputConfirmPassword.value;
        if (!confirmPwVal) {
            setFieldError('confirm-password', 'Vui lòng nhập lại mật khẩu để xác nhận.');
            isValid = false;
        } else if (confirmPwVal !== pwVal) {
            setFieldError('confirm-password', 'Mật khẩu xác nhận không trùng khớp.');
            isValid = false;
        } else {
            clearFieldError('confirm-password');
        }

        // Validate Checkbox Điều khoản
        if (!checkboxTerms.checked) {
            setFieldError('terms', 'Bạn cần đồng ý với Điều khoản và Chính sách để tiếp tục.');
            isValid = false;
        } else {
            clearFieldError('terms');
        }

        // Chuyển sang Trang 2 nếu hợp lệ
        if (isValid) {
            // Update Trang 2 Data
            resName.textContent = nameVal;
            resEmail.textContent = emailVal;
            const now = new Date();
            resTime.textContent = now.toLocaleTimeString('vi-VN') + ' - ' + now.toLocaleDateString('vi-VN');

            // Switch view with smooth transition
            pageRegister.classList.remove('active');
            setTimeout(() => {
                pageSuccess.classList.add('active');
            }, 250);
        }
    });

    // 5. Back to Form button (Trang 2 -> Trang 1)
    btnBackForm.addEventListener('click', () => {
        pageSuccess.classList.remove('active');
        setTimeout(() => {
            registerForm.reset();
            meterFill.style.width = '0%';
            meterText.textContent = 'Nhập mật khẩu';
            pageRegister.classList.add('active');
        }, 250);
    });

    btnExplore.addEventListener('click', () => {
        alert('🎉 Chúc mừng bạn đã đăng ký tài khoản thành công! Đây là mô phỏng luồng đăng ký hoàn tất.');
    });
});
