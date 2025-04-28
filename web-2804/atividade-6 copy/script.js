let contador = 0

    const contadorElement = document.getElementById('contador')
    const adicionarElement = document.getElementById('adicionar')
    const retirarElement = document.getElementById('retirar')
    const zeroElement = document.getElementById('zero')

        adicionarElement.addEventListener
            ('click', () =>
                {contador++
                    contadorElement.textContent = contador;
                });
        
        retirarElement.addEventListener
            ('click', () =>
                {contador--
                    contadorElement.textContent = contador;
                });

        zeroElement.addEventListener
            ('click', () =>
                {contador = 0
                    contadorElement.textContent = contador;
                });
