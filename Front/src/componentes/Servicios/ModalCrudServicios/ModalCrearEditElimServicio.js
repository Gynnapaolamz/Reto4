import { sweetAlert } from "../../../sweetAlert/SweetAlert";

const saberCamposVerdadero = (camposReserva) => {
	let mensaje = "EL CAMPO ";
	let saber = false;
	if (Object.keys(camposReserva).length !== 0) {
		console.log("camposReserva --- ", camposReserva);
		if (camposReserva["nombreServicio"]?.campoValido) {
			if (camposReserva["imagenServicio"]?.campoValido) {
				if (camposReserva["descripcionServicio"]?.campoValido) {
					saber = true;
				} else {
					mensaje = mensaje + "DESCRIPCION DEL SERVICIO";
				}
			} else {
				mensaje = mensaje + "IMAGEN DEL SERVICIO";
			}
		} else {
			mensaje = mensaje + "NOMBRE DEL SERVICIO";
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
