import React from "react";
import ModalContact from "./ModalContact";

import { setLang } from "../lib/Language";

export default function Services() {
	return (
		<>
			<ModalContact />
			<div className='container-fluid'>
				<section className='wrapper-choose'>
					<img
						className='icon-index'
						src='/assets/icons/services.svg'
						alt='Our Services | Entertrim Technology'
					/>
					<h3 className='text-center text-dark mb-5 mt-5 text-title-explain'>
						<span>{setLang().Services_Title}</span>
					</h3>
				</section>

				<section className='wrapper-detail-choose'>
					<div className='row justify-content-center'>
						<div className='col-lg-4 col-md-6'>
							<div className='background-dark list-choose-service'>
								<div className='wrap-img-services'>
									<img
										className='card-img-top img-card-service'
										src='/assets/icons/website.svg'
										alt='Web Development | Entertrim Technology'
									/>
								</div>

								<div className='content-services'>
									<h5 className='card-title title-service'>Website</h5>
									<p className='card-text text-service'>
										{setLang().Services_Web}
									</p>

									<div className='wrap-btn-service-detail'>
										<button class='btn-service-detail'>
											Landing Page
										</button>
										<button class='btn-service-detail'>
											E-Commerce
										</button>
										<button class='btn-service-detail'>
											Dashboard
										</button>
										<button class='btn-service-detail'>
											CMS, CRM
										</button>
										<button class='btn-service-detail'>
											Web App
										</button>
										<button class='btn-service-detail'>
											Front-end Development
										</button>
										<button class='btn-service-detail'>
											Back-end Development
										</button>
										<button class='btn-service-detail'>
											Government
										</button>
									</div>
								</div>

								<div className='contact-btn-service'>
									<button
										className='btn btn-gold-services'
										data-toggle='modal'
										data-target='#modalContact'>
										{setLang().Services_Btn_Contact}
									</button>
								</div>
							</div>
						</div>

						<div className='col-lg-4 col-md-6'>
							<div className='background-dark list-choose-service'>
								<div className='wrap-img-services'>
									<img
										className='card-img-top img-card-service'
										src='/assets/icons/android.svg'
										alt='Android Development | Entertrim Technology'
									/>
								</div>

								<div className='content-services'>
									<h5 className='card-title title-service'>Android</h5>
									<p className='card-text text-service'>
										{setLang().Services_Android}
									</p>

									<div className='wrap-btn-service-detail'>
										<button class='btn-service-detail'>
											Android App
										</button>
										<button class='btn-service-detail'>Java</button>
										<button class='btn-service-detail'>
											Tracking
										</button>
										<button class='btn-service-detail'>
											Custom App
										</button>
										<button class='btn-service-detail'>
											Payment
										</button>
										<button class='btn-service-detail'>
											React Native
										</button>
										<button class='btn-service-detail'>
											Realtime App
										</button>
										<button class='btn-service-detail'>
											Government
										</button>
									</div>
								</div>

								<div className='contact-btn-service'>
									<button
										className='btn btn-gold-services'
										data-toggle='modal'
										data-target='#modalContact'>
										{setLang().Services_Btn_Contact}
									</button>
								</div>
							</div>
						</div>

						<div className='col-lg-4 col-md-6'>
							<div className='background-dark list-choose-service'>
								<div className='wrap-img-services'>
									<img
										className='card-img-top img-card-service'
										src='/assets/icons/software.svg'
										alt='Software Development | Entertrim Technology'
									/>
								</div>

								<div className='content-services'>
									<h5 className='card-title title-service'>
										Software
									</h5>
									<p className='card-text text-service'>
										{setLang().Services_Software}
									</p>

									<div className='wrap-btn-service-detail'>
										<button class='btn-service-detail'>Mac OS</button>
										<button class='btn-service-detail'>Linux</button>
										<button class='btn-service-detail'>
											Windows
										</button>
										<button class='btn-service-detail'>
											Management
										</button>
										<button class='btn-service-detail'>
											Custom Software
										</button>
										<button class='btn-service-detail'>
											Monitoring
										</button>
										<button class='btn-service-detail'>
											Cashier
										</button>
										<button class='btn-service-detail'>
											Government
										</button>
									</div>
								</div>

								<div className='contact-btn-service'>
									<button
										className='btn btn-gold-services'
										data-toggle='modal'
										data-target='#modalContact'>
										{setLang().Services_Btn_Contact}
									</button>
								</div>
							</div>
						</div>

						<div className='col-lg-4 col-md-6'>
							<div className='background-dark list-choose-service'>
								<div className='wrap-img-services'>
									<img
										className='card-img-top img-card-service'
										src='/assets/icons/ai.svg'
										alt='Artificial intelligence | Entertrim Technology'
									/>
								</div>

								<div className='content-services'>
									<h5 className='card-title title-service'>AI</h5>
									<p className='card-text text-service'>
										{setLang().Services_AI}
									</p>

									<div className='wrap-btn-service-detail'>
										<button class='btn-service-detail'>
											Image Processing
										</button>
										<button class='btn-service-detail'>Bot</button>
										<button class='btn-service-detail'>
											Image Classification
										</button>
										<button class='btn-service-detail'>
											Object Detection
										</button>
										<button class='btn-service-detail'>
											Face Recognition
										</button>
										<button class='btn-service-detail'>
											Gesture
										</button>
										<button class='btn-service-detail'>NLP</button>
									</div>
								</div>

								<div className='contact-btn-service'>
									<button
										className='btn btn-gold-services'
										data-toggle='modal'
										data-target='#modalContact'>
										{setLang().Services_Btn_Contact}
									</button>
								</div>
							</div>
						</div>

						<div className='col-lg-4 col-md-6'>
							<div className='background-dark list-choose-service'>
								<div className='wrap-img-services'>
									<img
										className='card-img-top img-card-service'
										src='/assets/icons/network.svg'
										alt='Networking | Entertrim Technology'
									/>
								</div>

								<div className='content-services'>
									<h5 className='card-title title-service'>Network</h5>
									<p className='card-text text-service'>
										{setLang().Services_Network}
									</p>

									<div className='wrap-btn-service-detail'>
										<button class='btn-service-detail'>
											Maintenance
										</button>
										<button class='btn-service-detail'>
											Building
										</button>
										<button class='btn-service-detail'>
											Upgrading
										</button>
										<button class='btn-service-detail'>
											Monitoring
										</button>
										<button class='btn-service-detail'>
											Services
										</button>
									</div>
								</div>

								<div className='contact-btn-service'>
									<button
										className='btn btn-gold-services'
										data-toggle='modal'
										data-target='#modalContact'>
										{setLang().Services_Btn_Contact}
									</button>
								</div>
							</div>
						</div>

						<div className='col-lg-4 col-md-6'>
							<div className='background-dark list-choose-service'>
								<div className='wrap-img-services'>
									<img
										className='card-img-top img-card-service'
										src='/assets/icons/server.svg'
										alt='Server | Entertrim Technology'
									/>
								</div>

								<div className='content-services'>
									<h5 className='card-title title-service'>Server</h5>
									<p className='card-text text-service'>
										{setLang().Services_Server}
									</p>

									<div className='wrap-btn-service-detail'>
										<button class='btn-service-detail'>
											Maintenance
										</button>
										<button class='btn-service-detail'>
											Upgrading
										</button>
										<button class='btn-service-detail'>
											Monitoring
										</button>
										<button class='btn-service-detail'>
											Building
										</button>
										<button class='btn-service-detail'>
											Services
										</button>
									</div>
								</div>

								<div className='contact-btn-service'>
									<button
										className='btn btn-gold-services'
										data-toggle='modal'
										data-target='#modalContact'>
										{setLang().Services_Btn_Contact}
									</button>
								</div>
							</div>
						</div>

						<div className='col-lg-4 col-md-6'>
							<div className='background-dark list-choose-service'>
								<div className='wrap-img-services'>
									<img
										className='card-img-top img-card-service'
										src='/assets/icons/iot.svg'
										alt='IoT Development | Entertrim Technology'
									/>
								</div>

								<div className='content-services'>
									<h5 className='card-title title-service'>IoT</h5>
									<p className='card-text text-service'>
										{setLang().Services_IoT}
									</p>

									<div className='wrap-btn-service-detail'>
										<button class='btn-service-detail'>
											Monitoring
										</button>
										<button class='btn-service-detail'>
											Controlling
										</button>
										<button class='btn-service-detail'>Sensor</button>
										<button class='btn-service-detail'>
											Detection
										</button>
										<button class='btn-service-detail'>
											Automation
										</button>
									</div>
								</div>

								<div className='contact-btn-service'>
									<button
										className='btn btn-gold-services'
										data-toggle='modal'
										data-target='#modalContact'>
										{setLang().Services_Btn_Contact}
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
