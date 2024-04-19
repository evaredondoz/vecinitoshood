const perfiles = document.querySelectorAll(".perfiles div");
const botones = document.querySelectorAll(".perfiles button");
const abrir = document.querySelector(".burger");
const cerrar = document.querySelector(".cerrar");
const menu = document.querySelector(".menu_hamburguesa");

botones.forEach((boton,i) => {
	boton.addEventListener("click", () => {
		for(j = 0; j < perfiles.length; j++){
			perfiles[j].classList.remove("visible");
		}
		perfiles[i].classList.add("visible");
	});
});

abrir.addEventListener("click", () => {
	menu.style.right = "0";
});

cerrar.addEventListener("click", () => {
	menu.style.right = "-200px";
});