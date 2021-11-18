import React,{Component,} from 'react'
import "../../css/bootstrap.min.css";
import "./eventos.css";
import {BrowserRouter as Router, 
  Route, 
  Switch, 
  Link} from "react-router-dom";


const Eventos = () => {
    
     return (
      <>
        <div className="container">
         <div className="titulo even-style-imagen2" id="eventos" >
          <h1>Organizamos tu evento</h1>
          </div>
           <div className="container-card">
              <div className="card" >
              <div className="img">
       <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/icono1%402x.png?alt=media&token=2e7f9795-5a5a-465a-8c26-3d0b0449871a" className="card-img-top" alt="Logo1"/> </div>
  <div className="card-body">
    <h3>Fiestas Tematicas</h3>
    <p className="card-text">
      Contamos con las instalaciones para organizar tus eventos especiales, con la tematica e idea que desees.</p>
  </div>
  <Link to ="/servicios"><img className="boton" src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/boton.png?alt=media&token=3db803b4-252c-4020-92c4-ce589b53549a"/></Link>
</div>

<div className="card" >
  <div className="img">
  <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/icono2%402x.png?alt=media&token=c792a61e-800d-4e5a-ae11-43d4bf94b536" className="card-img-top" alt="Logo2"/> </div>
  <div className="card-body">
  <h3>Matrimonios</h3>
    <p className="card-text">Dejanos ser parte de este momento tan especial, organizando cada uno de los detalles para que sea el dia que soñaste siempre.</p>
  </div>
    <Link to ="/servicios"><img className="boton" src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/boton.png?alt=media&token=3db803b4-252c-4020-92c4-ce589b53549a" /></Link>
</div>
<div className="card" >
  <div className="img">
  <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/icono3%402x.png?alt=media&token=e3e73236-6302-4e85-bb59-cf537db3746b" className="card-img-top" alt="Logo3"/> </div>
  <div className="card-body">
    <h3>Cenas Empresariales</h3>
    <p className="card-text">Aqui puedes organizar tus eventos empresariales, comerciales y personales que requieras, con la mejor carta e instalaciones de la ciudad.</p>
      </div>
      <Link to ="/servicios"><img className="boton" src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/boton.png?alt=media&token=3db803b4-252c-4020-92c4-ce589b53549a" /></Link>
</div>
<div className="card" >
  <div className="img">
  <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/icono4%402x.png?alt=media&token=ba1ab669-2156-4e6f-a99f-5a95b63f01de" className="card-img-top" alt="Logo4"/> </div>
  <div class="card-body">
  <h3>Cumpleaños</h3>
    <p className="card-text">Sabemos que es un día importante, puedes disfrutar de una cena especial y luego complementarla con unas copas en compañia de tus seres queridos.</p>
      </div>
      <Link to ="/servicios"><img className="boton" src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/boton.png?alt=media&token=3db803b4-252c-4020-92c4-ce589b53549a" /></Link>
</div>
</div>
  </div>
          
            </> 
        );
      }

export default Eventos;