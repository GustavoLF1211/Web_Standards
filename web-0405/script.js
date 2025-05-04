document.getElementById("changeText").addEventListener("click", function() {
    const textElement = document.getElementById("text");
    const buttonElement = document.getElementById("changeText");

    if (textElement.innerText === "Texto para ser mudado!") {
        textElement.style.opacity = 0; setTimeout(() => {
            textElement.innerText = "Texto já alterado!";
            textElement.style.opacity = 1;
            buttonElement.innerText = "Voltar ao original";
        } , 500);
        } else {
        textElement.style.opacity = 0; setTimeout(() => {
            textElement.innerText = "Texto para ser mudado!";
            textElement.style.opacity = 1;
            buttonElement.innerText = "Mudar texto";
        } , 500);
        }
    });
