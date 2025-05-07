let listaDeNumerosSorteados = []
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextoInicial ();


function verificarChute() {

    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Vc acertou o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');




    }else{
         if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número é menor');
         }else{
            exibirTextoNaTela('p','O numero é maior');
         }
         tentativas++;
         limparCampo();
    }

}

function gerarNumeroAleatorio(){
   let NumeroEscolhido = parseInt(Math.random() * 10 + 1);
   let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosDaLista == 10 ){
        listaDeNumerosSorteados = [];

    }


   if(listaDeNumerosSorteados.includes(NumeroEscolhido)){
    return gerarNumeroAleatorio();
   }else{
    listaDeNumerosSorteados.push(NumeroEscolhido);
    return NumeroEscolhido;
   }
}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
    exibirTextoInicial ();
}
function exibirTextoInicial (){
    exibirTextoNaTela('h1','jogo do número secreto');
    exibirTextoNaTela('p','escolha um número entre 1 e 10' );
    document.getElementById('reiniciar').setAttribute('disabled',true)
}
