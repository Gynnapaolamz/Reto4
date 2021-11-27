import React, { useEffect, useState } from "react";
import EmpleadosContext from "./EmpleadosContext";
import DatosTrabajadores from "../../consts json/Nosotros/DatosTrabajadores.json";
// import { getEmpleados } from "../../services/EmpleadoService/Empleado";

const EmpleadosProvider = ({ children }) => {
	useEffect(() => {
		fetch("http://localhost:15937/api/empleado", {
			mode: "cors",
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

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
