import React from 'react';
import {BrowserRouter as Router,
        Switch,
        Route} from 'react-router-dom';
import {AuthProvider} from '../context/AuthContext';
import PrivateRoutes from '../../routes/PrivateRoutes';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import QuienesSomos from '../quienesSomos/QuienesSomos';
import Servicios from '../Servicios/Servicio';
import Contacto from '../Contactanos/Contactanos';
import Menu from '../Menu/ContainerMenu';
import Inicio from '../inicio/Inicio';
import Carrito from '../Carrito/CarritoCountainer';
import Mapa from '../Mapa/Mapa';
import Reserva from "../reserva"


const MainContainer = () =>{
    return (
        <div>
        <Router>
            <AuthProvider>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/inicio" component={Inicio}/>
                    <Route exact path="/" component={Inicio}/>
                    <PrivateRoutes exact path="/update-profile" component={UpdateProfile} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/forgot-password" component={ForgotPassword} />
                    <Route exact path="/nosotros"  component={QuienesSomos}/>
                    <Route exact path="/servicios"  component={Servicios}/>
                    <Route exact path="/contacto"  component={Contacto}/>
                    <Route exact path="/carrito"  component={Carrito}/>
                    <Route exact path="/menu" component={Menu}/>
                    <Route exact path="/mapaSitio" component={Mapa}/>
                    <Route exact path="/reservaLinea" component={Reserva}/>
                </Switch>
            </AuthProvider>
        </Router>
        </div>
    )
}

export default MainContainer;