const TasksButtons = (container, task) => {
    const projectList = document.querySelector(".project-list");
    
    task.addEventListener("click", e => {
        let getTasksFromStorage = JSON.parse(localStorage.getItem("tasks"));

        if(e.target.classList.contains("fa-check")) {
            task.classList.toggle("task-completed");
        }

        if(e.target.classList.contains("remove-task")) {
            container.removeChild(task);

            const taskId = parseInt(task.getAttribute("taskId"));

            getTasksFromStorage = getTasksFromStorage.filter(task => task.taskId !== taskId);
            localStorage.setItem("tasks", JSON.stringify(getTasksFromStorage));

        }

        if(e.target.classList.contains("btn-edit")) {
            e.target.classList.toggle("task-edit");
            let taskSpanTitle = task.childNodes[1].childNodes[3];
            let taskSpanCategory = task.childNodes[5].childNodes[1];
            let taskDescription = task.childNodes[7].childNodes[1];
            taskSpanTitle.classList.toggle("task-edit-element");
            taskSpanCategory.classList.toggle("task-edit-element");
            taskDescription.classList.toggle("task-edit-element");
            // // date.classList.toggle("task-edit-element");

            taskSpanTitle.removeAttribute("contentEditable");
            taskSpanCategory.removeAttribute("contentEditable");
            taskDescription.removeAttribute("contentEditable");

            if(e.target.classList.contains("task-edit")) {
                taskSpanTitle.setAttribute("contentEditable", true);
                taskSpanCategory.setAttribute("contentEditable", true);
                taskDescription.setAttribute("contentEditable", true);

            }
        }

        if(e.target.classList.contains("tasks-card")) {
            task.classList.toggle("show-description");
            const taskDescriptionSpan = task.childNodes[7].childNodes[1];
            const tasksDescription = task.childNodes[7];
            tasksDescription.classList.toggle("show-tasks-description");
            taskDescriptionSpan.classList.toggle("description-span");
        }
    })

    // projectList.addEventListener("click", e => {

    // })


}

export default TasksButtons;