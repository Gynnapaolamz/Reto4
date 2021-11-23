import React from "react";
import DatosServicios from "../../consts json/Servicios/DatosServicios.json";
import DatosEtiquetaLinkReserva from "../../consts json/Servicios/DatosEtiquetaLinkReserva.json";
import EtiquetaLink from "../Creacion de Etiquetas HTML/EtiquetaLink";
const CardServicio = () => {
	return (
		<>
			<div className="row">
				{DatosServicios.map((servicio, index) => {
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
