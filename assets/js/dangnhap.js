document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const inputUsernameOrEmail = document.getElementById("username").value;
    const inputPassword = document.getElementById("password").value;

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      registeredUser &&
      (registeredUser.username === inputUsernameOrEmail || registeredUser.email === inputUsernameOrEmail) &&
      registeredUser.password === inputPassword
    ) {
      localStorage.setItem("loggedInUser", JSON.stringify(registeredUser));
      alert("Đăng nhập thành công!");
      window.location.href = "trangchu.html";
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng.");
    }
  });
});
