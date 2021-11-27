import React, { useContext } from "react";
import DatosEtiquetaLinkReserva from "../../consts json/Servicios/DatosEtiquetaLinkReserva.json";
import EtiquetaLink from "../Creacion de Etiquetas HTML/EtiquetaLink";
import ServiciosContext from "../../contexts/Servicios/ServiciosContext";
const CardServicio = () => {
	const { datosServicios } = useContext(ServiciosContext);
	return (
		<>
			<div
				className={`row ${
					datosServicios.length === 1 &&
					"d-flex align-items-center justify-content-center"
				}`}
			>
				{datosServicios.map((servicio, index) => {
					return (
						<div key={index} className="col-lg-6 col-md-12 p-4">
							<div className="card card-servicios">
								<img
									src={servicio.imagen}
									className="card-img-top p-4 mx-auto my-auto img-fluid"
									alt={servicio.nombre}
								/>
								<div className="card-body">
									<h5
										className="card-title fs-1"
										style={{ color: "rgb(58, 35, 9)" }}
									>
										{servicio.nombre}
									</h5>
									<p
										className="card-text my-4 fs-5"
										style={{ textAlign: "justify" }}
									>
										{servicio.descripcion}
									</p>
								</div>
								<div className="card-footer pt-3 pb-3 px-3">
									<EtiquetaLink objectArray={DatosEtiquetaLinkReserva} />
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default CardServicio;
