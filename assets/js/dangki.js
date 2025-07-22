document.getElementById("register-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Mật khẩu không khớp.");
    return;
  }

  // Lưu thông tin người dùng vào localStorage (giống như database mini)
  localStorage.setItem("registeredUser", JSON.stringify({
    username: username,
    email: email,
    password: password
  }));

  alert("Đăng ký thành công! Mời bạn đăng nhập.");
  window.location.href = "./dangnhap.html"; // → nhảy qua đăng nhập
});