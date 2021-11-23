import React from "react";
// import hamburguesa from "../../assets/images/hamburguesa.jpg";
// import hamburguesa2 from "../../assets/images/hamburguesa2.jpg";
// import hamburguesa3 from "../../assets/images/hamburguesa3.jpg";
// import hamburguesa4 from "../../assets/images/hamburguesa4.jpg";

const Destacados = () => {
	return (
		<>
			<section className="productos">
				<div className="container py-5">
					<div className="row py-5">
						<div className="col-lg-5 m-auto text-center">
							<h1>RECOMENDACIONES DEL CHEF</h1>
							<h6>Platos de Calidad</h6>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 text-center">
							<div className="card border-0 bg-light mb-2">
								<div className="card-body">
									<img
										src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/calamar-en-salsa.jpg?alt=media&token=b1b7587b-da5f-4d2c-b76a-845f366ea0e2"
										className="img-fluid"
										alt=""
										width="500"
										height="500"
										style={{ objectFit: "cover" }}
									/>
								</div>
							</div>
							<h6>Comida Rapida</h6>
							<p>$34.99</p>
						</div>
						<div className="col-lg-3 text-center">
							<div className="card border-0 bg-light mb-2">
								<div className="card-body">
									<img
										src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/ceviche-camaron.jpg?alt=media&token=caee4190-8c3d-403c-ba38-392218d873f8"
										className="img-fluid"
										alt=""
									/>
								</div>
							</div>
							<h6>Comida Rapida</h6>
							<p>$34.99</p>
						</div>
						<div className="col-lg-3 text-center">
							<div className="card border-0 bg-light mb-2">
								<div className="card-body">
									<img
										src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/hamburguesa2.jpg?alt=media&token=07f4e491-1e3b-4b79-be95-4053082f3f40"
										className="img-fluid"
										alt=""
									/>
								</div>
							</div>
							<h6>Comida Rapida</h6>
							<p>$34.99</p>
						</div>
						<div className="col-lg-3 text-center">
							<div className="card border-0 bg-light mb-2">
								<div className="card-body">
									<img
										src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/menu3%402x.png?alt=media&token=d3612660-68a2-49cd-8f5d-09becf6ee53c"
										className="img-fluid"
										alt=""
									/>
								</div>
							</div>
							<h6>Comida Rapida</h6>
							<p>$34.99</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6 text-center m-auto mt-4">
							<button className="btn1">Ver Mas</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Destacados;
