import React, { useEffect } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import JumbotronContent from "../Components/JumbotronContent";
import AboutUs from "../Components/About";
import Clients from "../Components/Clients";

import Helmet from "../Components/Helmet";

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
			<Helmet
				title='Who We Are | Entertrim Technology'
				description='About Entertrim Technology'
				keywords=''
			/>
			<Header />
			<JumbotronContent titleContent='WHO WE ARE' />

			<AboutUs />

			<Clients />

			<Footer />
		</>
	);
}
