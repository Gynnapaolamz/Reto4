import React, { useContext } from "react";
import EmpleadosContext from "../../contexts/Nosotros/EmpleadosContext";

const Trabajadores = () => {
	const { modalTrabajadores } = useContext(EmpleadosContext);

	return (
		<>
			<section className="trabajadores bg-danger bg-gradient py-5">
				<div className="row" style={{ width: "85%" }}>
					{modalTrabajadores.map((trabajador, index) => {
						return (
							<div
								key={index}
								className={`trabajador d-flex flex-column ${
									modalTrabajadores.length === 1 && "col-lg-12"
								} ${modalTrabajadores.length === 2 && "col-lg-6"} ${
									modalTrabajadores.length > 2 && "col-lg-4"
								} col-md-12 col-sm-12`}
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
