import React, { useEffect } from "react";
import Header from "../Components/Header";
import JumbotronIndex from "../Components/JumbotronIndex";
import Reasons from "../Components/Reasons";
import Services from "../Components/Services";
import Clients from "../Components/Clients";
import Contact from "../Components/ContactIndex";
import Footer from "../Components/Footer";

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
			<Header />
			<JumbotronIndex />

			<div className='container-fluid'>
				<section className='wrapper-help'>
					<img
						className='icon-index'
						src='/assets/icons/help.png'
						alt='How we can help you | Entertrim'
					/>
					<h3 className='text-center text-dark mb-5 mt-5 text-title-explain'>
						<span>HOW WE CAN HELP YOU</span>
					</h3>
					<p className='text-center'>
						Technology will never stop evolving. So with us, you can
						create any innovation and technology to raise and grow your
						business.
					</p>
				</section>
			</div>

			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#000000'
					fill-opacity='1'
					d='M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,138.7C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
			</svg>

			<Reasons />

			<Clients />

			<Services />

			<Contact />

			<Footer />
		</>
	);
}
