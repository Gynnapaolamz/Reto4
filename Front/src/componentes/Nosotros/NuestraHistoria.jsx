import React, { useContext } from "react";
import NosotrosContext from "../../contexts/Nosotros/NosotrosContext";

const NuestraHistoria = () => {
	const { modalHistoria } = useContext(NosotrosContext);

	return (
		<>
			<main className="py-5 container">
				<div className="row justify-content-around">
					<div className="col-lg-6 col-md-12">
						<img
							className="img-fluid"
							src={modalHistoria.imagen}
							alt="Foto Nosotros"
						/>
					</div>
					<div className="col-lg-6 col-md-12 mt-2">
						<h1 className="text-danger fs-2">{modalHistoria.titulo}</h1>
						<p className="text-start">{modalHistoria.descripcion}</p>
					</div>
				</div>
			</main>
		</>
	);
};

export default NuestraHistoria;
