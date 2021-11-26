import React, { useContext } from "react";
import DatosInputsModalMenu from "../../../consts json/Nosotros/DatosInputsModalMenu.json";
import InputsProvider from "../../../contexts/Inputs/InputsProvider";
import PlatoContext from "../../../contexts/Menu/PlatoContext";
import EtiquetaFontAwesomeIcon from "../../FontAwesome/EtiquetaFontAwesomeIcon";
import Input from "../../Inputs/Input";
import "../Styles/estilos-menu-modal.css";
import ButtonModalCrearEditarEliminarMenu from "./ButtonModalCrearEditarEliminarMenu";
import ModalDescripcionProducto from "../../Menu/Modal Descripcion/ModalDescripcionProducto";
import CardModalPlato from "./CardModalPlato";

const CardsPlatos = () => {
	const { datosMenu } = useContext(PlatoContext);
	return (
		<>
			<div className="row card-hijo">
				{datosMenu.map((plato, index) => {
					Object.assign(plato, { idPlato: index });
					return <CardModalPlato key={index} plato={plato} />;
				})}
			</div>
		</>
	);
};

const CardForm = () => {
	const { formularioOcultoEditCrear, handleFormularioOcultoEditCrear } =
		useContext(PlatoContext);
	return (
		<>
			<div className="container card-principal-menu-modal">
				<div className="card card-menu-modal">
					<div className="card-body">
						<div className="row d-flex justify-content-center mb-4">
							<div
								className={`col-lg-8 d-flex mt-5 align-items-center justify-content-center ${
									formularioOcultoEditCrear.formularioEditCrear === "CREAR"
										? ""
										: "d-none"
								}`}
							>
								<button
									type="submit"
									className="formulario__btn-crear d-flex align-items-center justify-content-center"
									onClick={(e) => {
										e.preventDefault();
										console.log(
											"formularioOcultoEditCrear --- ",
											formularioOcultoEditCrear
										);
										const formCrearOcult = {
											formularioOculto: true,
											formularioEditCrear: "CREAR",
										};
										handleFormularioOcultoEditCrear(formCrearOcult);
										console.log(
											"formularioOcultoEditCrear --- ",
											formularioOcultoEditCrear
										);
									}}
								>
									<p style={{ fontSize: "20px" }}>CREAR PLATO</p>
									<EtiquetaFontAwesomeIcon
										objectArray={{
											fontAwesomeIcon_CallComponentBool: true,
											atributosFontAwesomeIcon: {
												className: "fas",
												style: { marginLeft: "11px", fontSize: "26px" },
											},
											fontAwesomeIcon_icon: "faPlusCircle",
										}}
									/>
								</button>
							</div>
							<div
								className={`col-lg-8 d-flex align-items-center justify-content-center flex-wrap ${
									formularioOcultoEditCrear?.formularioOculto ? "" : "d-none"
								} `}
							>
								<h2 className="card-title my-5 text-center">
									{formularioOcultoEditCrear.formularioEditCrear} PLATO
								</h2>
								<form
									id="formulario_menu-modal"
									className="row formulario_menu-modal d-flex"
									noValidate
								>
									{DatosInputsModalMenu.map((objeto, index) => {
										Object.assign(objeto, { id: index });
										return <Input key={index} objeto={objeto} />;
									})}
									<ButtonModalCrearEditarEliminarMenu />
								</form>
							</div>
							<div
								data-bs-spy="scroll"
								data-bs-target="#formulario_menu-modal"
								tabIndex="0"
								className="col-lg-12 d-flex align-items-center justify-content-center mt-5 scrollspy-example"
							>
								<CardsPlatos />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const ModalCrearEditarEliminarMenu = () => {
	return (
		<>
			<div
				className="modal fade"
				id="ModalCrearEditarEliminarPlato"
				tabIndex={-1}
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title d-flex align-items-center justify-content-center"
								style={{
									width: "100%",
									fontSize: "2.5rem",
									color: "#682828",
								}}
								id="exampleModalLabel"
							>
								MENU
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							/>
						</div>
						<div className="modal-body">
							<InputsProvider>
								<CardForm />
							</InputsProvider>
						</div>
					</div>
				</div>
			</div>
			<ModalDescripcionProducto />
		</>
	);
};

export default ModalCrearEditarEliminarMenu;
