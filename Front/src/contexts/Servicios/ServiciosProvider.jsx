import React, { useState } from "react";
import ServiciosContext from "./ServiciosContext";
import DatosServicios from "../../consts json/Servicios/DatosServicios.json";

const ServiciosProvider = ({ children }) => {
	const initialStateDatosDescripcionServicio = {
		nombre: "",
		descripcion: "",
	};

	const [datosDescripcionServicio, setDatosDescripcionServicio] = useState(
		initialStateDatosDescripcionServicio
	);

	const initialStateDatoServicio = {
		nombre: "",
		imagen: "",
		descripcion: "",
	};
	const [datosServicios, setDatosServicios] = useState(DatosServicios);

	const initialStateServicioSeleccionado = {
		nameCompSel: "",
		servicio: null,
	};

	const [servicioSeleccionado, setServicioSeleccionado] = useState(
		initialStateServicioSeleccionado
	);

	const initialStateFormularioOcultoEidtCrear = {
		formularioOculto: false,
		formularioEditCrear: "CREAR",
	};

	const [formularioOcultoEditCrear, setFormularioOcultoEditCrear] = useState(
		initialStateFormularioOcultoEidtCrear
	);

	const handelChangeDatosServicios = (valor) => {
		setDatosServicios(valor);
	};
	const handelChangeDatosServiciosCrear = (valor) => {
		initialStateDatoServicio.nombre = valor["nombreServicio"].name;
		initialStateDatoServicio.imagen = valor["imagenServicio"].name;
		initialStateDatoServicio.descripcion = valor["descripcionServicio"].name;
		setDatosServicios([...datosServicios, initialStateDatoServicio]);
	};
	const handelChangeDatosServiciosActualizar = (valor, servicio) => {
		const auxDatosServicio = datosServicios.map((datosServicio) => {
			if (datosServicio.idServicio === servicio.idServicio) {
				return {
					...datosServicio,
					nombre: valor["nombreServicio"].name,
					imagen: valor["imagenServicio"].name,
					descripcion: valor["descripcionServicio"].name,
				};
			}
			return datosServicio;
		});
		setDatosServicios(auxDatosServicio);
	};
	const handelChangeDatosServiciosEliminar = (servicio) => {
		const auxtDatosServicios = datosServicios.filter(
			(datoServicio) => datoServicio.idServicio !== servicio.idServicio
		);
		setDatosServicios(auxtDatosServicios);
	};

	const handleChangeServicioSeleccionado = (servicio) => {
		setServicioSeleccionado(servicio);
	};

	const handleChangeFormularioOcultoEditarCrear = (valor) => {
		setFormularioOcultoEditCrear(valor);
	};

	const handleChangeDatosDescripcionServicio = (valor) => {
		setDatosDescripcionServicio(valor);
	};

	const data = {
		datosServicios,
		handelChangeDatosServicios,
		handelChangeDatosServiciosCrear,
		handelChangeDatosServiciosActualizar,
		handelChangeDatosServiciosEliminar,
		servicioSeleccionado,
		handleChangeServicioSeleccionado,
		formularioOcultoEditCrear,
		handleChangeFormularioOcultoEditarCrear,
		datosDescripcionServicio,
		handleChangeDatosDescripcionServicio,
	};
	return (
		<ServiciosContext.Provider value={data}>
			{children}
		</ServiciosContext.Provider>
	);
};

export default ServiciosProvider;
