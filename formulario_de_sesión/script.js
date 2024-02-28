const contraseña_input = document.querySelector("#contraseña");
const confirmar_contraseña_input = document.querySelector("#confirmar-contraseña");
const btn_enviar = document.querySelector(".btn-enviar");
const valor_contraseña = [];

btn_enviar.addEventListener("click", () => {
	let valor_contraseña = contraseña_input.value;
	let valor_confirmar_contraseña = confirmar_contraseña_input.value;

	if(valor_contraseña !== valor_confirmar_contraseña || valor_confirmar_contraseña !== valor_contraseña) {
		alert("La contraseña no coincide");
		alert("Verifica la contraseña");
		contraseña_input.classList.add("error");
		confirmar_contraseña_input.classList.add("error");
	}
	else {
		confirmar_contraseña_input.classList.remove("error");
		contraseña_input.classList.remove("error");
	}

})