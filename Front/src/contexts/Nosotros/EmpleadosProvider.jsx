import React, { useState } from "react";
import EmpleadosContext from "./EmpleadosContext";
import DatosTrabajadores from "../../consts json/Nosotros/DatosTrabajadores.json";

const EmpleadosProvider = ({ children }) => {
	const [modalTrabajadores, setModalTrabajadores] = useState(DatosTrabajadores);

	const handleChangeModalTrabajadores = (valor) => {
		setModalTrabajadores(valor);
	};

	const data = {
		modalTrabajadores,
		handleChangeModalTrabajadores,
	};

	return (
		<EmpleadosContext.Provider value={data}>
			{children}
		</EmpleadosContext.Provider>
	);
};
export default EmpleadosProvider;
