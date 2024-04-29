/*---------------------------------------------*\
* excel.js
* 	Interacciones:
* 	- Abrir el menú hamburguesa
* 	- Cerrar el menú hamburguesa
* 	- Abrir una lista con su botón correspondiente
* 	Estructura:
* 	- Constantes
* 	- Eventos
* 	- Bucles
*----------------------------------------------*/

// Elemento del icono del menú hamburguesa
const abrir = document.querySelector(".burger");
// Elemento de botón para cerrar el menú hamburguesa
const cerrar = document.querySelector(".cerrar");
// Elemento de la modal del menú hamburguesa
const menu = document.querySelector(".menu_hamburguesa");
// Selección de todos los botones que abren las listas de las Reglas
const botones = document.querySelectorAll("section button");
// Selección de todas las listas de las Reglas
const paneles = document.querySelectorAll(".reglas");
// Selección de elementos que contengan la clase "visible"
const visible = document.getElementsByClassName("visible");
// Arrey que abarca el cálculo de la altura de cada lista que forman las Reglas
const altura = [];

/**
 * Función que desplaza la modal a la izquierda
 */
abrir.addEventListener("click", () => {
	// Desplaza la modal a la izquierda
	menu.style.right = "0";
});

/**
 * Función que desplaza la modal a la derecha
 */
cerrar.addEventListener("click", () => {
	// Desplaza la modal a la derecha
	menu.style.right = "-200px";
});

/**
 * Bucle que abre y cierra una lista con su botón correspondiente
 */
for(let i = 0; i < botones.length; i++){
	// Calcula la altura de cada lista en píxeles
	altura.push(paneles[i].clientHeight + "px");
	// Programa la altura de todas las listas a 0px
	paneles[i].style.height = 0;
	/**
	 * Evento que abre y cierra cada lista con su botón correspondiente
	 */
	botones[i].addEventListener("click", () => {
		//si los paneles están abiertos, se cierran
		if(paneles[i].classList.contains("visible")){
			paneles[i].style.height = 0;
			paneles[i].classList.remove("visible");
		// si los paneles están cerrados, se abren
		}else{
			paneles[i].style.height = altura[i];
			paneles[i].classList.add("visible");
		}
	});
}