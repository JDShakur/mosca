let largura = 0;
let altura = 0;
let life = 1;

function atualizaTela(){

    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura, largura);
    
}
 atualizaTela();
function positionRandom(){

   //remover mosquito
   if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove();
   if(life > 3 ){
    window.location.href = 'endGame.html'
   }
   else{ document.getElementById('v' + life).src = "./img/coracao_vazio.png";
   life++;}
}





    let posicao_x = Math.floor(Math.random()* largura) - 120;
    let posicao_y = Math.floor(Math.random()* altura) - 120;

    posicao_x = posicao_x < 10 ? 10 : posicao_x;
    posicao_y = posicao_y < 10 ? 10 : posicao_y;

    console.log(posicao_x, posicao_y);


    //Criação do Elemento Mosquito no HTML
    // document.createElement()

    let mosquito = document.createElement('img');
    mosquito.src = "./img/mosquito.png";
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicao_x + 'px';
    mosquito.style.top = posicao_y + 'px';
    mosquito.style.position = 'absolute';
    document.body.appendChild(mosquito);
    mosquito.id = "mosquito";
    mosquito.onclick = function(){
        this.remove();
    }

    // tamanhoAleatorio();
}

function tamanhoAleatorio(){
    let tamanho = Math.floor(Math.random()*3);
    console.log(tamanho);
    switch (tamanho) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    let lado = Math.floor(Math.random()*2);
    console.log(lado);
    switch (lado) {
        case 0:
            return 'lado1'
        case 1:
            return 'lado2'
    }
}
