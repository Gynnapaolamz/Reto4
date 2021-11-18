import React,{Component,Fragment} from 'react';
import Encabezado from '../../componentes/encabezado/Encabezado';
import Footer from '../../componentes/footer/Footer';
import Producto from "../products";
import emailjs from 'emailjs-com';



const List = () => {
    var carrito = []
    const storage = JSON.parse(localStorage.getItem('carrito'));
      if(storage){
        carrito = storage
      }
    function hola(e){
        e.preventDefault();
        var nombre =e.target.name.value;
        var email =e.target.email.value;
        var tele =e.target.tel.value;
        var product = "";
        for(let i=0; i<carrito.length ; i++){
            product +="Producto:" + carrito[i].title + " Cantidad:" + carrito[i].cantidad + "\n";
        }
        const datos = {
            name: nombre,
            tel: tele,
            productos: product,
            mail: email,
        }
        
    emailjs.send('service_jemyoc1', 'template_qyaw2ap', datos, 'user_yAOlieKwjwT6J3Npcb3ck')
      .then((result) => {
          alert("Enviado");
          carrito = []
          localStorage.setItem('carrito', JSON.stringify(carrito));
          window.location.href = "/";
      }, (error) => {
          console.log(error.text);
        alert("Hubo un error");
      });
      //
      //
      
       
    }
    
      if(carrito.length > 0){
          return(
             <>
  
    <div className ="container">
          
              <form id="formulario_compra" onSubmit={hola}>
            <div className="row">
                <div className="col-4">
          <div class="form-floating mb-3">
              <input type="text" class="form-control" name="name" id="floatingNombre" placeholder="Nombre completo" required/>
              <label for="floatingNombre" class="form-label">Nombre completo</label>
          </div>
          </div>
          <div className="col-4">
          <div class="form-floating mb-3">
              <input type="email" class="form-control" name="email" id="floatingEmail" placeholder="name@example.com" required/>
              <label for="floatingEmail">Email</label>
          </div>
          </div>
          <div className="col-4">
          <div class="form-floating mb-3">
              <input type="tel" id="floatingPhone" name="tel" class="form-control"  placeholder="3108102962" pattern="[0-9]{10}" required/>
              <label for="floatingPhone">Telefono</label>
          </div>
          </div>

          
          <div className="col-12">
            <button type="submit" class="btn btn-primary">Comprar</button>
            
            </div>
            </div>
              </form>
              </div>
              <br></br>
             
             </> 
          )
      }else{
        return(
            <>
              <div className="display-2 d-flex justify-content-center">Ingrese un producto</div>
              <br></br>
            </> 
         )
      }
};

const ListServices = () => {
    var carrito = []
    const storage = JSON.parse(localStorage.getItem('carrito'));
      if(storage){
        carrito = storage
      }
    return (
      <>
        {carrito.map((data, id) => {
          return (
           
                <tr id={id} key={id}>
                <Producto
                     producto={data.title}
                     cantidad={data.cantidad}
                     precio={data.precio}
                     />
                </tr>
          );
        })}
      </>
    );
  };

class Carrito extends Component {    


    render(){

        return (
            <Fragment>
            <Encabezado/>
           
            <table class="table ">
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>---</th>
                </tr>

                <ListServices/>
              
                </table>
            <List/>
            <Footer/>
            </Fragment>
        );
    }
}

export default Carrito;