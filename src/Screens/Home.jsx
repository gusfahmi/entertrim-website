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

export default function Index({ location, history }) {
	if (location.search !== "") {
		const getLangParams = location.search.split("=")[1];
		if (
			getLangParams !== null ||
			(getLangParams !== undefined && getLangParams === "id")
		) {
			localStorage.setItem("lang", "id");
			history.push("/");
		}
	}

	const langHref = () => {
		const lang = localStorage.getItem("lang");
		if (lang === "id") {
			return [
				"Jasa Pembuatan Website, Aplikasi, Software, Jaringan, Server, Kecerdasan Buatan dan IoT Terbaik di Kota Medan.",
				"https://www.entertrim.com/?lang=id",
			];
		} else {
			return [
				"The Best Web, App, Software, Network, Server, AI and IoT Development Services in Medan.",
				"https://www.entertrim.com/",
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
				title={`Entertrim Technology - ${langHref()[0]}`}
				description={langHref()[0]}
				hrefUrlId='https://www.entertrim.com/?lang=id'
				ogURL={`${langHref()[1]}`}
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
