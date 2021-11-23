import React from "react";
import { Link } from "react-router-dom";
import "../componentes/MapaSitio/Styles/estilos-mapa-sitio.css";

const MapaSito = () => {
	return (
		<>
			<div id="mapaSitio" className="container mt-5 mb-2">
				<div className="mx-auto mb-5">
					<h1 className="h1_titulo">
						<center>Mapa del sitio</center>
					</h1>
				</div>

				<div className="row mb-2">
					<div className="col-lg-3 mb-3">
						<li
							className="nav-item d-flex align-items-center justify-content-center mb-3"
							type="button"
						>
							<Link className="link_vistas" role="button" to="/inicio">
								INICIO
							</Link>
						</li>
						<ul>
							<li>NUESTRA PROPUESTA</li>
							<li>RECOMENDADO DEL CHEF</li>
							<li>ORGANIZAMOS TU EVENTO</li>
							<li>TESTIMONIOS</li>
						</ul>
					</div>

					<div className="col-lg-3">
						<li
							className="nav-item d-flex align-items-center justify-content-center"
							type="button"
						>
							<Link className="link_vistas" role="button" to="/nosotros">
								QUIENES SOMOS
							</Link>
						</li>
						<ul>
							<li>NUESTRA HISTORIA</li>
							<li>PLANTILLA DE COLABORADORES</li>
							<li>TESTIMONIOS</li>
						</ul>
					</div>
					<div className="col-lg-3">
						<li
							className="nav-item d-flex align-items-center justify-content-center"
							type="button"
						>
							<Link className="link_vistas" role="button" to="/menu">
								MENÚ
							</Link>
						</li>
					</div>
					<div className="col-lg-3">
						<li
							className="nav-item d-flex align-items-center justify-content-center"
							type="button"
						>
							<Link className="link_vistas" role="button" to="/servicios">
								SERVICIOS
							</Link>
						</li>
						<ul>
							<li>CELEBRACIÓN DE CUMPLEAÑOS</li>
							<li>ANIVERSARIO</li>
							<li>FIESTAS INFANTILES</li>
							<li>DECLARACIONES O PROPUESTA</li>
							<li>DESPEDIDAS</li>
							<li>CENA CON AMIGOS</li>
						</ul>
					</div>
					<div className="col-lg-3 text-center">
						<li
							className="nav-item d-flex align-items-center justify-content-center"
							type="button"
						>
							<Link className="link_vistas" role="button" to="/reserva">
								RESERVA
							</Link>
						</li>
						<ul>
							<li>HAZ TU RESERVA ¡YA!</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default MapaSito;
