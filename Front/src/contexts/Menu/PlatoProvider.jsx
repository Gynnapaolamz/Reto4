import React, { useState } from "react";
import initialPlatos from "../../consts json/Menu/listadoMenu.json";
import PlatoContext from "./PlatoContext";

const PlatoProvider = ({ children }) => {
	const [platoSeleccionado, setPlatoSeleccionado] = useState(null);

	const selectedDish = (plato) => {
		setPlatoSeleccionado(plato);
	};

	const data = {
		listMenu: initialPlatos,
		platoSeleccionado,
		selectedDish,
	};

	return <PlatoContext.Provider value={data}>{children}</PlatoContext.Provider>;
};

export default PlatoProvider;
