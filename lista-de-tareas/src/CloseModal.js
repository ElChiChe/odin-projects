const modal = document.querySelector(".modal");

const CloseModal = () => {
    let btnClose = document.querySelector(".modal .fa-x"); 
        btnClose.addEventListener("click", () => {
            modal.classList.remove("open-modal");
        });
}

export default CloseModal;