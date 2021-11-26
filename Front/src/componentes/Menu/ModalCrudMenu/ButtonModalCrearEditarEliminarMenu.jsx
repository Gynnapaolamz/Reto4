import React, { useContext } from "react";
import InputsContext from "../../../contexts/Inputs/InputsContext";
import PlatoContext from "../../../contexts/Menu/PlatoContext";
import { sweetAlertPreguntarCrearEditarEliminar } from "../../../sweetAlert/SweetAlert";
import { saberCamposVerdadero } from "./ModalCrearEditElimMenu";

const ButtonModalCrearEditarEliminarMenu = () => {
	const { reiniciarCampos, valido, reiniciarCampoValido } =
		useContext(InputsContext);
	const {
		datosMenu,
		platoSeleccionado,
		handleChangeDatosMenu,
		handleFormularioOcultoEditCrear,
		formularioOcultoEditCrear,
	} = useContext(PlatoContext);
	return (
		<>
			<div
				className="col-lg-4 col-md-12 mt-2 text-center"
				style={{ position: "relative", left: "7px" }}
			>
				<div className="formulario__grupo formulario__grupo-btn-enviar">
					<button
						type="submit"
						className="formulario__btn"
						onClick={(e) => {
							e.preventDefault();
							sweetAlertPreguntarCrearEditarEliminar(
								formularioOcultoEditCrear.formularioEditCrear,
								saberCamposVerdadero,
								valido,
								reiniciarCampos,
								reiniciarCampoValido,
								datosMenu,
								handleChangeDatosMenu,
								handleFormularioOcultoEditCrear,
								platoSeleccionado.plato
							);
						}}
					>
						{formularioOcultoEditCrear.formularioEditCrear} PLATO
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
							handleFormularioOcultoEditCrear(formCrearOcult);
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

export default ButtonModalCrearEditarEliminarMenu;
