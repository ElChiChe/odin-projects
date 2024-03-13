export const buttons = document.querySelectorAll(".header button");

//Cambiar estado del botón y selector para que cambie el estilo.

export const changeButtonSelection = button => {
    buttons.forEach(button => {
        button.classList.remove("active");
    })
    button.classList.add("active");
}