import React,{Component,Fragment} from 'react'
import Plato from "../Plato";
import Encabezado from '../../componentes/encabezado/Encabezado';
import Footer from '../../componentes/footer/Footer';
import Menu from './Menu';
//import { platos } from "../../services/platos";


const Menuuu = () => {
  return (
    <Menu/>
  )
}

class ContainerMenu extends Component {
    
    render(){

        return (
            <Fragment>
              <Encabezado/>
              <Menuuu />  
              <Footer />
            </Fragment>
);
}

}

export default ContainerMenu;