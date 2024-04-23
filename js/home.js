/*---------------------------------------------*\
* home.js
* 	Interacciones:
* 	- Abrir el menú hamburguesa
* 	- Cerrar el menú hamburguesa
* 	- Abrir un perfil con su botón correspondiente
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
const perfiles = document.querySelectorAll(".perfiles div");
// Selección de todo los botones que muestran los perfiles de Instagra
const botones = document.querySelectorAll(".perfiles button");

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
 * Bucle que abre los perfiles dependiendo del botón seleccionado
 */
botones.forEach((boton,i) => {
	/**
	 * Función que abre los perfiles con su botón correspondiente
	 */
	boton.addEventListener("click", () => {
		/**
		 * Bucle que cierra los perfiles no seleccionados
		 */
		for(j = 0; j < perfiles.length; j++){
			// Quita la clase visible de los perfiles no seleccionados
			perfiles[j].classList.remove("visible");
		}
		// Añade la lase visible en el perfil seleccionado
		perfiles[i].classList.add("visible");
	});
});