import React, { useContext } from "react";

import RowAgregarCarrito from "./RowAgregarCarrito";
import Input from "../../Inputs/Input";
import DatosInputMenuCantidad from "../../../consts json/Menu/DatosInputMenuCantidad.json";
import ColumnaMinus from "./ColumnaMinus";
import ColumnaPlus from "./ColumnaPlus";
import InputsContext from "../../../contexts/Inputs/InputsContext";

const Cantidad = ({ plato, objeto }) => {
	const inputsContext = useContext(InputsContext);

	Object.assign(objeto, { id: plato.idPlato });

	return (
		<>
			<div className="row">
				<div className="col-minus-input-plus col-lg-12 col-md-12">
					<div className="row">
						<ColumnaMinus
							plato={plato}
							objeto={objeto}
							inputsContext={inputsContext}
						/>
						<form
							id={"formulario_menu-" + plato.idPlato}
							className="formulario_menu"
							noValidate
						>
							<Input
								key={plato.idPlato}
								objeto={objeto}
								valorInicial={plato.cantidad}
							/>
						</form>
						<ColumnaPlus
							plato={plato}
							objeto={objeto}
							inputsContext={inputsContext}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

const RowCantidad = ({ plato }) => {
	const objeto = DatosInputMenuCantidad;

	return (
		<>
			<Cantidad plato={plato} objeto={objeto} />
			<RowAgregarCarrito plato={plato} />
		</>
	);
};

export { Cantidad };
export default RowCantidad;
