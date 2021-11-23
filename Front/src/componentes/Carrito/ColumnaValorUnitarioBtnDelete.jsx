import React, { useContext } from "react";
import CarritoContext from "../../contexts/Carrito/CarritoContext";
import ColPagarAhoraContext from "../../contexts/Carrito/ColPagarAhoraContext";
import InputsContext from "../../contexts/Inputs/InputsContext";
import { eliminarPlatilloByIdLocalStorage } from "../../localStorage/LocalStorage";
import { sweetAlertBtnEliminarPlatillo } from "../../sweetAlert/SweetAlert";
import EtiquetaFontAwesomeIcon from "../FontAwesome/EtiquetaFontAwesomeIcon";

const ColumnaValorUnitarioBtnDelete = ({ platillo }) => {
	const { handleRemoveItem } = useContext(CarritoContext);
	const { inputs, actualizarTotalCarrito } = useContext(InputsContext);

	const { colPagarAhora } = useContext(ColPagarAhoraContext);

	return (
		<>
			<div
				className="col-lg-2 col-md-12 col-sm-12 d-flex"
				style={{ padding: "0%" }}
			>
				<div
					className="card-body d-flex align-items-center flex-column"
					style={{ padding: "0%", margin: "0%" }}
				>
					<div className="card-text d-flex align-self-stretch justify-content-center pt-3 pb-3">
						<h2
							id={`valor-${platillo.idPlato}`}
							className="text-row"
							style={{
								color: "#5f2018",
								fontFamily: "fantasy",
								fontSize: 27,
								margin: "0%",
							}}
						>
							{platillo.valor}
						</h2>
					</div>
					<div
						className="card-text d-flex align-items-center"
						style={{ height: "100%", padding: 5 }}
					>
						<button
							id={`btn_eliminar-${platillo.idPlato}`}
							type="button"
							className="btn btn-danger boton-carrito-eliminar"
							style={{ height: "3rem", width: "3rem" }}
							onClick={(e) => {
								e.preventDefault();
								sweetAlertBtnEliminarPlatillo(
									eliminarPlatilloByIdLocalStorage,
									handleRemoveItem,
									platillo,
									actualizarTotalCarrito,
									inputs,
									// State.current.colPagarAhoraCurrent
									colPagarAhora
								);
							}}
						>
							<EtiquetaFontAwesomeIcon
								objectArray={{
									fontAwesomeIcon_CallComponentBool: true,
									atributosFontAwesomeIcon: {
										className: "fas",
									},
									fontAwesomeIcon_icon: "faTrashAlt",
								}}
							/>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ColumnaValorUnitarioBtnDelete;
