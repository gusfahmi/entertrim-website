import React, { useEffect } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import JumbotronContent from "../Components/JumbotronContent";
import AboutUs from "../Components/About";
import Clients from "../Components/Clients";

export default function About() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<>
			<Header />
			<JumbotronContent titleContent='Who We Are' />

			<AboutUs />

			<Clients />

			<Footer />
		</>
	);
}
