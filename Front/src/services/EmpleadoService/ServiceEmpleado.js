import { sweetAlert } from "../../sweetAlert/SweetAlert";

// OPTENER EMPLEADOS

const getEmpleados = (handleChangeModalTrabajadores) => {
	fetch("http://localhost:15937/api/empleado")
		.then(async (response) => {
			const isJson = response.headers
				.get("content-type")
				?.includes("application/json");
			const data = isJson && (await response.json());

			// check for error response
			if (!response.ok) {
				// get error message from body or default to response status
				const error = (data && data.message) || response.status;
				return Promise.reject(error);
			} else {
				handleChangeModalTrabajadores(data);
			}
		})
		.catch((error) => {
			handleChangeModalTrabajadores([]);
			sweetAlert(
				"center",
				"success",
				"",
				error.toString().toUpperCase(),
				false,
				2500
			);
		});
};

// CREAR UN EMPLEADO

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
		.then(async (response) => {
			const isJson = response.headers
				.get("content-type")
				?.includes("application/json");
			const data = isJson && (await response.json());

			// check for error response
			if (!response.ok) {
				// get error message from body or default to response status
				const error = (data && data.message) || response.status;
				return Promise.reject(error);
			} else {
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
			}
		})
		.catch((error) => {
			sweetAlert(
				"center",
				"success",
				"",
				error.toString().toUpperCase(),
				false,
				2500
			);
		});
};

//ACTUALIZAR UN EMPLEADO

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
		.then(async (response) => {
			const isJson = response.headers
				.get("content-type")
				?.includes("application/json");
			const data = isJson && (await response.json());

			// check for error response
			if (!response.ok) {
				// get error message from body or default to response status
				const error = (data && data.message) || response.status;
				return Promise.reject(error);
			} else {
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
			}
		})
		.catch((error) => {
			sweetAlert(
				"center",
				"success",
				"",
				error.toString().toUpperCase(),
				false,
				2500
			);
		});
};

// ELIMINAR UN EMPLEADO

const deleteEmpleado = (
	modalTrabajadores,
	handleInputsModalTrabajadores,
	trabajador,
	handleChangeModalTrabajadores,
	handleChangeFormEmpleado
) => {
	fetch("http://localhost:15937/api/empleado/" + trabajador.id, {
		method: "DELETE",
	})
		.then(async (response) => {
			const isJson = response.headers
				.get("content-type")
				?.includes("application/json");
			const data = isJson && (await response.json());

			// check for error response
			if (!response.ok) {
				// get error message from body or default to response status
				const error = (data && data.message) || response.status;
				return Promise.reject(error);
			} else {
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

				handleChangeFormEmpleado({
					formVisibility: false,
					nameAction: "CREAR",
				});
			}
		})
		.catch((error) => {
			sweetAlert(
				"center",
				"success",
				"",
				error.toString().toUpperCase(),
				false,
				2500
			);
		});
};

export { getEmpleados, postEmpleado, deleteEmpleado, putEmpleado };
