const tasks = document.querySelectorAll(".task");
const allTasks = document.querySelector(".tasks");
const removeTask = document.querySelectorAll(".task-remove");
const newTask = document.querySelector("#new-task-input");
const newTaskDiv = document.querySelector(".new-task");
const addTask = document.querySelector(".add-task");

let tasksArray = [];



addTask.addEventListener("click", (e)=>{
   
    newTaskDiv.style.display = "block";
   
});

newTask.addEventListener("keyup", (e)=>{
    if (e.key === 'Enter' || e.keyCode === 13) {
        tasksArray.push(createTask(e.target.value));
        e.target.value ="";
        updateTasks();

    }
});

const createTask = (task) =>{
    const taskDiv = document.createElement("div");
    const taskContentDiv = document.createElement("div");
    taskContentDiv.classList.add("task-content");
    taskContentDiv.innerText = task;
    taskDiv.classList.add("task");
    taskDiv.innerHTML = `<div class="completed-radio"><input type="checkbox" name="" id=""></div>`;
    taskDiv.append(taskContentDiv);
    taskDiv.innerHTML += `<div class="task-remove"><i class="fa-solid fa-xmark"></i></div>`;
    newTaskDiv.style.display = "none";
    
    return taskDiv;
}

const updateTasks = ()=>{
    
        allTasks.innerHTML ="";
    
    tasksArray.forEach((task)=>{
        allTasks.append(task);
    });
    attachRemoveListeners();
}
const removeTaskFunc = (task)=>{
    
    tasksArray = tasksArray.filter( (val)=>{
        
        return val !== task
    });
    
    updateTasks();
}

const attachRemoveListeners = () => {
    const removeButtons = document.querySelectorAll(".task-remove");
    const taskCompleted = document.querySelectorAll(".completed-radio");

    removeButtons.forEach(button => {
        button.addEventListener("click", function () {
            
            const taskElement = this.closest(".task");
            
            // Remove task from array
            removeTaskFunc(taskElement);
        });
    });

    taskCompleted.forEach(com =>{
        
        com.addEventListener("click", (e)=>{
            
            const parentTask =  com.closest(".task");
            const taskContent = parentTask.querySelector(".task-content");
            taskContent.classList.add("completed");
        });
    });
}


