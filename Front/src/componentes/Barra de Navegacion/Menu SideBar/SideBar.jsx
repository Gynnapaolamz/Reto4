import React, { useContext, useEffect, useRef } from "react";
import { useAuth } from "../../../contexts/Autentificacion/AuthContext";
import SideBarContext from "../../../contexts/SideBar/SideBarContext";
import { sweetAlertPreguntarCerrarSesion1 } from "../../../sweetAlert/SweetAlert";
import "../Menu SideBar/Styles/estilos-sidebar.css";
import EtiquetaFontAwesomeIcon from "../../FontAwesome/EtiquetaFontAwesomeIcon";

const SideBar = () => {
	const refSideBar = useRef();

	const { handleChangeSideBar, hide } = useContext(SideBarContext);

	const { currentUser, logout } = useAuth();

	useEffect(() => {
		handleChangeSideBar(refSideBar.current);
	}, [handleChangeSideBar]);

	return (
		<>
			<div
				ref={refSideBar}
				className={`sidebar close ${currentUser && hide ? "" : "d-none"}`}
			>
				<ul className="nav-links">
					<li>
						<div className="div_icon_name">
							<i
								className="bx bx-grid-alt"
								style={{ pointerEvents: "all" }}
								onClick={(e) => {
									e.preventDefault();
									refSideBar.current.classList.toggle("close");
								}}
							/>
							<span
								className="link_name"
								style={{ pointerEvents: "all" }}
								onClick={(e) => {
									e.preventDefault();
									refSideBar.current.classList.toggle("close");
								}}
							>
								Dashboard
							</span>
						</div>
					</li>

					<li>
						<div className="iocn-link">
							<div className="div_icon_name">
								<i
									onClick={(e) => {
										e.preventDefault();
										refSideBar.current.classList.toggle("close");
									}}
								>
									<EtiquetaFontAwesomeIcon
										objectArray={{
											fontAwesomeIcon_CallComponentBool: true,
											atributosFontAwesomeIcon: {
												className: "fas",
											},
											fontAwesomeIcon_icon: "faUsers",
										}}
									/>
								</i>
								<span className="link_name">Quienes Somos</span>
							</div>
							<i
								className="bx bxs-chevron-down arrow"
								onClick={(e) => {
									e.preventDefault();
									e.target.parentElement.parentElement.classList.toggle(
										"showMenu"
									);
								}}
							/>
						</div>
						<ul className="sub-menu">
							<li>
								<a
									className="link_name"
									href="#!"
									style={{ pointerEvents: "none" }}
								>
									Quienes Somos
								</a>
							</li>
							<li>
								<a
									href="#!"
									data-bs-toggle="modal"
									data-bs-target="#ModalHistoria"
								>
									Editar información de nuestra historia
								</a>
							</li>
							<li>
								<a
									href="#!"
									data-bs-toggle="modal"
									data-bs-target="#ModalEmpleados"
								>
									Editar información de los empleados
								</a>
							</li>
							<li>
								<a
									href="#!"
									data-bs-toggle="modal"
									data-bs-target="#ModalTestimoniales"
								>
									Editar testimoniales
								</a>
							</li>
						</ul>
					</li>

					<li>
						<div className="div_icon_name">
							<i
								className="bx bxs-food-menu"
								onClick={(e) => {
									e.preventDefault();
									refSideBar.current.classList.toggle("close");
								}}
							/>
							<span
								className="link_name"
								style={{ width: "100%" }}
								data-bs-toggle="modal"
								href="#ModalCrearEditarEliminarPlato"
							>
								MENU
							</span>
						</div>
						<ul className="sub-menu blank">
							<li>
								<a
									className="link_name"
									href="#!"
									data-bs-toggle="modal"
									data-bs-target="#ModalCrearEditarEliminarPlato"
								>
									MENU
								</a>
							</li>
						</ul>
					</li>

					<li>
						<div className="iocn-link">
							<div className="div_icon_name">
								<i
									onClick={(e) => {
										e.preventDefault();
										refSideBar.current.classList.toggle("close");
									}}
								>
									<EtiquetaFontAwesomeIcon
										objectArray={{
											fontAwesomeIcon_CallComponentBool: true,
											atributosFontAwesomeIcon: {
												className: "fab",
											},
											fontAwesomeIcon_icon: "faServicestack",
										}}
									/>
								</i>
								<span className="link_name">SERVICIOS</span>
							</div>
							<i
								className="bx bxs-chevron-down arrow"
								onClick={(e) => {
									e.preventDefault();
									e.target.parentElement.parentElement.classList.toggle(
										"showMenu"
									);
								}}
							/>
						</div>
						<ul className="sub-menu">
							<li>
								<a
									className="link_name"
									href="#!"
									style={{ pointerEvents: "none" }}
								>
									SERVICIOS
								</a>
							</li>
							<li>
								<a
									href="#!"
									data-bs-toggle="modal"
									data-bs-target="#ModalEditarDescripcionServicios"
								>
									Editar descripcion servicio
								</a>
							</li>
							<li>
								<a
									href="#!"
									data-bs-toggle="modal"
									data-bs-target="#ModalCrearEditarEliminarServicios"
								>
									Editar servicios
								</a>
							</li>
						</ul>
					</li>

					<li>
						<div className="profile-details">
							<div
								className="profile-content"
								onClick={(e) => {
									e.preventDefault();
									refSideBar.current.classList.toggle("close");
								}}
							>
								<img
									src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/testimonio3%402x.png?alt=media&token=b16eb8a4-4972-41c7-8944-ba406e9ca6ad"
									alt="profileImg"
								/>
							</div>
							<div className="name-job">
								<div className="profile_name">Prem Shahi</div>
								<div className="job">Web Desginer</div>
							</div>
							<i
								className="bx bx-log-out"
								onClick={() => {
									sweetAlertPreguntarCerrarSesion1(logout);
								}}
								style={{ marginLeft: "26px" }}
							/>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
};

export default SideBar;
