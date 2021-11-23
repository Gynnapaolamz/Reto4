import {
	guardarSeleccionMenuLocalStorage,
	obtenerPlatillosLocalStorage,
} from "../localStorage/LocalStorage";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const sweetAlertMenuAgregarCarrito = (
	title,
	showDenyButton,
	showCancelButton,
	confirmButtonText,
	denyButtonText,
	mensajeSuccess,
	mensajeInfo,
	objeto
) => {
	MySwal.fire({
		icon: "question",
		title: title,
		showDenyButton: showDenyButton,
		showCancelButton: showCancelButton,
		confirmButtonText: confirmButtonText,
		denyButtonText: denyButtonText,
	}).then((result) => {
		if (result.isConfirmed) {
			if (guardarSeleccionMenuLocalStorage(objeto, "platillos")) {
				MySwal.fire({
					icon: "success",
					text: mensajeSuccess,
					showConfirmButton: false,
					timer: 2000,
				});
			} else {
				MySwal.fire({
					icon: "info",
					text:
						"EL PLATO SELECCIONADO, YA FUE AGREGADO AL CARRITO,\n" +
						"POR FAVOR REVISE EL CARRITO",
					showConfirmButton: false,
					timer: 2000,
				});
			}
		} else if (result.isDenied || result.isDismissed) {
			MySwal.fire({
				icon: "error",
				title: "CANCELADO",
				text: mensajeInfo,
				showConfirmButton: false,
				timer: 2000,
			});
		}
	});
};

const sweetAlertBtnEliminarPlatillo = (
	eliminarPlatilloByIdLocalStorage,
	handleRemoveItem,
	platillo,
	actualizarTotalCarrito,
	inputs,
	colPagarAhora
) => {
	MySwal.fire({
		icon: "question",
		title: "¿DESEAS ELIMINAR ESTE PLATO DEL CARRITO?",
		showDenyButton: true,
		showConfirmButton: false,
		showCancelButton: true,
		denyButtonText: `Eliminar`,
	}).then((result) => {
		if (result.isDenied) {
			console.log("inputs --- ", platillo);
			const nombreInput = `cantidad_${platillo.idPlato}`;

			const cantidad_input = inputs[nombreInput]?.valor;

			console.log("platillo.cantidad --- ", platillo.cantidad);
			const valorTotal = platillo.valor.split("$")[1] * cantidad_input;
			actualizarTotalCarrito((total) => total - valorTotal);
			handleRemoveItem(platillo.index);
			eliminarPlatilloByIdLocalStorage(platillo, "platillos");
			const platillos = obtenerPlatillosLocalStorage("platillos");
			if (platillos.length === 0) {
				colPagarAhora.classList.add("d-none");
			}
			MySwal.fire({
				icon: "success",
				title: "EL PLATO FUE ELIMINADO CON EXITO",
				showConfirmButton: false,
				timer: 1100,
			});
		} else {
			MySwal.fire({
				icon: "error",
				title: "EL PLATO NO FUE ELIMINADO",
				showConfirmButton: false,
				timer: 1100,
			});
		}
	});
};
const sweetAlertPreguntarCerrarSesion = (logout, objeto) => {
	MySwal.fire({
		icon: "question",
		title: "¿DESEAS CERRAR SESION?",
		showConfirmButton: true,
		showCancelButton: true,
		confirmButtonColor: "/* seagreen *//* steelblue */teal",
		confirmButtonText: "ACEPTAR",
		cancelButtonText: "CANCELAR",
	}).then((result) => {
		if (result.isConfirmed) {
			logout();
			objeto.li_CallComponentBool = false;
			MySwal.fire({
				icon: "success",
				title: "LA SESION FUE CERRADA CON EXITO",
				showConfirmButton: false,
				timer: 1800,
			});
		} else {
			MySwal.fire({
				icon: "error",
				title: "LA SESION NO FUE CERRADA",
				showConfirmButton: false,
				timer: 1800,
			});
		}
	});
};
const sweetAlertPreguntarCerrarSesion1 = (logout) => {
	MySwal.fire({
		icon: "question",
		title: "¿DESEAS CERRAR SESION?",
		showConfirmButton: true,
		showCancelButton: true,
		confirmButtonColor: "/* seagreen *//* steelblue */teal",
		confirmButtonText: "ACEPTAR",
		cancelButtonText: "CANCELAR",
	}).then((result) => {
		if (result.isConfirmed) {
			logout();
			MySwal.fire({
				icon: "success",
				title: "LA SESION FUE CERRADA CON EXITO",
				showConfirmButton: false,
				timer: 1800,
			});
		} else {
			MySwal.fire({
				icon: "error",
				title: "LA SESION NO FUE CERRADA",
				showConfirmButton: false,
				timer: 1800,
			});
		}
	});
};

const sweetAlert = (position, icon, title, text, showConfirmButton, timer) => {
	MySwal.fire({
		position: position,
		icon: icon,
		title: title,
		text: text,
		showConfirmButton: showConfirmButton,
		timer: timer,
	});
};

export {
	sweetAlertMenuAgregarCarrito,
	sweetAlert,
	sweetAlertBtnEliminarPlatillo,
	sweetAlertPreguntarCerrarSesion,
	sweetAlertPreguntarCerrarSesion1,
};
