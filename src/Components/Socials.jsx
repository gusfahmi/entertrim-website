import React from "react";

import { setLang } from "../lib/Language";

export default function Socials() {
	return (
		<>
			<div className='container-fluid'>
				<section className='wrapper-choose'>
					<img
						className='icon-index'
						src='/assets/icons/social.svg'
						alt='Connected | Entertrim Technology'
					/>
					<h3 className='text-center text-dark mb-5 mt-5 text-title-explain'>
						<span>{setLang().Contact_Title_Connect}</span>
					</h3>
				</section>

				<section className='wrapper-contact'>
					<div className='row justify-content-around'>
						<div className='col-lg-6 col-md-6 d-flex justify-content-center align-items-center justify-content-xl-end'>
							<div className='wrap-social-family'>
								<i className='fa fa-instagram fa-4x icon-about-social-ig'></i>

								<h3 className='title-about-mission'>Instagram</h3>

								<p className='desc-about-mission'>
									{setLang().Contact_Follow} Instagram
								</p>
								<a
									href='https://www.instagram.com/entertrim'
									rel='noreferrer'
									target='_blank'>
									<button className='btn btn-social-content'>
										{setLang().Contact_Btn_Follow}
									</button>
								</a>
							</div>
						</div>

						<div className='col-lg-6 col-md-6 d-flex justify-content-center align-items-center justify-content-xl-start'>
							<div className='wrap-social-family'>
								<i className='fa fa-facebook fa-4x icon-about-social-fb'></i>

								<h3 className='title-about-mission  '>Facebook</h3>

								<p className='desc-about-mission'>
									{setLang().Contact_Follow} Facebook
								</p>
								<a
									href='https://www.facebook.com/entertrim'
									rel='noreferrer'
									target='_blank'>
									<button className='btn btn-social-content'>
										{setLang().Contact_Btn_Follow}
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className='row justify-content-around'>
						<div className='col-lg-6 col-md-6 d-flex justify-content-center align-items-center justify-content-xl-end'>
							<div className='wrap-social-family'>
								<i className='fa fa-twitter fa-4x icon-about-social-tw'></i>

								<h3 className='title-about-mission '>Twitter</h3>

								<p className='desc-about-mission'>
									{setLang().Contact_Follow} Twitter
								</p>
								<a
									href='https://www.twitter.com/entertrim'
									rel='noreferrer'
									target='_blank'>
									<button className='btn btn-social-content'>
										{setLang().Contact_Btn_Follow}
									</button>
								</a>
							</div>
						</div>

						<div className='col-lg-6 col-md-6 d-flex justify-content-center align-items-center justify-content-xl-start'>
							<div className='wrap-social-family'>
								<i className='fa fa-youtube fa-4x icon-about-social-yt'></i>

								<h3 className='title-about-mission '>Youtube</h3>

								<p className='desc-about-mission'>
									{setLang().Contact_Subscribe}
								</p>
								<button className='btn btn-social-content'>
									{setLang().Contact_Btn_Subscribe}
								</button>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
