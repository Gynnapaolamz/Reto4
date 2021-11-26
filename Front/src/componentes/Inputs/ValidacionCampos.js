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

const validarCampo = (expresion, valor) => {
	let saber = false;
	let error = {
		error: false,
		error1: false,
	};
	if (expresion !== "terminos") {
		if (valor !== "") {
			if (
				expresion !== "servicio" &&
				expresion !== "fecha" &&
				expresion !== "hora" &&
				expresion !== "nombrePlato" &&
				expresion !== "imagenPlato" &&
				expresion !== "descripcionPlato"
			) {
				if (expresion.test(valor)) {
					saber = true;
					if (valor >= 50) {
						saber = true;
					} else {
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
			valCampo = validarCampo(expresiones.cantidad, value);
			break;
		case "nombres":
			valCampo = validarCampo(expresiones.nombres, value);
			break;
		case "apellidos":
			valCampo = validarCampo(expresiones.apellidos, value);
			break;
		case "cedula":
			valCampo = validarCampo(expresiones.cedula, value);
			break;
		case "correo":
			valCampo = validarCampo(expresiones.correo, value);
			break;
		case "usuario":
			valCampo = validarCampo(expresiones.usuario, value);
			break;
		case "telefono":
			valCampo = validarCampo(expresiones.telefono, value);
			break;
		case "servicio":
			valCampo = validarCampo(nameExpresion, value);
			break;
		case "cantidadPersonas":
			valCampo = validarCampo(expresiones.cantidadPersonas, value);
			break;
		case "fecha":
			valCampo = validarCampo(nameExpresion, value);
			break;
		case "hora":
			valCampo = validarCampo(nameExpresion, value);
			break;
		case "indicacionesEspeciales":
			valCampo = validarCampo(expresiones.indicacionesEspeciales, value);
			break;
		case "password":
			valCampo = validarCampo(expresiones.password, value);
			break;
		case "terminos":
			valCampo = validarCampo(nameExpresion, value);
			break;
		case "nombrePlato":
			valCampo = validarCampo(nameExpresion, value);
			break;
		case "imagenPlato":
			valCampo = validarCampo(nameExpresion, value);
			break;
		case "valorPlato":
			valCampo = validarCampo(expresiones.valorPlato, value);
			break;
		case "descripcionPlato":
			valCampo = validarCampo(nameExpresion, value);
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
