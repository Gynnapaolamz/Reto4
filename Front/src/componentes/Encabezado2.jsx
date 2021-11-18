import React from 'react';
import "./encabezado/Encabezado.css";
import logo from "../media/logo@2x.png";
import cart from "../media/cart.png";
import "../css/bootstrap.min.css";
import {BrowserRouter as Router, 
    Route, 
    Switch, 
    Link} from "react-router-dom";

const Encabezado2 = () => {
    return (
       <div className="container grid2">
           <div>
               <Link to="/" className="navbar-brand px-5">
                   <img src={logo} width="89" height="70"/>
               </Link>
           </div>
           <div>
               <Link to="/" className="navbar-brand px-5">
               <button className="navbar-toggler" type="button">
                    Inicio
                </button>
               </Link>
           </div>
           <div>
               <Link to="/nosotros" className="navbar-brand px-5">
               <button className="navbar-toggler" type="button">
                    Quienes somos
                </button>
               </Link>
           </div>
           <div>
               <Link to="/menu" className="navbar-brand px-5">
               <button className="navbar-toggler" type="button">
                    Menú
                </button>
               </Link>
           </div>
           <div>
               <Link to="/servicios" className="navbar-brand px-5">
               <button className="navbar-toggler" type="button">
                    Servicios
                </button>
               </Link>
           </div>
           <div>
               <Link to="/contacto" className="navbar-brand px-5">
               <button className="navbar-toggler" type="button">
                    Contactanos
                </button>
               </Link>
           </div>
           <div>
               <Link to="/reservaLinea" className="navbar-brand px-5">
               <button className="navbar-toggler" type="button">
                    Reserva en linea
                </button>
               </Link>
           </div>
           <div>
               <Link to="/cart" className="navbar-brand px-5">
                   <img src={cart} width="18" height="18"/>
               </Link>
           </div>

       </div>
    )
}

export default Encabezado2
