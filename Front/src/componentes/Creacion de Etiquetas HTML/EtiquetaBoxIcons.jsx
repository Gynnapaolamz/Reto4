import React from "react";

const EtiquetaBoxIcons = (props) => {
	const { boxIcons_CallComponentBool, atributosBoxIcons } = props.objectArray;
	if (boxIcons_CallComponentBool) {
		return (
			<>
				<i {...atributosBoxIcons}></i>
			</>
		);
	}
	return <></>;
};

export default EtiquetaBoxIcons;
