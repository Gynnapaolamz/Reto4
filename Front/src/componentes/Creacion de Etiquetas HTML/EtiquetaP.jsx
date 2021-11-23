import React from "react";
import PropTypes from "prop-types";

const EtiquetaP = (props) => {
	const { p_CallComponentBool, atributosP, p_texto } = props.objectArray;
	if (p_CallComponentBool === true) {
		return <p {...atributosP}>{p_texto}</p>;
	}
	return null;
};

EtiquetaP.propTypes = {
	objectArray: PropTypes.object,
};

export default EtiquetaP;
