import {
	guardarSeleccionMenuLocalStorage,
	obtenerPlatillosLocalStorage,
} from "../localStorage/LocalStorage";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const sweetAlertMenuAgregarCarrito = (
	title,
	showDenyButton,
	showCancelButton,
	confirmButtonText,
	denyButtonText,
	mensajeSuccess,
	mensajeInfo,
	objeto
) => {
	MySwal.fire({
		icon: "question",
		title: title,
		showDenyButton: showDenyButton,
		showCancelButton: showCancelButton,
		confirmButtonText: confirmButtonText,
		denyButtonText: denyButtonText,
	}).then((result) => {
		if (result.isConfirmed) {
			if (guardarSeleccionMenuLocalStorage(objeto, "platillos")) {
				MySwal.fire({
					icon: "success",
					text: mensajeSuccess,
					showConfirmButton: false,
					timer: 2000,
				});
			} else {
				MySwal.fire({
					icon: "info",
					text:
						"EL PLATO SELECCIONADO, YA FUE AGREGADO AL CARRITO,\n" +
						"POR FAVOR REVISE EL CARRITO",
					showConfirmButton: false,
					timer: 2000,
				});
			}
		} else if (result.isDenied || result.isDismissed) {
			MySwal.fire({
				icon: "error",
				title: "CANCELADO",
				text: mensajeInfo,
				showConfirmButton: false,
				timer: 2000,
			});
		}
	});
};

