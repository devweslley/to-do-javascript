// Adicionar tarefa
function addTask(){
    
// Titulo da tarefa
const taskTitle = document.querySelector('#task-title').value;

// Verificar se o campus de tarefa não está em branco
if(taskTitle.length == 0){
    alert('Adicione a tarefa para prosseguir!');
}

// Clonar o templete
if(taskTitle){
    const templete = document.querySelector('.templete');
    const newTask = templete.cloneNode(true);

// Adicionar titulo
newTask.querySelector('.task-title').textContent = taskTitle;

// Remover as classes
newTask.classList.remove('templete');
newTask.classList.remove('hide');

// Adicionar tarefa na lista
const list = document.querySelector('#task-list');
    list.appendChild(newTask);

// Remover a tarefa escolhida
const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function(){
    removeTask(this);
});

// Adicionar tarefa completada
const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function(){
    completeTask(this);
});

// Limpar o texto digitado no input 
document.querySelector('#task-title').value = '';

}
}

// Remover a tarefa escolhida
function removeTask(task){
    task.parentNode.remove(true);
}

// Adicionar tarefa completada
function completeTask(task){
    const taskComplete = task.parentNode;
    taskComplete.classList.toggle('done');
}

// Adicionar a tarefa
const addBtn = document.querySelector('#add-btn');
    addBtn.addEventListener('click', function(e){
    
    e.preventDefault();
    
    addTask();
})
