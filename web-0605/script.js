const compraInput = document.getElementById('compraInput');
const addCompraButton = document.getElementById('addcompra');
const listadecompras = document.getElementById('listadecompras');

addCompraButton.addEventListener('click', () => {
    const compraText = compraInput.value.trim();
    if (compraText === '') return;

    const compraItem = document.createElement('li');
    compraItem.textContent = compraText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remover';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => {
        listadecompras.removeChild(compraItem);
    });

    compraItem.addEventListener('click', () => {
        compraItem.classList.toggle('completed');
    });

    compraItem.appendChild(deleteButton);
    listadecompras.appendChild(compraItem);

    compraInput.value = '';
});