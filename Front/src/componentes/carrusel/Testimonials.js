import React from 'react'
import "../../css/bootstrap.min.css";
import "../../css/carousel.css";
import "../../css/headers.css";
const Testimonials = () => {
    return (
        <div>
                <div id="conteItemsCarrusel">
                    <div className="itemCarrusel" id="itemCarrusel-1">
                        <div className="tarjetaCarrusel" id="tarjetaCarrusel-1">
                            <div className="testimonio-1">
                                <img 
                                    src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/testimonio1%402x.png?alt=media&token=a446a7e0-dabc-4429-b234-fdd28c01eefe"
                                    className="bd-placeholder-img rounded-circle bordes" 
                                    width="140" 
                                    height="140"/>
                            </div>
                            <div className="palabrasTestimonio">
                                <p><i>"Excelente diseño de la carta, magnífica materia prima y ejecución. Atención eficiente y cordial, 
                                    del tipo que hace que te sientas bien recibido y que el equipo está comprometido con hacer pasar a sus 
                                    comensales un momento feliz. Una institución."</i></p>
                                <p className="nombreOpinion"><b>Carlos Martinez</b></p>
                            </div>
                        </div>
                <div className="flechasCarrusel">
                    <a href="#itemCarrusel-3" ><i className="fas fa-chevron-left"></i></a>
                    <a href="#itemCarrusel-2" ><i className="fas fa-chevron-right"></i></a>
                </div>
            </div>
            <div className="itemCarrusel" id="itemCarrusel-2">
                <div className="tarjetaCarrusel" id="tarjetaCarrusel-2">
                    <div className="testimonio-3">
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/testimonio2%402x.png?alt=media&token=5deb24b8-1f25-489d-9694-e0bc6851ceb5" 
                            class="bd-placeholder-img rounded-circle bordes" 
                            width="140" 
                            height="140"/>
                    </div>
                    <div className="palabrasTestimonio-2">
                        <p><i>"Un local precioso, decorado con mucho gusto. Se nota que los dueños han puesto mucho esfuerzo e ilusión en el local."</i></p>
                        <p className="nombreOpinion"><b>Daniela Manjarrez</b></p>
                
                    </div>
                </div>
                <div className="flechasCarrusel">
                    <a href="#itemCarrusel-1" ><i class="fas fa-chevron-left"></i></a>
                    <a href="#itemCarrusel-3" ><i class="fas fa-chevron-right"></i></a>
                </div>
            </div>
            <div className="itemCarrusel" id="itemCarrusel-3">
                <div className="tarjetaCarrusel" id="tarjetaCarrusel-3">
                    <div className="testimonio-3">
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/testimonio3%402x.png?alt=media&token=b16eb8a4-4972-41c7-8944-ba406e9ca6ad" 
                            class="bd-placeholder-img rounded-circle bordes" 
                            width="140" 
                            height="140"/>
                    </div>
                    <div className="palabrasTestimonio-3">
                        <p><i>"Lugar pequeño y acogedor. El patio le da ese toque tan especial. La comida elaborada y con muy buena relación calidad-precio. Por poner una pega, el servicio un poco lento, pero quizás fueron las circunstancias del día."</i></p>
                        <p className="nombreOpinion"><b>Indira Cabana</b></p>
                    </div>
                </div>
                <div className="flechasCarrusel">
                    <a href="#itemCarrusel-2" ><i class="fas fa-chevron-left"></i></a>
                    <a href="#itemCarrusel-1" ><i class="fas fa-chevron-right"></i></a>
                </div>
            </div>
        </div>
        <br></br>
    </div>
    )
}

export default Testimonials



