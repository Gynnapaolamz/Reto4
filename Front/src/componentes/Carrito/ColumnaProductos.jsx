import React from "react";
import CardsCarrito from "./CardsPlatillos";

const ColumnaProductos = () => {
	return (
		<>
			<div
				id="col-productos"
				className="col-lg-8 col-md-12 text-center"
				style={{ padding: "0%", margin: "0%" }}
			>
				{/*Contenedor de elementos del carrito*/}
				<div id="contenedor-productos" className="contenedor-productos">
					<CardsCarrito />
				</div>
			</div>
		</>
	);
};

export default ColumnaProductos;
