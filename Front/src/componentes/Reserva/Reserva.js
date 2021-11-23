import { sweetAlert } from "../../sweetAlert/SweetAlert";

const saberCamposVerdadero = (camposReserva) => {
	let mensaje = "EL CAMPO ";
	let saber = false;
	if (Object.keys(camposReserva).length !== 0) {
		if (camposReserva["nombres"]?.campoValido) {
			if (camposReserva["apellidos"]?.campoValido) {
				if (camposReserva["cedula"]?.campoValido) {
					if (camposReserva["correo"]?.campoValido) {
						if (camposReserva["telefono"]?.campoValido) {
							if (camposReserva["servicio"]?.campoValido) {
								if (camposReserva["cantidadPersonas"]?.campoValido) {
									if (camposReserva["fecha"]?.campoValido) {
										if (camposReserva["hora"]?.campoValido) {
											if (
												camposReserva["indicacionesEspeciales"]?.campoValido
											) {
												if (camposReserva["terminos"]?.name) {
													saber = true;
												} else {
													mensaje = mensaje + "TERMINOS";
												}
											} else {
												mensaje = mensaje + "INDICACIONES ESPECIALES";
											}
										} else {
											mensaje = mensaje + "HORA";
										}
									} else {
										mensaje = mensaje + "FECHA";
									}
								} else {
									mensaje = mensaje + "CANTIDAD DE PERSONAS";
								}
							} else {
								mensaje = mensaje + "SELECCIONE SERVICIO";
							}
						} else {
							mensaje = mensaje + "TELEFONO";
						}
					} else {
						mensaje = mensaje + "CORREO ELECTRONICO";
					}
				} else {
					mensaje = mensaje + "CEDULA";
				}
			} else {
				mensaje = mensaje + "APELLIDOS";
			}
		} else {
			mensaje = mensaje + "NOMBRES";
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
