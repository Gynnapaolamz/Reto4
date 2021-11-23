import { sweetAlert } from "../../sweetAlert/SweetAlert";

const saberCamposVerdadero = (camposReserva) => {
	let mensaje = "EL CAMPO ";
	let saber = false;
	if (Object.keys(camposReserva).length !== 0) {
		if (camposReserva["usuario"]?.campoValido) {
			if (camposReserva["password"]?.campoValido) {
				saber = true;
			} else {
				mensaje = mensaje + "PASSWORD";
			}
		} else {
			mensaje = mensaje + "USUARIO";
		}
		mensaje = mensaje + " NO ES VALIDO";
	} else {
		mensaje = "POR FAVOR VERIFIQUE QUE LOS CAMPOS ESTEN CORRECTOS";
	}
	if (!saber) {
		sweetAlert("center", "info", "", mensaje, false, 2000);
	}
	return saber;
};

export { saberCamposVerdadero };
