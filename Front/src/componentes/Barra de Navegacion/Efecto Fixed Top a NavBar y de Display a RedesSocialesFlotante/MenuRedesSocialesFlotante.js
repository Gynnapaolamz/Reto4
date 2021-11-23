import { useContext, useEffect, useRef } from "react";
import ColPagarAhoraContext from "../../../contexts/Carrito/ColPagarAhoraContext";
import FooterContext from "../../../contexts/Footer/FooterContext";
import NavBarContext from "../../../contexts/NavBar/NavBarContext";
import { obtenerPlatillosLocalStorage } from "../../../localStorage/LocalStorage";
const MenuRedesSocialesFlotante = () => {
	const { navBar } = useContext(NavBarContext);
	const { footer } = useContext(FooterContext);
	const { colPagarAhora } = useContext(ColPagarAhoraContext);

	const State = useRef({
		navBarCurrent: null,
		footerCurrent: null,
		colPagarAhoraCurrent: null,
	});

	useEffect(() => {
		State.current = {
			navBarCurrent: navBar,
			footerCurrent: footer,
			colPagarAhoraCurrent: colPagarAhora,
		};
		eventListenerScroll();
	});

	const changeNavBar = () => {
		if (State.current.navBarCurrent !== null) {
			const altNavBar = State.current.navBarCurrent.clientHeight;
			let scrollY = window.scrollY;
			if (scrollY >= altNavBar) {
				State.current.navBarCurrent.classList.remove("no-fixed-top");
				State.current.navBarCurrent.classList.toggle("fixed-top", true);
			} else {
				State.current.navBarCurrent.classList.replace(
					"fixed-top",
					"no-fixed-top"
				);
			}
		}
	};

	const changeFooter = () => {
		if (
			State.current.footerCurrent !== null &&
			State.current.navBarCurrent !== null
		) {
			const footPos = State.current.footerCurrent.getBoundingClientRect().y;

			if (footPos < 590 - 20) {
				State.current.navBarCurrent
					.querySelector("#redes-sociales-flotante")
					.classList.add("d-none");
			} else {
				State.current.navBarCurrent
					.querySelector("#redes-sociales-flotante")
					.classList.remove("d-none");
			}
		}
	};

	const changeColPagarAhora = () => {
		if (
			State.current.footerCurrent !== null &&
			State.current.colPagarAhoraCurrent !== null
		) {
			const anchoNavegador = window.innerWidth;
			const footPos = State.current.footerCurrent.getBoundingClientRect().y;
			const lengthPlatillos = obtenerPlatillosLocalStorage("platillos").length;
			if (anchoNavegador > 990) {
				if (lengthPlatillos > 0) {
					if (footPos < (lengthPlatillos > 1 ? 595 : 590 - 90)) {
						State.current.colPagarAhoraCurrent.classList.add("d-none");
					} else {
						State.current.colPagarAhoraCurrent.classList.remove("d-none");
					}
				} else {
					State.current.colPagarAhoraCurrent.classList.add("d-none");
				}
			}
		}
	};

	const changeNavBarFooter = () => {
		changeNavBar();
		changeFooter();
		changeColPagarAhora();
	};

	const eventListenerScroll = () => {
		window.addEventListener("scroll", changeNavBarFooter);
	};

	return null;
};

export default MenuRedesSocialesFlotante;
