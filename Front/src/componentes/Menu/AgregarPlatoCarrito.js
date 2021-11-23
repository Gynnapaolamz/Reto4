import {
	sweetAlert,
	sweetAlertMenuAgregarCarrito,
} from "../../sweetAlert/SweetAlert";

const agregarPlatoCarrito = (plato, campoValido) => {
	if (campoValido) {
		sweetAlertMenuAgregarCarrito(
			"¿DESEAS AGREGAR EL PLATO AL CARRITO?",
			true,
			false,
			"SI",
			"NO",
			"SE AGREGO EL PLATO AL CARRITO CORRECTAMENTE...",
			"NO SE AGREGO EL PLATO AL CARRITO...",
			plato
		);
	} else {
		sweetAlert(
			"center",
			"error",
			"ERROR",
			"NO SE HA PDIDO AGREGAR, POR FAVOR VERIFICA LA CANTIDAD QUE SEA CORRECTA",
			false,
			2000
		);
	}
};

export { agregarPlatoCarrito };
