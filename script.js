let vA = document.getElementById('valor-A');
let vB = document.getElementById('valor-B');
let fim = document.getElementById('fim');

function Finalizar() {

    let valorA = Number(vA.value);
    let valorB = Number(vB.value);
  
    if (valorA >= valorB) {
        window.alert('Erro. O campo B deve ser maior do que o campo A.');
    } else {
        window.alert('Obrigado por nos ajudar em nosso formulário.');
    }
}
