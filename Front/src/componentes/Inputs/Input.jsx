import React, { memo } from "react";

import EtiquetaInput from "../Creacion de Etiquetas HTML/EtiquetaInput";
import EtiquetaSelect from "../Creacion de Etiquetas HTML/EtiquetaSelect";
import EtiquetaFlatPickr from "../Creacion de Etiquetas HTML/EtiquetaFlatPickr";
import EtiquetaTextArea from "../Creacion de Etiquetas HTML/EtiquetaTextArea";
import EtiquetaCheckBox from "../Creacion de Etiquetas HTML/EtiquetaCheckBox";

const saberCampo = (objeto, valorInicial) => {
	if (objeto.input_CallComponentBool) {
		return <EtiquetaInput objeto={objeto} valorInicial={valorInicial} />;
	} else if (objeto.select_CallComponentBool) {
		return <EtiquetaSelect objeto={objeto} />;
	} else if (objeto.flatPickr_CallComponentBool) {
		return <EtiquetaFlatPickr objeto={objeto} />;
	} else if (objeto.textArea_CallComponentBool) {
		return <EtiquetaTextArea objeto={objeto} />;
	} else if (objeto.checkBox_CallComponentBool) {
		return <EtiquetaCheckBox objeto={objeto} />;
	}
	return null;
};

const Input = ({ objeto, valorInicial }) => {
	return (
		<>
			<div className={objeto.divClassNameCol}>
				{saberCampo(objeto, valorInicial)}
			</div>
		</>
	);
};

export default memo(Input);
