import React from "react";

import EtiquetaFontAwesomeIcon from "../../FontAwesome/EtiquetaFontAwesomeIcon";
import { minus } from "./CardPlatoJS";

const ColumnaMinus = ({ plato, objeto, inputsContext }) => {
	const { inputs, cargarCampos, actualizarTotalCarrito } = inputsContext;
	return (
		<>
			<div className="col-minus col-lg-4 col-md-4 col-sm-4">
				<button
					id={"btn_minus-" + plato.idPlato}
					type="button"
					className="btn"
					onClick={(e) => {
						e.preventDefault();
						minus(
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
							fontAwesomeIcon_icon: "faMinus",
						}}
					/>
				</button>
			</div>
		</>
	);
};

export default ColumnaMinus;
