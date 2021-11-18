import React,{Component} from 'react'
//import "../css/bootstrap.min.css";
//import "../css/imagen.css";
import "../css/Plato.css";

const spanStyles = {

    width: '14rem'

  };
class Plato extends Component{

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
    var title =e.target.producto.value;
    var precio = e.target.precio.value;
    var cantidad = e.target.cantidad.value;
  
    var existe = false;
    var pos = 0;

    for(let i = 0; i < carrito.length; i++){
      if (carrito[i].title == title){
          existe = true; 
          pos = i;
      }
    }
    if(existe){
      carrito[pos].cantidad =  parseInt(carrito[pos].cantidad) + parseInt(cantidad);    
    }else{
      const newItem = {
        title: title,
        precio: precio,
        cantidad: cantidad
      }
      carrito.push(newItem);
    }    
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert("Producto agregado");
  }


 render(props){



    return (
        <>
       {/*
        <div className="card shadow mb-1 rounded" style={spanStyles}>
            <img src={this.props.imagen}  className="card-img-top imgSizeMenu" alt="card-grid-image"/>
            <div className="card-body">
              <h5 className="card-title">{this.props.platoName}</h5>
         
              <p className="card-text">${this.props.precio}
              </p>
              <form  onSubmit={this.handleSubmit}>
              <input class="text" type="text" name="producto" value={this.props.platoName} hidden/>
              <input class="text" type="text" name="precio" value={this.props.precio} hidden/>
              <input class="numero" type="number" name="cantidad" min="1"/>
              <br></br>
              <br></br>
              
              <button  type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Añadir al carrito
              </button>
              </form>
            </div>
          </div>
       */}

        <div className="cardEsta">
          <img src={this.props.imagen} alt={this.props.platoName}/>
          <h4>{this.props.platoName}</h4>
          <p>{this.props.descripcion}</p>
          <p>${this.props.precio}</p>
          <form onSubmit={this.handleSubmit}>
              <input class="text" type="text" name="producto" value={this.props.platoName} hidden/>
              <input class="text" type="text" name="precio" value={this.props.precio} hidden/>
              <input class="numero" type="number" name="cantidad" min="1"/>
              <br></br>
              <br></br>
              <button className="botonAñadir" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Añadir al carrito
              </button>
          </form>
        </div>
         
          </>
          )
}

}

export default Plato;