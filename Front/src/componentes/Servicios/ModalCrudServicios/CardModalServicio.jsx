import React, { useContext } from "react";
import InputsContext from "../../../contexts/Inputs/InputsContext";
import ServiciosContext from "../../../contexts/Servicios/ServiciosContext";
import { sweetAlertPreguntarCrearEditarEliminarServicio } from "../../../sweetAlert/SweetAlert";
import EtiquetaFontAwesomeIcon from "../../FontAwesome/EtiquetaFontAwesomeIcon";

const CardModalServicio = ({ servicio }) => {
	const {
		handleChangeInputs,
		handleChangeCampoValido,
		saberCamposVerdadero,
		valido,
		reiniciarCampos,
		reiniciarCampoValido,
	} = useContext(InputsContext);

	const {
		datosServicios,
		handelChangeDatosServicios,
		handleChangeServicioSeleccionado,
		handleChangeFormularioOcultoEditarCrear,
		handelChangeDatosServiciosActualizar,
		handelChangeDatosServiciosEliminar,
		handelChangeDatosServiciosCrear,
	} = useContext(ServiciosContext);
	return (
		<>
			<div className="col-lg-6 col-md-12 p-4">
				<div className="card card-servicios">
					<img
						src={servicio.imagen}
						className="card-img-top p-4 mx-auto my-auto img-fluid"
						alt={servicio.nombre}
					/>
					<div className="card-body">
						<h5 className="card-title fs-1" style={{ color: "rgb(58, 35, 9)" }}>
							{servicio.nombre}
						</h5>
						<p className="card-text my-4 fs-5" style={{ textAlign: "justify" }}>
							{servicio.descripcion}
						</p>
					</div>
					<div className="card-footer pt-2 pb-3">
						<div className="row">
							<div className="col-lg-6 col-md-6 mt-2 text-center">
								<div className="formulario__grupo formulario__grupo-btn-enviar">
									<button
										type="submit"
										className="formulario__btn"
										onClick={(e) => {
											e.preventDefault();
											const formCrearOcult = {
												formularioOculto: true,
												formularioEditCrear: "ACTUALIZAR",
											};
											handleChangeFormularioOcultoEditarCrear(formCrearOcult);
											const error = {
												error: false,
												error1: false,
											};
											const platoEdit = {
												nombreServicio_0: {
													campoValido: true,
													error: error,
													valor: servicio.nombre,
												},
												imagenServicio_1: {
													campoValido: true,
													error: error,
													valor: servicio.imagen,
												},
												descripcionServicio_2: {
													campoValido: true,
													error: error,
													valor: servicio.descripcion,
												},
											};
											handleChangeInputs(platoEdit);
											const platoEditValido = {
												nombreServicio: {
													campoValido: true,
													name: servicio.nombre,
												},
												imagenServicio: {
													campoValido: true,
													name: servicio.imagen,
												},
												descripcionServicio: {
													campoValido: true,
													name: servicio.descripcion,
												},
											};
											handleChangeCampoValido(platoEditValido);
											handleChangeServicioSeleccionado({
												nameCompSelc: "servicio_modal",
												servicio: servicio,
											});
										}}
										href="#nombrePlato_0"
									>
										<EtiquetaFontAwesomeIcon
											objectArray={{
												fontAwesomeIcon_CallComponentBool: true,
												atributosFontAwesomeIcon: {
													className: "fas",
													style: { fontSize: "20px" },
												},
												fontAwesomeIcon_icon: "faEdit",
											}}
										/>
									</button>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 mt-2 text-center">
								<div className="formulario__grupo formulario__grupo-btn">
									<button
										type="submit"
										className="formulario__btn-limpiar"
										onClick={(e) => {
											e.preventDefault();
											const formCrearOcult = {
												formularioOculto: false,
												formularioEditCrear: "ELIMINAR",
											};
											handleChangeFormularioOcultoEditarCrear(formCrearOcult);

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
												servicio,
												formCrearOcult.formularioEditCrear
											);
										}}
									>
										<EtiquetaFontAwesomeIcon
											objectArray={{
												fontAwesomeIcon_CallComponentBool: true,
												atributosFontAwesomeIcon: {
													className: "fas",
													style: { fontSize: "20px" },
												},
												fontAwesomeIcon_icon: "faTrashAlt",
											}}
										/>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CardModalServicio;
