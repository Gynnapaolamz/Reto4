import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import CarritoContext from "../../contexts/Carrito/CarritoContext";
import { sendMailCarrito } from "../../EmailJS/EmailJS";

const ModalCarrito = (/* totalCarrito */) => {
	const initialInputModalCarrito = {
		to_name: "",
		correo: "",
	};
	const [inputModalCarrito, setInputModalCarrito] = useState(
		initialInputModalCarrito
	);

	const { platillos, handleRemoveAllItems } = useContext(CarritoContext);

	const handleInputModalCarrito = (e) => {
		const { name, value } = e.target;
		cargarInputModalCarrito(name, value);
	};

	const cargarInputModalCarrito = (name, value) => {
		setInputModalCarrito({
			...inputModalCarrito,
			[name]: value,
		});
	};

	const initicializarInput = () => {
		setInputModalCarrito(initialInputModalCarrito);
	};

	return (
		<>
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex={-1}
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-lg text-uppercase">
					<div className="modal-content">
						<div className="modal-header">
							<h3
								className="modal-title text-center"
								id="exampleModalLabel"
								style={{ width: "100%" }}
							>
								¡Digite sus datos para completar su compra!
							</h3>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							/>
						</div>
						<form className="needs-validation" noValidate>
							<div className="modal-body">
								<div className="mb-3">
									<label htmlFor="nombre" className="form-label">
										Nombre
									</label>
									<input
										type="text"
										className="form-control"
										id="nombre"
										name="to_name"
										value={inputModalCarrito["to_name"]}
										onChange={(e) => {
											handleInputModalCarrito(e);
										}}
										required
									/>
									<div className="valid-feedback">Looks good!</div>
								</div>
								<div className="mb-3">
									<label htmlFor="email" className="form-label">
										Correo electrónico
									</label>
									<input
										type="email"
										className="form-control"
										id="email"
										name="correo"
										aria-describedby="emailHelp"
										value={inputModalCarrito["correo"]}
										onChange={(e) => {
											handleInputModalCarrito(e);
										}}
										required
									/>
									<div className="valid-feedback">Looks good!</div>
									<div id="emailHelp" className="form-text">
										No compartiremos tu correo con nadie más.
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary text-uppercase"
									data-bs-dismiss="modal"
								>
									Close
								</button>
								<button
									type="submit"
									className="btn btn-primary text-uppercase"
									onClick={(e) => {
										e.preventDefault();
										const message =
											"SE REALIZÓ LA COMPRA DE LOS PLATILLOS, EL TOTAL DEL PEDIDO ES DE: /* totalCarrito */";
										Swal.fire({
											title: "¿Deseas continuar con el pedido?",
											showDenyButton: true,
											showCancelButton: true,
											confirmButtonText: "SÍ",
											denyButtonText: "NO",
										}).then((result) => {
											/* Read more about isConfirmed, isDenied below */
											if (result.isConfirmed) {
												console.log(inputModalCarrito);
												console.log(platillos);
												sendMailCarrito(
													inputModalCarrito,
													message,
													platillos,
													handleRemoveAllItems,
													initicializarInput
												);
											} else if (result.isDenied || result.isDismissed) {
												Swal.fire("PEDIDO NO REALIZADO.", "", "info");
											}
										});
									}}
								>
									Pagar y enviar correo
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default ModalCarrito;
