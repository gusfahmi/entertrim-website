import React from "react";
import { Link } from "react-router-dom";

import { setLang } from "../lib/Language";

export default function AboutUs() {
	return (
		<>
			<div className='container-fluid'>
				<div className='wrapper-about '>
					<div className='row justify-content-center'>
						<div className='col-lg-5 '>
							<div className='content-about-description '>
								<div className='left-line-about mr-3'></div>
								<div className='right-content-about'>
									<h3>
										<span>Entertrim Technology</span>
									</h3>
									<p>{setLang().About_Desc_Entertrim}</p>
									<Link to='/services' className='btn btn-gold-about'>
										{setLang().JumbotronIndex_Btn_Services}
									</Link>
								</div>
							</div>
						</div>
						<div className='col-lg-7 '>
							<div className='content-image-about'>
								<img src='/assets/icons/about_icon.svg' alt='' />
							</div>
						</div>
					</div>
				</div>

				<div className='about-mission'>
					<div className='row justify-content-center'>
						<div className='col-lg-6 col-md-6 d-flex justify-content-center align-items-center'>
							<div className='wrap-vision-content'>
								<img
									src='/assets/icons/vision.svg'
									alt='Our Vision | Entertrim Technology'
								/>

								<h3 className='title-about-mission'>
									{setLang().About_Vision_Title}
								</h3>
								<p className='desc-about-mission'>
									{setLang().About_Vision}
								</p>
							</div>
						</div>
						<div className='col-lg-6 col-md-6 d-flex justify-content-center align-items-center'>
							<div className='wrap-mission-content'>
								<img
									src='/assets/icons/mission.svg'
									alt='Our Mission | Entertrim Technology'
								/>
								<h3 className='title-about-mission'>
									{setLang().About_Mission_Title}
								</h3>
								<p className='desc-about-mission'>
									{setLang().About_Mission}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
