import React,{Component, useState} from 'react'
import "./Encabezado.css";
import "../../css/bootstrap.min.css";
import ReactModal from 'react-modal';
import emailjs from 'emailjs-com';
import {Link} from "react-router-dom";
import Botones from './Botones';


    const spanStyles = {
        height: '100px'
      };
      const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: '10px',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };


class Encabezado extends Component{
    constructor () {
        super();
        this.state = {
          showModal: false
        };     
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
     
      handleSubmit(e) {
        e.preventDefault();
        emailjs.sendForm('service_jemyoc1', 'template_wwx52mv', e.target, 'user_yAOlieKwjwT6J3Npcb3ck')
          .then((result) => {
              //console.log(result.text);
              alert("Enviado");
          }, (error) => {
              console.log(error.text);
            alert("Hubo un error");
          });
          //e.target.reset();
          this.setState({ showModal: false });
        
      }
      handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }

    

render(props){
    return (
        <>
       
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg gridHeader">
                <div className="logoColum">
                    <Link to="/inicio"className="navbar-brand px-5">
                      <img 
                        src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/logo%402x.png?alt=media&token=9c78bbe4-fb8a-4c38-ae49-7775b60e917e"
                        width="100" 
                        height="80"/>
                      </Link>
                </div>
                <div className="container-fluid px-5">
                    <Link className="navbar-brand" to="/inicio">Inicio</Link>
                    <Link className="navbar-brand" to="/nosotros">Quienes Somos</Link> 
                    <Link className="navbar-brand" to="/servicios">Servicios</Link>
                    <Link className="navbar-brand" to="/contacto">Contactanos</Link>
                    
                    
                    <button className="navbar-brand disabled botonReserva" onClick={this.handleOpenModal} type="button">Reserva en linea </button> 
                    <Link className="navbar-brand" to="/menu"><img className="boton" src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/Logomblanco.png?alt=media&token=8f688227-b115-4177-aa38-0cc9d0e1ba90" width="40" height="40"/></Link>
                    <Link className="navbar-brand disabled" to="/carrito" tabindex="-1" aria-disabled="true">
                        <img 
                          src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/cart.png?alt=media&token=032bf9be-6539-4b1e-a411-e3fd840623e9"
                          width="40" 
                          height="40"/>
                        </Link>
                    <Link className="navbar-brand" to="/login">
                    <img 
                          src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/Inicio.png?alt=media&token=c1f50c04-5d95-4fb6-97f9-6c2d628f93ee"
                          width="40" 
                          height="40"/>
                    </Link>
                    <Botones/>
            </div>
        </nav>
        </div>
      
        <div>
          <ReactModal 
           isOpen={this.state.showModal}
           style={customStyles}>
          <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Reserva en linea</h5>
                  <button type="button" class="btn-close"  onClick={this.handleCloseModal}></button>
                </div>
                <form onSubmit={this.handleSubmit}>
                <div class="modal-body">
                  <div class="form-floating mb-3">
                    <select class="form-select" name = "servicio" id="floatingServicio" aria-label="Floating label select example">
                      <option selected="">Celebraciones de cumpleaños</option>
                      <option value="Aniversarios">Aniversarios</option>
                      <option value="Fiestas infantiles">Fiestas infantiles </option>
                      <option value="Declaraciones o apuestas">Declaraciones o apuestas</option>
                      <option value="Despedidas">Despedidas</option>
                      <option value="Cena de amigos">Cena de amigos</option>

                    </select>
                    <label for="floatingServicio">Servicio</label>
                  </div>
                  <div class="form-floating mb-3">
                      <input type="text" name ="name" class="form-control" id="floatingNombre" placeholder="Nombre completo" required/>
                      <label for="floatingNombre" class="form-label">Nombre completo</label>
                  </div>
                  <div class="form-floating mb-3">
                      <input type="email" name="mail" class="form-control" id="floatingEmail" placeholder="name@example.com" required/>
                      <label for="floatingEmail">Email</label>
                  </div>
                  <div class="form-floating mb-3">
                      <input type="tel" name ="telefono" id="floatingPhone" class="form-control"  placeholder="3108102962" pattern="[0-9]{10}" required/>
                      <label for="floatingPhone">Telefono</label>
                  </div>
                  <div class="form-floating mb-3">
                      <input type="number" name ="personas" id="floatingPersonas" class="form-control" min="1" placeholder="1" required/>
                      <label for="floatingPersonas">Numero de personas</label>
                  </div>
                  <div class="form-floating mb-3">
                      <input type="datetime-local" name ="fecha" id="floatingReserva" class="form-control" required/>
                      <label for="floatingReserva">Fecha/Hora</label>
                  </div>
                  <div class="form-floating mb-3">
                      <textarea class="form-control" name ="solicitud" placeholder="Escriba su solicitud" id="floatingSolicitud" style={spanStyles}></textarea>
                      <label for="floatingSolicitud">Solicitud adicional</label>
                  </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onClick={this.handleCloseModal}>Cerrar</button>
                <button type="submit" class="btn btn-primary">Enviar reserva</button>
              </div>
          </form>
            </div>
          </div>

        </ReactModal>
       </div> 

                </>
    )
}
}

export default Encabezado
