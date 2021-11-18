import React,{Component,Fragment} from 'react'

import Encabezado from '../../componentes/encabezado/Encabezado';
import Footer from '../../componentes/footer/Footer';
import Contacto from '../../componentes/Contacto';


class Contactanos extends Component {

    render(){

        return (
            <Fragment>
            <Encabezado/>
            <Contacto/>
            <Footer/>
            </Fragment>
);
}

}

export default Contactanos;
