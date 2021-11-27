const getPlatos = () => {
	let platos = [];
	fetch("http://localhost:15937/api/plato")
		.then((response) => response.json())
		.then((data) => {
			platos = data;
		});
	return platos;
};

const deletePlato = (id) => {
	fetch("http://localhost:15937/api/plato/" + id, {
		method: "DELETE",
	})
		.then((response) => response.json())
		.then((data) => {
			alert("dato eliminado");
		});
};

export { getPlatos, deletePlato };
