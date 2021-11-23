import React from "react";
// import imagen1 from "../../assets/images/1.jpg";
// import imagen2 from "../../assets/images/2.jpg";
// import imagen3 from "../../assets/images/3.jpg";

const Carrusel = () => {
	return (
		<>
			<section className="carrusel">
				<div
					id="carouselExampleCaptions"
					className="carousel slide"
					data-bs-ride="carousel"
				>
					<div className="carousel-indicators">
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to={0}
							className="active"
							aria-current="true"
							aria-label="Slide 1"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to={1}
							aria-label="Slide 2"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to={2}
							aria-label="Slide 3"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to={3}
							aria-label="Slide 4"
						/>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/foto1%402x.png?alt=media&token=2d385238-27dc-487f-8e31-aaf97522a8b0"
								className="d-block w-100 img-fluid"
								alt="..."
								style={{ objectFit: "cover" }}
							/>
						</div>
						<div className="carousel-item">
							<img
								src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/Carrousel1.jpg?alt=media&token=53969ddd-203b-4913-8435-30bc5c601fc4"
								className="d-block w-100 img-fluid"
								alt="..."
								style={{ objectFit: "cover" }}
							/>
							<div className="carousel-caption d-md-block">
								<h5>Las Mejores Pizzas Para Degustar</h5>
								<p>
									Elige Tu Pizza Entre Las Irresistibles Suprema, Pollo y
									Champiñones, Hawaiana o Decídete Por Nuestra Mítica Meat
									Lovers.
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/Carrousel2.jpg?alt=media&token=618c3e19-136c-44f5-9d2c-af7bbbee5533"
								className="d-block w-100 img-fluid"
								alt="..."
								style={{ objectFit: "cover" }}
							/>
							<div className="carousel-caption d-none d-md-block">
								<h5>Un Delicioso Plato</h5>
								<p>Disfruta De Nuestras Costillitas De Cerdo Asadas.</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/Carrousel3.jpg?alt=media&token=0320014b-0975-4883-bf4a-ee6b44723351"
								className="d-block w-100 img-fluid"
								alt="..."
								style={{ objectFit: "cover" }}
							/>
							<div className="carousel-caption d-none d-md-block">
								<h5>Nuestro Set Premium</h5>
								<p>Vive La Experiencia De La Mezcla De Sabores.</p>
							</div>
						</div>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide="prev"
					>
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="visually-hidden">Anterior</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide="next"
					>
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="visually-hidden">Siguiente</span>
					</button>
				</div>
			</section>
		</>
	);
};

export default Carrusel;
