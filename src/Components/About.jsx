import React from "react";

export default function AboutUs() {
	return (
		<>
			<div className='container-fluid'>
				<section className='wrapper-choose'>
					<img
						className='icon-about'
						src='/assets/images/logo.png'
						alt='How we can help you | Entertrim'
					/>
					<h3 className='text-center text-dark mb-5 mt-5 text-title-explain'>
						<span>ENTERTRIM TECHNOLOGY</span>
					</h3>
					<p className='text-center'>
						Entertrim Technology is a consultant technology company based
						on Medan, Sumatera Utara, Indonesia. We have experience to
						solve and help your business or government problems with our
						best teams. Let's grow together to make impact in Indonesia.
					</p>
				</section>

				<section className='about-mission'>
					<div className='row justify-content-center'>
						<div className='col-lg-5 col-md-5 background-dark m-2 wrap-about-mission'>
							<img
								src='/assets/icons/vision.svg'
								className='icon-about-mission'
								alt=''
							/>

							<h3 className='title-about-mission'>Our Vision</h3>
							<p className='desc-about-mission'>
								Our vision is to collaborate with business or government
								to create innovation through technology
							</p>
						</div>
						<div className='col-lg-5 col-md-5 background-dark m-2 wrap-about-mission'>
							<img
								src='/assets/icons/mission.svg'
								className='icon-about-mission'
								alt=''
							/>
							<h3 className='title-about-mission'>Our Mission</h3>
							<p className='desc-about-mission'>
								Our mission is to help, improve and solve business or
								government problems with technology
							</p>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
