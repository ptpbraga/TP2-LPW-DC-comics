function signup() {
  var username = $("#username").val();
  var password = $("#password").val();
  
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  
  alert("Conta criada com sucesso!");
  window.location.href = "login.html";
}
  