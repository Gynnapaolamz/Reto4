import React,{Component} from 'react'
import "../css/bootstrap.min.css";
import "../css/imagen.css";

class producto extends Component{

    constructor () {
        super();
        
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }

handleSubmit(e) {
    e.preventDefault();
    var carrito = [];
        const storage = JSON.parse(localStorage.getItem('carrito'));
          if(storage){
            carrito = storage
          }
    var producto = e.target.producto.value;
    for(let i=0; i<carrito.length ; i++){
  
        if(carrito[i].title.trim() === producto.trim()){
              carrito.splice(i, 1)
        }
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    window.location.href = window.location.href;
  }    

render(props){
    
    return (
        <> 
        <td>{this.props.producto}</td>
        <td>{this.props.cantidad}</td>
        <td>{this.props.precio}</td>
        <td>
        <form onSubmit={this.handleSubmit}>
        <input class="text" type="text" name="producto" value={this.props.producto} hidden/>
              <button type="submit">
               Borrar
              </button>
        </form>
        </td>
        </>
          );
  }

}

export default producto;