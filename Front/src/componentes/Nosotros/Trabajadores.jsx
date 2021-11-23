import React from "react";
import DatosTrabajadores from "../../consts json/Nosotros/DatosTrabajadores.json";

const Trabajadores = () => {
	return (
		<>
			<section className="trabajadores bg-danger bg-gradient py-5">
				<div className="row">
					{DatosTrabajadores.map((trabajador, index) => {
						return (
							<div
								key={index}
								className="trabajador d-flex flex-column col-lg-4 col-md-12 col-sm-12"
							>
								<img
									className="d-flex justify-content-center"
									src={trabajador.imagen}
									alt={trabajador.nombre}
									style={{ backgroundColor: "deeppink", objectFit: "cover" }}
								/>
								<h3>{trabajador.nombre}</h3>
								<h6>{trabajador.ocupacion}</h6>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Trabajadores;
