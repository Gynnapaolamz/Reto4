import React from "react";
import { useState } from "react";
import { obtenerPlatillosLocalStorage } from "../../localStorage/LocalStorage";
import CarritoContext from "./CarritoContext";

const CarritoProvider = ({ children }) => {
	const [platillos, setPlatillos] = useState(
		obtenerPlatillosLocalStorage("platillos")
	);

	const handleRemoveItem = (id) => {
		const platillosTemp = [...platillos];
		platillosTemp.splice(id, 1);
		setPlatillos(platillosTemp);
	};

	const handleRemoveAllItems = () => {
		setPlatillos([]);
	};

	const data = {
		platillos,
		handleRemoveItem,
		handleRemoveAllItems,
	};

	return (
		<CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
	);
};

export default CarritoProvider;
