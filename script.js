let numero;
let divCartas;
let cartas =[];
let desenhos = ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif', 'metalparrot.gif','revertitparrot.gif','tripletsparrot.gif','unicornparrot.gif']
let comparadorDesenhos = [];
let paresFormados = 0;

// contador de cartas viradas
let qtdeCartasViradas = 0;

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
    virada(cartaClicada);
    setTimeout(remover,501);
        let contador = 0;
        while (cartaClicada != divCartas.children[contador]){
            contador ++;
        }
        
        cartaClicada.innerHTML = `<img class="frente" src="./imagens/${cartas[contador]}" alt="">`
        
        if(cartaClicada !== comparadorDesenhos[qtdeCartasViradas-1]){
            comparadorDesenhos.push(cartaClicada);
    
            qtdeCartasViradas ++;
            if (qtdeCartasViradas%2 ==0){
                setTimeout(verificarPar,1000)
            } if (comparadorDesenhos.length == 0){
                comparadorDesenhos.push(cartaClicada);
                qtdeCartasViradas = 1;
            }
        }
    }
        

//funcao que vira a carta em si
function virada(carta){
    carta.classList.add('virada');
    let imagemDaCarta = carta.children[0];
    imagemDaCarta.classList.add('naovira');
}

//remove a classe virada e naovira
function remove(carta){
    carta.classList.remove('virada');
    let imagemDaCarta = carta.children[0];
    imagemDaCarta.classList.remove('naovira');
}

// quando o contador de cartas viradas for par, duas opções
function verificarPar(){
    if (comparadorDesenhos[qtdeCartasViradas-1].innerHTML !== comparadorDesenhos[qtdeCartasViradas-2].innerHTML){
        comparadorDesenhos[qtdeCartasViradas-2].innerHTML = `<img class="frente" src="./imagens/front.png" alt="">`
        comparadorDesenhos[qtdeCartasViradas-1].innerHTML = `<img class="frente" src="./imagens/front.png" alt="">`
        viraDiferentes()
        setTimeout(removeClasse,501)
    } else{
        paresFormados ++;
    }
    setTimeout(ganhou,10)
}

function viraDiferentes(){
    virada(comparadorDesenhos[qtdeCartasViradas-2])
    virada(comparadorDesenhos[qtdeCartasViradas-1])
}
function remover(){
    remove(comparadorDesenhos[qtdeCartasViradas-1])
}

function removeClasse(){
    remove(comparadorDesenhos[qtdeCartasViradas-2])
    remove(comparadorDesenhos[qtdeCartasViradas-1])
}


function ganhou(){
    if (paresFormados ===  numero/2){
        alert(`Você ganhou em ${qtdeCartasViradas} jogadas!`)
    }
}