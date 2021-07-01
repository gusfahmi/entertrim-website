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
						<div className='col-lg-6 col-md-6 d-flex justify-content-center align-items-center '>
							<div className='content-contact '>
								<img src='/assets/icons/direct_contact.svg' alt='' />
							</div>
						</div>

						<div className='col-lg-6 col-md-6 d-flex justify-content-center align-items-center '>
							<div className='content-direct-contact'>
								<div className='wrap-title-direct'>
									<h3 className='contact-title'>
										{setLang().ContactIndex_Contact_Direct_Title}
									</h3>
									<p className='contact-desc'>
										{setLang().ContactIndex_Contact_Direct_Desc}
									</p>
								</div>

								<div className='content-detail-contact'>
									<form onSubmit={submitContact}>
										<input
											ref={emailRef}
											type='email'
											name=''
											className='shadow-none mb-3 form-input-direct'
											placeholder='Email'
											required
										/>

										<textarea
											required
											ref={contentRef}
											name=''
											className='form-detail-direct shadow-none mb-3 '
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
		</>
	);
}
