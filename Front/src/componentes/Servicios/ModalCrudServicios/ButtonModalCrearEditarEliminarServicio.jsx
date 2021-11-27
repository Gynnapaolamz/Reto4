import React, { useContext } from "react";
import InputsContext from "../../../contexts/Inputs/InputsContext";
import ServiciosContext from "../../../contexts/Servicios/ServiciosContext";
import { sweetAlertPreguntarCrearEditarEliminarServicio } from "../../../sweetAlert/SweetAlert";
import { saberCamposVerdadero } from "./ModalCrearEditElimServicio";

const ButtonModalCrearEditarEliminarServicio = () => {
	const { reiniciarCampos, valido, reiniciarCampoValido } =
		useContext(InputsContext);
	const {
		datosServicios,
		handelChangeDatosServicios,
		servicioSeleccionado,
		formularioOcultoEditCrear,
		handleChangeFormularioOcultoEditarCrear,
		handelChangeDatosServiciosActualizar,
		handelChangeDatosServiciosCrear,
		handelChangeDatosServiciosEliminar,
	} = useContext(ServiciosContext);
	return (
		<>
			<div className="col-lg-4 col-md-12 mt-2">
				<div className="formulario__grupo formulario__grupo-btn-enviar">
					<button
						type="submit"
						className="formulario__btn"
						onClick={(e) => {
							e.preventDefault();
							sweetAlertPreguntarCrearEditarEliminarServicio(
								saberCamposVerdadero,
								valido,
								reiniciarCampos,
								reiniciarCampoValido,
								datosServicios,
								handelChangeDatosServicios,
								handelChangeDatosServiciosCrear,
								handelChangeDatosServiciosActualizar,
								handelChangeDatosServiciosEliminar,
								handleChangeFormularioOcultoEditarCrear,
								servicioSeleccionado.servicio,
								formularioOcultoEditCrear.formularioEditCrear
							);
						}}
					>
						{formularioOcultoEditCrear.formularioEditCrear} SERVICIO
					</button>
				</div>
			</div>
			<div className="col-lg-4 col-md-12 mt-2 text-center">
				<div className="formulario__grupo formulario__grupo-btn">
					<button
						type="submit"
						className="formulario__btn-limpiar"
						onClick={(e) => {
							e.preventDefault();
							reiniciarCampos();
							reiniciarCampoValido();
						}}
					>
						LIMPIAR CAMPOS
					</button>
				</div>
			</div>
			<div
				className="col-lg-4 col-md-12 mt-2 text-center"
				style={{ position: "relative", right: "7px" }}
			>
				<div className="formulario__grupo formulario__grupo-btn">
					<button
						type="submit"
						className="formulario__btn-ocultar"
						onClick={(e) => {
							e.preventDefault();
							const formCrearOcult = {
								formularioOculto: false,
								formularioEditCrear: "CREAR",
							};
							handleChangeFormularioOcultoEditarCrear(formCrearOcult);
							reiniciarCampos();
							reiniciarCampoValido();
						}}
					>
						OCULTAR
					</button>
				</div>
			</div>
		</>
	);
};

export default ButtonModalCrearEditarEliminarServicio;
