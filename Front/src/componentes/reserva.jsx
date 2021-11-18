import React,{Component} from 'react'
import "../css/bootstrap.min.css";
import "../css/imagen.css";
const spanStyles = {

    height: '100px'

  };

class Reserva extends Component{

render(){

    return (
        <>
     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Reserva en linea</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form id="formulario">
      <div class="modal-body">
        <div class="form-floating mb-3">
          <select class="form-select" id="floatingServicio" aria-label="Floating label select example">
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
              <input type="text" class="form-control" id="floatingNombre" placeholder="Nombre completo" required/>
              <label for="floatingNombre" class="form-label">Nombre completo</label>
          </div>
          <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" required/>
              <label for="floatingEmail">Email</label>
          </div>
          <div class="form-floating mb-3">
              <input type="tel" id="floatingPhone" class="form-control"  placeholder="3108102962" pattern="[0-9]{10}" required/>
              <label for="floatingPhone">Telefono</label>
          </div>
          <div class="form-floating mb-3">
              <input type="number" id="floatingPersonas" class="form-control" min="1" placeholder="1" required/>
              <label for="floatingPersonas">Numero de personas</label>
          </div>
          <div class="form-floating mb-3">
              <input type="datetime-local" id="floatingReserva" class="form-control" required/>
              <label for="floatingReserva">Fecha/Hora</label>
          </div>
          <div class="form-floating mb-3">
              <textarea class="form-control" placeholder="Escriba su solicitud" id="floatingSolicitud" style={spanStyles}></textarea>
              <label for="floatingSolicitud">Solicitud adicional</label>
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="submit" class="btn btn-primary reserva">Enviar reserva</button>
      </div>
  </form>
    </div>
 
  </div>
</div>

          </>
          );
    

}

}

export default Reserva;