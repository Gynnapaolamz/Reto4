import React, { useContext } from "react";
import CantidadProvider from "../../../contexts/Inputs/InputsProvider";
import PlatoContext from "../../../contexts/Menu/PlatoContext";

import RowCantidad from "./RowCantidad";

const CardPlato = ({ plato }) => {
	const { selectedDish } = useContext(PlatoContext);
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
					<div
						data-bs-toggle="modal"
						data-bs-target="#modalDescripcionProducto"
						onClick={() => {
							selectedDish({ nameCompSelc: "menu", plato: plato });
						}}
					>
						<img
							className="card-img-top"
							src={plato.urlImagen}
							alt={plato.titulo}
							width="300"
							height="300"
							style={{ objectFit: "cover" }}
						/>

						<div className="card-body">
							<div className="card-title">
								<h4>{plato.titulo}</h4>
							</div>
							<p className="card-text">
								{plato.descripcion.substr(0, 50) + "........."}
							</p>
						</div>
					</div>

					<div className="card-footer card-body-carrito mt-lg-1 mt-md-1 mt-sm-1">
						<div className="row">
							<div className="col-cantidad col-lg-12 col-md-12">
								<p>
									<label htmlFor={`cantidad_${plato.idPlato}`}>CANTIDAD</label>
								</p>
							</div>
						</div>
						<CantidadProvider>
							<RowCantidad plato={plato} />
						</CantidadProvider>
					</div>
				</div>
			</div>
		</>
	);
};

export default CardPlato;
