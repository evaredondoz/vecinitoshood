const abrir = document.querySelector(".burger");
const cerrar = document.querySelector(".cerrar");
const menu = document.querySelector(".menu_hamburguesa");
const botones = document.querySelectorAll("section button");
const paneles = document.querySelectorAll(".reglas");
const visible = document.getElementsByClassName("visible");
const altura = [];


abrir.addEventListener("click", () => {
	menu.style.right = "0";
});

cerrar.addEventListener("click", () => {
	menu.style.right = "-200px";
});

for(let i = 0; i < botones.length; i++){
	altura.push(paneles[i].clientHeight + "px");
	paneles[i].style.height = 0;
	botones[i].addEventListener("click", () => {
		if(paneles[i].classList.contains("visible")){
			paneles[i].style.height = 0;
			paneles[i].classList.remove("visible");
		}else{
			paneles[i].style.height = altura[i];
			paneles[i].classList.add("visible");
		}
	});
}