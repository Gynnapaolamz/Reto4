import React,{Component} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Imput, Label} from "reactstrap";


class Modalplatos extends Component{ 
    state= {
        abierto: false,
    }
    abrirModal=()=> {
        this.setState({abierto: !this.state.abierto});
    }
   
    render(){
        const modalStyles={
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, 50%)",
        }
    return (
         <>
         <div className="ptincipal">
             <div className="secundario">
             <Button onClick={this.abrirModal}>
             <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/boton.png?alt=media&token=3db803b4-252c-4020-92c4-ce589b53549a"/>
         </Button>

             </div>

         </div>
         

         <Modal className="Camarones" isOpen={this.state.abierto} style={modalStyles}>
             <ModalHeader>
                 <h5>Camarones</h5>
             </ModalHeader>

             <ModalBody>
                 <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/camarones.jpg?alt=media&token=5f17383a-ceb2-4fc2-8a47-ca5a00d2fa27"/>
                 <p>Camarones fritos acompañados de salsa de la casa y papas.</p>
             </ModalBody>
             <ModalFooter>
                 <Button onClick={this.abrirModal}>Cerrar</Button>
             </ModalFooter>
         </Modal>

         <Modal className="Calamar-en-salsa" isOpen={this.state.abierto} style={modalStyles}>
             <ModalHeader>
                 <h5>Calamar en salsa</h5>
             </ModalHeader>

             <ModalBody>
                 <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/calamar-en-salsa.jpg?alt=media&token=b1b7587b-da5f-4d2c-b76a-845f366ea0e2"/>
                 <p>Calamares bañados en salsa Americana, acompañado de verdura salteada y una base de queso crema.</p>
             </ModalBody>
             <ModalFooter>
                 <Button onClick={this.abrirModal}>Cerrar</Button>
             </ModalFooter>
         </Modal>

         <Modal className="Cazuela-de-mariscos" isOpen={this.state.abierto} style={modalStyles}>
             <ModalHeader>
                 <h5>Cazuela de mariscos</h5>
             </ModalHeader>

             <ModalBody>
                 <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/cazuela-mariscos.jpg?alt=media&token=1d103887-c9b7-4d16-95de-ef773033f469"/>
                 <p>Cazuela de mariscos compuesta por Calamar, Camarón, Pulpo, Cangrejo, ostras y pescado.</p>
             </ModalBody>
             <ModalFooter>
                 <Button onClick={this.abrirModal}>Cerrar</Button>
             </ModalFooter>
         </Modal>

         <Modal className="Cerdo-agridulce" isOpen={this.state.abierto} style={modalStyles}>
             <ModalHeader>
                 <h5>Cerdo agridulce</h5>
             </ModalHeader>

             <ModalBody>
                 <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/cerdo-agridulce.jpg?alt=media&token=47987dda-ca68-45bc-b3c4-a825e4be90e6"/>
                 <p>Fino lomo de cerdo, bañado en salsa teriyaki, acompañada de pure de papa y romero.</p>
             </ModalBody>
             <ModalFooter>
                 <Button onClick={this.abrirModal}>Cerrar</Button>
             </ModalFooter>
         </Modal>

         <Modal className="Ceviche-de-camaron" isOpen={this.state.abierto} style={modalStyles}>
             <ModalHeader>
                 <h5>Ceviche de camaron</h5>
             </ModalHeader>

             <ModalBody>
                 <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/ceviche-camaron.jpg?alt=media&token=caee4190-8c3d-403c-ba38-392218d873f8"/>
                 <p>Camarones frescos, acompañados de una salsa especial, perfecto para tus entradas.</p>
             </ModalBody>
             <ModalFooter>
                 <Button onClick={this.abrirModal}>Cerrar</Button>
             </ModalFooter>
         </Modal>

         <Modal className="Costilla-de-cerdo" isOpen={this.state.abierto} style={modalStyles}>
             <ModalHeader>
                 <h5>Costilla de cerdo</h5>
             </ModalHeader>

             <ModalBody>
                 <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/costilla-de-cerdo.jpg?alt=media&token=0d7c7bc1-e8ff-4ccc-b65b-6d2cb71ee937"/>
                 <p>Costilla de cerdo preparada en jugo de naranja, romero y ajo, salteada en salsa teriyaki.</p>
             </ModalBody>
             <ModalFooter>
                 <Button onClick={this.abrirModal}>Cerrar</Button>
             </ModalFooter>
         </Modal>

         <Modal className="Mariscos" isOpen={this.state.abierto} style={modalStyles}>
             <ModalHeader>
                 <h5>Mariscos</h5>
             </ModalHeader>

             <ModalBody>
                 <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/mariscos.jpg?alt=media&token=7784a76b-273e-4d73-b159-3e3a7ea81f8f"/>
                 <p>Mezcla de mariscos bañados en su jugo, acompañados de pequeños trozos de verduras.</p>
             </ModalBody>
             <ModalFooter>
                 <Button onClick={this.abrirModal}>Cerrar</Button>
             </ModalFooter>
         </Modal>

         <Modal className="Paella-de-camarones" isOpen={this.state.abierto} style={modalStyles}>
             <ModalHeader>
                 <h5>Paella de camarones</h5>
             </ModalHeader>

             <ModalBody>
                 <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/paella-de-camarones.jpg?alt=media&token=000a65f8-068d-4adf-8513-d60472346d3f"/>
                 <p>Paella elaborada con los mejores mariscos, contiene almejas, mejillones, palmitos, camarón y pescado.</p>
             </ModalBody>
             <ModalFooter>
                 <Button onClick={this.abrirModal}>Cerrar</Button>
             </ModalFooter>
         </Modal>
         
         <Modal className="Pasta-al-camaron" isOpen={this.state.abierto} style={modalStyles}>
             <ModalHeader>
                 <h5>Pasta al camaron</h5>
             </ModalHeader>

             <ModalBody>
                 <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/pasta-al-camaron.jpg?alt=media&token=0b8da4ae-1dea-4de6-ad38-41e91bb8cf2a"/>
                 <p>Spaghetti con salsa cremosa, acompañada de camarón al ajillo.</p>
             </ModalBody>
             <ModalFooter>
                 <Button onClick={this.abrirModal}>Cerrar</Button>
             </ModalFooter>
         </Modal>
         
         <Modal className="Pollo-marinado" isOpen={this.state.abierto} style={modalStyles}>
             <ModalHeader>
                 <h5>Pollo marinado</h5>
             </ModalHeader>

             <ModalBody>
                 <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/pollo-marinado.jpg?alt=media&token=8c25a6df-a4d1-4f9a-8e31-a949f88803df"/>
                 <p>Pechuga de pollo, bañada en salsa marinada, salteada y acompañada con vegetales.</p>
             </ModalBody>
             <ModalFooter>
                 <Button onClick={this.abrirModal}>Cerrar</Button>
             </ModalFooter>
         </Modal>

         <Modal className="Rollos-de-atun" isOpen={this.state.abierto} style={modalStyles}>
             <ModalHeader>
                 <h5>Rollos de atun</h5>
             </ModalHeader>

             <ModalBody>
                 <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/rollos-de-atun.jpg?alt=media&token=6e5f3909-b208-4d7a-8fdd-bcf809d20a13"/>
                 <p>Rollos de atún previamente seleccionado, cubierto por una capa crocante, acompañado de rollos de hojalde y queso.</p>
             </ModalBody>
             <ModalFooter>
                 <Button onClick={this.abrirModal}>Cerrar</Button>
             </ModalFooter>
         </Modal>

         <Modal className="Tarta-de-salmon" isOpen={this.state.abierto} style={modalStyles}>
             <ModalHeader>
                 <h5>Tarta de salmon</h5>
             </ModalHeader>

             <ModalBody>
                 <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/tarta-de-salmon.jpg?alt=media&token=868f1e40-e0cc-4311-8277-ba6d1f9ae471"/>
                 <p>Salmon acompañado de aguacate, queso crema y bañado en la salsa de la casa.</p>
             </ModalBody>
             <ModalFooter>
                 <Button onClick={this.abrirModal}>Cerrar</Button>
             </ModalFooter>
         </Modal>
         


          </>
          )
}

}

export default Modalplatos;