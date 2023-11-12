function login() {
  var username = $("#username").val();
  var password = $("#password").val();
  
  var storedUsername = localStorage.getItem("username");
  var storedPassword = localStorage.getItem("password");
  
  if (username === storedUsername && password === storedPassword) {
    window.location.href = "index.html";
  } else {
    alert("Username ou senha inválida");
  }
}
  