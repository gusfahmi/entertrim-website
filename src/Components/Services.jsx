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

				<section className='wrapper-detail-choose p-2'>
					<div className='row justify-content-center'>
						<div className='col-lg-3 col-md-5 col-sm-12 m-2 mb-lg-5'>
							<div className='card background-dark list-choose-service'>
								<img
									className='card-img-top img-card-service'
									src='/assets/icons/website.svg'
									alt='Web Development | Entertrim Technology'
								/>
								<div className='card-body'>
									<h5 className='card-title title-service'>Website</h5>
									<p className='card-text text-service'>
										{setLang().Services_Web}
									</p>

									<button
										className='btn btn-gold'
										data-toggle='modal'
										data-target='#modalContact'>
										{setLang().Services_Btn_Contact}
									</button>
								</div>
							</div>
						</div>

						<div className='col-lg-3 col-md-5 col-sm-12 m-2 mb-lg-5'>
							<div className='card background-dark list-choose-service'>
								<img
									className='card-img-top img-card-service'
									src='/assets/icons/android.svg'
									alt='Android Development | Entertrim Technology'
								/>
								<div className='card-body'>
									<h5 className='card-title title-service'>Android</h5>
									<p className='card-text text-service'>
										{setLang().Services_Android}
									</p>
									<button
										className='btn btn-gold'
										data-toggle='modal'
										data-target='#modalContact'>
										{setLang().Services_Btn_Contact}
									</button>
								</div>
							</div>
						</div>

						<div className='col-lg-3 col-md-5 col-sm-12 m-2 mb-lg-5'>
							<div className='card background-dark list-choose-service'>
								<img
									className='card-img-top img-card-service'
									src='/assets/icons/software.svg'
									alt='Software Development | Entertrim Technology'
								/>
								<div className='card-body'>
									<h5 className='card-title title-service'>
										Software
									</h5>
									<p className='card-text text-service'>
										{setLang().Services_Software}
									</p>
									<button
										className='btn btn-gold'
										data-toggle='modal'
										data-target='#modalContact'>
										{setLang().Services_Btn_Contact}
									</button>
								</div>
							</div>
						</div>

						<div className='col-lg-3 col-md-5 col-sm-12 m-2 mb-lg-5'>
							<div className='card background-dark list-choose-service'>
								<img
									className='card-img-top img-card-service'
									src='/assets/icons/ai.svg'
									alt='Artificial intelligence | Entertrim Technology'
								/>
								<div className='card-body'>
									<h5 className='card-title title-service'>AI</h5>
									<p className='card-text text-service'>
										{setLang().Services_AI}
									</p>
									<button
										className='btn btn-gold'
										data-toggle='modal'
										data-target='#modalContact'>
										{setLang().Services_Btn_Contact}
									</button>
								</div>
							</div>
						</div>

						<div className='col-lg-3 col-md-5 col-sm-12 m-2 mb-lg-5'>
							<div className='card background-dark list-choose-service'>
								<img
									className='card-img-top img-card-service'
									src='/assets/icons/network.svg'
									alt='Networking | Entertrim Technology'
								/>
								<div className='card-body'>
									<h5 className='card-title title-service'>Network</h5>
									<p className='card-text text-service'>
										{setLang().Services_Network}
									</p>
									<button
										className='btn btn-gold'
										data-toggle='modal'
										data-target='#modalContact'>
										{setLang().Services_Btn_Contact}
									</button>
								</div>
							</div>
						</div>

						<div className='col-lg-3 col-md-5 col-sm-12 m-2 mb-lg-5'>
							<div className='card background-dark list-choose-service'>
								<img
									className='card-img-top img-card-service'
									src='/assets/icons/server.svg'
									alt='Server | Entertrim Technology'
								/>
								<div className='card-body'>
									<h5 className='card-title title-service'>Server</h5>
									<p className='card-text text-service'>
										{setLang().Services_Server}
									</p>
									<button
										className='btn btn-gold'
										data-toggle='modal'
										data-target='#modalContact'>
										{setLang().Services_Btn_Contact}
									</button>
								</div>
							</div>
						</div>

						<div className='col-lg-3 col-md-5 col-sm-12 m-2 mb-lg-5'>
							<div className='card background-dark list-choose-service'>
								<img
									className='card-img-top img-card-service'
									src='/assets/icons/iot.svg'
									alt='IoT Development | Entertrim Technology'
								/>
								<div className='card-body'>
									<h5 className='card-title title-service'>IoT</h5>
									<p className='card-text text-service'>
										{setLang().Services_IoT}
									</p>
									<button
										className='btn btn-gold'
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

			<div className='border-bg-black'></div>
		</>
	);
}