const sweetAlertBtnEliminarPlatillo = (
	eliminarPlatilloByIdLocalStorage,
	handleRemoveItem,
	platillo,
	actualizarTotalCarrito,
	inputs,
	colPagarAhora
) => {
	MySwal.fire({
		icon: "question",
		title: "¿DESEAS ELIMINAR ESTE PLATO DEL CARRITO?",
		showDenyButton: true,
		showConfirmButton: false,
		showCancelButton: true,
		denyButtonText: `Eliminar`,
	}).then((result) => {
		if (result.isDenied) {
			console.log("inputs --- ", platillo);
			const nombreInput = `cantidad_${platillo.idPlato}`;

			const cantidad_input = inputs[nombreInput]?.valor;

			console.log("platillo.cantidad --- ", platillo.cantidad);
			const valorTotal = platillo.valor.split("$")[1] * cantidad_input;
			actualizarTotalCarrito((total) => total - valorTotal);
			handleRemoveItem(platillo.index);
			eliminarPlatilloByIdLocalStorage(platillo, "platillos");
			const platillos = obtenerPlatillosLocalStorage("platillos");
			if (platillos.length === 0) {
				colPagarAhora.classList.add("d-none");
			}
			MySwal.fire({
				icon: "success",
				title: "EL PLATO FUE ELIMINADO CON EXITO",
				showConfirmButton: false,
				timer: 1100,
			});
		} else {
			MySwal.fire({
				icon: "error",
				title: "EL PLATO NO FUE ELIMINADO",
				showConfirmButton: false,
				timer: 1100,
			});
		}
	});
};
const sweetAlertPreguntarCerrarSesion = (logout, objeto) => {
	MySwal.fire({
		icon: "question",
		title: "¿DESEAS CERRAR SESION?",
		showConfirmButton: true,
		showCancelButton: true,
		confirmButtonColor: "/* seagreen *//* steelblue */teal",
		confirmButtonText: "ACEPTAR",
		cancelButtonText: "CANCELAR",
	}).then((result) => {
		if (result.isConfirmed) {
			logout();
			objeto.li_CallComponentBool = false;
			MySwal.fire({
				icon: "success",
				title: "LA SESION FUE CERRADA CON EXITO",
				showConfirmButton: false,
				timer: 1800,
			});
		} else {
			MySwal.fire({
				icon: "error",
				title: "LA SESION NO FUE CERRADA",
				showConfirmButton: false,
				timer: 1800,
			});
		}
	});
};
const sweetAlertPreguntarCerrarSesion1 = (logout) => {
	MySwal.fire({
		icon: "question",
		title: "¿DESEAS CERRAR SESION?",
		showConfirmButton: true,
		showCancelButton: true,
		confirmButtonColor: "/* seagreen *//* steelblue */teal",
		confirmButtonText: "ACEPTAR",
		cancelButtonText: "CANCELAR",
	}).then((result) => {
		if (result.isConfirmed) {
			logout();
			MySwal.fire({
				icon: "success",
				title: "LA SESION FUE CERRADA CON EXITO",
				showConfirmButton: false,
				timer: 1800,
			});
		} else {
			MySwal.fire({
				icon: "error",
				title: "LA SESION NO FUE CERRADA",
				showConfirmButton: false,
				timer: 1800,
			});
		}
	});
};
const sweetAlertPreguntarCrearEditarEliminarPlato = (
	formularioEditCrear,
	saberCamposVerdadero,
	valido,
	reiniciarCampos,
	reiniciarCampoValido,
	datosMenu,
	handleChangeDatosMenu,
	handleFormularioOcultoEditCrear,
	plato
) => {
	let forEditCrear;
	MySwal.fire({
		icon: "question",
		title: `¿DESEAS ${formularioEditCrear} EL PLATO?`,
		showConfirmButton: true,
		showCancelButton: true,
		confirmButtonColor: "/* seagreen *//* steelblue */teal",
		confirmButtonText: "ACEPTAR",
		cancelButtonText: "CANCELAR",
	}).then((result) => {
		if (result.isConfirmed) {
			switch (formularioEditCrear) {
				case "CREAR":
					forEditCrear = "CREADO";
					console.log("valido --- ", valido);
					if (saberCamposVerdadero(valido)) {
						const platoCreado = {
							titulo: valido["nombrePlato"].name,
							descripcion: valido["descripcionPlato"].name,
							valor: "$" + valido["valorPlato"].name,
							urlImagen: valido["imagenPlato"].name,
						};

						handleChangeDatosMenu([...datosMenu, platoCreado]);
						reiniciarCampos();
						reiniciarCampoValido();

						MySwal.fire({
							icon: "success",
							title: `EL PLATO FUE ${forEditCrear} CON EXITO`,
							showConfirmButton: false,
							timer: 1800,
						});
					}
					break;
				case "ACTUALIZAR":
					forEditCrear = "ACTUALIZADO";
					if (saberCamposVerdadero(valido)) {
						const auxDatosMenu = datosMenu.map((datoMenu) => {
							if (datoMenu.idPlato === plato.idPlato) {
								return {
									...datoMenu,
									titulo: valido["nombrePlato"].name,
									descripcion: valido["descripcionPlato"].name,
									valor: "$" + valido["valorPlato"].name,
									urlImagen: valido["imagenPlato"].name,
								};
							}
							return datoMenu;
						});
						handleChangeDatosMenu(auxDatosMenu);
						const formCrearOcult = {
							formularioOculto: false,
							formularioEditCrear: "CREAR",
						};
						handleFormularioOcultoEditCrear(formCrearOcult);
						reiniciarCampos();
						reiniciarCampoValido();

						MySwal.fire({
							icon: "success",
							title: `EL PLATO FUE ${forEditCrear} CON EXITO`,
							showConfirmButton: false,
							timer: 1800,
						});
					}
					break;
				case "ELIMINAR":
					forEditCrear = "ELIMINADO";

					const auxtDatosMenu = datosMenu.filter(
						(datoMenu) => datoMenu.idPlato !== plato.idPlato
					);

					handleChangeDatosMenu(auxtDatosMenu);
					handleFormularioOcultoEditCrear({
						formularioOculto: false,
						formularioEditCrear: "CREAR",
					});

					MySwal.fire({
						icon: "success",
						title: `EL PLATO FUE ${forEditCrear} CON EXITO`,
						showConfirmButton: false,
						timer: 1800,
					});

					break;

				default:
					break;
			}
		} else {
			switch (formularioEditCrear) {
				case "CREAR":
					forEditCrear = "CREADO";
					break;
				case "ACTUALIZAR":
					forEditCrear = "ACTUALIZADO";
					break;
				case "ELIMINAR":
					forEditCrear = "ELIMINADO";
					break;

				default:
					break;
			}
			MySwal.fire({
				icon: "error",
				title: `EL PLATO NO FUE ${forEditCrear}`,
				showConfirmButton: false,
				timer: 1800,
			});
		}
	});
};
const sweetAlertPreguntarCrearEditarEliminarServicio = (
	saberCamposVerdadero,
	valido,
	reiniciarCampos,
	reiniciarCampoValido,
	datosServicios,
	handelChangeDatosServicios,
	handelChangeDatosServiciosCrear,
	handelChangeDatosServiciosActualizar,
	handelChangeDatosServiciosEliminar,
	handleChangeFormularioOcultoEditarCrear,
	servicio,
	formularioEditCrear
) => {
	let forEditCrear;
	MySwal.fire({
		icon: "question",
		title: `¿DESEAS ${formularioEditCrear} EL PLATO?`,
		showConfirmButton: true,
		showCancelButton: true,
		confirmButtonColor: "/* seagreen *//* steelblue */teal",
		confirmButtonText: "ACEPTAR",
		cancelButtonText: "CANCELAR",
	}).then((result) => {
		if (result.isConfirmed) {
			switch (formularioEditCrear) {
				case "CREAR":
					forEditCrear = "CREADO";
					if (saberCamposVerdadero(valido)) {
						handelChangeDatosServiciosCrear(valido);
						reiniciarCampos();
						reiniciarCampoValido();

						MySwal.fire({
							icon: "success",
							title: `EL SERVICIO FUE ${forEditCrear} CON EXITO`,
							showConfirmButton: false,
							timer: 1800,
						});
					}
					break;
				case "ACTUALIZAR":
					forEditCrear = "ACTUALIZADO";
					if (saberCamposVerdadero(valido)) {
						handelChangeDatosServiciosActualizar(valido, servicio);
						const formCrearOcult = {
							formularioOculto: false,
							formularioEditCrear: "CREAR",
						};
						handleChangeFormularioOcultoEditarCrear(formCrearOcult);
						reiniciarCampos();
						reiniciarCampoValido();

						MySwal.fire({
							icon: "success",
							title: `EL SERVICIO FUE ${forEditCrear} CON EXITO`,
							showConfirmButton: false,
							timer: 1800,
						});
					}
					break;
				case "ELIMINAR":
					forEditCrear = "ELIMINADO";
					handelChangeDatosServiciosEliminar(servicio);
					handleChangeFormularioOcultoEditarCrear({
						formularioOculto: false,
						formularioEditCrear: "CREAR",
					});

					MySwal.fire({
						icon: "success",
						title: `EL SERVICIO FUE ${forEditCrear} CON EXITO`,
						showConfirmButton: false,
						timer: 1800,
					});

					break;

				default:
					break;
			}
		} else {
			switch (formularioEditCrear) {
				case "CREAR":
					forEditCrear = "CREADO";
					break;
				case "ACTUALIZAR":
					forEditCrear = "ACTUALIZADO";
					break;
				case "ELIMINAR":
					forEditCrear = "ELIMINADO";
					break;

				default:
					break;
			}
			MySwal.fire({
				icon: "error",
				title: `EL SERVICIO NO FUE ${forEditCrear}`,
				showConfirmButton: false,
				timer: 1800,
			});
		}
	});
};

