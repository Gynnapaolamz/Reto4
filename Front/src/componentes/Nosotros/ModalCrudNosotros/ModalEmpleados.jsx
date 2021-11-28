import React, { useContext, useState } from "react";
import "../styles/estilos-modal-empleados.css";
import EmpleadosContext from "../../../contexts/Nosotros/EmpleadosContext";
import {
	sweetAlert,
	sweetAlertBtnConfirmarEmpleadoEditado,
	sweetAlertBtnEliminarEmpleado,
} from "../../../sweetAlert/SweetAlert";

const ModalEmpleados = () => {
	const initialInputModalTrabajadores = {
		id: "",
		nombre: "",
		ocupacion: "",
		imagen: "",
	};

	const [inputsModalTrabajadores, setInputsModalTrabajadores] = useState(
		initialInputModalTrabajadores
	);

	const handleInputChangeModalTrabajadores = (name, value) => {
		setInputsModalTrabajadores({
			...inputsModalTrabajadores,
			[name]: value,
		});
	};

	const handleInputChangeModalTrabajadores1 = (valor) => {
		setInputsModalTrabajadores(valor);
	};

	const { modalTrabajadores, handleChangeModalTrabajadores } =
		useContext(EmpleadosContext);

	const initialStateFormEmpleado = {
		formVisibility: false,
		nameAction: "CREAR",
	};

	const [formEmpleado, setFormEmpleado] = useState(initialStateFormEmpleado);

	const handleChangeFormEmpleado = (valor) => {
		setFormEmpleado(valor);
	};

	return (
		<>
			{/* Modal */}
			<div
				className="modal fade"
				id="ModalEmpleados"
				tabIndex={-1}
				aria-labelledby="ModalEmpleados"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-xl modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title" id="EmpleadosLabel">
								Datos de los empleados
							</h4>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
								onClick={() => {
									handleChangeFormEmpleado({
										formVisibility: false,
										nameAction: "CREAR",
									});
								}}
							/>
						</div>
						<div className="modal-body mx-auto">
							<div
								className={`d-flex justify-content-center my-3 ${
									formEmpleado.nameAction === "CREAR" ? "" : "d-none"
								}`}
							>
								<button
									className="btn btn-success btn-lg"
									style={{ width: "30rem" }}
									onClick={() => {
										handleChangeFormEmpleado({
											formVisibility: !formEmpleado.formVisibility,
											nameAction: "CREAR",
										});
									}}
								>
									AGREGAR EMPLEADO
								</button>
							</div>

							{/* Formulario de empleados */}
							<div
								className={`formEmpleadoSeleccionado p-2 ${
									formEmpleado.formVisibility ? "" : "d-none"
								}`}
							>
								<div className="mb-3">
									<h4>{formEmpleado.nameAction} EMPLEADO</h4>
								</div>
								<div className="mb-3">
									<label
										htmlFor="inputModalEmpleadoNombre"
										className="form-label"
									>
										Nombre del empleado
									</label>
									<input
										name="nombre"
										type="text"
										className="form-control"
										id="inputModalEmpleadoNombre"
										value={inputsModalTrabajadores?.nombre || ""}
										onChange={(e) =>
											handleInputChangeModalTrabajadores(
												e.target.name,
												e.target.value
											)
										}
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="inputModalEmpleadoOcupacion"
										className="form-label"
									>
										Ocupación del empleado
									</label>
									<input
										name="ocupacion"
										type="text"
										className="form-control"
										id="inputModalEmpleadoOcupacion"
										value={inputsModalTrabajadores?.ocupacion || ""}
										onChange={(e) =>
											handleInputChangeModalTrabajadores(
												e.target.name,
												e.target.value
											)
										}
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="inputModalEmpleadoImagen"
										className="form-label"
									>
										Link de imagen del empleado
									</label>
									<input
										name="imagen"
										type="text"
										className="form-control"
										id="inputModalEmpleadoImagen"
										value={inputsModalTrabajadores?.imagen || ""}
										onChange={(e) =>
											handleInputChangeModalTrabajadores(
												e.target.name,
												e.target.value
											)
										}
										style={{ objectFit: "cover" }}
									/>
								</div>
								<div className="">
									<button
										type="button"
										className="btn btn-primary"
										onClick={(e) => {
											e.preventDefault();
											console.log(inputsModalTrabajadores);
											if (inputsModalTrabajadores.nombre !== "") {
												if (inputsModalTrabajadores.ocupacion !== "") {
													if (inputsModalTrabajadores.imagen !== "") {
														sweetAlertBtnConfirmarEmpleadoEditado(
															modalTrabajadores,
															inputsModalTrabajadores,
															handleChangeModalTrabajadores,
															handleInputChangeModalTrabajadores1,
															formEmpleado,
															handleChangeFormEmpleado
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
														"DEBES SELECCIONAR UNA OCUPACIÓN",
														false,
														2500
													);
												}
											} else {
												sweetAlert(
													"center",
													"error",
													"",
													"DEBES INGRESAR UN NOMBRE",
													false,
													2500
												);
											}
										}}
									>
										{formEmpleado.nameAction} EMPLEADO
									</button>
									<button
										type="button"
										className="btn btn-danger mx-2"
										onClick={() => {
											handleChangeFormEmpleado({
												formVisibility: false,
												nameAction: "CREAR",
											});
											handleInputChangeModalTrabajadores1(
												initialInputModalTrabajadores
											);
										}}
									>
										CANCELAR
									</button>
								</div>
							</div>

							<div className="row d-flex justify-content-evenly">
								{modalTrabajadores.map((trabajador, index) => {
									return (
										<div
											key={index}
											style={{ width: "23rem" }}
											className="trabajador border border-danger border-3 border-dark rounded my-3 mx-1 p-3 d-flex flex-column col-lg-4 col-md-12 col-sm-12"
										>
											<div className="mb-3">
												<img
													className="border-danger shadow-none mx-auto"
													style={{ height: "80", width: "80" }}
													src={trabajador.imagen}
													alt="imagen"
												/>
											</div>
											<div className="mb-3">
												<h5>{trabajador.nombre}</h5>
											</div>
											<div className="mb-3">
												<h5>{trabajador.ocupacion}</h5>
											</div>
											<button
												className="buttonEditarEmpleado"
												onClick={() => {
													handleInputChangeModalTrabajadores1(trabajador);
													handleChangeFormEmpleado({
														formVisibility: true,
														nameAction: "ACTUALIZAR",
													});
												}}
											>
												ACTUALIZAR
											</button>
											<button
												className="noselect buttonEliminarEmpleado"
												onClick={(e) => {
													e.preventDefault();
													sweetAlertBtnEliminarEmpleado(
														handleChangeModalTrabajadores,
														modalTrabajadores,
														trabajador,
														handleInputChangeModalTrabajadores1,
														handleChangeFormEmpleado
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

export default ModalEmpleados;
