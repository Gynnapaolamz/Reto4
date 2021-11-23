const saberPlatilloExistente = (platilloLS, platillo) => {
	return platilloLS.idPlato === platillo.idPlato ? true : false;
};

const leerLocalStorage = (platilloLS, platillo) => {
	let saber = platilloLS.some((platilloLS) => {
		return saberPlatilloExistente(platilloLS, platillo);
	});
	return saber;
};

const obtenerPlatillosLocalStorage = (nameItem) => {
	let platilloLS;
	if (localStorage.getItem(nameItem) === null) {
		platilloLS = [];
	} else {
		platilloLS = JSON.parse(localStorage.getItem(nameItem));
	}
	return platilloLS;
};

const guardarSeleccionMenuLocalStorage = (platillo, nameItem) => {
	let platilloLS = obtenerPlatillosLocalStorage(nameItem);
	if (!leerLocalStorage(platilloLS, platillo)) {
		platilloLS.push(platillo);
		localStorage.setItem(nameItem, JSON.stringify(platilloLS));
		return true;
	} else {
		return false;
	}
};

const modificarCantidadPlatilloByIdlocalStorage = (idPlatillo, cantidad, nameItem) => {
	let platilloLS = obtenerPlatillosLocalStorage(nameItem);

	let platillo = platilloLS.find((platillo) => {
		return platillo.idPlato === idPlatillo;
	});

	platillo.cantidad = cantidad;

	localStorage.setItem("platillos", JSON.stringify(platilloLS));
};

const eliminarPlatilloByIdLocalStorage = (platillo, nameItem) => {
	let platilloLS = obtenerPlatillosLocalStorage(nameItem);

	platilloLS.forEach((platillos, index) => {
		if (saberPlatilloExistente(platillos, platillo)) {
			platilloLS.splice(index, 1);
		}
	});
	localStorage.setItem(nameItem, JSON.stringify(platilloLS));
};

const removerItemLocalStorage = (nameItem) => {
	localStorage.removeItem(nameItem);
};

const vaciarLocalStorage = () => {
	localStorage.clear();
};

export {
	guardarSeleccionMenuLocalStorage,
	obtenerPlatillosLocalStorage,
	leerLocalStorage,
	saberPlatilloExistente,
	modificarCantidadPlatilloByIdlocalStorage,
	eliminarPlatilloByIdLocalStorage,
	removerItemLocalStorage,
	vaciarLocalStorage,
};