const sweetAlert = (position, icon, title, text, showConfirmButton, timer) => {
	MySwal.fire({
		position: position,
		icon: icon,
		title: title,
		text: text,
		showConfirmButton: showConfirmButton,
		timer: timer,
	});
};

/*Se guardan los datos actualizados en el modal de la historia*/
const sweetAlertBtnGuardarModalHistoria = (
	handleChangeModalHistoria,
	inputsModalHistoria,
	handleReiniciarInputsModalHistoria
) => {
	MySwal.fire({
		icon: "question",
		title: "¿DESEAS GUARDAR LOS CAMBIOS DE NUESTRA HISTORIA?",
		showDenyButton: false,
		showConfirmButton: true,
		showCancelButton: true,
		confirmButtonText: `Guardar`,
	}).then((result) => {
		if (result.isConfirmed) {
			handleChangeModalHistoria(inputsModalHistoria);
			handleReiniciarInputsModalHistoria();
			sweetAlert(
				"center",
				"success",
				"",
				"LOS CAMBIOS SE REALIZARON CON ÉXITO",
				false,
				2500
			);
		} else {
			sweetAlert(
				"center",
				"error",
				"",
				"LOS CAMBIOS NO SE REALIZARON",
				false,
				2500
			);
		}
	});
};

/*Se guarda el empleado creado o actualizado en el modal de empleados*/
const sweetAlertBtnConfirmarEmpleadoEditado = (
	modalTrabajadores,
	inputsModalTrabajadores,
	handleChangeModalTrabajadores,
	handleInputsModalTrabajadores,
	formEmpleado,
	handleChangeFormEmpleado
) => {
	MySwal.fire({
		icon: "question",
		title: "¿DESEAS GUARDAR LOS CAMBIOS DE ESTE EMPLEADO?",
		showDenyButton: false,
		showConfirmButton: true,
		showCancelButton: true,
		confirmButtonText: `Guardar`,
	}).then((result) => {
		if (result.isConfirmed) {
			switch (formEmpleado.nameAction) {
				case "CREAR":
					console.log("CREAR");
					handleChangeModalTrabajadores([
						...modalTrabajadores,
						inputsModalTrabajadores,
					]);
					handleInputsModalTrabajadores({
						id: "",
						nombre: "",
						ocupacion: "",
						imagen: "",
					});
					sweetAlert(
						"center",
						"success",
						"",
						"EL EMPLEADO SE CREO CON ÉXITO",
						false,
						2500
					);

					break;
				case "ACTUALIZAR":
					console.log("ACTUALIZAR");
					console.log("INPUTSmODALtRABAJADORES --- ", inputsModalTrabajadores);

					const auxModalTrabajadores = modalTrabajadores.map((trab, index) => {
						if (inputsModalTrabajadores.id === trab.id) {
							return {
								...trab,
								...inputsModalTrabajadores,
							};
						}
						return trab;
					});

					handleChangeModalTrabajadores(auxModalTrabajadores);
					handleChangeFormEmpleado({
						formVisibility: false,
						nameAction: "CREAR",
					});
					handleInputsModalTrabajadores({
						id: "",
						nombre: "",
						ocupacion: "",
						imagen: "",
					});
					sweetAlert(
						"center",
						"success",
						"",
						"LOS CAMBIOS SE REALIZARON CON ÉXITO",
						false,
						2500
					);
					break;
				default:
					break;
			}
		} else {
			sweetAlert(
				"center",
				"error",
				"",
				"LOS CAMBIOS NO SE REALIZARON",
				false,
				2500
			);
		}
	});
};

