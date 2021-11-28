import React, { useState, useEffect } from "react";
import EmpleadosContext from "./EmpleadosContext";
import DatosTrabajadores from "../../consts json/Nosotros/DatosTrabajadores.json";
// import { getEmpleados } from "../../services/EmpleadoService/ServiceEmpleado";

const EmpleadosProvider = ({ children }) => {
	const [modalTrabajadores, setModalTrabajadores] = useState(DatosTrabajadores);

	// useEffect(() => {
	// 	getEmpleados(handleChangeModalTrabajadores);
	// }, []);
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
