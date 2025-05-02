document.getElementById('verificar').addEventListener('click', function() {
    const numero = parseInt(document.getElementById('numeroCliente').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(numero)) {
        resultado.textContent = "Por favor, insira um número válido.";
        return;
    }

    if (numero % 2 === 0) {
        resultado.textContent = "O número " + numero + " é par.";
    } else {
        resultado.textContent = "O número " + numero + " é ímpar.";
    }
});