import React, { useContext } from "react";
import InputsContext from "../../../contexts/Inputs/InputsContext";
import PlatoContext from "../../../contexts/Menu/PlatoContext";
import { sweetAlertPreguntarCrearEditarEliminarPlato } from "../../../sweetAlert/SweetAlert";
import EtiquetaFontAwesomeIcon from "../../FontAwesome/EtiquetaFontAwesomeIcon";

const CardModalPlato = ({ plato }) => {
	const {
		handleChangeInputs,
		handleChangeCampoValido,
		saberCamposVerdadero,
		valido,
		reiniciarCampos,
		reiniciarCampoValido,
	} = useContext(InputsContext);

	const {
		selectedDish,
		handleFormularioOcultoEditCrear,
		datosMenu,
		handleChangeDatosMenu,
	} = useContext(PlatoContext);
	Object.assign(plato, { cantidad: 1 });
	return (
		<>
			<div
				key={plato.idPlato}
				className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-3"
			>
				<div
					id="cardObjectPlato"
					className="card card-menu border border-danger border-3"
					style={{ height: "100%" }}
				>
					<img
						className="card-img-top"
						src={plato.urlImagen}
						alt={plato.titulo}
						width="300"
						height="300"
						style={{ objectFit: "cover" }}
						data-bs-toggle="modal"
						href="#modalDescripcionProducto"
						onClick={() => {
							selectedDish({ nameCompSelc: "menu_modal", plato: plato });
						}}
					/>
					<div
						className="card-body mt-4"
						data-bs-toggle="modal"
						href="#modalDescripcionProducto"
						onClick={() => {
							selectedDish({ nameCompSelc: "menu_modal", plato: plato });
						}}
					>
						<div className="card-title">
							<h4>{plato.titulo}</h4>
						</div>
					</div>
					<div
						className="card-body mt-2"
						data-bs-toggle="modal"
						href="#modalDescripcionProducto"
						onClick={() => {
							console.log("plato -- ", plato);
							selectedDish({ nameCompSelc: "menu_modal", plato: plato });
						}}
					>
						<p className="card-text">
							{plato?.descripcion.substr(0, 50) + "........."}
						</p>
					</div>

					<div
						className="card-footer"
						style={{
							border: "none",
							marginLeft: "3px",
							backgroundColor: "initial",
						}}
					>
						<div className="card-title mt-2">
							<h5>{plato.valor}</h5>
						</div>
					</div>
					<div className="card-footer">
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
											handleFormularioOcultoEditCrear(formCrearOcult);
											const error = {
												error: false,
												error1: false,
											};
											const platoEdit = {
												nombrePlato_0: {
													campoValido: true,
													error: error,
													valor: plato.titulo,
												},
												imagenPlato_1: {
													campoValido: true,
													error: error,
													valor: plato.urlImagen,
												},
												valorPlato_2: {
													campoValido: true,
													error: error,
													valor: plato.valor.split("$")[1],
												},
												descripcionPlato_3: {
													campoValido: true,
													error: error,
													valor: plato.descripcion,
												},
											};
											handleChangeInputs(platoEdit);
											const platoEditValido = {
												nombrePlato: {
													campoValido: true,
													name: plato.titulo,
												},
												imagenPlato: {
													campoValido: true,
													name: plato.urlImagen,
												},
												valorPlato: {
													campoValido: true,
													name: plato.valor.split("$")[1],
												},
												descripcionPlato: {
													campoValido: true,
													name: plato.descripcion,
												},
											};
											handleChangeCampoValido(platoEditValido);
											selectedDish({
												nameCompSelc: "menu_modal",
												plato: plato,
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
											handleFormularioOcultoEditCrear(formCrearOcult);
											selectedDish({
												nameCompSelc: "menu_modal",
												plato: plato,
											});
											sweetAlertPreguntarCrearEditarEliminarPlato(
												formCrearOcult.formularioEditCrear,
												saberCamposVerdadero,
												valido,
												reiniciarCampos,
												reiniciarCampoValido,
												datosMenu,
												handleChangeDatosMenu,
												handleFormularioOcultoEditCrear,
												plato
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

export default CardModalPlato;
