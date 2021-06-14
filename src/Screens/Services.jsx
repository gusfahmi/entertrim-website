import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ServicesList from "../Components/Services";
import JumbotronContent from "../Components/JumbotronContent";

export default function Services() {
	return (
		<>
			<Header />
			<JumbotronContent titleContent='Our Services' />

			<ServicesList />
			<Footer />
		</>
	);
}
