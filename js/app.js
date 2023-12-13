function comprar() {
   let tipoIngresso = document.getElementById('tipo-ingresso').value;
   let quantidadeComprada =parseInt(document.getElementById('qtd').value)
  
   if (tipoIngresso =='pista') {
    comprarPista(quantidadeComprada); 
   } else if (tipoIngresso == 'superior') {
    comprarSuperior(quantidadeComprada);
   } else {
    comprarInferior(quantidadeComprada);
   }
}

function comprarPista(quantidadeComprada) {
    let quantidadeDisponivelPista =parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidadeComprada > quantidadeDisponivelPista.textContent){
        alert('quantidade indisponivel');
    } else {
        alert('compra aprovada');
        quantidadeDisponivelPista = quantidadeDisponivelPista - quantidadeComprada

        document.getElementById('qtd-pista').textContent= quantidadeDisponivelPista;
    }
}

function comprarSuperior(quantidadeComprada) {
    let quantidadeDisponivelSuperior =parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidadeComprada > quantidadeDisponivelSuperior.textContent){
        alert('quantidade indisponivel');
    } else {
        alert('compra aprovada');
        quantidadeDisponivelSuperior = quantidadeDisponivelSuperior - quantidadeComprada

        document.getElementById('qtd-superior').textContent= quantidadeDisponivelSuperior;
    }
}

function comprarInferior(quantidadeComprada) {
    let quantidadeDisponivelInferior =parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidadeComprada > quantidadeDisponivelInferior.textContent){
        alert('quantidade indisponivel');
    } else {
        alert('compra aprovada');
        quantidadeDisponivelInferior = quantidadeDisponivelInferior - quantidadeComprada

        document.getElementById('qtd-inferior').textContent= quantidadeDisponivelInferior;
    }
}