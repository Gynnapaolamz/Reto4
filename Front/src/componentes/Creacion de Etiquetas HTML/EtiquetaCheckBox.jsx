import React, { useContext } from "react";
import CantidadContext from "../../contexts/Inputs/InputsContext";
import { handleInputsChange } from "../Inputs/ValidacionCampos";

const EtiquetaCheckBox = ({ objeto }) => {
	const { inputs, cargarCampos, campoValido } = useContext(CantidadContext);

	if (objeto.checkBox_CallComponentBool) {
		return (
			<>
				<div
					className={
						inputs[`${objeto.checkBoxId}_${objeto.id}`]?.valor !== undefined
							? inputs[`${objeto.checkBoxId}_${objeto.id}`]?.valor === true
								? "formulario__grupo formulario__grupo-correcto"
								: "formulario__grupo formulario__grupo-incorrecto"
							: "formulario__grupo"
					}
					id={objeto.divIdGrupo}
				>
					<label className={objeto.labelClassName}>
						<input
							id={`${objeto.checkBoxId}_${objeto.id}`}
							type={objeto.checkBoxType}
							name={`${objeto.checkBoxId}_${objeto.id}`}
							value={inputs[`${objeto.checkBoxId}_${objeto.id}`]?.valor || true}
							onChange={(e) => {
								handleInputsChange(
									{ value: e.target.checked, name: e.target.name },
									cargarCampos,
									campoValido
								);
							}}
							className={objeto.checkBoxClassName}
						/>
						{objeto.labelText}
					</label>
				</div>
			</>
		);
	}
	return null;
};

export default EtiquetaCheckBox;
