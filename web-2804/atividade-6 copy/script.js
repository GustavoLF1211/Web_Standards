let contador = 0;
let numerosorte = 0;

const contadorElement = document.getElementById('contador');
const adicionarElement = document.getElementById('adicionar');
const retirarElement = document.getElementById('retirar');
const zeroElement = document.getElementById('zero');

const numerosorteElement = document.getElementById('numerosorte');
const adicionarsorteElement = document.getElementById('adicionarsorte');
const retirarsorteElement = document.getElementById('retirarsorte');
const zerosorteElement = document.getElementById('zerosorte');

adicionarElement.addEventListener('click', () => {
    if(contador<10){
        contador++
    }
    if(numerosorte>4){
        contador++;
    }
    contadorElement.textContent = contador;
});

retirarElement.addEventListener('click', () => {
        contador--;
    contadorElement.textContent = contador;
});

zeroElement.addEventListener('click', () => {
        contador = 0;
    contadorElement.textContent = contador;
});

adicionarsorteElement.addEventListener('click', () => {
    if(numerosorte<10){
        numerosorte++;
    }
    numerosorteElement.textContent = numerosorte;
});

retirarsorteElement.addEventListener('click', () => {
        numerosorte--
    numerosorteElement.textContent = numerosorte;
});

zerosorteElement.addEventListener('click', () => {
    numerosorte = 0;
    numerosorteElement.textContent = numerosorte;
});