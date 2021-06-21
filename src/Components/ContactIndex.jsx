import React, { useRef, useState } from "react";
import axios from "axios";
import Toast from "./Toast";

import { setLang } from "../lib/Language";

function validateEmail(mail) {
	if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
		return true;
	} else {
		return false;
	}
}
export default function Contact() {
	const [statusMessage, setStatusMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [bgToast, setBgToast] = useState("");

	const emailRef = useRef(null);
	const contentRef = useRef(null);

	const submitContact = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const email = emailRef.current.value;
		const content = contentRef.current.value;

		if (validateEmail(email)) {
			try {
				const sendMail = await axios.post(
					`${process.env.REACT_APP_EMAIL_ENDPOINT}`,
					{
						email: email,
						content: content,
					}
				);
				const response = sendMail.data;

				const { status } = response;

				document.querySelector(".toast").classList.add("show");
				setTimeout(() => {
					document.querySelector(".toast").classList.remove("show");
				}, 4000);

				if (status === "success") {
					setBgToast("#25D366");
					setStatusMessage(setLang().ContactIndex_Success);
				} else {
					setBgToast("#d91b42");
					setStatusMessage(setLang().ContactIndex_Failed);
				}
			} catch (e) {
				setBgToast("#d91b42");
				setStatusMessage(e.message);
				document.querySelector(".toast").classList.add("show");
				setTimeout(() => {
					document.querySelector(".toast").classList.remove("show");
				}, 4000);
			}
		} else {
			setBgToast("#d91b42");
			setStatusMessage(setLang().ContactIndex_Invalid);
			document.querySelector(".toast").classList.add("show");
			setTimeout(() => {
				document.querySelector(".toast").classList.remove("show");
			}, 4000);
		}

		setIsLoading(false);
		emailRef.current.value = "";
		contentRef.current.value = "";
	};

	return (
		<>
			<Toast text={statusMessage} bg={bgToast} />
			<div className='container-fluid'>
				<section className='wrapper-choose'>
					<img
						className='icon-index'
						src='/assets/icons/contacts.svg'
						alt='Contact us | Entertrim Technology'
					/>
					<h3 className='text-center text-dark mb-5 mt-5 text-title-explain'>
						<span>{setLang().ContactIndex_Title}</span>
					</h3>
				</section>

				<section className='wrapper-contact'>
					<div className='row justify-content-around'>
						<div className='col-lg-5 col-md-6 col-sm-12'>
							<div className='content-contact'>
								<h3 className='contact-title'>
									{setLang().ContactIndex_Contact_Title}
								</h3>
								<p className='contact-desc'>
									{setLang().ContactIndex_Contact_Desc}
								</p>

								<div className='content-detail-contact'>
									<h5 className='contact-detail'>
										{setLang().ContactIndex_Contact_Details}
									</h5>
									<a
										href='mailto:halo@entertrim.com'
										className='detail-contact'>
										halo@entertrim.com
									</a>
									<span className='line-contact'></span>

									<a
										href='tel:+6282166216671'
										className='detail-contact'>
										+62821-6621-6671 (Phone / Whatsapp / Telegram)
									</a>
									<span className='line-contact'></span>

									<a
										href='https://goo.gl/maps/Eq3UoQRjwWk1pykKA'
										target='_blank'
										rel='noreferrer'
										className='detail-contact'>
										Jl. Medan-Binjai, Diski, Km. 14.5, Gg. Bantan,
										Deli Serdang, Sumatera Utara.
									</a>
									<span className='line-contact'></span>
								</div>
							</div>
						</div>
						<div className='col-lg-5 col-md-6 col-sm-12'>
							<div className='content-contact '>
								<h3 className='contact-title'>
									{setLang().ContactIndex_Contact_Direct_Title}
								</h3>
								<p className='contact-desc'>
									{setLang().ContactIndex_Contact_Direct_Desc}
								</p>

								<div className='content-detail-contact'>
									<form onSubmit={submitContact}>
										<input
											ref={emailRef}
											type='email'
											name=''
											className='form-control shadow-none mb-3'
											placeholder='Email'
											required
										/>

										<textarea
											required
											ref={contentRef}
											name=''
											id='text-area'
											className='form-control shadow-none mb-3 '
											spellCheck={false}
											placeholder={
												setLang()
													.ContactIndex_Contact_Direct_Content
											}></textarea>

										<button
											type='submit'
											disabled={isLoading}
											className='btn btn-submit-contact'>
											{isLoading ? (
												<div
													class='spinner-border text-light '
													role='status'>
													<span class='sr-only'>Loading...</span>
												</div>
											) : (
												<span>
													{
														setLang()
															.ContactIndex_Contact_Direct_Btn
													}
												</span>
											)}
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#000'
					fill-opacity='1'
					d='M0,192L48,213.3C96,235,192,277,288,266.7C384,256,480,192,576,170.7C672,149,768,171,864,181.3C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
			</svg>
		</>
	);
}
