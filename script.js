//Variables

const taskForm = document.querySelector('.task_to_post form');

let tasks = [
    "Kupić karmę dla lamy",
    "Zadzwonić do cioci Gieni",
    "Wymienić opony",
    "Napisać aplikacje To Do List"
];

let tasksList = document.querySelector('.list_with_tasks');

let dateNow = new Date;

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
    
    //Add date to task 
    
    let date = newTask.querySelector('.task_date');
    let weekDayNumb = dateNow.getDay();
    let weekDay='';
    
    switch(weekDayNumb) {
        case weekDayNumb = 0:
                weekDay = "Niedziela";
                break;
        case weekDayNumb = 1:
                weekDay = "Poniedziałek";
                break;
        case weekDayNumb = 2:
                weekDay =  "Wtorek";
                break;
        case weekDayNumb = 3:
                weekDay =  "Środa";
                break;
        case weekDayNumb = 4:
                weekDay =  "Czwartek";
                break;  
        case weekDayNumb = 5:
                weekDay =  "Piątek";
                break;   
        case weekDayNumb = 6:
                weekDay =  "Sobota";
                break;    
    }
            
    let day = dateNow.getDate();
    let monthNumb = dateNow.getMonth();
    let month = '';
    
    if (monthNumb.length > 1) {
        month=monthNumb;
    } else {
        month="0"+monthNumb;
    };    
    
    let year = dateNow.getFullYear();
    let dateAddTask = weekDay + ' ' + day + ' ' + month + ' ' + year;
    let taskDate = newTask.querySelector('.task_date');
    taskDate.innerHTML = dateAddTask;
    
    //Add listener to 'done' class and delete task
    
    let btnDoneToggle = newTask.querySelector('.btn_done');
    let btnDltToggle = newTask.querySelector('.btn_dlt');
    
    
    btnDoneToggle.addEventListener('click', function() {
        toggleTaskComplete(this);
    });

    btnDltToggle.addEventListener('click', function() {
        deleteTask(this);
    });
    
    //Added task to the end of list
    
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

//Function to change tasks class(done, delete)

function toggleTaskComplete(task) {
    task.classList.toggle('btn_did'); 
    let textDone = task.previousSibling;
    textDone.classList.toggle('task_done');
};

function deleteTask(task) {
    let taskToDel = task.closest('.task');
    task.closest('.list_with_tasks').removeChild(taskToDel);
};
