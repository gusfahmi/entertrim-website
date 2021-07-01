import React from "react";
import Socials from "./Socials";

import { setLang } from "../lib/Language";

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
						<span>{setLang().Contact_Title_Chat}</span>
					</h3>
				</section>

				<section className='wrapper-contact'>
					<div className='row justify-content-around'>
						<div className='col-lg-6 col-md-6 d-flex justify-content-center align-items-center justify-content-xl-end'>
							<div className='wrap-phone-contact'>
								<img
									src='/assets/icons/phone.svg'
									alt='Phone Contact | Entertrim Technology'
								/>
								<h3>{setLang().Contact_Call_Us}</h3>

								<p>
									{setLang().Contact_Available_Call}
									<br />
									Phone / Whatsapp / Telegram
								</p>
								<a href='tel:+6282166216671'>
									<button className='btn btn-contact-content'>
										+62821-6621-6671
									</button>
								</a>
							</div>
						</div>
						<div className='col-lg-6 col-md-6 d-flex justify-content-center align-items-center justify-content-xl-start'>
							<div className='wrap-email-contact'>
								<img
									src='/assets/icons/email.svg'
									className='icon-about-mission'
									alt='Email Contact | Entertrim Technology'
								/>
								<h3 className='title-about-mission'>
									{setLang().Contact_Email_Us}
								</h3>

								<p className='desc-about-mission'>
									{setLang().Contact_Available_Email}
									<br />
									{setLang().Contact_Email_Handle}
								</p>
								<a href='mailto:halo@entertrim.com'>
									<button className='btn btn-contact-content'>
										halo@entertrim.com
									</button>
								</a>
							</div>
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
		</>
	);
}
