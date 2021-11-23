import React from "react";
import EtiquetaFontAwesomeIcon from "../../FontAwesome/EtiquetaFontAwesomeIcon";
import { plus } from "./CardPlatoJS";

const ColumnaPlus = ({ plato, objeto, inputsContext }) => {
	const { inputs, cargarCampos, actualizarTotalCarrito } = inputsContext;
	return (
		<>
			<div className="col-plus col-lg-4 col-md-4 col-sm-4">
				<button
					id={"btn_plus-" + plato.idPlato}
					type="button"
					className="btn"
					onClick={(e) => {
						e.preventDefault();
						plus(
							plato,
							inputs,
							cargarCampos,
							actualizarTotalCarrito,
							objeto.nameComponente
						);
					}}
				>
					<EtiquetaFontAwesomeIcon
						objectArray={{
							fontAwesomeIcon_CallComponentBool: true,
							atributosFontAwesomeIcon: {
								className: "fas",
							},
							fontAwesomeIcon_icon: "faPlus",
						}}
					/>
				</button>
			</div>
		</>
	);
};

export default ColumnaPlus;
