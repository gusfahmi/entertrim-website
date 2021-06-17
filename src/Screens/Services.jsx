import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ServicesList from "../Components/Services";
import JumbotronContent from "../Components/JumbotronContent";

import Helmet from "../Components/Helmet";

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
			<Helmet
				title='Our Services | Entertrim Technology'
				description='Our best technology services for you'
				keywords=''
			/>
			<Header />
			<JumbotronContent titleContent='OUR SERVICES' />

			<ServicesList />
			<Footer />
		</>
	);
}
