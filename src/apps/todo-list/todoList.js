const todoForm = document.getElementById("todo_form")
const taskInput = document.getElementById("task_input");
const taskList = document.getElementById("task_list");

function addTask(event) {
    event.preventDefault()
    const taskText = taskInput.value.trim()

    if(!taskText) return;

    const taskItem = document.createElement("li")
    const deleteButton =  document.createElement("button")
    const checkTask =  document.createElement("input")
    const spanText = document.createElement("span")
    checkTask.type = ("checkbox")
    deleteButton.classList.add("delete_button")
    deleteButton.textContent = ("Eliminar tarea de la lista")
    deleteButton.type = ("button")
    spanText.textContent = taskText
    taskItem.classList.add("task_item")
    taskList.appendChild(taskItem)
    taskItem.append(spanText)
    taskItem.appendChild(deleteButton)
    taskItem.prepend(checkTask);
    taskInput.value = ""

    checkTask.addEventListener("change", () => {
        spanText.classList.toggle("completed", checkTask.checked)

    })

    deleteButton.addEventListener("click", () => {
        taskItem.remove()
    })
    
}


todoForm.addEventListener("submit", addTask)
