  $("#claro").click( function() {
    $("#p-jogo").html("Muito bem pequeno detetive! Preciso que você ache quem contruiu esse site. Há eles revelaram minha identidade secreta!");
    $("#claro").remove();
    $("#nao").remove();
    $("#balao").append('<a href="index.html"><button class="volte"> Voltar a página inicial</button></a>');
  });

  $("#nao").click( function() {
    $("#p-jogo").html("Ah, tudo bem então. Sabe como voltar caso mude de ideia");
    $("#claro").remove();
    $("#nao").remove();
    $("#balao").append('<a href="index.html"><button class="volte"> Voltar a página inicial</button></a>');
  });

