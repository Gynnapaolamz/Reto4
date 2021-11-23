import React, { memo, useContext, useEffect, useMemo } from "react";

import ColumnaValorUnitarioBtnDelete from "./ColumnaValorUnitarioBtnDelete";
import { Cantidad } from "../Menu/Card Menu/RowCantidad";
import InputsContext from "../../contexts/Inputs/InputsContext";
import DatosInputCarritoCantidad from "../../consts json/Carrito/DatosInputCarritoCantidad.json";

const CardPlatillo = ({ platillo }) => {
	const { actualizarTotalCarrito } = useContext(InputsContext);
	const objeto = useMemo(() => DatosInputCarritoCantidad, []);

	const valor = platillo.valor.split("$")[1];
	const valorTotal = valor * platillo.cantidad;
	const actualizarTotal = () => {
		actualizarTotalCarrito((total) => total + valorTotal);
	};
	
	useEffect(() => {
		actualizarTotal();
	}, []);
	return (
		<>
			<div
				id={platillo.idPlato}
				className="card mb-3 p-3 border border-danger border-3 carrito-card"
				style={{
					maxWidth: "100%",
				}}
			>
				<div className="row">
					<div className="col-lg-4 col-md-12 col-sm-12	p-0	d-flex justify-content-center align-items-center	flex-column">
						<div
							className="card-body"
							style={{
								maxHeight: "90%",
								maxWidth: "95%",
								padding: "0%",
							}}
						>
							<img
								src={platillo.urlImagen}
								alt="foto-producto-carrito"
								className="imagen-carrito"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
								}}
							/>
						</div>
					</div>
					<div
						className="col-lg-6 col-md-12 col-sm-12"
						style={{ padding: "0%" }}
					>
						<div className="card-body">
							<h2
								className="card-title text-center mb-3"
								style={{ color: "#5f2018", fontFamily: "fantasy" }}
							>
								{platillo.titulo}
							</h2>
							<div className="text-start text-justify">
								<p className="card-text lh-6">
									{platillo.descripcion.substr(0, 150)}.....
								</p>
							</div>
						</div>
						<div
							id="card-body"
							className="card-body card-body-carrito mt-lg-1 mt-md-1 mt-sm-1"
						>
							<div className="row">
								<div className="col-cantidad col-lg-12 col-md-12">
									<p>
										<label htmlFor={`cantidad_${platillo.idPlato}`}>
											CANTIDAD
										</label>
									</p>
								</div>
							</div>
							<Cantidad plato={platillo} objeto={objeto} />
						</div>
					</div>
					<ColumnaValorUnitarioBtnDelete platillo={platillo} />
				</div>
			</div>
		</>
	);
};
export default memo(CardPlatillo);
