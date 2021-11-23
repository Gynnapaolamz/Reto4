import React, { useContext } from "react";
import EtiquetaFontAwesomeIcon from "../FontAwesome/EtiquetaFontAwesomeIcon";
import Flatpickr from "react-flatpickr";
import { handleInputsChange } from "../Inputs/ValidacionCampos";

import { config_fecha, config_hora } from "../Reserva/flatpickr";
import CantidadContext from "../../contexts/Inputs/InputsContext";

const EtiquetaFlatPickr = ({ objeto }) => {
	const { inputs, cargarCampos, campoValido } = useContext(CantidadContext);

	if (objeto.flatPickr_CallComponentBool) {
		return (
			<>
				<div
					className={
						inputs[`${objeto.nameFlatPickr}_${objeto.id}`]?.valor !== undefined
							? inputs[`${objeto.nameFlatPickr}_${objeto.id}`]?.error.error ===
									false &&
							  inputs[`${objeto.nameFlatPickr}_${objeto.id}`]?.error.error1 ===
									false
								? inputs[`${objeto.nameFlatPickr}_${objeto.id}`]?.campoValido
									? "formulario__grupo formulario__grupo-correcto"
									: "formulario__grupo"
								: "formulario__grupo formulario__grupo-incorrecto"
							: "formulario__grupo"
					}
					id={objeto.divIdGrupo}
				>
					<label
						htmlFor={`${objeto.labelHtmlFor}_${objeto.id}`}
						className={objeto.labelClassName}
					>
						{objeto.labelText}
					</label>

					<div className={objeto.divClassNameFormularioGrupoInput}>
						<Flatpickr
							id={`${objeto.flatPickrId}_${objeto.id}`}
							name={`${objeto.nameFlatPickr}_${objeto.id}`}
							options={
								objeto.flatPickrOptions === "config_fecha"
									? config_fecha
									: config_hora
							}
							value={
								inputs[`${objeto.nameFlatPickr}_${objeto.id}`]?.valor || ""
							}
							onBlur={(e) => {
								e.preventDefault();
								handleInputsChange(e.target, cargarCampos, campoValido);
							}}
							className={
								inputs[`${objeto.nameFlatPickr}_${objeto.id}`]?.campoValido
									? `${objeto.flatPickrClassName} formulario__input-check`
									: objeto.flatPickrClassName
							}
							placeholder={objeto.flatPickrPlaceHolder}
							required
						/>
						<i className="d-flex align-items-center formulario__validacion-estado">
							<EtiquetaFontAwesomeIcon
								objectArray={{
									fontAwesomeIcon_CallComponentBool: true,
									atributosFontAwesomeIcon: {
										className: "fas",
									},
									fontAwesomeIcon_icon: inputs[
										`${objeto.nameFlatPickr}_${objeto.id}`
									]?.campoValido
										? "faCheckCircle"
										: "faTimesCircle",
								}}
							/>
						</i>
					</div>
					<p
						className={
							inputs[`${objeto.nameFlatPickr}_${objeto.id}`]?.valor !==
							undefined
								? !inputs[`${objeto.nameFlatPickr}_${objeto.id}`]?.saber &&
								  inputs[`${objeto.nameFlatPickr}_${objeto.id}`]?.error?.error1
									? "invalid-feedback formulario__input-error1-activo"
									: "invalid-feedback formulario__input-error1"
								: "invalid-feedback formulario__input-error1"
						}
					>
						{objeto.pFormularioInputError1Texto}
					</p>
					<p
						className={
							inputs[`${objeto.nameFlatPickr}_${objeto.id}`]?.valor !==
							undefined
								? !inputs[`${objeto.nameFlatPickr}_${objeto.id}`]?.saber &&
								  inputs[`${objeto.nameFlatPickr}_${objeto.id}`]?.error?.error
									? "invalid-feedback formulario__input-error-activo"
									: "invalid-feedback formulario__input-error"
								: "invalid-feedback formulario__input-error1"
						}
					>
						{objeto.pFormularioInputErrorTexto}
					</p>
				</div>
			</>
		);
	}
	return null;
};

export default EtiquetaFlatPickr;
