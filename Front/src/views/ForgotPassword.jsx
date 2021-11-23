import React from "react";
import { Link } from "react-router-dom";
import "../componentes/ForgotPassword/Styles/estilos-forgot-password.css";
import DatosInputsLogin from "../consts json/ForgotPassword/DatosInputsForgotPassword.json";
import Input from "../componentes/Inputs/Input";
import InputsProvider from "../contexts/Inputs/InputsProvider";
import ButtonLogin from "../componentes/ForgotPassword/ButtonForgotPassword";
import EtiquetaFontAwesomeIcon from "../componentes/FontAwesome/EtiquetaFontAwesomeIcon";

const CardForm = () => {
	return (
		<>
			<div className="card card-principal-forgot-password">
				<div className="card-body">
					<div className="row d-flex justify-content-center mb-4">
						<h2 className="card-title my-5 text-center">
							RESTAURAR CONTRASEÑA
						</h2>
						<div className="col-lg-7 d-flex align-items-center justify-content-center">
							<img
								className="image-container"
								src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/login.svg?alt=media&token=5bf39ac9-acff-46b5-86f9-d192fdd048d1"
								alt="imagenSocial"
							/>
						</div>
						<div className="col-lg-5 d-flex justify-content-center forgot-password">
							<div className="card">
								<div className="card-img-top text-center my-5">
									<EtiquetaFontAwesomeIcon
										objectArray={{
											fontAwesomeIcon_CallComponentBool: true,
											atributosFontAwesomeIcon: {
												className: "fas",
												style: { fontSize: "180px" },
											},
											fontAwesomeIcon_icon: "faUserEdit",
										}}
									/>
								</div>

								<div className="card-body">
									<form
										id="formulario_forgot-password"
										className="row formulario_forgot-password d-flex"
										noValidate
									>
										{DatosInputsLogin.map((objeto, index) => {
											Object.assign(objeto, { id: index });
											return <Input key={index} objeto={objeto} />;
										})}
										<ButtonLogin />
										<div className="col-lg-12 col-md-12 mt-2 text-center mb-3">
											<div className="formulario__grupo formulario__grupo-btn-enviar">
												<p className="d-inline-block">
													<Link className="nav-link d-inline" to="/login">
														<span className="span">REGRESAR</span>
													</Link>
												</p>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
const Login = () => {
	return (
		<>
			<InputsProvider>
				<CardForm />
			</InputsProvider>
		</>
	);
};

export default Login;
