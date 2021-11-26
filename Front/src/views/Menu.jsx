import React from "react";
import CardsPlatos from "../componentes/Menu/Card Menu/CardsPlatos";
import ModalDescripcionProducto from "../componentes/Menu/Modal Descripcion/ModalDescripcionProducto";

import "../componentes/Menu/Styles/estilos-menu.css";
import EtiquetaFontAwesomeIcon from "../componentes/FontAwesome/EtiquetaFontAwesomeIcon";

const Menu = () => {
	return (
		<>
			{/* <!-- Menu --> */}
			<div className="container card-principal-menu">
				<div className="card mt-4">
					<div id="card-body" className="card-body">
						<div className="d-flex flex-column">
							<h1 className="card-title mt-5 mb-3 text-center">MENU</h1>
							<button
								className="btn btn-primary justify-content-center mb-3"
								type="button"
							>
								<EtiquetaFontAwesomeIcon
									objectArray={{
										fontAwesomeIcon_CallComponentBool: true,
										atributosFontAwesomeIcon: {
											className: "fas me-3",
										},
										fontAwesomeIcon_icon: "faFileDownload",
									}}
								/>
								DESCARGAR EL MENÚ
							</button>
						</div>
						<CardsPlatos />
					</div>
				</div>
			</div>
			{/* <!-- Menu --> */}

			{/* <!-- Modal Descripcion Producto --> */}
			<ModalDescripcionProducto />
			{/* <!-- Modal Descripcion Producto --> */}
		</>
	);
};

export default Menu;
