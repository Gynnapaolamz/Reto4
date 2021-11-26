import React, { useState } from "react";
import InputsContext from "./InputsContext";

const InputsProvider = ({ children }) => {
	const [inputs, setInputs] = useState({});

	const cargarCampos = (valor, name, validacionCampo, error) => {
		console.log("name -- - ", name);
		setInputs({
			...inputs,
			[name]: {
				valor: valor,
				campoValido: validacionCampo,
				error: error,
			},
		});
	};

	const handleChangeInputs = (valor) => {
		setInputs(valor);
	};

	const reiniciarCampos = () => {
		setInputs({});
	};

	const [valido, setValido] = useState({});

	const campoValido = (valorInicial, name, validacionCampo) => {
		setValido({
			...valido,
			[name]: {
				name: valorInicial,
				campoValido: validacionCampo,
			},
		});
	};

	const handleChangeCampoValido = (valor) => {
		setValido(valor);
	};

	const reiniciarCampoValido = () => {
		setValido({});
	};

	const [totalCarrito, setTotalCarrito] = useState(0);

	const actualizarTotalCarrito = (valor) => {
		setTotalCarrito(valor);
	};

	const data = {
		inputs,
		cargarCampos,
		reiniciarCampos,
		valido,
		campoValido,
		handleChangeCampoValido,
		reiniciarCampoValido,
		totalCarrito,
		actualizarTotalCarrito,
		handleChangeInputs,
	};
	return (
		<InputsContext.Provider value={data}>{children}</InputsContext.Provider>
	);
};

export default InputsProvider;
