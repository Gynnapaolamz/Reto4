import React, { useState } from "react";
import NavBarContext from "./NavBarContext";

const NavBarProvider = ({ children }) => {
	const [navBar, setNavBar] = useState(null);

	const handleChangeNavBar = (valor) => {
		setNavBar(valor);
	};

	const data = { navBar, handleChangeNavBar };

	return (
		<NavBarContext.Provider value={data}>{children}</NavBarContext.Provider>
	);
};

export default NavBarProvider;
