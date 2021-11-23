import React from "react";
import "../componentes/Login/Styles/estilos-login.css";
import DatosInputsLogin from "../consts json/Login/DatosInputsLogin.json";
import Input from "../componentes/Inputs/Input";
import InputsProvider from "../contexts/Inputs/InputsProvider";
import ButtonLogin from "../componentes/Login/ButtonLogin";
import EtiquetaFontAwesomeIcon from "../componentes/FontAwesome/EtiquetaFontAwesomeIcon";
import { Link } from "react-router-dom";

const CardForm = () => {
	
	return (
		<>
			<div className="card card-principal-login">
				<div className="card-body">
					<div className="row d-flex justify-content-center mb-4">
						<h2 className="card-title my-5 text-center">INICIAR SESION</h2>
						<div className="col-lg-7 d-flex align-items-center justify-content-center">
							<img
								className="image-container"
								src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/login.svg?alt=media&token=5bf39ac9-acff-46b5-86f9-d192fdd048d1"
								alt="imagenSocial"
							/>
						</div>
						<div className="col-lg-5 d-flex justify-content-center login">
							<div className="card">
								<div className="card-img-top text-center my-5">
									<EtiquetaFontAwesomeIcon
										objectArray={{
											fontAwesomeIcon_CallComponentBool: true,
											atributosFontAwesomeIcon: {
												className: "fas",
												style: { fontSize: "180px" },
											},
											fontAwesomeIcon_icon: "faUserLock",
										}}
									/>
								</div>

								<div className="card-body">
									<form
										id="formulario_login"
										className="row formulario_login d-flex"
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
													<strong> ¿OLVIDASTE TU CONTRASEÑA? </strong>
													<Link
														className="nav-link d-inline"
														to="/forgot-password"
													>
														<span className="span">RECUPERAR CONTRASEÑA</span>
													</Link>
												</p>
												<p className="d-inline-block">
													<strong>
														¿YA ESTAS REGISTRADO?, ¿DESEAS REGISTRARTE?
													</strong>
													<Link className="nav-link d-inline" to="/signup">
														<span className="span">REGISTRAR</span>
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
