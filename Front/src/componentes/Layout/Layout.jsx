import React from "react";
import NavBarProvider from "../../contexts/NavBar/NavBarProvider";
import FooterProvider from "../../contexts/Footer/FooterProvider";
import NavBar from "../Barra de Navegacion/NavBar";
import MenuRedesSocialesFlotante from "../Barra de Navegacion/Efecto Fixed Top a NavBar y de Display a RedesSocialesFlotante/MenuRedesSocialesFlotante";
import ColPagarAhoraProvider from "../../contexts/Carrito/ColPagarAhoraProvider";
import Footer from "../Pie de Pagina/Footer";
import SideBarProvider from "../../contexts/SideBar/SideBarProvider";

import PlatoProvider from "../../contexts/Menu/PlatoProvider";
import ModalCrearEditarEliminarMenu from "../Menu/ModalCrudMenu/ModalCrearEditarEliminarMenu";
import ModalCrearEditarEliminarServicios from "../Servicios/ModalCrudServicios/ModalCrearEditarEliminarServicios";
import ModalEditarDescripcionServicios from "../Servicios/ModalEditarDescripcionServicio/ModalEditarDescripcionServicio";
import ServiciosProvider from "../../contexts/Servicios/ServiciosProvider";
import NosotrosProvider from "../../contexts/Nosotros/NosotrosProvider";
import EmpleadosProvider from "../../contexts/Nosotros/EmpleadosProvider";
import TestimoniosProvider from "../../contexts/Nosotros/TestimoniosProvider";
import ModalHistoria from "../Nosotros/ModalCrudNosotros/ModalHistoria";
import ModalEmpleados from "../Nosotros/ModalCrudNosotros/ModalEmpleados";
import ModalTestimonios from "../Nosotros/ModalCrudNosotros/ModalTestimonios";
// import Encabezado from "../encabezado/Encabezado";
// import Footer from "../footer/Footer";

const Layout = ({ children }) => {
	return (
		<>
			<NavBarProvider>
				<FooterProvider>
					<ColPagarAhoraProvider>
						<SideBarProvider>
							<NavBar />
							<ServiciosProvider>
								<PlatoProvider>
									<TestimoniosProvider>
										<EmpleadosProvider>
											<NosotrosProvider>
												{children}
												<ModalCrearEditarEliminarMenu />
												<ModalCrearEditarEliminarServicios />
												<ModalEditarDescripcionServicios />
												<ModalHistoria />
												<ModalEmpleados />
												<ModalTestimonios />
											</NosotrosProvider>
										</EmpleadosProvider>
									</TestimoniosProvider>
								</PlatoProvider>
							</ServiciosProvider>
							<Footer />
							<MenuRedesSocialesFlotante />
						</SideBarProvider>
					</ColPagarAhoraProvider>
				</FooterProvider>
			</NavBarProvider>
			{/* <Encabezado /> */}
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
