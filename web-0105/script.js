const tarefaInput = document.getElementById('tarefaInput');
const addTaskButton = document.getElementById('addtarefa');
const listadetarefas = document.getElementById('listadetarefas');

addTaskButton.addEventListener('click', () => {
    const taskText = tarefaInput.value.trim();
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remover';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => {
        listadetarefas.removeChild(taskItem);
    });

    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    taskItem.appendChild(deleteButton);
    listadetarefas.appendChild(taskItem);

    tarefaInput.value = '';
});