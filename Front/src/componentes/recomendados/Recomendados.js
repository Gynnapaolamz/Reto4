import React,{Component,} from 'react'
import "../../css/bootstrap.min.css";
import "./Recomendados.css";
import {Link} from "react-router-dom";

const Recomendados = () =>{
        return (
            <>
            <div className="container-reco">
         <div className="titulorec even-style-imagen2" id="eventos" >
          <h1>Recomendados del chef</h1>
          </div>
           <div className="container-card1">
    <div className="card1" >
     <div className="imgrec">
       <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/img3.png?alt=media&token=caa182a2-6e78-449b-a0fa-3b3dfb679e46" className="card-img-top" alt="Menu" width="225" height="225"/> 
       <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/img4.png?alt=media&token=8c0eb741-e3ba-48f0-a3d7-f26a400d4b00" className="card-img-top" alt="Menu2" width="225" height="225"/>
       </div>
</div>
<div className="card2" >
  <div className="imgrec">
  <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/img5.png?alt=media&token=810f5af4-358a-4e93-91b2-23d4bbeb2791" className="card-img-top" alt="Menu3" width="225" height="225"/>
  <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/img6.png?alt=media&token=d7466ef5-65e1-4693-8379-fed2b6aafba5" className="card-img-top" alt="Menu4" width="225" height="225"/>
  </div>
</div>
<div className="cardm" >
  <div className="imgmenu">
  <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/menu%402x.png?alt=media&token=a553b0ad-1631-4e04-83c9-10195a84d4e0" className="card-img-top" alt="Menup" width="100" height="400"/> 
  <Link to ="/menu"><img className="boton" src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/logomenu.png?alt=media&token=c6dab62a-9407-4527-9401-0159c9bdd80f" width="70" height="70"/></Link>
  </div>   
</div>
  </div>
  </div>           
</>       
);
}

export default Recomendados;