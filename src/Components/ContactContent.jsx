import React from "react";
import Socials from "./Socials";

export default function ContactContent() {
	return (
		<>
			<Socials />
			<div className='container-fluid'>
				<section className='wrapper-choose'>
					<img
						className='icon-index'
						src='/assets/icons/contacts.png'
						alt='How we can help you | Entertrim'
					/>
					<h3 className='text-center text-dark mb-5 mt-5 text-title-explain'>
						<span>We Love to Chat With You</span>
					</h3>
				</section>

				<section className='wrapper-contact'>
					<div className='row justify-content-around background-dark'>
						<div className='col-lg-4 col-md-5 background-dark m-2 wrap-about-mission'>
							<img
								src='/assets/icons/phone.png'
								className='icon-about-mission'
								alt=''
							/>
							<h3 className='title-about-mission'>Call Us</h3>

							<p className='desc-about-mission'>Available : 24 Hours</p>
							<button className='btn btn-contact-content'>
								+62821-6621-6671
							</button>
						</div>
						<div className='col-lg-4 col-md-5 background-dark m-2 wrap-about-mission'>
							<img
								src='/assets/icons/email.png'
								className='icon-about-mission'
								alt=''
							/>
							<h3 className='title-about-mission'>Email Us</h3>

							<p className='desc-about-mission'>
								Available : 07:00 AM - 00.00 AM
							</p>
							<button className='btn btn-contact-content'>
								halo@entertrim.com
							</button>
						</div>

						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2815.6547797174485!2d98.5526891815901!3d3.6018631975646502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031293f19c440db%3A0x8ada879247c6a011!2sJl.%20Banten%2C%20Kec.%20Sunggal%2C%20Kabupaten%20Deli%20Serdang%2C%20Sumatera%20Utara%2020351!5e0!3m2!1sen!2sid!4v1623668257933!5m2!1sen!2sid'
							style={{
								width: "100%",
								height: 450,
								borderWidth: 0,
								marginTop: 60,
							}}
							allowfullscreen=''
							loading='lazy'></iframe>
					</div>
				</section>
			</div>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#000'
					fill-opacity='1'
					d='M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,112C672,96,768,96,864,101.3C960,107,1056,117,1152,101.3C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
			</svg>
		</>
	);
}
