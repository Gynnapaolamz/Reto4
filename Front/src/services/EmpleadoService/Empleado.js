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

export { getEmpleados };
