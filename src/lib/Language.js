import Languages from "./Languages.json";

function setLang() {
	const lang = localStorage.getItem("lang");
	if (lang === "id") {
		return Languages.Indonesia;
	} else {
		return Languages.English;
	}
}

export { setLang };
