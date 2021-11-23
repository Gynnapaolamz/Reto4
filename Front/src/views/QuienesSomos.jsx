import React from "react";
import "../componentes/Nosotros/styles/estilos-nosotros.css";
import Trabajadores from "../componentes/Nosotros/Trabajadores";
import CarruselTestimonios from "../componentes/Nosotros/CarruselTestimonios";
import NuestraHistoria from "../componentes/Nosotros/NuestraHistoria";
import Comentarios from "../componentes/Comentarios/Comentarios";

const Nosotros = () => {
	return (
		<>
			<NuestraHistoria />
			<Trabajadores />
			<CarruselTestimonios />
			<Comentarios
				commentsUrl="http://localhost:3000/nosotros"
				currentUserId="1"
			/>
		</>
	);
};

export default Nosotros;
