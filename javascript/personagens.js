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
    $('#aquaman-h3').html(`${results[0].id}`);
    $('#aquaman-p').html(`<ul> <li>Nome Completo: ${results[0].biography.fullname}</li><li>Inteligência: ${results[0].powerstats.intelligence}</li><li>Força: ${results[0].powerstats.strength}</li><li>Velocidade: ${results[0].powerstats.speed}</li><li>Durabilidade: ${results[0].powerstats.durability}</li><li>Poder: ${results[0].powerstats.power}</li><li>Combate: ${results[0].powerstats.combat}</li>`);

    $('#arrow-h1').html(`${results[1].name}`);
    $('#arrow-h3').html(`${results[1].id}`);
    $('#arrow-p').html(`<ul> <li>Nome Completo: ${results[1].biography.fullname}</li><li>Inteligência: ${results[1].powerstats.intelligence}</li><li>Força: ${results[1].powerstats.strength}</li><li>Velocidade: ${results[1].powerstats.speed}</li><li>Durabilidade: ${results[1].powerstats.durability}</li><li>Poder: ${results[1].powerstats.power}</li><li>Combate: ${results[1].powerstats.combat}</li>`);


    $('.batman-h1').html(`${results[2].name}`);
    $('.batman-h3').html(`${results[2].id}`);
    $('.batman-p').html(`<ul> <li>Nome Completo: ${results[2].biography.fullname}</li><li>Inteligência: ${results[2].powerstats.intelligence}</li><li>Força: ${results[2].powerstats.strength}</li><li>Velocidade: ${results[2].powerstats.speed}</li><li>Durabilidade: ${results[2].powerstats.durability}</li><li>Poder: ${results[2].powerstats.power}</li><li>Combate: ${results[2].powerstats.combat}</li>`);
    
    
    $('#cacador-h1').html(`${results[3].name}`);
    $('#cacador-h3').html(`${results[3].id}`);
    $('#cacador-p').html(`<ul> <li>Nome Completo: ${results[3].biography.fullname}</li><li>Inteligência: ${results[3].powerstats.intelligence}</li><li>Força: ${results[3].powerstats.strength}</li><li>Velocidade: ${results[3].powerstats.speed}</li><li>Durabilidade: ${results[3].powerstats.durability}</li><li>Poder: ${results[3].powerstats.power}</li><li>Combate: ${results[3].powerstats.combat}</li>`);


    $('#flash-h1').html(`${results[4].name}`);
    $('#flash-h3').html(`${results[4].id}`);
    $('#flash-p').html(`<ul> <li>Nome Completo: ${results[4].biography.fullname}</li><li>Inteligência: ${results[4].powerstats.intelligence}</li><li>Força: ${results[4].powerstats.strength}</li><li>Velocidade: ${results[4].powerstats.speed}</li><li>Durabilidade: ${results[4].powerstats.durability}</li><li>Poder: ${results[4].powerstats.power}</li><li>Combate: ${results[4].powerstats.combat}</li>`);


    $('#maravilha-h1').html(`${results[5].name}`);
    $('#maravilha-h3').html(`${results[5].id}`);
    $('#maravilha-p').html(`<ul> <li>Nome Completo: ${results[5].biography.fullname}</li><li>Inteligência: ${results[5].powerstats.intelligence}</li><li>Força: ${results[5].powerstats.strength}</li><li>Velocidade: ${results[5].powerstats.speed}</li><li>Durabilidade: ${results[5].powerstats.durability}</li><li>Poder: ${results[5].powerstats.power}</li><li>Combate: ${results[5].powerstats.combat}</li>`);


    $('#superman-h1').html(`${results[6].name}`);
    $('#superman-h3').html(`${results[6].id}`);
    $('#superman-p').html(`<ul> <li>Nome Completo: ${results[6].biography.fullname}</li><li>Inteligência: ${results[6].powerstats.intelligence}</li><li>Força: ${results[6].powerstats.strength}</li><li>Velocidade: ${results[6].powerstats.speed}</li><li>Durabilidade: ${results[6].powerstats.durability}</li><li>Poder: ${results[6].powerstats.power}</li><li>Combate: ${results[6].powerstats.combat}</li>`);


    $('#tornado-h1').html(`${results[7].name}`);
    $('#tornado-h3').html(`${results[7].id}`);
    $('#tornado-p').html(`<ul> <li>Nome Completo: ${results[7].biography.fullname}</li><li>Inteligência: ${results[7].powerstats.intelligence}</li><li>Força: ${results[7].powerstats.strength}</li><li>Velocidade: ${results[7].powerstats.speed}</li><li>Durabilidade: ${results[7].powerstats.durability}</li><li>Poder: ${results[7].powerstats.power}</li><li>Combate: ${results[7].powerstats.combat}</li>`);
    

    $('#zatana-h1').html(`${results[8].name}`);
    $('#zatana-h3').html(`${results[8].id}`);
    $('#zatana-p').html(`<ul> <li>Nome Completo: ${results[8].biography.fullname}</li><li>Inteligência: ${results[8].powerstats.intelligence}</li><li>Força: ${results[8].powerstats.strength}</li><li>Velocidade: ${results[8].powerstats.speed}</li><li>Durabilidade: ${results[8].powerstats.durability}</li><li>Poder: ${results[8].powerstats.power}</li><li>Combate: ${results[8].powerstats.combat}</li>`);

    $('#dick-h1').html(`${results[9].name}`);
    $('#dick-h3').html(`${results[9].id}`);
    $('#dick-p').html(`<ul> <li>Nome Completo: ${results[9].biography.fullname}</li><li>Inteligência: ${results[9].powerstats.intelligence}</li><li>Força: ${results[9].powerstats.strength}</li><li>Velocidade: ${results[9].powerstats.speed}</li><li>Durabilidade: ${results[9].powerstats.durability}</li><li>Poder: ${results[9].powerstats.power}</li><li>Combate: ${results[9].powerstats.combat}</li>`);


    $('#jason-h1').html(`${results[10].name}`);
    $('#jason-h3').html(`${results[10].id}`);
    $('#jason-p').html(`<ul> <li>Nome Completo: ${results[10].biography.fullname}</li><li>Inteligência: ${results[10].powerstats.intelligence}</li><li>Força: ${results[10].powerstats.strength}</li><li>Velocidade: ${results[10].powerstats.speed}</li><li>Durabilidade: ${results[10].powerstats.durability}</li><li>Poder: ${results[10].powerstats.power}</li><li>Combate: ${results[10].powerstats.combat}</li>`);


    $('#tim-h1').html(`${results[11].name}`);
    $('#tim-h3').html(`${results[11].id}`);
    $('#tim-p').html(`<ul> <li>Nome Completo: ${results[11].biography.fullname}</li><li>Inteligência: ${results[11].powerstats.intelligence}</li><li>Força: ${results[11].powerstats.strength}</li><li>Velocidade: ${results[11].powerstats.speed}</li><li>Durabilidade: ${results[11].powerstats.durability}</li><li>Poder: ${results[11].powerstats.power}</li><li>Combate: ${results[11].powerstats.combat}</li>`);


    $('#damian-h1').html(`${results[12].name}`);
    $('#damian-h3').html(`${results[12].id}`);
    $('#damian-p').html(`<ul> <li>Nome Completo: ${results[12].biography.fullname}</li><li>Inteligência: ${results[12].powerstats.intelligence}</li><li>Força: ${results[12].powerstats.strength}</li><li>Velocidade: ${results[12].powerstats.speed}</li><li>Durabilidade: ${results[12].powerstats.durability}</li><li>Poder: ${results[12].powerstats.power}</li><li>Combate: ${results[12].powerstats.combat}</li>`);


    $('#batwoman-h1').html(`${results[13].name}`);
    $('#batwoman-h3').html(`${results[13].id}`);
    $('#batwoman-p').html(`<ul> <li>Nome Completo: ${results[13].biography.fullname}</li><li>Inteligência: ${results[13].powerstats.intelligence}</li><li>Força: ${results[13].powerstats.strength}</li><li>Velocidade: ${results[13].powerstats.speed}</li><li>Durabilidade: ${results[13].powerstats.durability}</li><li>Poder: ${results[13].powerstats.power}</li><li>Combate: ${results[13].powerstats.combat}</li>`);
    

    $('#gato-h1').html(`${results[14].name}`);
    $('#gato-h3').html(`${results[14].id}`);
    $('#gato-p').html(`<ul> <li>Nome Completo: ${results[14].biography.fullname}</li><li>Inteligência: ${results[14].powerstats.intelligence}</li><li>Força: ${results[14].powerstats.strength}</li><li>Velocidade: ${results[14].powerstats.speed}</li><li>Durabilidade: ${results[14].powerstats.durability}</li><li>Poder: ${results[14].powerstats.power}</li><li>Combate: ${results[14].powerstats.combat}</li>`);


    $('#barbara-h1').html(`${results[15].name}`);
    $('#barbara-h3').html(`${results[15].id}`);
    $('#barbara-p').html(`<ul> <li>Nome Completo: ${results[15].biography.fullname}</li><li>Inteligência: ${results[15].powerstats.intelligence}</li><li>Força: ${results[15].powerstats.strength}</li><li>Velocidade: ${results[15].powerstats.speed}</li><li>Durabilidade: ${results[15].powerstats.durability}</li><li>Poder: ${results[15].powerstats.power}</li><li>Combate: ${results[15].powerstats.combat}</li>`);


    $('#stephanie-h1').html(`${results[16].name}`);
    $('#stephanie-h3').html(`${results[16].id}`);
    $('#stephanie-p').html(`<ul> <li>Nome Completo: ${results[16].biography.fullname}</li><li>Inteligência: ${results[16].powerstats.intelligence}</li><li>Força: ${results[16].powerstats.strength}</li><li>Velocidade: ${results[16].powerstats.speed}</li><li>Durabilidade: ${results[16].powerstats.durability}</li><li>Poder: ${results[16].powerstats.power}</li><li>Combate: ${results[16].powerstats.combat}</li>`);


    $('#coringa-h1').html(`${results[17].name}`);
    $('#coringa-h3').html(`${results[17].id}`);
    $('#coringa-p').html(`<ul> <li>Nome Completo: ${results[17].biography.fullname}</li><li>Inteligência: ${results[17].powerstats.intelligence}</li><li>Força: ${results[17].powerstats.strength}</li><li>Velocidade: ${results[17].powerstats.speed}</li><li>Durabilidade: ${results[17].powerstats.durability}</li><li>Poder: ${results[17].powerstats.power}</li><li>Combate: ${results[17].powerstats.combat}</li>`);
    

    $('#lex-h1').html(`${results[18].name}`);
    $('#lex-h3').html(`${results[18].id}`);
    $('#lex-p').html(`<ul> <li>Nome Completo: ${results[18].biography.fullname}</li><li>Inteligência: ${results[18].powerstats.intelligence}</li><li>Força: ${results[18].powerstats.strength}</li><li>Velocidade: ${results[18].powerstats.speed}</li><li>Durabilidade: ${results[18].powerstats.durability}</li><li>Poder: ${results[18].powerstats.power}</li><li>Combate: ${results[18].powerstats.combat}</li>`);

    $('#reverso-h1').html(`${results[19].name}`);
    $('#reverso-h3').html(`${results[19].id}`);
    $('#reverso-p').html(`<ul> <li>Nome Completo: ${results[19].biography.fullname}</li><li>Inteligência: ${results[19].powerstats.intelligence}</li><li>Força: ${results[19].powerstats.strength}</li><li>Velocidade: ${results[19].powerstats.speed}</li><li>Durabilidade: ${results[19].powerstats.durability}</li><li>Poder: ${results[19].powerstats.power}</li><li>Combate: ${results[19].powerstats.combat}</li>`);


    $('#sinestro-h1').html(`${results[20].name}`);
    $('#sinestro-h3').html(`${results[20].id}`);
    $('#sinestro-p').html(`<ul> <li>Nome Completo: ${results[20].biography.fullname}</li><li>Inteligência: ${results[20].powerstats.intelligence}</li><li>Força: ${results[20].powerstats.strength}</li><li>Velocidade: ${results[20].powerstats.speed}</li><li>Durabilidade: ${results[20].powerstats.durability}</li><li>Poder: ${results[20].powerstats.power}</li><li>Combate: ${results[20].powerstats.combat}</li>`);


    $('#exterminador-h1').html(`${results[21].name}`);
    $('#exterminador-h3').html(`${results[21].id}`);
    $('#exterminador-p').html(`<ul> <li>Nome Completo: ${results[21].biography.fullname}</li><li>Inteligência: ${results[21].powerstats.intelligence}</li><li>Força: ${results[21].powerstats.strength}</li><li>Velocidade: ${results[21].powerstats.speed}</li><li>Durabilidade: ${results[21].powerstats.durability}</li><li>Poder: ${results[21].powerstats.power}</li><li>Combate: ${results[21].powerstats.combat}</li>`);


    $('#hera-h1').html(`${results[22].name}`);
    $('#hera-h3').html(`${results[22].id}`);
    $('#hera-p').html(`<ul> <li>Nome Completo: ${results[22].biography.fullname}</li><li>Inteligência: ${results[22].powerstats.intelligence}</li><li>Força: ${results[22].powerstats.strength}</li><li>Velocidade: ${results[22].powerstats.speed}</li><li>Durabilidade: ${results[22].powerstats.durability}</li><li>Poder: ${results[22].powerstats.power}</li><li>Combate: ${results[22].powerstats.combat}</li>`);


    $('#pinguim-h1').html(`${results[23].name}`);
    $('#pinguim-h3').html(`${results[23].id}`);
    $('#pinguim-p').html(`<ul> <li>Nome Completo: ${results[23].biography.fullname}</li><li>Inteligência: ${results[23].powerstats.intelligence}</li><li>Força: ${results[23].powerstats.strength}</li><li>Velocidade: ${results[23].powerstats.speed}</li><li>Durabilidade: ${results[23].powerstats.durability}</li><li>Poder: ${results[23].powerstats.power}</li><li>Combate: ${results[23].powerstats.combat}</li>`);
    

    $('#charada-h1').html(`${results[24].name}`);
    $('#charada-h3').html(`${results[24].id}`);
    $('#charada-p').html(`<ul> <li>Nome Completo: ${results[24].biography.fullname}</li><li>Inteligência: ${results[24].powerstats.intelligence}</li><li>Força: ${results[24].powerstats.strength}</li><li>Velocidade: ${results[24].powerstats.speed}</li><li>Durabilidade: ${results[24].powerstats.durability}</li><li>Poder: ${results[24].powerstats.power}</li><li>Combate: ${results[24].powerstats.combat}</li>`);


    $('#espantalho-h1').html(`${results[25].name}`);
    $('#espantalho-h3').html(`${results[25].id}`);
    $('#espantalho-p').html(`<ul> <li>Nome Completo: ${results[25].biography.fullname}</li><li>Inteligência: ${results[25].powerstats.intelligence}</li><li>Força: ${results[25].powerstats.strength}</li><li>Velocidade: ${results[25].powerstats.speed}</li><li>Durabilidade: ${results[25].powerstats.durability}</li><li>Poder: ${results[25].powerstats.power}</li><li>Combate: ${results[25].powerstats.combat}</li>`);


  }
});

