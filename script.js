let numero;
let divCartas;
let cartas =[];
let desenhos = ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif', 'metalparrot.gif','revertitparrot.gif','tripletsparrot.gif','unicornparrot.gif']

//pergunta quantas cartas quer jogar
function quantasCartas(){
    numero = 1;   
    while (numero%2 !== 0 || numero < 3 || numero > 14){4
        numero = prompt("Com quantas cartas você quer jogar? (escolha um número par de 4 a 14)");
    }
}
quantasCartas();

//distribui as cartas de acordo com numero
function distribuiCartas(){
    divCartas = document.querySelector('.cartas');
    for (let i = 0; i < numero;i++){
        let cartinha = divCartas.children[i];
        cartinha.classList.remove('escondida');
    }
}
distribuiCartas();

//cria uma lista de cartas com os desenhos
function criaLista(){
    for (let j = 0; j < (numero/2);j++){
        cartas.push(desenhos[j]);
        cartas.push(desenhos[j]);
    }
}
criaLista();

//embaralha a lista (função dada)
cartas.sort(comparador);
function comparador() { 
	return Math.random() - 0.5; 
}

//mostrar o desenho quando clicar na carta
function virarCarta(cartaClicada){
    let contador = 0;
    while (cartaClicada != divCartas.children[contador]){
        contador ++;
    }
    cartaClicada.innerHTML = `<img class="frente"src="./imagens/${cartas[contador]}" alt="">`
}