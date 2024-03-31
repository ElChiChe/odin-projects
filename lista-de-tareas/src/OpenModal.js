const btnAdd = document.querySelector(".tasks-container-header .add-task");
const btnFolder = document.querySelector(".project-list-header .fa-folder");
const modal = document.querySelector(".modal");
import CloseModal from "./CloseModal";
import AddTask from "./AddTask";
import GetValueInputs from "./GetValueInputs";
import "./styles/projectModal.css";
import { AddProject } from "./AddProject";

const OpenModal = select => {
        modal.classList.add("open-modal");
        modal.innerHTML = `
        <div class="modal-container">
                <i class="fas fa-x"></i>
                    <div class="inputs-container">
                        <label for="title-input">Task</label>
                        <input id="title-input" required type="text" placeholder="Task..." />
                    </div>
    
                    <div class="inputs-container">
                        <label for="duedate-input">Date</label>
                        <input type="date" required id="duedate-input" />
                    </div>
    
                    <div class="inputs-container">
                        <label for="description-input">Description</label>
                        <textarea id="description-input"></textarea>
                    </div>
    
                    <div class="inputs-container">
                        <label for="category-input">Category</label>
                        <input id="category-input" type="text" placeholder="category" />
                    </div>
    
                    <div class="inputs-container">
                        <div class="importance-container">
                            <button class="not-important">Not important</button>
                            <button class="important">Important</button>
                            <button class="very-important">Very important</button>
                        </div>
                    </div>
    
                    <div class="projects-selection">
                        <select class="selection">
                        </select>
                    </div>
    
                    <button class="btn-add">Add</button>
                </div>`
    
                
                AddTask();
                CloseModal();
}

const OpenModalProject = () => {
    btnFolder.addEventListener("click", () => {
        modal.classList.add("open-modal");
        modal.innerHTML = `
            <div class="project-modal">
            <i class="fas fa-x"></i>
                <div class="project-input-container">
                    <label for="project-input-name">Project</label>
                    <input id="project-input-name" type="text" placeholder="Create a new project..." />
                </div>
                <button class="btn-project">Create project</button>
            </div>
        `
    AddProject();
    CloseModal();
    }) 
}

OpenModalProject();

export default OpenModal;