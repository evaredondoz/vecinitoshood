const abrir = document.querySelector(".burger");
const cerrar = document.querySelector(".cerrar");
const menu = document.querySelector(".menu_hamburguesa");
const paneles = document.querySelectorAll(".panel");
const botones = document.querySelectorAll(".numeros button");

abrir.addEventListener("click", () => {
	menu.style.right = "0";
});

cerrar.addEventListener("click", () => {
	menu.style.right = "-200px";
});

for(let i = 0; i < botones.length; i++){
	botones[i].addEventListener("click", () => {
		for(let j = 0; j < botones.length; j++){
			botones[j].classList.remove("activo");
			paneles[j].classList.remove("visible");
		}
		botones[i].classList.add("activo");
		paneles[i].classList.add("visible");
	});
}