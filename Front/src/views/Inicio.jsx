import React from "react";
import "../componentes/Inicio/styles/estilos-inicio.css";
import Carrusel from "../componentes/Inicio/Carrusel";
import Principal from "../componentes/Inicio/Principal";
import Destacados from "../componentes/Inicio/Destacados";
import Servicios from "../componentes/Inicio/Servicios";
import Testimonios from "../componentes/Inicio/Testimonios";

const Inicio = () => {
	return (
		<>
			<div id="inicio">
				<Carrusel />
				<Principal />
				<Destacados />
				<Servicios />
				<Testimonios />
			</div>
		</>
	);
};
export default Inicio;