/*Se elimina el empleado al que se le de el botón de eliminar*/
const sweetAlertBtnEliminarEmpleado = (
	handleChangeModalTrabajadores,
	modalTrabajadores,
	trabajador,
	handleInputsModalTrabajadores
) => {
	MySwal.fire({
		title: "¿DESEAS ELIMINAR ESTE EMPLEADO?",
		text: "UNA VEZ ELIMINADO NO PODRÁS RECUPERARLO",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Eliminar",
		cancelButtonText: "Cancelar",
	}).then((result) => {
		if (result.isConfirmed) {
			handleChangeModalTrabajadores(
				modalTrabajadores.filter((trab) => trab.id !== trabajador.id)
			);

			handleInputsModalTrabajadores({
				id: "",
				nombre: "",
				ocupacion: "",
				imagen: "",
			});

			sweetAlert(
				"center",
				"success",
				"",
				"EL EMPLEADO FUE ELIMINADO CON ÉXITO",
				false,
				2500
			);
		} else {
			sweetAlert(
				"center",
				"error",
				"",
				"EL EMPLEADO NO FUE ELIMINADO",
				false,
				2500
			);
		}
	});
};

/*Se actualizan los testimonios con el testimonio creado o editado*/
const sweetAlertBtnConfirmarTestimonioEditado = (
	modalTestimoniales,
	inputsModalTestimoniales,
	handleChangeModalTestimoniales,
	handleInputChangeModalTestimoniales,
	handleInputChangeModalTestimoniales1,
	formTestimoniales,
	handleChangeFormTestimoniales
) => {
	MySwal.fire({
		icon: "question",
		title: "¿DESEAS GUARDAR LOS CAMBIOS DE ESTE TESTIMONIO?",
		showDenyButton: false,
		showConfirmButton: true,
		showCancelButton: true,
		confirmButtonText: `Guardar`,
	}).then((result) => {
		if (result.isConfirmed) {
			switch (formTestimoniales.nameAction) {
				case "CREAR":
					console.log("CREAR");
					handleChangeModalTestimoniales([
						...modalTestimoniales,
						inputsModalTestimoniales,
					]);
					handleInputChangeModalTestimoniales1({
						id: "",
						imgSrc: "",
						imgAlt: "",
						spanDescripcion: "",
						user: "",
					});
					handleChangeFormTestimoniales({
						formVisibility: false,
						nameAction: "CREAR",
					});
					sweetAlert(
						"center",
						"success",
						"",
						"EL TESTIMONIO SE CREO CON ÉXITO",
						false,
						2500
					);

					break;
				case "ACTUALIZAR":
					console.log("ACTUALIZAR");
					console.log(
						"INPUTSmODALtESTIMONIALES --- ",
						inputsModalTestimoniales
					);

					const auxModalTestimoniales = modalTestimoniales.map(
						(test, index) => {
							if (inputsModalTestimoniales.id === test.id) {
								return {
									...test,
									...inputsModalTestimoniales,
								};
							}
							return test;
						}
					);

					handleChangeModalTestimoniales(auxModalTestimoniales);
					handleChangeFormTestimoniales({
						formVisibility: false,
						nameAction: "CREAR",
					});
					handleInputChangeModalTestimoniales1({
						id: "",
						imgSrc: "",
						imgAlt: "",
						spanDescripcion: "",
						user: "",
					});
					sweetAlert(
						"center",
						"success",
						"",
						"LOS CAMBIOS SE REALIZARON CON ÉXITO",
						false,
						2500
					);
					break;
				default:
					break;
			}
		} else {
			sweetAlert(
				"center",
				"error",
				"",
				"LOS CAMBIOS NO SE REALIZARON",
				false,
				2500
			);
		}
	});
};

