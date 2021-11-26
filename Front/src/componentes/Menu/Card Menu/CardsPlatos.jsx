import React, { useContext } from "react";
import PlatoContext from "../../../contexts/Menu/PlatoContext";

import CardPlato from "./CardPlato";

const CardsPlatos = () => {
	const { datosMenu } = useContext(PlatoContext);
	return (
		<>
			<div className="row card-hijo">
				{datosMenu.map((plato, index) => {
					Object.assign(plato, { idPlato: index });
					return <CardPlato key={index} plato={plato} />;
				})}
			</div>
		</>
	);
};

export default CardsPlatos;
