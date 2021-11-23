import emailjs from "emailjs-com";
import { sweetAlert } from "../sweetAlert/SweetAlert";
import { removerItemLocalStorage } from "../localStorage/LocalStorage";

const sendMailReserva = (valido, reiniciarCampos, reiniciarCampoValido) => {
	const tempParams = {
		cc: valido["correo"].name,
		to_name: valido["nombres"].name + " " + valido["apellidos"].name,
		nombres: valido["nombres"].name,
		apellidos: valido["apellidos"].name,
		cedula: valido["cedula"].name,
		correo: valido["correo"].name,
		telefono: valido["telefono"].name,
		servicio: valido["servicio"].name,
		cantidadPersonas: valido["cantidadPersonas"].name,
		fecha: valido["fecha"].name,
		hora: valido["hora"].name,
		indicacionesEspeciales: valido["indicacionesEspeciales"].name,
		reply_to: "manuel231509@gmail.com",
		message:
			"SE REALIZO LA RESERVA PARA EL " +
			valido["fecha"].name +
			" A LA(S) " +
			valido["hora"].name,
		from_name: "SAL&SALSA - RESTAURANTE + RUMBA + EVENTO",
	};
	const serviceID = "service_exblhhd",
		templateID = "template_7y7270j",
		userID = "user_eopkpx9H2t1yut2zuHKue",
		messageSuccess = "EL CORREO FUE ENVIADO CON EXITO";
	sendMail(
		serviceID,
		templateID,
		tempParams,
		userID,
		messageSuccess,
		reiniciarCampos,
		reiniciarCampoValido
	);
};

const sendMail = async (
	serviceID,
	templateID,
	templateParams,
	userID,
	messageSuccess,
	reiniciarCampos,
	reiniciarCampoValido
) => {
	const res = await emailjs
		.send(serviceID, templateID, templateParams, userID)
		.then(
			(resul) => {
				sweetAlert("center", "success", "", messageSuccess, false, 2000);
				reiniciarCampos();
				reiniciarCampoValido();
			},
			(error) => {
				sweetAlert("center", "error", "", error.text, false, 9000);
			}
		);
	return res;
};

const sendMailCarrito = (
	campos,
	message,
	platillos,
	handleRemoveAllItems,
	initicializarInput
) => {
	console.log(campos);
	console.log(message);

	const tempParams = {
		to_name: campos.to_name,
		correo: campos.correo,
		message: message,
		cc: campos.correo,
		from_name: "SAL&SALSA - RESTAURANTE + RUMBA + EVENTO",
	};
	console.log(platillos);

	emailjs
		.send(
			"service_2sk9bcd",
			"template_1npjc4n",
			tempParams,
			"user_fQNx4MRlCaB3m9PGBDeOj"
		)
		.then((res) => {
			console.log("success", res.status);
			sweetAlert(
				"center",
				"success",
				"",
				"SE ENVIO EL CORREO CON EXITO",
				false,
				2000
			);
			removerItemLocalStorage("platillos");
			handleRemoveAllItems();
			initicializarInput();
		});
};

export { sendMailReserva, sendMailCarrito };
