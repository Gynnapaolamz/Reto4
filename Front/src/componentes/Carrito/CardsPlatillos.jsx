import React, { useContext } from "react";
import CarritoContext from "../../contexts/Carrito/CarritoContext";
import CardPlatillo from "./CardPlatillo";

const CardsPlatillos = () => {
	const { platillos } = useContext(CarritoContext);
	if (platillos.length !== 0) {
		return (
			<>
				{platillos.map((platillo, index) => {
					Object.assign(platillo, { index: index });
					return <CardPlatillo key={platillo.idPlato} platillo={platillo} />;
				})}
			</>
		);
	}
	return null;
};

export default CardsPlatillos;
