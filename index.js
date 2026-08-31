let task = 'Сделать домашнее задание'
let completedTaskCount = 0

// STEP 2

function showTask() {
    if (task === "") {
        console.log("Задача отсутствует")
    }
    else {
        console.log(task)
    }
}

// STEP 3

function setTask(taskDescription) {
    if (task !== "") {
        console.log("Не могу добавить задачу, завершите или удалите предыдущую")
    }
    
    else {
        task = taskDescription
    }
}

// STEP 4

function completeTask() {
    if (task === "") {
        console.log("Задача отсутствует")
    }
    else { 
        task = ""
        console.log("Кол-во выполненных задач: " + ++completedTaskCount)
    }
}

// STEP 5

function deleteTask() {
    if (task !== "") {
        task=""
    }
    else {
        console.log("Задача отсутствует")
    }
}

