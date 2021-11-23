import React, { useState } from "react";
import ColPagarAhoraContext from "./ColPagarAhoraContext";

const ColPagarAhoraProvider = ({ children }) => {
	const [colPagarAhora, setColPagarAhora] = useState(null);
	const handleChangeColPagarAhora = (valor) => {
		setColPagarAhora(valor);
	};
	const data = { colPagarAhora, handleChangeColPagarAhora };
	return (
		<ColPagarAhoraContext.Provider value={data}>
			{children}
		</ColPagarAhoraContext.Provider>
	);
};

export default ColPagarAhoraProvider;
