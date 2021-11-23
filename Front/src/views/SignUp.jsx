import React from "react";
import { Link } from "react-router-dom";
import "../componentes/SignUp/Styles/estilos-signup.css";

import EtiquetaFontAwesomeIcon from "../componentes/FontAwesome/EtiquetaFontAwesomeIcon";
import Input from "../componentes/Inputs/Input";
import DatosInputsSignUp from "../consts json/SignUp/DatosInputsSignUp.json";
import ButtonSignUp from "../componentes/SignUp/ButtonSignUp";
import InputsProvider from "../contexts/Inputs/InputsProvider";

const CardForm = () => {
	return (
		<>
			<div className="card card-principal-signup">
				<div className="card-body">
					<div className="row d-flex justify-content-center mb-4">
						<h2 className="card-title my-5 text-center">REGISTRAR</h2>
						<div className="col-lg-7 d-flex align-items-center justify-content-center">
							<img
								className="image-container"
								src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/login.svg?alt=media&token=5bf39ac9-acff-46b5-86f9-d192fdd048d1"
								alt="imagenSocial"
							/>
						</div>
						<div className="col-lg-5 d-flex justify-content-center signup">
							<div className="card">
								<div className="card-img-top text-center my-5">
									<EtiquetaFontAwesomeIcon
										objectArray={{
											fontAwesomeIcon_CallComponentBool: true,
											atributosFontAwesomeIcon: {
												className: "fas",
												style: { fontSize: "180px" },
											},
											fontAwesomeIcon_icon: "faUserPlus",
										}}
									/>
								</div>

								<div className="card-body">
									<form
										id="formulario_signup"
										className="row formulario_signup d-flex"
										noValidate
									>
										{DatosInputsSignUp.map((objeto, index) => {
											Object.assign(objeto, { id: index });
											return <Input key={index} objeto={objeto} />;
										})}
										<ButtonSignUp />
										<div className="col-lg-12 col-md-12 mt-2 text-center mb-3">
											<div className="formulario__grupo formulario__grupo-btn-enviar">
												<p className="d-inline-block">
													<strong> ¿YA TIENES CUENTA? </strong>
													<Link className="nav-link d-inline" to="/login">
														<span className="span">INICIAR SESION</span>
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

const SignUp = () => {
	return (
		<>
			<InputsProvider>
				<CardForm />
			</InputsProvider>
		</>
	);
};

export default SignUp;
