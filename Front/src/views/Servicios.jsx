import React from "react";
import CardServicio from "../componentes/Servicios/CardServicio";
import MainServicios from "../componentes/Servicios/MainServicios";
import "../componentes/Servicios/styles/estilos-servicios.css";

const Servicios = () => {
	return (
		<>
			<MainServicios>
				<CardServicio />
			</MainServicios>
		</>
	);
};

export default Servicios;
