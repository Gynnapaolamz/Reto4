import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../contexts/Autentificacion/AuthContext";
import InputsContext from "../../contexts/Inputs/InputsContext";
import { sweetAlert } from "../../sweetAlert/SweetAlert";
import { saberCamposVerdadero } from "./Login";

const ButtonLogin = () => {
	const { login } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const { reiniciarCampos, valido, reiniciarCampoValido } =
		useContext(InputsContext);
	const firebaseAuthErrors = {
		"auth/user-not-found":
			"No hay ningún registro de usuario que corresponda a este identificador. Es posible que se haya eliminado al usuario. ".toUpperCase(),
		"auth/wrong-password":
			"La contraseña no es válida o el usuario no tiene contraseña.".toUpperCase(),
		"auth/too-many-requests":
			"El acceso a esta cuenta se ha desactivado temporalmente debido a muchos intentos fallidos de inicio de sesión. Puede restaurarlo inmediatamente restableciendo su contraseña o puede intentarlo de nuevo más tarde.".toUpperCase(),
	};
	const handleSubmitInicioSesion = async () => {
		try {
			const usuario = valido["usuario"].name;
			const password = valido["password"].name;
			setError("");
			setLoading(true);
			await login(usuario, password);
			reiniciarCampos();
			reiniciarCampoValido();
			sweetAlert("center", "success", "", "SESION INICIADA.", false, 1500);
			history.push("/inicio");
		} catch (error) {
			console.log("error --- ", error);
			const err = firebaseAuthErrors[error.code];
			sweetAlert(
				"center",
				"error",
				"ERROR",
				// "NO SE HA PDIDO INICIAR SESION, POR FAVOR VERIFICA QUE EL USUARIO O CONTRASEÑA SEAN CORRECTAS",
				err || error.message,
				false,
				3000
			);
			setError(err || error.message);
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
						INICIAR SESION
					</button>
				</div>
			</div>
		</>
	);
};

export default ButtonLogin;
