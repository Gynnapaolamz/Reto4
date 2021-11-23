import { modificarCantidadPlatilloByIdlocalStorage } from "../../../localStorage/LocalStorage";

const minus = (
	plato,
	inputs,
	cargarCampos,
	actualizarTotalCarrito,
	nameComponente
) => {
	const nombreInput = `cantidad_${plato.idPlato}`;

	const cantidad_input = inputs[nombreInput]?.valor;
	console.log("cantidad_input -- ", cantidad_input);
	
	if (cantidad_input !== "undefined") {
		if (cantidad_input !== "") {
			const rest = parseInt(cantidad_input) - 1;
			console.log("rest -- ", rest);
			if (rest >= 1) {
				cargarCampos(rest, nombreInput, true, {
					error: false,
					error1: false,
				});
				if (nameComponente === "Carrito") {
					modificarCantidadPlatilloByIdlocalStorage(
						plato.idPlato,
						rest,
						"platillos"
					);
					actualizarTotalCarrito((total) => total - plato.valor.split("$")[1]);
				}
			}
		}
	} else {
		cargarCampos(1, nombreInput, true, {
			error: false,
			error1: false,
		});
	}
};
const plus = (
	plato,
	inputs,
	cargarInputs,
	actualizarTotalCarrito,
	nameComponente
) => {
	const nombreInput = `cantidad_${plato.idPlato}`;
	const cantidad_input = inputs[nombreInput]?.valor;

	if (cantidad_input !== undefined) {
		if (cantidad_input !== "") {
			const suma = parseInt(cantidad_input) + 1;
			if (suma >= 1) {
				cargarInputs(suma, nombreInput, true, {
					error: false,
					error1: false,
				});
				if (nameComponente === "Carrito") {
					modificarCantidadPlatilloByIdlocalStorage(
						plato.idPlato,
						suma,
						"platillos"
					);

					actualizarTotalCarrito(
						(total) => total + parseInt(plato.valor.split("$")[1])
					);
				}
			}
		} else {
			cargarInputs(1, nombreInput, true, {
				error: false,
				error1: false,
			});
		}
	} else {
		cargarInputs(1, nombreInput, true, {
			error: false,
			error1: false,
		});
	}
};

export { minus, plus };
