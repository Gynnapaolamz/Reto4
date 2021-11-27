<<<<<<< HEAD:Front/src/services/EmpleadoService/Empleado.js
import React from "react";

const Empleado = () => {
	const getEmpleados = () => {
		let empleados = [];
		fetch("http://localhost:15937/api/empleado")
			.then((response) => response.json())
			.then((data) => {
				empleados = data;
			});
		return empleados;
	};

	return <></>;
};

export default Empleado;

=======
const getEmpleados = () => {
	let empleados = [];
	fetch("http://localhost:15937/api/empleado")
		.then((response) => response.json())
		.then((data) => {
			empleados = data;
		});
	return empleados;
};

>>>>>>> bf22e368a2cd65ac45ebf038aa727a476c7ce510:Front/src/services/EmpleadoService/ServiceEmpleado.js
export { getEmpleados };
