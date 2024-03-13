import { changeButtonSelection } from "./Buttons";
import { buttons } from "./Buttons";
import { home } from "./Home";
import { showMenu } from "./showMenu";
import { showAboutUs } from "./aboutUs";
import { showSocialMedia } from "./showSocialMedia";

const content = document.querySelector("#content");

buttons.forEach(button => {
    button.addEventListener("click", e => {
        changeButtonSelection(e.target)
        changeSection(e.target.textContent);
    })
})

export const changeSection = button => {
    switch(button) {
        case "Menu":
            showMenu();
        break;
        case "About Us":
            showAboutUs();
        break;
        case "Social Media":
            showSocialMedia();
        break;

        case "Home":
            home();
        break;
    }
}

home();