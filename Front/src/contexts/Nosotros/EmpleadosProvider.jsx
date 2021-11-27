import React, { useState, useEffect} from "react";
import EmpleadosContext from "./EmpleadosContext";
// import DatosTrabajadores from "../../consts json/Nosotros/DatosTrabajadores.json";
import { getEmpleados } from "../../services/EmpleadoService/ServiceEmpleado";
// import { getEmpleados } from "../../services/EmpleadoService/Empleado";

const EmpleadosProvider = ({ children }) => {
	const [modalTrabajadores, setModalTrabajadores] = useState([]);
	
	useEffect(() => {
		fetch("http://localhost:15937/api/empleado")
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				setModalTrabajadores(data);
			});
	},[])
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