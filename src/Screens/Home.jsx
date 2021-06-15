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
						src='/assets/icons/help.svg'
						alt='How we can help you | Entertrim'
					/>
					<h3 className='text-center text-dark mb-5 mt-5 text-title-explain'>
						<span>HOW CAN WE HELP YOU</span>
					</h3>
					<p className='text-center'>
						Technology will never stop evolving. So with us, you can
						create any innovation and technology to raise and improve your
						business.
						<br />
						<br /> We will not only help you to solve your problems, we
						will also help you to raise and grow your business by
						technology
					</p>
				</section>
			</div>

			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#000'
					fill-opacity='1'
					d='M0,64L34.3,64C68.6,64,137,64,206,101.3C274.3,139,343,213,411,234.7C480,256,549,224,617,192C685.7,160,754,128,823,117.3C891.4,107,960,117,1029,128C1097.1,139,1166,149,1234,149.3C1302.9,149,1371,139,1406,133.3L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'></path>
			</svg>

			<Reasons />

			<Clients />

			<Services />

			<Contact />

			<Footer />
		</>
	);
}
