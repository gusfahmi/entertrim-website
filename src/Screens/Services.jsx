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
				title='Our Services | Entertrim Technology'
				description='Our best technology services for you'
				keywords=''
			/>
			<Header />
			<JumbotronContent titleContent={setLang().Jumbotron_Services} />

			<ServicesList />
			<Footer />
		</>
	);
}
