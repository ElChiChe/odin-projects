import RemoveTask from "./TasksButtons";

const tasksContainerCards = document.querySelector(".tasks-container-cards");

const CreateTask = (title, category, date, description, importance, taskId) => {
    let taskCard = document.createElement("div");
    taskCard.classList.add("tasks-card");
    // taskCard.style.background = importance;
    taskCard.setAttribute("taskId",taskId)
    taskCard.innerHTML = `
        <div class="tasks-title">
            <i class="fa-solid fa-check"></i>
            <span class="task-title-span">${title}</span>
        </div>
        <div class="tasks-date">
            <span class="task-date-span">${date}</span>
        </div>
        <div class="tasks-category">
            <span class="task-category-span">${category}</span>
            <i title="Edit" class="fa-regular fa-pen-to-square btn-edit"></i>
            <i class="fa-solid fa-trash remove-task"></i>
        </div>
        <div hidden class="tasks-description">
            <span class="task-description-span">${description}</span>
            <div class="importance-div" style="background: ${importance}">
            </div>
        </div>
    `
    return taskCard;
}


export default CreateTask;