import React, { useEffect } from "react";

import Header from "../Components/Header";
import JumbotronIndex from "../Components/JumbotronIndex";
import Reasons from "../Components/Reasons";
import Services from "../Components/Services";
import Clients from "../Components/Clients";
import Contact from "../Components/ContactIndex";
import Footer from "../Components/Footer";

import Helmet from "../Components//Helmet";

export default function Index() {
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
				title='Entertrim Technology'
				description='The best consultant IT in Medan, Sumatera Utara | Jasa Pembuatan Website, Aplikasi, Software, IoT, Server dan Kecerdasan Buatan Di Medan'
			/>

			<Header />
			<JumbotronIndex />

			<div className='container-fluid'>
				<section className='wrapper-help'>
					<img
						className='icon-index'
						src='/assets/icons/help.svg'
						alt='How we can help you | Entertrim'
					/>
					<h3 className='text-center text-dark mb-5 mt-5 text-title-explain'>
						<span>HOW CAN WE HELP YOU</span>
					</h3>
					<p className='text-center'>
						Technology will never stop evolving. By joining us, we will
						help you to solve your problems and create any innovation and
						technology to raise and improve your business.
					</p>
				</section>
			</div>

			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#000'
					fill-opacity='1'
					d='M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,160C672,160,768,192,864,213.3C960,235,1056,245,1152,240C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
			</svg>

			<Reasons />

			<Clients />

			<Services />

			<Contact />

			<Footer />
		</>
	);
}
