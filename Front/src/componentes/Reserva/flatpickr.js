import { Spanish } from "flatpickr/dist/l10n/es.js";
const config_fecha = {
	dateFormat: "d-m-Y",
	minDate: "today",
	locale: Spanish,
};

const config_hora = {
	enableTime: true,
	noCalendar: true,
	minTime: "8:00",
	maxTime: "18:00",
};

export { config_fecha, config_hora };
