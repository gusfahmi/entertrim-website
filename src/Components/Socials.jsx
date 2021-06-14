import React from "react";

export default function Socials() {
	return (
		<>
			<div className='container-fluid'>
				<section className='wrapper-choose'>
					<img
						className='icon-index'
						src='/assets/icons/social.svg'
						alt='How we can help you | Entertrim'
					/>
					<h3 className='text-center text-dark mb-5 mt-5 text-title-explain'>
						<span>We Love to Connect With You</span>
					</h3>
				</section>

				<section className='wrapper-contact'>
					<div className='row justify-content-around background-dark'>
						<div className='col-lg-4 col-md-5 background-dark m-2 mt-5 wrap-about-social social-ig'>
							<i className='fab fa-instagram fa-4x icon-about-social-ig'></i>

							<h3 className='title-about-mission m-2'>Instagram</h3>

							<p className='desc-about-mission'>
								Follow us on Instagram
							</p>
							<a
								href='https://www.instagram.com/entertrim'
								target='_blank'>
								<button className='btn btn-social-content'>
									Follow
								</button>
							</a>
						</div>

						<div className='col-lg-4 col-md-5 background-dark m-2 mt-5 wrap-about-social social-fb'>
							<i className='fab fa-facebook fa-4x icon-about-social-fb'></i>

							<h3 className='title-about-mission m-2'>Facebook</h3>

							<p className='desc-about-mission'>Follow us on Facebook</p>
							<a
								href='https://www.facebook.com/entertrim'
								target='_blank'>
								<button className='btn btn-social-content'>
									Follow
								</button>
							</a>
						</div>
					</div>
					<div className='row justify-content-around background-dark'>
						<div className='col-lg-4 col-md-5 background-dark m-2 mb-5  wrap-about-social social-tw'>
							<i className='fab fa-twitter fa-4x icon-about-social-tw'></i>

							<h3 className='title-about-mission m-2 '>Twitter</h3>

							<p className='desc-about-mission'>Follow us on Twitter</p>
							<a
								href='https://www.twitter.com/entertrim'
								target='_blank'>
								<button className='btn btn-social-content'>
									Follow
								</button>
							</a>
						</div>

						<div className='col-lg-4 col-md-5 background-dark m-2 mb-5 wrap-about-social social-yt'>
							<i className='fab fa-youtube fa-4x icon-about-social-yt'></i>

							<h3 className='title-about-mission m-2'>Youtube</h3>

							<p className='desc-about-mission'>Subscribe our Channel</p>
							<button className='btn btn-social-content'>
								Subscribe
							</button>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
