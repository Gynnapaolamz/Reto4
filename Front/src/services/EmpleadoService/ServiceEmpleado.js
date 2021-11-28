import { sweetAlert } from "../../sweetAlert/SweetAlert";

const getEmpleados = (handleChangeModalTrabajadores) => {
	fetch("http://localhost:15937/api/empleado")
		.then((response) => response.json())
		.then((data) => {
			handleChangeModalTrabajadores(data);
		});
};

const deleteEmpleado = (
	modalTrabajadores,
	handleInputsModalTrabajadores,
	trabajador,
	handleChangeModalTrabajadores
) => {
	fetch("http://localhost:15937/api/empleado/" + trabajador.id, {
		method: "DELETE",
	})
		.then((response) => response.json())
		.then((data) => {
			handleChangeModalTrabajadores(
				modalTrabajadores.filter((trab) => trab.id !== trabajador.id)
			);

			handleInputsModalTrabajadores({
				id: "",
				nombre: "",
				ocupacion: "",
				imagen: "",
			});

			sweetAlert(
				"center",
				"success",
				"",
				"EL EMPLEADO FUE ELIMINADO CON ÉXITO",
				false,
				2500
			);
		})
		.catch((error) => {
			sweetAlert("center", "success", "", error, false, 2500);
		});
};

const postEmpleado = (
	modalTrabajadores,
	trabajador,
	handleChangeModalTrabajadores,
	inputsModalTrabajadores,
	handleInputsModalTrabajadores
) => {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(trabajador),
	};
	fetch("http://localhost:15937/api/empleado", requestOptions)
		.then((response) => response.json())
		.then((data) => {
			console.log("data -- ", data);
			handleChangeModalTrabajadores([
				...modalTrabajadores,
				inputsModalTrabajadores,
			]);
			handleInputsModalTrabajadores({
				id: "",
				nombre: "",
				ocupacion: "",
				imagen: "",
			});

			sweetAlert(
				"center",
				"success",
				"",
				"EL EMPLEADO SE CREO CON ÉXITO",
				false,
				2500
			);
		})
		.catch((error) => {
			sweetAlert("center", "error", "", error.toString(), false, 2500);
		});
};

const putEmpleado = (
	modalTrabajadores,
	trabajador,
	inputsModalTrabajadores,
	handleChangeModalTrabajadores,
	handleChangeFormEmpleado,
	handleInputsModalTrabajadores
) => {
	const requestOptions = {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(trabajador),
	};
	fetch(
		"http://localhost:15937/api/empleado/" + inputsModalTrabajadores.id,
		requestOptions
	)
		.then((response) => response.json())
		.then((data) => {
			const auxModalTrabajadores = modalTrabajadores.map((trab, index) => {
				if (inputsModalTrabajadores.id === trab.id) {
					return {
						...trab,
						...inputsModalTrabajadores,
					};
				}
				return trab;
			});

			handleChangeModalTrabajadores(auxModalTrabajadores);
			handleChangeFormEmpleado({
				formVisibility: false,
				nameAction: "CREAR",
			});
			handleInputsModalTrabajadores({
				id: "",
				nombre: "",
				ocupacion: "",
				imagen: "",
			});
			sweetAlert(
				"center",
				"success",
				"",
				"LOS CAMBIOS SE REALIZARON CON ÉXITO",
				false,
				2500
			);
		});
};

export { getEmpleados, postEmpleado, deleteEmpleado, putEmpleado };
