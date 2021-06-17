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
						src='/assets/icons/contacts.svg'
						alt='Contact us | Entertrim Technology'
					/>
					<h3 className='text-center text-dark mb-5 mt-5 text-title-explain'>
						<span>We Love to Chat With You</span>
					</h3>
				</section>

				<section className='wrapper-contact'>
					<div className='row justify-content-around background-dark'>
						<div className='col-lg-4 col-md-5 background-dark m-2 wrap-about-mission'>
							<img
								src='/assets/icons/phone.svg'
								className='icon-about-mission'
								alt='Phone Contact | Entertrim Technology'
							/>
							<h3 className='title-about-mission'>Call Us</h3>

							<p className='desc-about-mission'>Available : 24 Hours</p>

							<a href='tel:+6282166216671'>
								<button className='btn btn-contact-content'>
									+62821-6621-6671
								</button>
							</a>
						</div>
						<div className='col-lg-4 col-md-5 background-dark m-2 wrap-about-mission'>
							<img
								src='/assets/icons/email.svg'
								className='icon-about-mission'
								alt='Email Contact | Entertrim Technology'
							/>
							<h3 className='title-about-mission'>Email Us</h3>

							<p className='desc-about-mission'>
								Available : 07:00 AM - 00.00 AM
							</p>
							<a href='mailto:halo@entertrim.com'>
								<button className='btn btn-contact-content'>
									halo@entertrim.com
								</button>
							</a>
						</div>

						<iframe
							title='Address Location'
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.926491537564!2d98.55231024979767!3d3.6043047973643345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x25826e5eb6d7e489!2sResidence%20Banten!5e0!3m2!1sen!2sid!4v1623767898642!5m2!1sen!2sid'
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
