//Variables

const taskForm = document.querySelector('.task_to_post form');

let tasks = [
    "Zadanie 3",
    "Zadanie 4",
    "Zadanie 5"
];

let tasksList = document.querySelector('.list_with_tasks');

//Add task on list

document.addEventListener('DOMContentLoaded', function () {
    getTask();
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
    
    //Added 'done' class to task and delete task
    
    let btnDoneToggle = newTask.querySelector('.btn_done');
    let textDone = newTask.querySelector('.task_text');
    let btnDltToggle = newTask.querySelector('.btn_dlt');
    
    btnDoneToggle.addEventListener('click', function() {
        toggleTaskComplete(this);
    });

    btnDltToggle.addEventListener('click', function() {
        deleteTask(this);
    });
    
    tasksList.appendChild(newTask);
};

function prepareTask(task) {
    return '<div class="task_descrip">' +
                '<p class="task_date">Data</p>' +
                '<p class="task_text">'+task+'</p>' +
            '</div>' +    
            '<button type="button" class="btn btn_done"><i class="fas fa-check"></i></button>' +
            '<button type="button" class="btn btn_dlt"><i class="fas fa-times"></i></button>';
}

// Get task from form

function getTask() {
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let task = this.querySelector('input').value;
        
        if(task) {
           addTask(task); 
        };
    });
};

//Toggle with class 'done' task

/*function done() {
    let btnDone = document.querySelector(".btn_done");
    
    btnDone.addEventListener('click', function() {
        console.log(klik);
        //document.classList.toggle('btn_did');
    });
    
}*/

function toggleTaskComplete(task) {
    task.classList.toggle('btn_did');
};

function deleteTask(task) {
    
    let taskToDel = task.closest('.task');
    task.closest('.list_with_tasks').removeChild(taskToDel);
}

/*function toggleTextComplete(task) {
    task.classList.toggle('task_text_did');
};*/
