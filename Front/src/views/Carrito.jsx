import React from "react";
import "../componentes/Carrito/styles/estilos-carrito.css";
import ExteriorCarrito from "../componentes/Carrito/ExteriorCarrito";
import CarritoProvider from "../contexts/Carrito/CarritoProvider";

const Carrito = () => {
	return (
		<>
			<CarritoProvider>
				<ExteriorCarrito />
			</CarritoProvider>
		</>
	);
};

export default Carrito;
