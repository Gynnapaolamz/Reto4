import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

// import Contacto from "../componentes/Contacto";
import Carrito from "../views/Carrito";
import Inicio from "../views/Inicio";
import Layout from "../componentes/Layout/Layout";
import MapaSitio from "../views/MapaSito";
// import ForgotPassword from "../componentes/pages/ForgotPassword";
// import Login from "../componentes/pages/Login";
// import Signup from "../componentes/pages/Signup";
// import UpdateProfile from "../componentes/pages/UpdateProfile";
import Menu from "../views/Menu";
import QuienesSomos from "../views/QuienesSomos";
import Reserva from "../views/Reserva";
import Servicios from "../views/Servicios";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import ForgotPassword from "../views/ForgotPassword";

const routes = [
	// {
	// 	path: "/update-profile",
	// 	exact: true,
	// 	private: true,
	// 	component: UpdateProfile,
	// },
	// {
	// { path: "/contacto", exact: true, private: false, component: Contacto },

	{
		path: "/forgot-password",
		exact: true,
		private: false,
		component: ForgotPassword,
	},
	{ path: "/signup", exact: true, private: false, component: SignUp },
	{ path: "/login", exact: true, private: false, component: Login },
	{ path: "/carrito", exact: true, private: false, component: Carrito },
	{ path: "/mapa-sitio", exact: true, private: false, component: MapaSitio },
	{ path: "/menu", exact: true, private: false, component: Menu },
	{ path: "/reserva", exact: true, private: false, component: Reserva },
	{ path: "/servicios", exact: true, private: false, component: Servicios },
	{ path: "/nosotros", exact: true, private: false, component: QuienesSomos },
	{ path: "/inicio", exact: true, private: false, component: Inicio },
	{ path: "/", exact: true, private: false, component: Inicio },
];

const Router = () => {
	return (
		<>
			<HashRouter>
				<Layout>
					<Switch>
						{routes.map((route, i) =>
							route.private ? (
								<PrivateRoutes key={i} {...route} />
							) : (
								<RouteWithSubRoutes key={i} {...route} />
							)
						)}
					</Switch>
				</Layout>
			</HashRouter>
		</>
	);
};

const RouteWithSubRoutes = (route) => {
	return (
		<>
			<Route
				path={route.path}
				render={(props) => <route.component {...props} routes={route.routes} />}
			/>
		</>
	);
};

export default Router;
