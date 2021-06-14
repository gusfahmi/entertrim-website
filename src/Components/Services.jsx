import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
	return (
		<>
			<div className='container-fluid'>
				<section className='wrapper-choose'>
					<img
						className='icon-index'
						src='/assets/icons/services.png'
						alt='Our Services | Entertrim'
					/>
					<h3 className='text-center text-dark mb-5 mt-5 text-title-explain'>
						<span>OUR SERVICES</span>
					</h3>
				</section>

				<section className='wrapper-detail-choose p-2'>
					<div className='row justify-content-center'>
						<div className='col-lg-3 col-md-5 col-sm-12 m-2 mb-lg-5'>
							<Link to='/services/website'>
								<div className='card background-dark list-choose-service'>
									<img
										className='card-img-top img-card-service'
										src='/assets/icons/web.png'
										alt='Web Development | Entertrim'
									/>
									<div className='card-body'>
										<h5 className='card-title title-service'>
											Website
										</h5>
										<p className='card-text text-service'>
											Build any kind of web static, portfolio or web
											app
										</p>
									</div>
								</div>
							</Link>
						</div>

						<div className='col-lg-3 col-md-5 col-sm-12 m-2 mb-lg-5'>
							<div className='card background-dark list-choose-service'>
								<img
									className='card-img-top img-card-service'
									src='/assets/icons/android.png'
									alt='Android Development | Entertrim'
								/>
								<div className='card-body'>
									<h5 className='card-title title-service'>Android</h5>
									<p className='card-text text-service'>
										Build android application for any android system
									</p>
								</div>
							</div>
						</div>

						<div className='col-lg-3 col-md-5 col-sm-12 m-2 mb-lg-5'>
							<div className='card background-dark list-choose-service'>
								<img
									className='card-img-top img-card-service'
									src='/assets/icons/software.png'
									alt='Free Domain | Entertrim'
								/>
								<div className='card-body'>
									<h5 className='card-title title-service'>
										Software
									</h5>
									<p className='card-text text-service'>
										Build desktop app for Windows or Mac Os
									</p>
								</div>
							</div>
						</div>

						<div className='col-lg-3 col-md-5 col-sm-12 m-2 mb-lg-5'>
							<div className='card background-dark list-choose-service'>
								<img
									className='card-img-top img-card-service'
									src='/assets/icons/ai.png'
									alt='Free Domain | Entertrim'
								/>
								<div className='card-body'>
									<h5 className='card-title title-service'>AI</h5>
									<p className='card-text text-service'>
										Build artificial intelligence for web, app or
										embed system
									</p>
								</div>
							</div>
						</div>

						<div className='col-lg-3 col-md-5 col-sm-12 m-2 mb-lg-5'>
							<div className='card background-dark list-choose-service'>
								<img
									className='card-img-top img-card-service'
									src='/assets/icons/network.png'
									alt='Free Domain | Entertrim'
								/>
								<div className='card-body'>
									<h5 className='card-title title-service'>Network</h5>
									<p className='card-text text-service'>
										Build, setup or maintain resource network system
									</p>
								</div>
							</div>
						</div>

						<div className='col-lg-3 col-md-5 col-sm-12 m-2 mb-lg-5'>
							<div className='card background-dark list-choose-service'>
								<img
									className='card-img-top img-card-service'
									src='/assets/icons/server.png'
									alt='Free Domain | Entertrim'
								/>
								<div className='card-body'>
									<h5 className='card-title title-service'>Server</h5>
									<p className='card-text text-service'>
										Build, setup or maintain server (hardware / VPS)
									</p>
								</div>
							</div>
						</div>

						<div className='col-lg-3 col-md-5 col-sm-12 m-2 mb-lg-5'>
							<div className='card background-dark list-choose-service'>
								<img
									className='card-img-top img-card-service'
									src='/assets/icons/iot.png'
									alt='Free Domain | Entertrim'
								/>
								<div className='card-body'>
									<h5 className='card-title title-service'>IoT</h5>
									<p className='card-text text-service'>
										Build controlling system with IoT
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#000000'
					fill-opacity='1'
					d='M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,80C672,85,768,139,864,170.7C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
			</svg>
		</>
	);
}
