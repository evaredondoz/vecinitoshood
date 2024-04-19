const abrir = document.querySelector(".burger");
const cerrar = document.querySelector(".cerrar");
const menu = document.querySelector(".menu_hamburguesa");

abrir.addEventListener("click", () => {
	menu.style.right = "0";
});

cerrar.addEventListener("click", () => {
	menu.style.right = "-200px";
});