/*Se elimina el testimonio que seleccione el administrado en el modal*/
const sweetAlertBtnConfirmarTestimonioEliminado = (
	handleChangeModalTestimoniales,
	modalTestimoniales,
	testimonial,
	handleInputChangeModalTestimoniales1,
	handleChangeFormTestimoniales
) => {
	MySwal.fire({
		icon: "question",
		title: "¿DESEAS ELIMINAR ESTE TESTIMONIO?",
		showDenyButton: false,
		showConfirmButton: true,
		showCancelButton: true,
		confirmButtonText: `Eliminar`,
	}).then((result) => {
		if (result.isConfirmed) {
			const auxModalTestimoniales = modalTestimoniales.filter((test) => {
				return test.id !== testimonial.id;
			});
			handleChangeModalTestimoniales(auxModalTestimoniales);
			handleInputChangeModalTestimoniales1({
				id: "",
				imgSrc: "",
				imgAlt: "",
				spanDescripcion: "",
				user: "",
			});
			handleChangeFormTestimoniales({
				formVisibility: false,
				nameAction: "CREAR",
			});
			sweetAlert(
				"center",
				"success",
				"",
				"EL TESTIMONIO FUE ELIMINADO CON ÉXITO",
				false,
				2500
			);
		} else {
			sweetAlert(
				"center",
				"error",
				"",
				"EL TESTIMONIO NO FUE ELIMINADO",
				false,
				2500
			);
		}
	});
};

export {
	sweetAlertMenuAgregarCarrito,
	sweetAlert,
	sweetAlertBtnEliminarPlatillo,
	sweetAlertPreguntarCerrarSesion,
	sweetAlertPreguntarCerrarSesion1,
	sweetAlertPreguntarCrearEditarEliminarPlato,
	sweetAlertPreguntarCrearEditarEliminarServicio,
	sweetAlertBtnGuardarModalHistoria,
	sweetAlertBtnConfirmarEmpleadoEditado,
	sweetAlertBtnEliminarEmpleado,
	sweetAlertBtnConfirmarTestimonioEditado,
	sweetAlertBtnConfirmarTestimonioEliminado,
};
