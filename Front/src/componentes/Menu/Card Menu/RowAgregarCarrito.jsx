import React, { useContext } from "react";
import { agregarPlatoCarrito } from "../AgregarPlatoCarrito";
import EtiquetaFontAwesomeIcon from "../../FontAwesome/EtiquetaFontAwesomeIcon";
import CantidadContext from "../../../contexts/Inputs/InputsContext";

const RowAgregarCarrito = ({ plato }) => {
	const { inputs } = useContext(CantidadContext);
	return (
		<>
			<div className="row">
				<div className="col-lg-12 col-md-12">
					<div className="div-agregar-carrito">
						<button
							id={"btn-agregar-carrito-" + plato.idPlato}
							type="button"
							className="btn formulario__btn-agregar-carrito"
							onClick={(e) => {
								e.preventDefault();
								Object.assign(plato, {
									cantidad: inputs[`cantidad_${plato.idPlato}`]?.valor,
								});
								const nombreInput = `cantidad_${plato.idPlato}`;
								const campoValido = inputs[nombreInput]?.campoValido;
								agregarPlatoCarrito(plato, campoValido);
							}}
						>
							<EtiquetaFontAwesomeIcon
								objectArray={{
									fontAwesomeIcon_CallComponentBool: true,
									atributosFontAwesomeIcon: {
										className: "fas",
									},
									fontAwesomeIcon_icon: "faShoppingCart",
								}}
							/>
							<p>AÑADIR AL CARRITO</p>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default RowAgregarCarrito;
