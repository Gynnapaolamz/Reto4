import React from 'react';
import Plato from "../Plato";
import "../../css/Plato.css";
import { platos } from "../../services/platos";

const ListPlatos = () => {
    return (
      <>
        {platos.map((data, id) => {
          return (
            <>
                <div id={id} key={id}>
                <Plato
                    imagen = {data.imagen}
                     platoName={data.platoName}
                     descripcion={data.descripcion}
                     precio={data.precio}
                     />
                </div>
                </>
          );
        })}
      </>
    );
  };



const Menu = () => {
  return (
    <div className="container">
      <ListPlatos/>
    </div>
  )
}

export default Menu;