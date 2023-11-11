const listbutton = document.querySelector("#list");
const gridbutton = document.querySelector("#grid");
const display = document.querySelector("article");


listbutton.addEventListener("click", () => {
	display.classList.add("directory-list");
	display.classList.remove("directory-grid");
});

gridbutton.addEventListener("click", () => {
	display.classList.add("directory-grid");
	display.classList.remove("directory-list");
});