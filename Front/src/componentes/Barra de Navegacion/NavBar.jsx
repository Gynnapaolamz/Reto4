import React, { memo, useContext, useEffect, useRef } from "react";
import ComponentEtiquetaLi from "../Creacion de Etiquetas HTML/EtiquetaLi";
import ComponentEtiquetaA from "../Creacion de Etiquetas HTML/EtiquetaA";
import FontAwsomeIcon from "../FontAwesome/EtiquetaFontAwesomeIcon";
import objectsUl from "../../consts json/Barra de Navegacion/objectsUl.json";
import objectRedesSociales from "../../consts json/Barra de Navegacion/objectRedesSociales.json";
import NavBarContext from "../../contexts/NavBar/NavBarContext";
import EtiquetaLink from "../Creacion de Etiquetas HTML/EtiquetaLink";
import { useAuth } from "../../contexts/Autentificacion/AuthContext";
import { sweetAlertPreguntarCerrarSesion } from "../../sweetAlert/SweetAlert";
import SideBar from "./Menu SideBar/SideBar";
import SideBarContext from "../../contexts/SideBar/SideBarContext";

const NavBar = () => {
	const refNavBar = useRef();

	const { handleChangeNavBar } = useContext(NavBarContext);
	const { sideBar, handleChangeHide } = useContext(SideBarContext);

	const { currentUser, logout } = useAuth();

	const State = useRef({
		sideBarCurrent: null,
	});

	useEffect(() => {
		State.current = {
			sideBarCurrent: sideBar,
		};
		handleChangeNavBar(refNavBar.current);
	}, [handleChangeNavBar, sideBar]);
	return (
		<>
			<nav
				id="menu"
				ref={refNavBar}
				className="navbar navbar-expand-lg  bg-red-600"
			>
				<div className="container-fluid">
					{objectsUl.imgLogo.li.map((imgLogoLi, index) => {
						return <EtiquetaLink key={index} objectArray={imgLogoLi} />;
					})}
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarScroll"
						aria-controls="navbarScroll"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<FontAwsomeIcon objectArray={objectsUl.fontAwesomeIcon} />
					</button>
					<div className="collapse navbar-collapse" id="navbarScroll">
						<ul {...objectsUl.datos.atributosUl}>
							{objectsUl.datos.li.map((objeto, index) => {
								// Object.assign(objeto.atributosLink, { id: `li_${index}` });
								if (objeto.li_name === "login") {
									if (currentUser) {
										objeto.li_CallComponentBool = false;
									} else {
										objeto.li_CallComponentBool = true;
									}
								}
								if (objeto.li_name === "signup") {
									if (currentUser) {
										objeto.li_CallComponentBool = true;
										Object.assign(objeto.atributosLi, {
											onClick: (e) => {
												e.preventDefault();
												handleChangeHide((hide) => (hide = !hide));
											},
										});
									} else {
										objeto.li_CallComponentBool = false;
									}
								}
								if (
									objeto.li_name === "signout" &&
									objeto.li_CallComponentBool === true
								) {
									if (currentUser) {
										objeto.li_CallComponentBool = true;
										Object.assign(objeto.atributosLi, {
											onClick: (e) => {
												e.preventDefault();
												sweetAlertPreguntarCerrarSesion(logout, objeto);
											},
										});
									} else {
										objeto.li_CallComponentBool = false;
									}
								}
								return <ComponentEtiquetaLi key={index} objectArray={objeto} />;
							})}
						</ul>
					</div>
				</div>
				<div
					id="redes-sociales-flotante"
					className="d-flex justify-content-end"
					style={{ zIndex: 1 }}
				>
					<section className="d-flex flex-column bg-red-800 redes-sociales">
						{objectRedesSociales.map((objeto, index) => {
							return <ComponentEtiquetaA key={index} objectArray={objeto} />;
						})}
					</section>
				</div>
			</nav>

			<SideBar />
		</>
	);
};

export default memo(NavBar);
