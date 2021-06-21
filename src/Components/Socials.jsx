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
					<div className='row justify-content-around background-dark'>
						<div className='col-lg-4 col-md-5 background-dark m-2 wrap-about-social social-ig'>
							<i className='fab fa-instagram fa-4x icon-about-social-ig'></i>

							<h3 className='title-about-mission m-2'>Instagram</h3>

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

						<div className='col-lg-4 col-md-5 background-dark m-2 wrap-about-social social-fb'>
							<i className='fab fa-facebook fa-4x icon-about-social-fb'></i>

							<h3 className='title-about-mission m-2'>Facebook</h3>

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
					<div className='row justify-content-around background-dark'>
						<div className='col-lg-4 col-md-5 background-dark m-2  wrap-about-social social-tw'>
							<i className='fab fa-twitter fa-4x icon-about-social-tw'></i>

							<h3 className='title-about-mission m-2 '>Twitter</h3>

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

						<div className='col-lg-4 col-md-5 background-dark m-2 wrap-about-social social-yt'>
							<i className='fab fa-youtube fa-4x icon-about-social-yt'></i>

							<h3 className='title-about-mission m-2'>Youtube</h3>

							<p className='desc-about-mission'>
								{setLang().Contact_Subscribe}
							</p>
							<button className='btn btn-social-content'>
								{setLang().Contact_Btn_Subscribe}
							</button>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
