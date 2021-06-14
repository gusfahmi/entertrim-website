import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import JumbotronContent from "../Components/JumbotronContent";
import Contact from "../Components/ContactContent";

export default function Contacts() {
	return (
		<>
			<Header />
			<JumbotronContent titleContent="Let's Get in Touch" />

			<Contact />

			<Footer />
		</>
	);
}
