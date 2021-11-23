import React from "react";
import DatosEtiquetaLinkCarrito from "../../consts json/Carrito/DatosEtiquetaLinkCarrito.json";
import ModalCarrito from "./ModalCarrito";
import SinPlatillos from "./SinPlatillos";
import EtiquetaLink from "../Creacion de Etiquetas HTML/EtiquetaLink";
import ColumnaProductos from "./ColumnaProductos";
import InputsProvider from "../../contexts/Inputs/InputsProvider";
import ColumnaPagarAhora from "./ColumnaPagarAhora";

const ExteriorCarrito = () => {
	return (
		<>
			<InputsProvider>
				<div
					className="mx-auto mt-5"
					style={{ paddingLeft: 50, paddingRight: 50 }}
				>
					<div className="card-body">
						<div className="row">
							<div className="card-text mb-4">
								<h1 style={{ color: "#5f2018", fontFamily: "fantasy" }}>
									CARRITO DE COMPRA
								</h1>
							</div>
							<ColumnaProductos />
							<SinPlatillos />
							<ColumnaPagarAhora />
						</div>
					</div>
				</div>

				<ModalCarrito />

				{/*Botón seguir comprando*/}
				<div className="d-flex justify-content-center mb-4">
					<EtiquetaLink objectArray={DatosEtiquetaLinkCarrito} />
				</div>
			</InputsProvider>
		</>
	);
};

export default ExteriorCarrito;
