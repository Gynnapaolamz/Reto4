import React from "react";
import PropTypes from "prop-types";
const EtiquetaImg = (props) => {
	const { img_CallComponentBool, atributosImg, img_Alt } = props.objectArray;
	if (img_CallComponentBool === true) {
		return (
			<>
				<img {...atributosImg} alt={img_Alt} />
			</>
		);
	}
	return null;
};

EtiquetaImg.propTypes = {
	objectArray: PropTypes.object,
};

export default EtiquetaImg;
