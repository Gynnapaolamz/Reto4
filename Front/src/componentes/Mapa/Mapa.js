import React,{Component,Fragment} from 'react'
import Encabezado from '../../componentes/encabezado/Encabezado';
import Footer from '../../componentes/footer/Footer';
import "../../componentes/Mapa/mapa.css"
import "../../css/bootstrap.min.css";

import {BrowserRouter as Router, 
  Route, 
  Switch, 
  Link} from "react-router-dom";

const Mapa = () =>{
    


        return (
            <Fragment>
          <Encabezado/>
            <> 
            <div className="container-mapa">
        <h1>Mapa del sitio</h1>
      
        <ul className="nav-mapa nav-pills">
        <div className="container-mp">
          <li role="presentation"><Link className="navbar-brand2" to="/">Inicio</Link></li>
          <li role="presentation"><Link className="navbar-brand2" to="/nosotros">Quienes Somos</Link></li>
          <li role="presentation"><Link className="navbar-brand2" to="/menu">Menu</Link></li>
          <li role="presentation"><Link className="navbar-brand2" to="/servicios">Servicios</Link></li>
          <li role="presentation"><Link className="navbar-brand2" to="/contacto">Contactanos</Link></li>
          </div>
        </ul>
       
        <section id="sec1">
      
          <h2>Inicio</h2>
          <div className="row">
            <div className="col-md-3">
              <ul>
                <li><Link className="navbar-brand1" to="/">Nuestra Propuesta</Link></li>
                <li><Link className="navbar-brand1" to="/">Recomendados del Chef</Link></li>
                <li><Link className="navbar-brand1" to="/">Organiza tu Evento</Link></li>
                <li><Link className="navbar-brand1" to="/">Testimonios</Link></li>
                <li><Link className="navbar-brand1" to="/contacto">Contactanos</Link></li>
              </ul>
            </div>
        
          </div>
        </section>
        <section id="sec2">
      
          <h2>Quienes somos</h2>
          <div className="row">
            <div className="col-md-3">
              <ul>
                <li><Link className="navbar-brand1" to="/nosotros">Historia</Link></li>
                <li><Link className="navbar-brand1" to="/nosotros">Nuestro Personal </Link></li>
                <li><Link className="navbar-brand1" to="/nosotros">Testimonios</Link></li>
                <li><Link className="navbar-brand1" to="/contacto">Contactanos</Link></li>
              </ul>
            </div>
          </div>
        </section>
        <section id="sec3">
      
          <h2>Menu</h2>
          <div className="row">
            <div className="col-md-3">
              <ul>
                <li><Link className="navbar-brand1" to="/menu">Menu</Link></li>
                <li><Link className="navbar-brand1" to="/menu">Menu</Link></li>
                <li><Link className="navbar-brand1" to="/menu">Menu</Link></li>
                <li><Link className="navbar-brand1" to="/contacto">Contactanos</Link></li>
              </ul>
            </div>
          
          </div>
        </section>

        <section id="sec4">
          <h2>Servicios</h2>
          <div className="row">
            <div className="col-md-3">
              <ul>
                <li><Link className="navbar-brand1" to="/servicios">Servicios</Link></li>
                <li><Link className="navbar-brand1" to="/contacto">Contactanos</Link></li>
              </ul>
            </div>
      
          </div>
        </section>

        <section id="sec5">
          <h2>Contactanos</h2>
          <div className="row">
            <div className="col-md-3">
              <ul>
                <li><Link className="navbar-brand1" to="/contacto">Contactanos</Link></li>
                <li><Link className="navbar-brand1" to="/contacto">Contactanos</Link></li>
              </ul>
            </div>
      
          </div>
        </section>
            
      </div>
         </>
    <Footer/> 
   </Fragment>  
)
}



export default Mapa;