import React from "react";
import PropTypes from "prop-types";
import ComponentEtiquetaA from "./EtiquetaA";
import EtiquetaLink from "./EtiquetaLink";

const EtiquetaLi = (props) => {
	const { li_CallComponentBool, atributosLi } = props.objectArray;
	if (li_CallComponentBool === true) {
		return (
			<>
				<li {...atributosLi}>
					<ComponentEtiquetaA objectArray={props.objectArray} />
					<EtiquetaLink objectArray={props.objectArray} />
				</li>
			</>
		);
	}
	return null;
};

EtiquetaLi.propTypes = {
	objectArray: PropTypes.object,
};

export default EtiquetaLi;
