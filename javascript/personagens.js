var swiper = new Swiper('.Slider-container', {
    effect: 'cards',
    grabCursor: true,
    centerdSlides: true,
    loop: true,
  });



$.ajax({
  url: 'personagens.json',
  dataType: 'json',
  success: resposta => {
    let results = resposta.results;
    $('#aquaman-h1').html(`${results[0].name}`);
    $('#arrow-h1').html(`${results[1].name}`);
    $('#batman-h1').html(`${results[2].name}`);
    $('#cacador-h1').html(`${results[3].name}`);
    $('#flash-h1').html(`${results[4].name}`);
    $('#maravilha-h1').html(`${results[5].name}`);
    $('#tornado-h1').html(`${results[7].name}`);
    $('#superman-h1').html(`${results[6].name}`);
    $('#zatana-h1').html(`${results[8].name}`);
  }
});

