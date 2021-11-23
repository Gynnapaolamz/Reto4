import React, { useContext, useEffect, useRef } from "react";
import ColPagarAhoraContext from "../../contexts/Carrito/ColPagarAhoraContext";
import InputsContext from "../../contexts/Inputs/InputsContext";

const ColumnaPagarAhora = () => {
	const { totalCarrito } = useContext(InputsContext);
	const refColPagarAhora = useRef();
	const { handleChangeColPagarAhora } = useContext(ColPagarAhoraContext);
	useEffect(() => {
		handleChangeColPagarAhora(refColPagarAhora.current);
	}, [handleChangeColPagarAhora]);
	return (
		<>
			<div
				id="col_pagar-ahora"
				ref={refColPagarAhora}
				className={`col-lg-4 col-md-12 d-flex align-items-center mb-5 d-none`}
				style={{ marginTop: 0 }}
			>
				<div className="card-body">
					<div
						className="card-text py-4"
						style={{
							borderRadius: 19,
							background: "#dedede",
							boxShadow: "5px 5px 5px #bdbdbd, -5px -5px 5px #ffffff",
							zIndex: "0 !important",
						}}
					>
						<div className="row my-4 mb-4 d-flex justify-content-center align-items-center row-total">
							<div
								className="col fs-3 px-auto"
								style={{
									color: "#5f2018",
									fontFamily: "fantasy",
									maxWidth: 90,
									padding: "0%",
								}}
							>
								TOTAL
							</div>

							<div
								className="col fs-3 px-auto"
								style={{
									color: "#5f2018",
									fontFamily: "fantasy",
									maxWidth: 25,
									padding: "0%",
									margin: "0%",
								}}
							>
								:
							</div>
							<div
								id="total-carrito"
								className="col fs-3 px-auto"
								style={{
									color: "#5f2018",
									fontFamily: "fantasy",
									maxWidth: "100%",
								}}
							>
								{totalCarrito}
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12 col-md-12 d-flex align-items-center justify-content-center">
								<button
									id="pagar"
									type="button"
									className="btn py-2 px-4 fs-4 fw-bold"
									style={{
										backgroundColor: "#fd7e14",
										color: "#ffffff",
									}}
									data-bs-toggle="modal"
									data-bs-target="#exampleModal"
								>
									PAGAR AHORA
								</button>
							</div>
						</div>
						<br />
					</div>
				</div>
			</div>
		</>
	);
};

export default ColumnaPagarAhora;
