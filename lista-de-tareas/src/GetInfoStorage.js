import { Add } from "./AddProject";
import OpenModal from "./OpenModal";
import CreateTask from "./CreateTask";
import TasksButtons from "./TasksButtons";

const GetInfoStorage = () => {
    const tasksContainerTitle = document.querySelector(".tasks-container h1");
    let tasksContainerCards = document.querySelector(".tasks-container-cards");

    document.addEventListener("DOMContentLoaded", () => {
        let getProjectsFromStorage = JSON.parse(localStorage.getItem("projects"));
        let getTasksFromStorage = JSON.parse(localStorage.getItem("tasks"));

        if(getProjectsFromStorage) {
            const projectList = document.querySelector(".project-list");
            getProjectsFromStorage.forEach(value => {
                let li = document.createElement("li");
                li.classList.add("li-item");
                li.setAttribute("projectId", value.projectId)
                li.innerHTML = `<span>${value.projectName}</span> <i class="fas fa-x"></i>`;
                projectList.appendChild(li);

                
                li.addEventListener("click", e => {

                    tasksContainerTitle.textContent = e.target.textContent;

                    tasksContainerCards.innerHTML = "";
                    const tasksContainerHeader = document.querySelector(".tasks-container-header");
                    tasksContainerHeader.innerHTML = `
                        <span>Tasks</span>
                        <i class="fas fa-add add-task"></i>
                    `

                    if(e.target.classList.contains("fa-x")) {
                        tasksContainerTitle.textContent = "Tasks";
                        projectList.removeChild(li);
                        const projectId = parseInt(li.getAttribute("projectId"));
                        let getProjectsFromStorage = JSON.parse(localStorage.getItem("projects"));
                        getProjectsFromStorage = getProjectsFromStorage.filter(project => project.projectId !== projectId);
                        let getTasksFromStorage = JSON.parse(localStorage.getItem("tasks"));
                        getTasksFromStorage = getTasksFromStorage.filter(task => task.projectName !== value.projectName);

                        localStorage.setItem("projects", JSON.stringify(getProjectsFromStorage));
                        localStorage.setItem("tasks", JSON.stringify(getTasksFromStorage));

                        if(getProjectsFromStorage.length <= 0) {
                            tasksContainerHeader.innerHTML = `
                                <span>Tasks</span>
                                <p>Create a new project to add tasks!</p>
                            `
                            // localStorage.setItem("tasks", JSON.stringify(getTasksFromStorage));
                        }
                    }

                    if(getTasksFromStorage) {

                        getTasksFromStorage.forEach((task, i) => {
                            if(value.projectName === task.projectName) {
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

                        let taskCard = document.querySelectorAll(".tasks-container-cards .tasks-card");


                        //Esta función limpia todas las tareas del dom del proyecto eliminado :)
                        if(e.target.classList.contains("fa-x")) {
                            taskCard.forEach(item => {
                                tasksContainerCards.removeChild(item);
                            })
                        }

                    let getProjectsFromStorage = JSON.parse(localStorage.getItem("projects"));

                    if(getProjectsFromStorage.length > 0){

                        const btnAdd = document.querySelector(".tasks-container-header .add-task");
                        Add();
                        
                        btnAdd.addEventListener("click", () => {
                        const selection = document.querySelector(".projects-selection .selection");
                        getProjectsFromStorage.forEach(value => {
                            const option = document.createElement("option");
                            option.textContent = value.projectName;
                            option.setAttribute("value", value.projectName);
                            selection.appendChild(option);
                        })

                        
                        selection.addEventListener("change", () => {
                            let projectName = selection.options[selection.selectedIndex].text;
                        })
                    })
                }
                })
            })
        }
    })
}

export default GetInfoStorage;