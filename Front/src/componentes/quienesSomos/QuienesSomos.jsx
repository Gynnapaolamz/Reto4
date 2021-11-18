import React, { Fragment } from 'react'
import "./quienesSomos.css";
import Encabezado from '../../componentes/encabezado/Encabezado';
import Testimonials from '../../componentes/carrusel/Testimonials';
import Footer from '../../componentes/footer/Footer';
import Historia from '../../componentes/historia/Historia';
import Empleados from '../../componentes/empleados/Empleados';
import Comentarios from '../../componentes/comentarios/Comentarios';
import "../../css/bootstrap.min.css";

const QuienesSomos = () => {   
    
        return (
            <Fragment>
                <Encabezado/>
                <br></br>
                <Historia/>
                <br></br>
                <Empleados/>
                <Testimonials/>
                <div className="containerComments">
                <Comentarios
                    commentsUrl="http://localhost:3000/nosotros"
                    currentUserId="1"
                />
                </div>
                <Footer/>
            </Fragment>
        )
    
}

export default QuienesSomos;