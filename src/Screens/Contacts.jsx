import React, { useEffect } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import JumbotronContent from "../Components/JumbotronContent";
import Contact from "../Components/ContactContent";

import Helmet from "../Components/Helmet";

import { setLang } from "../lib/Language";

export default function Contacts({ location, history }) {
	if (location.search !== "") {
		const getLangParams = location.search.split("=")[1];
		if (
			getLangParams !== null ||
			(getLangParams !== undefined && getLangParams === "id")
		) {
			localStorage.setItem("lang", "id");
			history.push("/contact");
		}
	}

	const langHref = () => {
		const lang = localStorage.getItem("lang");
		if (lang === "id") {
			return [
				"Kontak Kami - Entertrim Technology",
				"Terhubung Dengan Kami",
				"https://www.entertrim.com/contact?lang=id",
			];
		} else {
			return [
				"Contact Us - Entertrim Technology",
				"Let's Get in Touch",
				"https://www.entertrim.com/contact",
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
				hrefUrlId='https://www.entertrim.com/contact?lang=id'
				ogURL={`${langHref()[2]}`}
			/>
			<Header />
			<JumbotronContent titleContent={setLang().Jumbotron_Contact} />

			<Contact />

			<Footer />
		</>
	);
}
