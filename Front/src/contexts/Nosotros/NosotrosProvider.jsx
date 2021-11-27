import React, { useState } from 'react';
import DatosNosotros from "../../consts json/Nosotros/DatosNosotros";
import NosotrosContext from "./NosotrosContext";

const NosotrosProvider = ({ children }) => {
    const initialModalHistoria = {
        titulo: DatosNosotros.datos.titulo,
        descripcion: DatosNosotros.datos.descripcion,
        imagen: DatosNosotros.datos.imgSrc,
    };
    const [modalHistoria, setModalHistoria] = useState(initialModalHistoria);

    const handleChangeModalHistoria = (valor) => {
        setModalHistoria(valor);
    };

    const data = {
        modalHistoria,
        handleChangeModalHistoria,
    }

    return (
        <NosotrosContext.Provider value={data} >{children}</NosotrosContext.Provider>
    );
};

export default NosotrosProvider;
