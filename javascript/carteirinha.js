$(document).ready(function() {
    $("#enviar").click(function() {
      var salvanome = $("#nome").val();
      var salvadata = $("#data_aniversario").val();
      var salvacor = $("#cor").val();

      localStorage.setItem("nomeperfil", salvanome);
      localStorage.setItem("datanas", salvadata);
      localStorage.setItem("corequipe", salvacor);
    });

    $("#carregar").click(function() {
      $("#name").html(localStorage.getItem("nomeperfil"));
      $("#nasceu").html(localStorage.getItem("datanas"));

      var colore = localStorage.getItem("corequipe");
      $(".carteirinha").css("background-color", colore);
    });
  });