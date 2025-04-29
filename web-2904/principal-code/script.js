const numerosElement = document.getElementsByClassName("numeros")[0];
const botoesNumeros = numerosElement.getElementsByTagName("button");
let valorAtual = "";
let valorAnterior = null;
let operador = null;

for (let botao of botoesNumeros) {
    botao.addEventListener("click", () => {
        const valor = botao.textContent;
        valorAtual += valor;
        console.log("Valor atual:", valorAtual);
        const display = document.querySelector(".display");
        if (display) {
            display.textContent = valorAtual;
        }
    });
}
const limparElement = document.getElementsByClassName("limpar")[0];
limparElement.addEventListener("click", () => {
    valorAtual = "";
    const display = document.querySelector(".display");
    if (display) {
        display.textContent = "0";
    }
});
