import React from 'react';
//import "../../css/bootstrap.min.css";
//import "../../headers.css";
import {Link} from "react-router-dom";
import './Estilos.css';

const Footer = () => {
    return (
            <footer>
            <div class="container__footer">
                <div class="box__footer">
                    <div class="logo">
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/logo%402x.png?alt=media&token=9c78bbe4-fb8a-4c38-ae49-7775b60e917e" 
                            alt=""/>
                    </div>
                    <div class="terms">
                        <p>Restaurante Sal & Salsa Ltda <br></br>
                        
                            Calle 19 No. 7 - 30, Bogotá <br></br>
                           reservas@salysalsa.com <br></br>
                           31232525321  </p>
                    </div>
                </div>
                <div class="box__footer">
                    <h2>Mapa</h2>
                    <a href="https://www.google.com/maps/place/Cl.+19+%237-30,+Bogot%C3%A1/@4.6057972,-74.0740025,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3f99a1f30307cf:0xf863232d4608bc5b!8m2!3d4.6057919!4d-74.0718138?hl=es" target="_blank">
                    <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/mapa.png?alt=media&token=34d93c59-a316-4487-8f54-89d6e96a0b78"
                        width = "180"
                        height = "170"
                            /></a>  
                </div>
                <div class="box__footer">
                    <h2>Compañia</h2>
                    <Link to="/mapaSitio" >Mapa del sitio</Link>
                    <Link to="/contacto" >Contactanos</Link>
                    <Link to="/reservaLinea" >Reserva</Link>  
                          
                </div>
            </div>
            </footer>  
    )
}
export default Footer
