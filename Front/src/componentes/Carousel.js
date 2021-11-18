import React, { Component } from "react";
import "../css/bootstrap.min.css";
import "../css/carrousel.css"
import {BrowserRouter as Router, 
    Route, 
    Switch, 
    Link} from "react-router-dom";

const Carousel = () => {
 
    return (
      
      <>
  
      <div className="container-inicio"> 
             
           <div className="container-cardini">
    <div className="card-inicio1" >
     <div className="imginicio">
       <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/img1.png?alt=media&token=f5b4e48c-647e-4670-85aa-32f33249fd4f" className="card-inicio" alt="inicio" width="450" height="450"/> 
             </div>
</div>
<div className="card-inicio2" >
  <div className="imginicio">
  <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/img2.png?alt=media&token=00916bce-108b-45ce-ac32-208c40fd254c" className="card-inicio" alt="incio1" width="450" height="450"/>
  </div>
</div>
 <Link to ="/nosotros"><img className="boton" src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/logomenu.png?alt=media&token=c6dab62a-9407-4527-9401-0159c9bdd80f" width="70" height="70"/></Link>
  </div>
  </div>   
      </>
    );
  }

export default Carousel;
