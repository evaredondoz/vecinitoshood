/*---------------------------------------------*\
* neokyo.js
* 	Interacciones:
* 	- Abrir el menú hamburguesa
* 	- Cerrar el menú hamburguesa
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
// Selección de todos los perfiles de Instagram

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