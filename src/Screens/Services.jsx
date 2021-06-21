import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ServicesList from "../Components/Services";
import JumbotronContent from "../Components/JumbotronContent";

import Helmet from "../Components/Helmet";

import { setLang } from "../lib/Language";

export default function Services({ location, history }) {
	if (location.search !== "") {
		const getLangParams = location.search.split("=")[1];
		if (
			getLangParams !== null ||
			(getLangParams !== undefined && getLangParams === "id")
		) {
			localStorage.setItem("lang", "id");
			history.push("/services");
		}
	}

	const langHref = () => {
		const lang = localStorage.getItem("lang");
		if (lang === "id") {
			return [
				"Layanan Kami - Entertrim Technology",
				"Layanan Terbaik kami Untuk Anda",
				"https://www.entertrim.com/services?lang=id",
			];
		} else {
			return [
				"Our Services - Entertrim Technology",
				"Our Best Services for Your Business",
				"https://www.entertrim.com/services",
			];
		}
	};

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<>
			<Helmet
				title={`${langHref()[0]}`}
				description={langHref()[1]}
				hrefUrlId='https://www.entertrim.com/services?lang=id'
				ogURL={`${langHref()[2]}`}
			/>
			<Header />
			<JumbotronContent titleContent={setLang().Jumbotron_Services} />

			<ServicesList />
			<Footer />
		</>
	);
}
