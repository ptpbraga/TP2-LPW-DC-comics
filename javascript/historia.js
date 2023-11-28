$.ajax({
    url: 'historia.json',
    dataType: 'json',
    success: resposta => {
      let results = resposta.results;
      $('#p1-historia').html(`<p> ${results[0].paragrafoum}</p> <p> ${results[0].paragrafodois}</p><p> ${results[0].paragrafotres}</p><p> ${results[0].paragrafoquatro}</p>`);
      $('#p2-historia').html(`<p> ${results[0].paragrafocinco}</p> <p> ${results[0].paragrafoseis}</p><p> ${results[0].paragrasete}</p>`);
    }
});