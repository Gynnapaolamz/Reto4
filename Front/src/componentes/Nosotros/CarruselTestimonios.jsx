import React, { useContext } from "react";
import DatosTestimonios from "../../consts json/Nosotros/DatosTestimonios.json";
import TestimoniosContext from "../../contexts/Nosotros/TestimoniosContext";
const CarruselTestimonios = () => {
	const { modalTestimoniales } = useContext(TestimoniosContext);

	return (
		<>
			{/*Carrusel*/}
			<div
				id="carouselDarkVariant"
				className="carousel slide carousel-dark"
				data-mdb-ride="carousel"
			>
				{/* Indicators */}
				<div className="carousel-indicators mb-0">
					{/*Reemplazo el arreglo que traia los datos de DatosTestimonios.json
          por modalTestimoniales que es donde se guardan y actualizan*/}
					{modalTestimoniales.map((testimonio, index) => {
						return (
							<button
								key={index}
								data-bs-target="#carouselDarkVariant"
								type="button"
								{...(index === 0 && { className: "active" })}
								{...(index === 0 && { "aria-current": "true" })}
								data-bs-slide-to={index}
								aria-label={`Slide ${index + 1}`}
							/>
						);
					})}
				</div>
				{/* Indicators */}

				{/* Inner */}
				<div className="carousel-inner pt-5 pb-5">
					{/* Single item */}
					{modalTestimoniales.map((testimonio, index) => {
						console.log("testimonio: --  ", testimonio, " index -- ", index);
						return (
							<div
								key={index}
								className={`carousel-item ${index === 0 ? "active" : ""}`}
							>
								<div className="row d-flex justify-content-center">
									<div className="col-md-8 col-lg-9 col-xl-8">
										<div className="d-flex">
											<div className="flex-shrink-0">
												<img
													src={testimonio.imgSrc}
													className="rounded-circle mb-4 mb-lg-0 shadow-2 border border-warning border-3"
													alt={testimonio.imgAlt}
													width={135}
													height={135}
													style={{ objectFit: "cover" }}
												/>
											</div>
											<div className="flex-grow-1 ms-4 ps-3">
												<figure>
													<blockquote className="blockquote mb-4">
														<p>
															<i className="fas fa-quote-left fa-lg text-warning me-2" />
															<span className="font-italic">
																{testimonio.spanDescripcion}
															</span>
														</p>
													</blockquote>
													<figcaption className="blockquote-footer">
														{testimonio.user}
													</figcaption>
												</figure>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
					{/* Single item */}
				</div>
				{/* Inner */}

				{/* Controls */}
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselDarkVariant"
					data-bs-slide="prev"
				>
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselDarkVariant"
					data-bs-slide="next"
				>
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			{/* Carousel wrapper */}
		</>
	);
};

export default CarruselTestimonios;
