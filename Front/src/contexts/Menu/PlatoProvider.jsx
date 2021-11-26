import React, { useState } from "react";
import initialPlatos from "../../consts json/Menu/listadoMenu.json";
import PlatoContext from "./PlatoContext";

const PlatoProvider = ({ children }) => {
	const [datosMenu, setDatosMenu] = useState(initialPlatos);
	const initialStatePlatoSeleccionado = {
		nameCompSelc: "",
		plato: null,
	};
	const [platoSeleccionado, setPlatoSeleccionado] = useState(
		initialStatePlatoSeleccionado
	);

	const initialStateFormularioOcultoEditCrear = {
		formularioOculto: false,
		formularioEditCrear: "CREAR",
	};
	const [formularioOcultoEditCrear, setFormularioOcultoEditCrear] = useState(
		initialStateFormularioOcultoEditCrear
	);

	const handleChangeDatosMenu = (valor) => {
		setDatosMenu(valor);
	};

	const selectedDish = (plato) => {
		setPlatoSeleccionado(plato);
	};

	const handleFormularioOcultoEditCrear = (valor) => {
		setFormularioOcultoEditCrear(valor);
	};

	const data = {
		datosMenu,
		handleChangeDatosMenu,
		platoSeleccionado,
		selectedDish,
		formularioOcultoEditCrear,
		handleFormularioOcultoEditCrear,
	};

	return <PlatoContext.Provider value={data}>{children}</PlatoContext.Provider>;
};

export default PlatoProvider;
