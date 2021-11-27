import React, { useContext, useState } from "react";
import TestimoniosContext from "../../../contexts/Nosotros/TestimoniosContext";
import {
	sweetAlert,
	sweetAlertBtnConfirmarTestimonioEditado,
	sweetAlertBtnConfirmarTestimonioEliminado,
} from "../../../sweetAlert/SweetAlert";

const ModalTestimonios = () => {
	let count = 0;

	const initialInputsModalTestimoniales = {
		imgSrc: "",
		imgAlt: `testimonio-${count}`,
		spanDescripcion: "",
		user: "",
	};

	const [inputsModalTestimoniales, setInputsModalTestimoniales] = useState(
		initialInputsModalTestimoniales
	);

	const handleInputChangeModalTestimoniales = (name, value) => {
		setInputsModalTestimoniales({
			...inputsModalTestimoniales,
			[name]: value,
		});
	};

	const handleInputChangeModalTestimoniales1 = (valor) => {
		setInputsModalTestimoniales(valor);
	};

	const { modalTestimoniales, handleChangeModalTestimoniales } =
		useContext(TestimoniosContext);

	const initialStateFormTestimoniales = {
		formVisibility: false,
		nameAction: "CREAR",
	};

	const [formTestimoniales, setFormTestimoniales] = useState(
		initialStateFormTestimoniales
	);

	const handleChangeFormTestimoniales = (valor) => {
		setFormTestimoniales(valor);
	};

	return (
		<>
			<div
				className="modal fade"
				id="ModalTestimoniales"
				tabIndex={-1}
				aria-labelledby="ModalTestimonialesLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-xl modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Testimonios de nuestros clientes
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
								onClick={() => {
									handleChangeFormTestimoniales({
										formVisibility: false,
										nameAction: "CREAR",
									});
								}}
							/>
						</div>
						<div className="modal-body">
							<div
								className={`d-flex justify-content-center my-3 ${
									formTestimoniales.nameAction === "CREAR" ? "" : "d-none"
								}`}
							>
								<button
									className="btn btn-success btn-lg"
									style={{ width: "30rem" }}
									onClick={() => {
										handleChangeFormTestimoniales({
											formVisibility: !formTestimoniales.formVisibility,
											nameAction: "CREAR",
										});
									}}
								>
									AGREGAR TESTIMONIO
								</button>
							</div>

							{/*Formulario de testimonios*/}
							<div
								className={`formEmpleadoSeleccionado p-2 ${
									formTestimoniales.formVisibility ? "" : "d-none"
								}`}
							>
								<div className="mb-3">
									<h4>{formTestimoniales.nameAction} TESTIMONIO</h4>
								</div>
								<div className="mb-3">
									<label htmlFor="inputModalTestimonialesUser">Usuario</label>
									<input
										name="user"
										type="text"
										className="form-control"
										id="inputModalTestimonialesUser"
										value={inputsModalTestimoniales?.user || ""}
										onChange={(e) =>
											handleInputChangeModalTestimoniales(
												e.target.name,
												e.target.value
											)
										}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="inputModalTestimonialesDescripcion">
										Descripcion Testimonio
									</label>
									<textarea
										name="spanDescripcion"
										className="form-control"
										id="inputModalTestimonialesDescripcion"
										rows="3"
										value={inputsModalTestimoniales?.spanDescripcion || ""}
										onChange={(e) =>
											handleInputChangeModalTestimoniales(
												e.target.name,
												e.target.value
											)
										}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="inputModalTestimonialesimgSrc">
										Link de la imagen del cliente
									</label>
									<input
										name="imgSrc"
										type="text"
										className="form-control"
										id="inputModalTestimonialesimgSrc"
										value={inputsModalTestimoniales?.imgSrc || ""}
										onChange={(e) =>
											handleInputChangeModalTestimoniales(
												e.target.name,
												e.target.value
											)
										}
									/>
								</div>
								<div>
									<button
										className="btn btn-primary"
										type="button"
										onClick={(e) => {
											e.preventDefault();
											console.log(
												"inputsModalTestimoniales",
												inputsModalTestimoniales
											);
											if (inputsModalTestimoniales.user !== "") {
												if (inputsModalTestimoniales.spanDescripcion !== "") {
													if (inputsModalTestimoniales.imgSrc !== "") {
														sweetAlertBtnConfirmarTestimonioEditado(
															modalTestimoniales,
															inputsModalTestimoniales,
															handleChangeModalTestimoniales,
															handleInputChangeModalTestimoniales,
															handleInputChangeModalTestimoniales1,
															formTestimoniales,
															handleChangeFormTestimoniales
														);
													} else {
														sweetAlert(
															"center",
															"error",
															"",
															"DEBES SELECCIONAR UNA IMAGEN",
															false,
															2500
														);
													}
												} else {
													sweetAlert(
														"center",
														"error",
														"",
														"DEBES INGRESAR UNA DESCRIPCIÓN",
														false,
														2500
													);
												}
											} else {
												sweetAlert(
													"center",
													"error",
													"",
													"DEBES INGRESAR UN USUARIO",
													false,
													2500
												);
											}
										}}
									>
										{formTestimoniales.nameAction} TESTIMONIO
									</button>
									<button
										type="button"
										className="btn btn-danger mx-2"
										onClick={() => {
											handleChangeFormTestimoniales({
												formVisibility: false,
												nameAction: "CREAR",
											});
											handleInputChangeModalTestimoniales1(
												initialInputsModalTestimoniales
											);
										}}
									>
										CANCELAR
									</button>
								</div>
							</div>

							<div className="row d-flex justify-content-evenly">
								{modalTestimoniales.map((testimonial, index) => {
									Object.assign(testimonial, { id: index });
									return (
										<div className="col-12 col-md-6 col-lg-4 mt-4" key={index}>
											<div className="card">
												<div className="card-body">
													<div className="row">
														<div className="col-12 col-md-4">
															<img
																src={testimonial.imgSrc}
																alt="testimonial"
																className="img-fluid"
															/>
														</div>
														<div className="col-12 col-md-8">
															<h5 className="">{testimonial.user}</h5>
															<p className="card-text">
																{testimonial.spanDescripcion}
															</p>
														</div>
													</div>
												</div>
												<div className="card-footer">
													<div className="row">
														<div className="col-lg-6">
															<button
																className="btn btn-primary"
																type="button"
																onClick={() => {
																	handleChangeFormTestimoniales({
																		formVisibility: true,
																		nameAction: "ACTUALIZAR",
																	});
																	handleInputChangeModalTestimoniales1(
																		testimonial
																	);
																}}
															>
																EDITAR
															</button>
														</div>
														<div className="col-lg-6">
															<button
																className="noselect buttonEliminarEmpleado"
																type="button"
																onClick={(e) => {
																	e.preventDefault();
																	sweetAlertBtnConfirmarTestimonioEliminado(
																		handleChangeModalTestimoniales,
																		modalTestimoniales,
																		testimonial,
																		handleInputChangeModalTestimoniales1,
																		handleChangeFormTestimoniales
																	);
																}}
															>
																<span className="text">ELIMINAR</span>
																<span className="icon">
																	<svg
																		viewBox="0 0 24 24"
																		height={24}
																		width={24}
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
																	</svg>
																</span>
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ModalTestimonios;
