//ELEMENTOS DEL LIBRO
const librosContainer = document.querySelector(".libros-container");
const libroCard = document.querySelector(".libro");
const libroTitulo = document.querySelector(".libro-titulo");
const libroAutor = document.querySelector(".libro-autor");
const libroPaginas = document.querySelector(".libro-paginas");
const libroLeido = document.querySelector(".libro-leido");



//ELEMENTOS DEL FORMULARIO
const formulario = document.querySelector(".formulario");
const inputs = document.querySelectorAll(".formulario input");
const arrowDown = document.querySelector(".fa-arrow-down");
const btnAdd = document.querySelector(".btn-agregar");

const tituloInput = document.querySelector("#titulo");
const autorInput = document.querySelector("#autor");
const paginasInput = document.querySelector("#paginas");
const leidoInput = document.querySelector("#leido");


//ARREGLO DE LIBROS
const books = [];

//CLASE CONSTRUCTOR BOOKS PARA CREAR LIBROS
class Books {
	constructor(titulo, autor, paginas, leido) {
		this.titulo = titulo;
		this.autor = autor;
		this.paginas = paginas;
		this.leido = leido;
	}
}

class UI {

	closeForm(form) {
		form.classList.toggle("open");
	}

	getInputsValue(book) {

	let tituloValue = book.titulo;
	let autorValue = book.autor;
	const paginasValue = book.paginas;
	let leidoValue = book.leido;

	books.push(tituloValue, autorValue, paginasValue, leidoValue);
}

	addBook(book) {

		const card = document.createElement("div");
		card.classList.add("libro");
		card.innerHTML = `
			<p class="libro-titulo" title="${book.titulo}">${book.titulo}</p>
			<p class="libro-autor" title="${book.autor}">${book.autor}</p>
			<p class="libro-paginas">${book.paginas}</p>
			<p class="libro-leido">Leído <span class="fas fa-x"></span></p>
			<button class="btn-delete">Eliminar</button>
		`
		librosContainer.appendChild(card);

		let btnLeido = card.querySelector(".fa-x");
		btnLeido.addEventListener("click", () => {
			btnLeido.classList.toggle("fa-x");
			btnLeido.classList.toggle("fa-check");
		})
	}

	removeBook(bookContainer, child) {
		bookContainer.removeChild(child);
	}
}

//BOTON PARA AGREGAR NUEVOS LIBROS
formulario.addEventListener("submit", e => {
	e.preventDefault();

	let tituloValue = tituloInput.value;
	let autorValue = autorInput.value;
	let paginasValue = paginasInput.value;
	let leidoValue = false

	if(tituloValue.length > 20 || autorValue.length > 20) {
		tituloValue = tituloValue.slice(0, 18) + "...";
		autorValue = autorValue.slice(0, 18) + "...";
	}



	let book = new Books(tituloValue, autorValue, paginasValue);
	let ui = new UI();

	ui.getInputsValue(book);
	ui.addBook(book);

})

arrowDown.addEventListener("click", () => {
	const ui = new UI();

	ui.closeForm(formulario);
	arrowDown.classList.toggle("fa-arrow-up")
})


//CAPTURAR BOTON PARA ELIMINAR LIBRO
librosContainer.addEventListener("click", e => {
	if(e.target.classList.contains("btn-delete")) {
		let childs = librosContainer.childNodes;
		const ui = new UI();

		ui.removeBook(librosContainer, childs[1]);
	}
})