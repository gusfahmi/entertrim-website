import React, { useEffect } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import JumbotronContent from "../Components/JumbotronContent";
import Contact from "../Components/ContactContent";

import Helmet from "../Components/Helmet";

export default function Contacts() {
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
				title='Contact Us | Entertrim Technology'
				description="Let's Get in Touch Immediately"
				keywords=''
			/>
			<Header />
			<JumbotronContent titleContent="LET'S GET IN TOUCH" />

			<Contact />

			<Footer />
		</>
	);
}
