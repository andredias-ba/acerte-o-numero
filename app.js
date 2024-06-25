let nrAleatorio = gerarNrAteatorio();
// let nrAleatorio = 5;
let tentativas = 1;
exibirMensagemInicial()

//let titulo = document.querySelector('h1');
//titulo.innerHTML = "JOGO DO NÚMERO";

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "ESCOLHA O NÚMERO";

function reiniciarJogo(){
    nrAleatorio = gerarNrAteatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


function verificarChute(){
    
    //let nrAleatorio = 4;
    let nrDigitado = document.querySelector('input').value;

   // console.log('O botão foi clicado');
   // console.log(nrAleatorio == nrDigitado)
    if (nrAleatorio == nrDigitado) {
        mudarTextoTag('h1', 'ACERTOU');
        let textoTentativas = tentativas > 1 ? 'TENTATIVAS' : 'TENTATIVA';
        let mensagem = `VOCÊ ACERTOU O NÚMERO SORTEADO COM ${tentativas} ${textoTentativas}`
        mudarTextoTag('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
//        alert(`${nrAleatorio} é igual ao nr digitado ${nrDigitado}`);
    } else if(nrAleatorio > nrDigitado) {
        mudarTextoTag('p', 'O NÚMERO SORTEADO É MAIOR');
        limparCampo();
//      alert(`${nrAleatorio} é diferente do nr digitado ${nrDigitado}`);
    } else{
        mudarTextoTag('p', 'O NÚMERO SORTEADO É MENOR');
        limparCampo();
    }
    tentativas++;  
}

function mudarTextoTag(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    // comando para o texto ser falado
    // (texto que vc quer ser lido, tipo de voz, {velocidade da fala rate:1.0})
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.0});
}

function exibirMensagemInicial(){
    mudarTextoTag('h1', 'JOGO DO NÚMERO SECRETO');
    mudarTextoTag('p', 'ESCOLHA O NÚMERO SECRETO');
}

function gerarNrAteatorio(){
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    nrDigitado = document.querySelector('input');
    nrDigitado.value = '';
}


