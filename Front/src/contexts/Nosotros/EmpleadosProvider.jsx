import React, { useState } from "react";
import EmpleadosContext from "./EmpleadosContext";
// import DatosTrabajadores from "../../consts json/Nosotros/DatosTrabajadores.json";
<<<<<<< HEAD
// import { getEmpleados } from "../../services/EmpleadoService/Empleado";

const EmpleadosProvider = ({ children }) => {
	const getEmpleados = () => {
		fetch("http://localhost:15937/api/empleado")
			.then((response) => response.json())
			.then((data) => {
				console.log("data --- ", data);
			});
	};

	getEmpleados();
	const [modalTrabajadores, setModalTrabajadores] = useState();
=======
import { getEmpleados } from "../../services/EmpleadoService/ServiceEmpleado";
// import { getEmpleados } from "../../services/EmpleadoService/Empleado";

const EmpleadosProvider = ({ children }) => {
	const [modalTrabajadores, setModalTrabajadores] = useState(getEmpleados());
>>>>>>> bf22e368a2cd65ac45ebf038aa727a476c7ce510

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