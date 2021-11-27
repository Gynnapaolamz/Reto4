const getEmpleados = () => {
	let empleados = [];
	fetch("http://localhost:15937/api/empleado")
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
			empleados = data;
		});
	console.log("afuera empleado ", empleados);
	return empleados;
};

export { getEmpleados };
