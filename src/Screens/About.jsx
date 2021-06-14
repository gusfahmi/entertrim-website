import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import JumbotronContent from "../Components/JumbotronContent";
import AboutUs from "../Components/About";
import Clients from "../Components/Clients";

export default function About() {
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
