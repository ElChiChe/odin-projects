const GetValueInputs = (title, description, date, category, project) => {
    const inputs = document.querySelectorAll(".modal input");
    const textarea = document.querySelector(".modal textarea");
    // const options = document.querySelectorAll("option");

    let userInputsValue = {

        title: inputs[0].value,
        description: textarea.value,
        date: inputs[1].value,
        category: inputs[2].value,
    }

    return userInputsValue;
}

export default GetValueInputs;