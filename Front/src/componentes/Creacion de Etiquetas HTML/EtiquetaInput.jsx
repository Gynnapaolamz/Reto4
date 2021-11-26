import React, { memo, useContext, useEffect } from "react";
import InputsContext from "../../contexts/Inputs/InputsContext";
import EtiquetaFontAwesomeIcon from "../FontAwesome/EtiquetaFontAwesomeIcon";
import { handleInputsChange } from "../Inputs/ValidacionCampos";

const Label = ({ objeto }) => {
	if (objeto.label_CallComponentBool) {
		return (
			<label
				htmlFor={`${objeto.labelHtmlFor}_${objeto.id}`}
				className={objeto.labelClassName}
			>
				{objeto.labelText}
			</label>
		);
	}
	return null;
};

const EtiquetaInput = ({ objeto, valorInicial }) => {
	const { inputs, cargarCampos, campoValido } = useContext(InputsContext);
	const nameInput = `${objeto.nameInput}_${objeto.id}`;

	useEffect(() => {
		if (
			objeto.nameComponente === "Carrito" ||
			objeto.nameComponente === "Menu"
		) {
			if (inputs[nameInput]?.valor === undefined) {
				cargarCampos(valorInicial, nameInput, true, {
					error: false,
					error1: false,
				});
			}
		}
	}, [objeto.nameComponente, cargarCampos, inputs, nameInput, valorInicial]);
	if (objeto.input_CallComponentBool) {
		return (
			<>
				<div
					className={
						inputs[`${objeto.nameInput}_${objeto.id}`]?.valor !== undefined
							? inputs[`${objeto.nameInput}_${objeto.id}`]?.error.error ===
									false &&
							  inputs[`${objeto.nameInput}_${objeto.id}`]?.error.error1 ===
									false
								? inputs[`${objeto.nameInput}_${objeto.id}`]?.campoValido
									? "formulario__grupo formulario__grupo-correcto"
									: "formulario__grupo"
								: "formulario__grupo formulario__grupo-incorrecto"
							: "formulario__grupo"
					}
					id={objeto.divIdGrupo}
				>
					<Label objeto={objeto} />
					<div className={objeto.divClassNameFormularioGrupoInput}>
						<input
							id={`${objeto.inputId}_${objeto.id}`}
							type={objeto.inputType}
							name={`${objeto.nameInput}_${objeto.id}`}
							value={inputs[`${objeto.nameInput}_${objeto.id}`]?.valor || ""}
							onChange={(e) => {
								e.preventDefault();
								handleInputsChange(e.target, cargarCampos, campoValido);
							}}
							onBlur={(e) => {
								e.preventDefault();
								handleInputsChange(e.target, cargarCampos, campoValido);
							}}
							className={
								inputs[`${objeto.nameInput}_${objeto.id}`]?.campoValido
									? `${objeto.inputClassName} formulario__input-check`
									: objeto.inputClassName
							}
							placeholder={objeto.inputPlaceHolder}
							disabled={objeto.inputDisabled}
							required
						/>

						<i className="d-flex align-items-center formulario__validacion-estado">
							<EtiquetaFontAwesomeIcon
								objectArray={{
									fontAwesomeIcon_CallComponentBool:
										objeto.fontAwesomeIcon_CallComponentBool,
									atributosFontAwesomeIcon: {
										className: objeto.fontAwesomeIcon_className,
									},
									fontAwesomeIcon_icon: inputs[
										`${objeto.nameInput}_${objeto.id}`
									]?.campoValido
										? "faCheckCircle"
										: "faTimesCircle",
								}}
							/>
						</i>
					</div>
					<p
						className={
							!inputs[`${objeto.nameInput}_${objeto.id}`]?.saber &&
							inputs[`${objeto.nameInput}_${objeto.id}`]?.error?.error1
								? "invalid-feedback formulario__input-error1-activo"
								: "invalid-feedback formulario__input-error1"
						}
					>
						{objeto.pFormularioInputError1Texto}
					</p>
					<p
						className={
							!inputs[`${objeto.nameInput}_${objeto.id}`]?.saber &&
							inputs[`${objeto.nameInput}_${objeto.id}`]?.error?.error
								? "invalid-feedback formulario__input-error-activo"
								: "invalid-feedback formulario__input-error"
						}
					>
						{objeto.pFormularioInputErrorTexto}
					</p>
				</div>
			</>
		);
	}
	return <></>;
};

export default memo(EtiquetaInput);
