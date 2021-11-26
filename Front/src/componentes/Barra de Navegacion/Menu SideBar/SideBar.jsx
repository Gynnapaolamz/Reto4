import React, { useContext, useEffect, useRef } from "react";
import { useAuth } from "../../../contexts/Autentificacion/AuthContext";
import SideBarContext from "../../../contexts/SideBar/SideBarContext";
import { sweetAlertPreguntarCerrarSesion1 } from "../../../sweetAlert/SweetAlert";
import "../Menu SideBar/Styles/estilos-sidebar.css";

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
									className="bx bx-collection"
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
									Category
								</span>
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
									Category
								</a>
							</li>
							<li>
								<a href="#!">HTML &amp; CSS</a>
							</li>
							<li>
								<a href="#!">JavaScript</a>
							</li>
							<li>
								<a href="#!">PHP &amp; MySQL</a>
							</li>
						</ul>
					</li>

					<li>
						<div className="iocn-link">
							<div className="div_icon_name">
								<i
									className="bx bx-book-alt"
									style={{ pointerEvents: "all" }}
									onClick={(e) => {
										e.preventDefault();
										refSideBar.current.classList.toggle("close");
									}}
								/>
								<span
									className="link_name"
									style={{
										pointerEvents: "all",
									}}
									onClick={(e) => {
										e.preventDefault();
										refSideBar.current.classList.toggle("close");
									}}
								>
									Posts
								</span>
							</div>
							<i
								className="bx bxs-chevron-down arrow"
								onClick={(e) => {
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
									Posts
								</a>
							</li>
							<li>
								<a href="#!">Web Design</a>
							</li>
							<li>
								<a href="#!">Login Form</a>
							</li>
							<li>
								<a href="#!">Card Design</a>
							</li>
						</ul>
					</li>

					<li>
						<div className="div_icon_name">
							<i
								className="bx bxs-food-menu"
								style={{ pointerEvents: "all" }}
								onClick={(e) => {
									e.preventDefault();
									refSideBar.current.classList.toggle("close");
								}}
							/>
							<span
								className="link_name"
								style={{
									width: "100%",
								}}
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
									style={{ pointerEvents: "all" }}
								>
									MENU
								</a>
							</li>
						</ul>
					</li>

					<li>
						<div className="div_icon_name">
							<i
								className="bx bx-line-chart"
								onClick={(e) => {
									e.preventDefault();
									refSideBar.current.classList.toggle("close");
								}}
							/>
							<span
								className="link_name"
								onClick={(e) => {
									e.preventDefault();
									alert("Chart");
								}}
							>
								Chart
							</span>
						</div>
						<ul className="sub-menu blank">
							<li>
								<a
									className="link_name"
									href="#!"
									style={{ pointerEvents: "none" }}
								>
									Chart
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
							/>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
};

export default SideBar;
