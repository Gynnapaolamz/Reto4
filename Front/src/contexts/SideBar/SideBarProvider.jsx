import React, { useState } from "react";
import SideBarContext from "./SideBarContext";

const SideBarProvider = ({ children }) => {
	const [sideBar, setSideBar] = useState(null);
	const [hide, setHide] = useState(true);

	const handleChangeSideBar = (valor) => {
		setSideBar(valor);
	};
	const handleChangeHide = (valor) => {
		setHide(valor);
	};

	const data = { sideBar, handleChangeSideBar, hide, handleChangeHide };
	return (
		<SideBarContext.Provider value={data}>{children}</SideBarContext.Provider>
	);
};

export default SideBarProvider;
