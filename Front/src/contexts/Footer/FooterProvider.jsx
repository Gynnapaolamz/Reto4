import React, { useState } from "react";
import FooterContext from "../Footer/FooterContext";
const FooterProvider = ({ children }) => {
	const [footer, setFooter] = useState(null);

	const handleChangeFooter = (valor) => {
		setFooter(valor);
	};

	const data = { footer, handleChangeFooter };

	return (
		<FooterContext.Provider value={data}>{children}</FooterContext.Provider>
	);
};

export default FooterProvider;
