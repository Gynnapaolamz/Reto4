const getEmpleados = () => {
	let empleados = [];
	fetch("http://localhost:15937/api/empleados")
		.then((response) => response.json())
		.then((data) => {
			empleados = data;
		});
	return empleados;
};

export default getEmpleados;
