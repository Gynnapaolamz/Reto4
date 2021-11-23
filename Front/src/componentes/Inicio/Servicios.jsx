import React from "react";
// import celebraciones from "../../assets/images/celebraciones.jpg";
// import reuniones from "../../assets/images/reuniones.jpg";
// import cumpleaños from "../../assets/images/cumpleaños.jpg";

const Servicios = () => {
	return (
		<>
			<section className="especiales">
				<div className="py-3 mx-5">
					<div className="row py-5">
						<div className="col-lg-8 m-auto text-center">
							<h1>Nuestros Servicios Especiales</h1>
							<h6 style={{ color: "red" }}>
								Celebra con Nosotros Tus Momentos Especiales
							</h6>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 mt-sm-3">
							<div className="card" style={{ height: "100%" }}>
								<img
									src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/cena-amigos.svg?alt=media&token=300a01b5-5379-4b37-b8f7-6169571ed481"
									className="card-img-top p-4 mx-auto my-auto"
									alt="Cena con Amigos"
									style={{ width: "300px", height: "300px" }}
								/>
								<div className="card-body">
									<h5
										className="card-title fs-1"
										style={{ color: "rgb(58, 35, 9)" }}
									>
										Cena con Amigos
									</h5>
									<p
										className="card-text my-4 fs-5"
										style={{ textAlign: "justify" }}
									>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Tempora, consequuntur blanditiis possimus ea, sit doloribus
										fuga ducimus magni iste iure error sed. Quidem praesentium
										nostrum nesciunt ratione eligendi totam non?
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 mt-sm-3">
							<div className="card" style={{ height: "100%" }}>
								<img
									src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/aniversario.svg?alt=media&token=6070e0d4-3af0-4579-ae15-5f82c8444ddb"
									className="card-img-top p-4 mx-auto my-auto"
									alt="Aniversarios"
									style={{ width: "300px", height: "300px" }}
								/>
								<div className="card-body">
									<h5
										className="card-title fs-1"
										style={{ color: "rgb(58, 35, 9)" }}
									>
										Aniversarios
									</h5>
									<p
										className="card-text my-4 fs-5"
										style={{ textAlign: "justify" }}
									>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Tempora, consequuntur blanditiis possimus ea, sit doloribus
										fuga ducimus magni iste iure error sed. Quidem praesentium
										nostrum nesciunt ratione eligendi totam non?
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 mt-sm-3">
							<div className="card" style={{ height: "100%" }}>
								<img
									src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/cumpleanos.svg?alt=media&token=166fd636-f363-45bf-a328-ce5f4881f767"
									className="card-img-top p-4 mx-auto my-auto"
									alt="Celebración de Cumpleaños"
									style={{ width: "300px", height: "300px" }}
								/>
								<div className="card-body">
									<h5
										className="card-title fs-1"
										style={{ color: "rgb(58, 35, 9)" }}
									>
										Celebración de Cumpleaños
									</h5>
									<p
										className="card-text my-4 fs-5"
										style={{ textAlign: "justify" }}
									>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Tempora, consequuntur blanditiis possimus ea, sit doloribus
										fuga ducimus magni iste iure error sed. Quidem praesentium
										nostrum nesciunt ratione eligendi totam non?
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row pt-3">
						<div className="col-lg-6 text-center m-auto">
							<button className="btn1">Ver</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Servicios;
