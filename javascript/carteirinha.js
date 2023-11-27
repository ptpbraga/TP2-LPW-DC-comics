$(document).ready(function() {
    $("#enviar").click(function() {
      var salvanome = $("#nome").val();
      var salvadata = $("#data_aniversario").val();
      var salvacor = $("#cor").val();
      var salvaHabilidades = $("#habil").val();
      

      localStorage.setItem("nomeperfil", salvanome);
      localStorage.setItem("datanas", salvadata);
      localStorage.setItem("corequipe", salvacor);
      localStorage.setItem("habilidades", salvaHabilidades);

    });

    $("#carregar").click(function() {
      $("#name").html(localStorage.getItem("nomeperfil"));
      $("#nasceu").html(localStorage.getItem("datanas"));
      $("#hab").html(localStorage.getItem("habilidades"));

      var colore = localStorage.getItem("corequipe");
      $(".carteirinha").css("background-color", colore);
    });
  });
