import React, { Component } from 'react'
import "../../css/bootstrap.min.css";

const Empleados = (props) => {
    return (  
        <div>
            <main className="colorMain">
                <div className="container marketing tope">
                    <div className="row">
                        <div className="col-lg-4">
                            <img 
                                src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/personal1%402x.png?alt=media&token=4a4e74dd-abc5-4816-9f6c-007c5d0f39a7"
                                className="bd-placeholder-img rounded-circle bordes" 
                                width="140" 
                                height="140"/>
                            <h2 className="nombres"><b>Juan Manuel Gómez B.</b></h2>
                            <p className="cargos"><b>Chef ejecutivo</b></p>
                        </div>
                        <div className="col-lg-4">
                            <img 
                                src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/personal2%402x.png?alt=media&token=f70a7f11-ca72-43d4-a68a-907248bceea1"
                                className="bd-placeholder-img rounded-circle bordes" 
                                width="140" 
                                height="140"/>
                            <h2 className="nombres"><b>Ana Isabel Casallas B.</b></h2>
                            <p className="cargos"><b>Chef pastelera</b></p>
                        </div>
                        <div className="col-lg-4">
                            <img 
                                src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/personal3%402x.png?alt=media&token=1aee5927-4782-4eb2-a955-0d5ed74b89ac"
                                className="bd-placeholder-img rounded-circle bordes" 
                                width="140" 
                                height="140"/>
                            <h2 className="nombres"><b>María Paulina Veloza G.</b></h2>
                            <p className="cargos"><b>Administradora</b></p>
                        </div>
                    </div>
                
                    <div className="container marketing">
                        <div class="row">
                            <div class="col-lg-4">
                                <img 
                                    src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/personal4%402x.png?alt=media&token=b2ee8130-1893-4109-ad54-8e066e752ea0"
                                    className="bd-placeholder-img rounded-circle bordes" 
                                    width="140" 
                                    height="140"/>
                                <h2 className="nombres"><b>Camila Andrea Diaz Z.</b></h2>
                                <p className="cargos"><b>Recepcionista</b></p>
                            </div>
                            <div class="col-lg-4">
                                <img 
                                    src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/personal5%402x.png?alt=media&token=843abacb-06e7-4937-aefe-69f64fdb17c1"
                                    className="bd-placeholder-img rounded-circle bordes" 
                                    width="140" 
                                    height="140"/>
                                <h2 className="nombres"><b>Fabián Andres Jaramillo P.</b></h2>
                                <p className="cargos"><b>Mesero</b></p>
                            </div>
                            <div class="col-lg-4">
                                <img 
                                    src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/personal6%402x.png?alt=media&token=bf96deda-c96f-4458-a9c8-6c122adb31d2"
                                    className="bd-placeholder-img rounded-circle bordes" 
                                    width="140" 
                                    height="140"/>
                                <h2 className="nombres"><b>José Manuel Manosalva J.</b></h2>
                                <p className="cargos"><b>Mesero</b></p>
                            </div>
                        </div>
                    </div>      
                </div>          
            </main>
        </div>
    );
}
 
export default Empleados;