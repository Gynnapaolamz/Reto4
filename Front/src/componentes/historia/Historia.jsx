import React, {Fragment} from 'react';
import "../../css/bootstrap.min.css";
import "./historia.css";

const Historia = () => {
    return (  
        <div>
            <main className="segundoContenedor">
                <div className="container proporcion">
                    <img 
                        src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/foto42x.png?alt=media&token=40112626-dec0-4101-9736-7ea72ff45c55"
                        className="bi me-2" 
                        width="480" 
                        height="380"/>
                </div>
    
                <div className="container texto">
                    <h1 className="Historia">Nuestra Historia</h1>
                    <p className="parrafo">Hace veintiocho años ya, en un rincón de este barrio entrañable aún
                                        herido por el terremoto, empezamos a cocinar entre amigos para
                                        los amigos.<br></br>
        
                                        <br></br>La propuesta de un lugar relajado y cercano que acompañara el retorno de los 
                                        jóvenes al viejo barrio, aunado al interés en una comida con corazón y honesta fue la 
                                        idea de donde nació- un buen lugar para comer- SalYSalsa.<br></br>
                                        En este tiempo la ciudad ha experimentado una transformación sustancial, tal vez la más importante 
                                        de su historia reciente. Entre otras cosas, 
                                        la oferta de posibilidades culinarias ha explotado a niveles inimaginables en aquellos aburridos tiempos de 
                                        tacos, tortas, tamales y “comida internacional” de los restaurantes típicos de Insurgentes. Así también, 
                                        el barrio herido se ha transformado en una efervescente babel, se escuchan gran cantidad de idiomas y están 
                                        al alcance- a veces buenos, a veces no 
                                        tanto- casi todos los sabores, olores y ambientes.</p>
                </div>

            </main>
        </div>
    )
}
 
export default Historia;