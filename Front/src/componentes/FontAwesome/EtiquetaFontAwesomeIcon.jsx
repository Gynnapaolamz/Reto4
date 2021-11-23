import React, { memo } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const iconsFas = require("@fortawesome/free-solid-svg-icons");
const iconsFab = require("@fortawesome/free-brands-svg-icons");
const EtiquetaFontAwesomeIcon = (props) => {
	const {
		fontAwesomeIcon_CallComponentBool,
		atributosFontAwesomeIcon,
		fontAwesomeIcon_icon,
	} = props.objectArray;
	if (fontAwesomeIcon_CallComponentBool) {
		let clasNameFasFab = "";
		if (atributosFontAwesomeIcon.className.indexOf("fas") >= 0) {
			clasNameFasFab = "fas";
		}
		if (atributosFontAwesomeIcon.className.indexOf("fab") >= 0) {
			clasNameFasFab = "fab";
		}

		return (
			<FontAwesomeIcon
				{...atributosFontAwesomeIcon}
				icon={
					clasNameFasFab === "fas"
						? iconsFas[fontAwesomeIcon_icon]
						: iconsFab[fontAwesomeIcon_icon]
				}
			/>
		);
	}
	return null;
};

EtiquetaFontAwesomeIcon.propTypes = {
	objectArray: PropTypes.object,
};

export default memo(EtiquetaFontAwesomeIcon);
