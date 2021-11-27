import React from "react";

const MainServicios = (props) => {
	return (
		<>
			<main className="container py-5">
				<h1
					className="m-3"
					style={{
						fontSize: "5rem",
						color: "#682828",
						fontFamily: 'Georgia, "Times New Roman", Times, serif',
					}}
				>
					Servicios
				</h1>
				<div className="row my-5">
					<div className="d-flex flex-column col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<p className="fs-5 m-2" style={{ textAlign: "justify" }}>
							Duis non dui eget neque mattis ornare. In tempor neque eget tempus
							venenatis. Suspendisse mauris tortor, condimentum eu arcu in,
							rutrum finibus velit. Phasellus pulvinar, nulla ut facilisis
							eleifend, ipsum metus congue elit, at sodales sapien diam posuere
							sapien. Donec nec congue nunc, at aliquet sem. Vivamus fermentum
							porttitor erat, vitae ornare diam ultricies vel. Etiam et justo
							vehicula, aliquam tellus vitae, molestie quam. Proin laoreet
							tempor pulvinar. Pellentesque vestibulum sem id imperdiet congue.
							Cras ultricies justo at auctor porta. Duis vel fringilla augue.
							Nullam eu aliquam erat. Sed a ipsum quam. Quisque non felis sed
							eros convallis tempor quis id libero. Nunc ac iaculis nibh, vitae
							ultrices turpis.
						</p>
					</div>
				</div>
				{props.children}
			</main>
		</>
	);
};

export default MainServicios;
