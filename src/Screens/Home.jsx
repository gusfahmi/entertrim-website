import React, { useEffect } from "react";

import Header from "../Components/Header";
import JumbotronIndex from "../Components/JumbotronIndex";
import Reasons from "../Components/Reasons";
import Services from "../Components/Services";
import Clients from "../Components/Clients";
import Contact from "../Components/ContactIndex";
import How from "../Components/How";
import Footer from "../Components/Footer";

import Helmet from "../Components//Helmet";

export default function Index({ location }) {
	if (location.search !== "") {
		const getLangParams = location.search.split("=")[1];
		if (
			getLangParams !== null ||
			(getLangParams !== undefined && getLangParams === "id")
		) {
			localStorage.setItem("lang", "id");
		}
	}

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
				title='Entertrim Technology'
				description='The best consultant IT in Medan, Sumatera Utara | Jasa Pembuatan Website, Aplikasi, Software, IoT, Server dan Kecerdasan Buatan Di Medan'
			/>

			<Header />
			<JumbotronIndex />
			<How />

			<Reasons />

			<Clients />

			<Services />

			<Contact />

			<Footer />
		</>
	);
}
