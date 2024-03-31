import CloseModal from "./CloseModal";
import CreateTask from "./CreateTask";
import GetInfoStorage from "./GetInfoStorage";
import GetValueInputs from "./GetValueInputs";
import OpenModal from "./OpenModal";
import TasksButtons from "./TasksButtons";
let projects = [];

export const AddProject = () => {
    const btnProject = document.querySelector(".project-modal .btn-project");
    let projectId = parseInt(localStorage.getItem("projectId")) || 0;
    const tasksContainerCards = document.querySelector(".tasks-container-cards");

    btnProject.addEventListener("click", () => {
        const tasksContainerTitle = document.querySelector(".tasks-container h1");
        let projectInputValue = document.querySelector("#project-input-name").value;
        const projectList = document.querySelector(".project-list");
        const li = document.createElement("li");

        if(projectInputValue === "") {
            alert("El proyecto está vacío!");
            return;
        }

        li.classList.add("li-item");
        li.setAttribute("projectId", projectId);
        li.innerHTML = `<span>${projectInputValue} <span><i class="fas fa-x"></i></span></span>`
        projectList.appendChild(li);

        li.addEventListener("click", e => {
            const tasksContainerHeader = document.querySelector(".tasks-container-header");
            tasksContainerHeader.innerHTML = `
                <span>Tasks</span>
                <i class="fas fa-add add-task"></i>
            `
            const liValue = li.textContent;
            tasksContainerTitle.textContent = liValue;

            if(e.target.classList.contains("fa-x")) {
                projectList.removeChild(li);
                tasksContainerTitle.textContent = "Tasks";

                const projectId = parseInt(li.getAttribute("projectId"));
                let getProjectsFromStorage = JSON.parse(localStorage.getItem("projects"));
                getProjectsFromStorage = getProjectsFromStorage.filter(project => project.projectId !== projectId);
                let getTasksFromStorage = JSON.parse(localStorage.getItem("tasks"));
                getTasksFromStorage = getTasksFromStorage.filter(task => task.projectName !== projectInputValue);
                
                localStorage.setItem("projects", JSON.stringify(getProjectsFromStorage));
                localStorage.setItem("tasks", JSON.stringify(getTasksFromStorage));
            }
            
            Add();

            let getTasksFromStorage = JSON.parse(localStorage.getItem("tasks"));

            if(getTasksFromStorage) {
                tasksContainerCards.innerHTML = "";
                getTasksFromStorage.forEach(task => {
                    if(task.projectName === projectInputValue) {
                        let taskCard = CreateTask(task.title, task.category, task.date, task.description, task.projectName, task.taskId);
                        tasksContainerCards.appendChild(taskCard);
                        TasksButtons(tasksContainerCards, taskCard);

                        let getProjectsFromStorage = JSON.parse(localStorage.getItem("projects"));
                        if(getProjectsFromStorage.length <= 0) {
                            tasksContainerCards.removeChild(taskCard);
                        }
                    }
                })
            }


            let getProjectsFromStorage = JSON.parse(localStorage.getItem("projects"));
            let taskCard = document.querySelectorAll(".tasks-container-cards .tasks-card");
            if(e.target.classList.contains("fa-x")) {
                taskCard.forEach(item => {
                    tasksContainerCards.removeChild(item);
                })

                if(getProjectsFromStorage.length <= 0) {
                    tasksContainerHeader.innerHTML = `
                        <span>Tasks</span>
                        <p>Create a new project to add tasks!</p>
                    `
                }
            }
            
        })

        let projectObj = {
            projectName: projectInputValue,
            projectId: projectId
        };
        
        // projectsArr.push(projectObj);
        
        projects = JSON.parse(localStorage.getItem("projects")) || [];
        
        projectId++;
        // Agrega la nueva tarea a la lista
        projects.push(projectObj);

        // Guarda la lista actualizada en el almacenamiento local
        localStorage.setItem("projects", JSON.stringify(projects));
        
    })
}

export const Add = () => {
    const tasksContainerTitle = document.querySelector(".tasks-container h1");

    const btnAdd = document.querySelector(".tasks-container-header .add-task");
        btnAdd.addEventListener("click", () => {
            OpenModal();
            const selection = document.querySelector(".projects-selection .selection");
            const li = document.querySelectorAll(".project-list .li-item");
            for(let i = 0; i < projects.length; i++) {
                const option = document.createElement("option");
                option.textContent = projects[i].projectName;
                option.setAttribute("value", projects[i].projectName);
                selection.appendChild(option);
                
                li.forEach(item => {
                    item.addEventListener("click", e => {
                        option.selected = true;
                    })
                })
            }

            selection.addEventListener("change", () => {
                let projectName = selection.options[selection.selectedIndex].text;
                tasksContainerTitle.textContent = projectName;

                const tasksContainerCards = document.querySelector(".tasks-container-cards");
                let getTasksFromStorage = JSON.parse(localStorage.getItem("tasks"));

                if(getTasksFromStorage) {
                    tasksContainerCards.innerHTML = "";
                    getTasksFromStorage.forEach(task => {
                        if(task.projectName === projectName) {
                            let taskCard = CreateTask(task.title, task.category, task.date, task.description, task.projectName, task.taskId);
                            tasksContainerCards.appendChild(taskCard);
                            TasksButtons(tasksContainerCards, taskCard);
    
                            let getProjectsFromStorage = JSON.parse(localStorage.getItem("projects"));
                            if(getProjectsFromStorage.length <= 0) {
                                tasksContainerCards.removeChild(taskCard);
                            }
                        }
                    })
                }


            })

        })
}