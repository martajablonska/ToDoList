//Array with tasks

let tasks = [
    "Zadanie 3",
    "Zadanie 4",
    "Zadanie 5"
];

//

let tasksList = document.querySelector('.list_with_tasks');

//Add task

document.addEventListener('DOMContentLoaded', function () {
    showTasks();
});

function showTasks() {
   tasks.forEach(function(task) {
       addTask(task);
   }); 
};

function addTask(task) {
    let newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerHTML = prepareTask(task);
    tasksList.appendChild(newTask);
};

function prepareTask (task) {
    return '<div class="task_descrip">' +
                '<p class="task_date">Data</p>' +
                '<p class="task_text">'+task+'</p>' +
            '</div>' +    
            '<button type="button" class="btn btn_done"><i class="fas fa-check"></i></button>' +
            '<button type="button" class="btn btn_dlt"><i class="fas fa-times"></i></button>';
}
