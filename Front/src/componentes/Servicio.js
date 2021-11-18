import React,{Component} from 'react'
import "../css/bootstrap.min.css";
import "../css/imagen.css";
import ReactModal from 'react-modal';
import emailjs from 'emailjs-com';
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


class Servicio extends Component{

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
        <div className="card">
            <img src={this.props.imagen} className="card-img-top imgSize" alt="card-grid-image"/>
            <div className="card-body">
              <h5 className="card-title">{this.props.servicio}</h5>
              <p className="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum libero in ipsum dignissim sagittis.
              </p>
              <button type="button" onClick={this.handleOpenModal} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Reserva en linea
              </button>
            </div>
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
          );
  }

}

export default Servicio;