import CreateTask from "./CreateTask";
import GetInfoStorage from "./GetInfoStorage";
import GetValueInputs from "./GetValueInputs";
import TasksButtons from "./TasksButtons";

const AddTask = () => {
    const btnAdd = document.querySelector(".modal .btn-add");
    const tasksContainerCards = document.querySelector(".tasks-container-cards");
    const importanceButtons = document.querySelectorAll(".importance-container button");
    let importanceValue = "";
    let taskId = [];

    importanceButtons.forEach(btn => {
        btn.addEventListener("click", e => {
            let value = e.target.textContent;
            importanceValue = value;

            if(importanceValue === "Not important") {
                importanceValue = "#afffff";
            }
            else if(importanceValue === "Important") {
                importanceValue = "yellow";

            }
            else if(importanceValue === "Very important") {
                importanceValue = "red";

            }
            // Cambiar el background del botón seleccionado
        })
    })

    btnAdd.addEventListener("click", () => {

        const selection = document.querySelector(".selection");
        let projectName = selection.options[selection.selectedIndex].text;

        let { title, category, date, description } = GetValueInputs();

        let taskId = parseInt(localStorage.getItem("taskId")) || 0;

        // if(title === "" || category === "" || date === "" || description === "") {
        //     console.log("completa los datos");
        //     return;
        // }


        let taskObj = {
            title,
            category,
            date,
            description,
            projectName,
            taskId
        };

        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        
        taskId++;
        localStorage.setItem("taskId", taskId);

        // Agrega la nueva tarea a la lista
        tasks.push(taskObj);

        // Guarda la lista actualizada en el almacenamiento local
        let taskCard = CreateTask(title, category, date, description, importanceValue, taskId)
        
        tasksContainerCards.appendChild(taskCard);
        TasksButtons(tasksContainerCards, taskCard);
        localStorage.setItem("tasks", JSON.stringify(tasks));


    })

}

export default AddTask;