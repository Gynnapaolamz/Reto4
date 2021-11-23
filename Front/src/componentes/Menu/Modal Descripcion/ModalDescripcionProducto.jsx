import React, { useContext } from "react";
import PlatoContext from "../../../contexts/Menu/PlatoContext";

// import PropTypes from "prop-types";
import EtiquetaP from "../../Creacion de Etiquetas HTML/EtiquetaP";

const ModalDescripcionProducto = () => {
	const { platoSeleccionado } = useContext(PlatoContext);
	return (
		<>
			<div
				className="modal fade"
				id="modalDescripcionProducto"
				tabIndex={-1}
				aria-labelledby="modalDescripcionProductoLabel"
				aria-hidden="true"
			>
				<div
					className="
					modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl
				"
					style={{ width: 845 }}
				>
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="modalDescripcionProductoLabel">
								{platoSeleccionado?.titulo}
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							/>
						</div>
						<div className="modal-body">
							<img
								src={platoSeleccionado?.urlImagen}
								className="card-img-top"
								alt="..."
								style={{
									width: 800,
									height: 350,
									objectFit: "cover",
								}}
							/>
							<EtiquetaP
								objectArray={{
									p_CallComponentBool: true,
									p_texto: platoSeleccionado?.descripcion,
								}}
							/>
						</div>
						<div className="modal-footer">
							<div className="row">
								<div className="div-precio col-lg-5 col-md-5">
									<EtiquetaP
										objectArray={{
											p_CallComponentBool: true,
											p_texto: platoSeleccionado?.valor,
										}}
									/>
								</div>
								<div className="div-contactanos col-lg-7 col-md-7">
									<a
										className="btn btn-outline-light btn-floating btn-primary"
										href="/contactenos"
										role="button"
									>
										¿PREGUNTAS? O CONTACTANOS
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

ModalDescripcionProducto.propTypes = {};

export default ModalDescripcionProducto;
