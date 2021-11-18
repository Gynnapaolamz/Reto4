import React,{Component,Fragment} from 'react';
import Encabezado from '../../componentes/encabezado/Encabezado';
import Footer from '../../componentes/footer/Footer';
import ContainerServicios from '../../componentes/ContainerServicios';

class Servicios extends Component {

    render(){

        return (
            <Fragment>
            <Encabezado/>
            <ContainerServicios/>          
            <Footer/>
            </Fragment>
        );
    }
}

export default Servicios;
