import React from "react";
import { AuthProvider } from "./contexts/Autentificacion/AuthContext";
// import MainContainer from "./componentes/pages/MainContainer";
import Router from "./routes/Router";
import "./index.css";

const App = () => {
	return (
		<>
			{/* <MainContainer /> */}
			<AuthProvider>
				<Router />
			</AuthProvider>
		</>
	);
};

export default App;
//
