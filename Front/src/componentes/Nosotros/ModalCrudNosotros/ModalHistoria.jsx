import React, { useContext, useState } from "react";
import NosotrosContext from "../../../contexts/Nosotros/NosotrosContext";
import {
	sweetAlert,
	sweetAlertBtnGuardarModalHistoria,
} from "../../../sweetAlert/SweetAlert";

const ModalHistoria = () => {
	const initialModalHistoria = {
		titulo: "",
		descripcion: "",
		imagen: "",
	};

	const [inputsModalHistoria, setInputsModalHistoria] =
		useState(initialModalHistoria);

	const handleInputChangeModalHistoria = (e) => {
		setInputsModalHistoria({
			...inputsModalHistoria,
			[e.target.name]: e.target.value,
		});
	};

	const handleReiniciarInputsModalHistoria = () => {
		setInputsModalHistoria(initialModalHistoria);
	};

	const { handleChangeModalHistoria } = useContext(NosotrosContext);

	return (
		<>
			{/* Modal Nuestra Historia */}
			<div
				className="modal fade"
				id="ModalHistoria"
				tabIndex={-1}
				aria-labelledby="ModalHistoria"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="HistoriaModalLabel">
								Editar información de Nuestra Historia
							</h5>
						</div>
						<div className="modal-body">
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlTextarea1"
									className="form-label"
								>
									Escriba el título para la sección
								</label>
								<input
									name="titulo"
									className="form-control"
									type="text"
									aria-label="default input example"
									value={inputsModalHistoria.titulo}
									onChange={handleInputChangeModalHistoria}
								/>
							</div>

							<div className="mb-3">
								<label
									htmlFor="exampleFormControlTextarea1"
									className="form-label"
								>
									Escriba la historia de la empresa
								</label>
								<textarea
									name="descripcion"
									className="form-control"
									id="exampleFormControlTextarea1"
									rows={3}
									value={inputsModalHistoria.descripcion}
									onChange={handleInputChangeModalHistoria}
								/>
							</div>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlTextarea1"
									className="form-label"
								>
									Escriba el link de la imagen en Firebase
								</label>
								<input
									name="imagen"
									className="form-control"
									type="text"
									aria-label="default input example"
									value={inputsModalHistoria.imagen}
									onChange={handleInputChangeModalHistoria}
								/>
							</div>
						</div>
						<div className="modal-footer d-flex align-items-center justify-content-center">
							<button
								type="button"
								className="btn btn-success"
								onClick={(e) => {
									e.preventDefault();
									console.log("inputsModalHistoria: ", inputsModalHistoria);
									if (inputsModalHistoria.titulo !== "") {
										if (inputsModalHistoria.descripcion !== "") {
											if (inputsModalHistoria.imagen !== "") {
												sweetAlertBtnGuardarModalHistoria(
													handleChangeModalHistoria,
													inputsModalHistoria,
													handleReiniciarInputsModalHistoria
												);
											} else {
												sweetAlert(
													"center",
													"info",
													"",
													"Debe ingresar un link de imagen",
													false,
													2500
												);
											}
										} else {
											sweetAlert(
												"center",
												"info",
												"",
												"Debe ingresar una descripción",
												false,
												2500
											);
										}
									} else {
										sweetAlert(
											"center",
											"info",
											"",
											"Debe ingresar un título",
											false,
											2500
										);
									}
								}}
							>
								Guardar cambios
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ModalHistoria;
