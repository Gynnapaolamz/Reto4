import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../contexts/Autentificacion/AuthContext";
import InputsContext from "../../contexts/Inputs/InputsContext";
import { sweetAlert } from "../../sweetAlert/SweetAlert";
import { saberCamposVerdadero } from "./SignUp";

const ButtonSignUp = () => {
	const { signup } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const { reiniciarCampos, valido, reiniciarCampoValido } =
		useContext(InputsContext);

	const firebaseAuthErrors = {
		"auth/email-already-in-use":
			"LA DIRECCIÓN DE CORREO ELECTRONICO YA ESTÁ SIENDO UTILIZADA POR OTRA CUENTA.",
	};

	const handleSubmitInicioSesion = async () => {
		try {
			const usuario = valido["usuario"].name;
			const password = valido["password"].name;
			setError("");
			setLoading(true);
			await signup(usuario, password);
			reiniciarCampos();
			reiniciarCampoValido();
			sweetAlert(
				"center",
				"success",
				"",
				"SE REGISTRO EL USUARIO CON EXITO.",
				false,
				3000
			);
			history.push("/login");
		} catch (error) {
			console.log("error --- ", error);
			console.log("error.message --- ", error.message);
			console.log(error.code);
			sweetAlert(
				"center",
				"error",
				"ERROR",
				// "NO SE HA PDIDO REGISTRAR EL USUARIO.",
				firebaseAuthErrors[error.code],
				false,
				3000
			);
			setError(
				"NO SE HA PDIDO INICIAR SESION, POR FAVOR VERIFICA QUE EL USUARIO O PASSWORD SEAN CORRECTAS"
			);
		}
	};

	return (
		<>
			<div className="col-lg-12 col-md-12 mt-2 text-center mb-3">
				<div className="formulario__grupo formulario__grupo-btn-enviar">
					<button
						type="submit"
						className="formulario__btn"
						onClick={(e) => {
							e.preventDefault();
							console.log("valido -- ", valido);
							if (saberCamposVerdadero(valido)) {
								handleSubmitInicioSesion();
							}
						}}
					>
						REGISTRAR
					</button>
				</div>
			</div>
		</>
	);
};

export default ButtonSignUp;
