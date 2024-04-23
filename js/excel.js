/*---------------------------------------------*\
* excel.js
* 	Interacciones:
* 	- Abrir el menú hamburguesa
* 	- Cerrar el menú hamburguesa
* 	- Abrir una explicación con su botón correspondiente
* 	Estructura:
* 	- Constantes
* 	- Eventos
*----------------------------------------------*/

// Elemento del icono del menú hamburguesa
const abrir = document.querySelector(".burger");
// Elemento de botón para cerrar el menú hamburguesa
const cerrar = document.querySelector(".cerrar");
// Elemento de la modal del menú hamburguesa
const menu = document.querySelector(".menu_hamburguesa");
// Selección de todas las explicaciones del Excel
const paneles = document.querySelectorAll(".panel");
// Selección de todos los botones que abren las explicaciones del Excel
const botones = document.querySelectorAll(".numeros button");

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
 * Bucle que abre una explicación con su botón correspondiente
 */
for(let i = 0; i < botones.length; i++){
	/**
	 * Función que muestra la explicación
	 */
	botones[i].addEventListener("click", () => {
		/**
		 * Bucle que esconde las explicaciones que no están activas
		 */
		for(let j = 0; j < botones.length; j++){
			// Quita la clase activo y visible del resto de otones y explicaciones
			botones[j].classList.remove("activo");
			paneles[j].classList.remove("visible");
		}
		// Añade la clase activo y visible a la explicación y botón seleccionado.
		botones[i].classList.add("activo");
		paneles[i].classList.add("visible");
	});
}