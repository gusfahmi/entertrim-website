import React from "react";

import { setLang } from "../lib/Language";

export default function AboutUs() {
	return (
		<>
			<div className='container-fluid'>
				<section className='wrapper-choose'>
					<img
						className='icon-about'
						src='/assets/images/logo.svg'
						alt='About Entertrim Technology | Consultant Technology in Medan'
					/>
					<h3 className='text-center text-dark mb-5 mt-5 text-title-explain'>
						<span>ENTERTRIM TECHNOLOGY</span>
					</h3>
					<p className='text-center'>{setLang().About_Desc_Entertrim}</p>
				</section>

				<section className='about-mission'>
					<div className='row justify-content-center'>
						<div className='col-lg-5 col-md-5 background-dark m-2 wrap-about-mission'>
							<img
								src='/assets/icons/vision.svg'
								className='icon-about-mission'
								alt='Our Vision | Entertrim Technology'
							/>

							<h3 className='title-about-mission'>Our Vision</h3>
							<p className='desc-about-mission'>
								{setLang().About_Vision}
							</p>
						</div>
						<div className='col-lg-5 col-md-5 background-dark m-2 wrap-about-mission'>
							<img
								src='/assets/icons/mission.svg'
								className='icon-about-mission'
								alt='Our Mission | Entertrim Technology'
							/>
							<h3 className='title-about-mission'>Our Mission</h3>
							<p className='desc-about-mission'>
								{setLang().About_Mission}
							</p>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
