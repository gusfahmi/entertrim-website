import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ServicesList from "../Components/Services";
import JumbotronContent from "../Components/JumbotronContent";

export default function Services() {
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
			<JumbotronContent titleContent='Our Services' />

			<ServicesList />
			<Footer />
		</>
	);
}
