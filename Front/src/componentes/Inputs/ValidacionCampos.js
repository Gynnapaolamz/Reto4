const expresiones = {
	cantidad: new RegExp(/^[1-9]\d{0,2}$/),
	nombres: /^[a-zA-ZÀ-ÿ\s]{10,35}$/,
	apellidos: /^[a-zA-ZÀ-ÿ\s]{10,35}$/,
	cedula: /^[0-9]\d{0,9}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{1,20}$/,
	usuario: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{1,20}$/,
	telefono: /^[0-9]\d{0,9}$/,
	cantidadPersonas: /^[0-9]+$/,
	valorPlato: /^[1-9]\d{1,5}$/,
	indicacionesEspeciales: /^.{10,200}$/,
	password: /^.{5,35}$/,
};

const validarCampo = (nameExpresion, expresion, valor) => {
	let saber = false;
	let error = {
		error: false,
		error1: false,
	};

	if (nameExpresion !== "terminos") {
		if (valor !== "") {
			if (
				nameExpresion !== "servicio" &&
				nameExpresion !== "fecha" &&
				nameExpresion !== "hora" &&
				nameExpresion !== "nombrePlato" &&
				nameExpresion !== "imagenPlato" &&
				nameExpresion !== "descripcionPlato" &&
				nameExpresion !== "nombreServicio" &&
				nameExpresion !== "imagenServicio" &&
				nameExpresion !== "descripcionServicio"
			) {
				if (expresion.test(valor)) {
					saber = true;
					if (nameExpresion === "valorPlato" && valor >= 50) {
						saber = true;
					} else if (nameExpresion === "valorPlato" && valor < 50) {
						saber = false;
						error.error = true;
					}
				} else {
					saber = false;
					error.error = true;
				}
			} else {
				saber = true;
			}
		} else {
			saber = false;
			error.error1 = true;
		}
	} else {
		saber = true;
	}

	return { saber, error };
};

const validarFormulario = (nameExpresion, value) => {
	let valCampo = null;
	console.log("nameExpresion -- ", nameExpresion);
	switch (nameExpresion) {
		case "cantidad":
			valCampo = validarCampo(nameExpresion, expresiones.cantidad, value);
			break;
		case "nombres":
			valCampo = validarCampo(nameExpresion, expresiones.nombres, value);
			break;
		case "apellidos":
			valCampo = validarCampo(nameExpresion, expresiones.apellidos, value);
			break;
		case "cedula":
			valCampo = validarCampo(nameExpresion, expresiones.cedula, value);
			break;
		case "correo":
			valCampo = validarCampo(nameExpresion, expresiones.correo, value);
			break;
		case "usuario":
			valCampo = validarCampo(nameExpresion, expresiones.usuario, value);
			break;
		case "telefono":
			valCampo = validarCampo(nameExpresion, expresiones.telefono, value);
			break;
		case "servicio":
			valCampo = validarCampo(nameExpresion, "", value);
			break;
		case "cantidadPersonas":
			valCampo = validarCampo(
				nameExpresion,
				expresiones.cantidadPersonas,
				value
			);
			break;
		case "fecha":
			valCampo = validarCampo(nameExpresion, "", value);
			break;
		case "hora":
			valCampo = validarCampo(nameExpresion, "", value);
			break;
		case "indicacionesEspeciales":
			valCampo = validarCampo(
				nameExpresion,
				expresiones.indicacionesEspeciales,
				value
			);
			break;
		case "password":
			valCampo = validarCampo(nameExpresion, expresiones.password, value);
			break;
		case "terminos":
			valCampo = validarCampo(nameExpresion, "", value);
			break;
		case "nombrePlato":
			valCampo = validarCampo(nameExpresion, "", value);
			break;
		case "imagenPlato":
			valCampo = validarCampo(nameExpresion, "", value);
			break;
		case "valorPlato":
			valCampo = validarCampo(nameExpresion, expresiones.valorPlato, value);
			break;
		case "descripcionPlato":
			valCampo = validarCampo(nameExpresion, "", value);
			break;
		case "nombreServicio":
			valCampo = validarCampo(nameExpresion, "", value);
			break;
		case "imagenServicio":
			valCampo = validarCampo(nameExpresion, "", value);
			break;
		case "descripcionServicio":
			valCampo = validarCampo(nameExpresion, "", value);
			break;
		default:
			break;
	}

	return valCampo;
};

const handleInputsChange = (event, cargarCampos, campoValido) => {
	const { value, name } = event;

	const nameExpresion = name.split("_")[0];

	const valCampo = validarFormulario(nameExpresion, value);

	cargarCampos(value, name, valCampo.saber, valCampo.error);
	campoValido(value, nameExpresion, valCampo.saber);
};

export { handleInputsChange };
