import React from "react";
import Servicio from "./Servicio";
import { servicios } from "../services/servicios";
import "../css/bootstrap.min.css";
import "../css/imagen.css";

const ListServices = () => {
    return (
      <>
        {servicios.map((data, id) => {
          return (
            <div className="col">
                <div id={id} key={id}>
                <Servicio
                     servicio={data.servicio}
                     imagen={data.imagen}
                     />
                </div>
            </div>
          );
        })}
      </>
    );
  };

class ContainerServicios extends React.Component {

    render(){

        return (
            
            <>
               <div className="container-fluid">
               <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                    <h1 className="display-1"><strong>Servicios</strong></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum libero in ipsum dignissim sagittis. Curabitur vulputate nibh a ipsum porta lobortis. Phasellus hendrerit sem sit amet felis pretium luctus. Etiam placerat sem vel vestibulum semper. Suspendisse sed nisl consequat, commodo felis non, porttitor diam. Praesent justo leo, vehicula sed tellus eu, imperdiet dignissim magna. Proin ac fringilla orci. Morbi et urna quam. Nulla bibendum sagittis nunc. Morbi bibendum iaculis sodales.
                    Suspendisse blandit ullamcorper pretium. Pellentesque finibus dui ut dui condimentum auctor. In ut iaculis ligula. Nunc sollicitudin enim at diam sodales dapibus. Nam fringilla odio sit amet mi porta, blandit porta elit suscipit. 
        </div>
        <div class="col-12 col-md-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum libero in ipsum dignissim sagittis. Curabitur vulputate nibh a ipsum porta lobortis. Phasellus hendrerit sem sit amet felis pretium luctus. Etiam placerat sem vel vestibulum semper. Suspendisse sed nisl consequat, commodo felis non, porttitor diam. Praesent justo leo, vehicula sed tellus eu, imperdiet dignissim magna. Proin ac fringilla orci. Morbi et urna quam. Nulla bibendum sagittis nunc. Morbi bibendum iaculis sodales.
         
          Suspendisse blandit ullamcorper pretium. Pellentesque finibus dui ut dui condimentum auctor. In ut iaculis ligula. Nunc sollicitudin enim at diam sodales dapibus. Nam fringilla odio sit amet mi porta, blandit porta elit suscipit. 
        </div>
      </div>
            <div className="row row-cols-1 row-cols-sm-2 g-3" id="servicio">
             <ListServices/>
            </div>
            </div>
            <br></br>
            </>

        );
    }

}

export default ContainerServicios;