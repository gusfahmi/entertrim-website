import React from "react";

export default function Contact() {
	return (
		<>
			<div className='container-fluid'>
				<section className='wrapper-choose'>
					<img
						className='icon-index'
						src='/assets/icons/contacts.png'
						alt='How we can help you | Entertrim'
					/>
					<h3 className='text-center text-dark mb-5 mt-5 text-title-explain'>
						<span>Let's Get In Touch</span>
					</h3>
				</section>

				<section className='wrapper-contact'>
					<div className='row justify-content-around'>
						<div className='col-lg-5 col-md-6 col-sm-12'>
							<div className='content-contact'>
								<h3 className='contact-title'>Our Contact</h3>
								<p className='contact-desc'>
									We are waiting for you to contact us immediately
								</p>

								<div className='content-detail-contact'>
									<h5 className='contact-detail'>Details</h5>
									<a href='#' className='detail-contact'>
										halo@entertrim.com
									</a>
									<span className='line-contact'></span>

									<a href='#' className='detail-contact'>
										+6282166216671 (Phone / Whatsapp / Telegram)
									</a>
									<span className='line-contact'></span>

									<a href='#' className='detail-contact'>
										Jl. Medan-Binjai, Diski, Km. 14.5, Gg. Bantan,
										Deli Serdang, Sumatera Utara.
									</a>
									<span className='line-contact'></span>
								</div>
							</div>
						</div>
						<div className='col-lg-5 col-md-6 col-sm-12'>
							<div className='content-contact '>
								<h3 className='contact-title'>Direct Contact</h3>
								<p className='contact-desc'>
									Get in touch with us here
								</p>

								<div className='content-detail-contact'>
									<input
										type='email'
										name=''
										className='form-control shadow-none mb-3'
										placeholder='Your Email'
									/>

									<textarea
										name=''
										id='text-area'
										className='form-control shadow-none mb-3 '
										spellCheck={false}
										placeholder='Contact detail'></textarea>

									<button className='btn btn-submit-contact'>
										SEND
									</button>
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
