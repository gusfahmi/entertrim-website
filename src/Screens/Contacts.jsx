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
				keywords='Web Development, Android Development, Software Development, AI Development, Network Development, Server Development, IoT Development, Pembuatan web medan, pembuatan aplikasi medan, pembuatan software medan, pembuatan kecerdasan buatan medan, pembuatan jaringan medan, pembuatan server medan, pembuatan IoT medan, terpercaya, medan, sumatera utara'
			/>
			<Header />
			<JumbotronContent titleContent="Let's Get in Touch" />

			<Contact />

			<Footer />
		</>
	);
}
