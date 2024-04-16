const perfiles = document.querySelectorAll(".perfiles div");
const botones = document.querySelectorAll(".perfiles button");

botones.forEach((boton,i) => {
	boton.addEventListener("click", () => {
		for(j = 0; j < perfiles.length; j++){
			perfiles[j].classList.remove("visible");
		}
		perfiles[i].classList.add("visible");
	});
});