import React from "react";
import { setLang } from "../lib/Language";

export default function Reasons() {
	return (
		<>
			<div className='container-fluid'>
				<section className='wrapper-choose'>
					<img
						className='icon-index'
						src='/assets/icons/request.svg'
						alt='Choose us | Entertrim Technology'
					/>
					<h3 className='text-center text-dark mb-5 mt-5 text-title-explain'>
						<span>{setLang().Reasons_Title}</span>
					</h3>
				</section>

				<section className='wrapper-detail-choose'>
					<div className='row justify-content-center'>
						<div className='col-lg-3 col-md-5 col-sm-12 m-2 mb-lg-5'>
							<div className='card background-dark list-choose'>
								<img
									className='card-img-top img-card'
									src='/assets/icons/domain.svg'
									alt='Free Domain | Entertrim Technology'
								/>
								<div className='card-body'>
									<h5 className='card-title'>
										{setLang().Reasons_Free_Domain}
									</h5>
									<p className='card-text'>
										{setLang().Reasons_Free_Domain_Description}
									</p>
								</div>
							</div>
						</div>
						<div className='col-lg-3 col-md-5 col-sm-12 m-2 mb-lg-5'>
							<div className='card background-dark list-choose'>
								<img
									className='card-img-top img-card'
									src='/assets/icons/hosting.svg'
									alt='Free Hosting | Entertrim Technology'
								/>
								<div className='card-body'>
									<h5 className='card-title'>
										{setLang().Reasons_Free_Hosting}
									</h5>
									<p className='card-text'>
										{setLang().Reasons_Free_Hosting_Description}
									</p>
								</div>
							</div>
						</div>

						<div className='col-lg-3 col-md-5 col-sm-12 m-2 mb-lg-5'>
							<div className='card background-dark list-choose'>
								<img
									className='card-img-top img-card'
									src='/assets/icons/ssl.svg'
									alt='Free SSL | Entertrim Technology'
								/>
								<div className='card-body'>
									<h5 className='card-title'>
										{setLang().Reasons_Free_SSL}
									</h5>
									<p className='card-text'>
										{setLang().Reasons_Free_SSL_Description}
									</p>
								</div>
							</div>
						</div>

						<div className='col-lg-3 col-md-5 col-sm-12 m-2 mb-lg-5'>
							<div className='card background-dark list-choose'>
								<img
									className='card-img-top img-card'
									src='/assets/icons/consultant.svg'
									alt='Free Consultant | Entertrim Technology'
								/>
								<div className='card-body'>
									<h5 className='card-title'>
										{setLang().Reasons_Free_Consultant}
									</h5>
									<p className='card-text'>
										{setLang().Reasons_Free_Consultant_Description}
									</p>
								</div>
							</div>
						</div>

						<div className='col-lg-3 col-md-5 col-sm-12 m-2 mb-lg-5'>
							<div className='card background-dark list-choose'>
								<img
									className='card-img-top img-card'
									src='/assets/icons/guaranteed.svg'
									alt='Guarantee | Entertrim Technology'
								/>
								<div className='card-body'>
									<h5 className='card-title'>
										{setLang().Reasons_Guarantee}
									</h5>
									<p className='card-text'>
										{setLang().Reasons_Guarantee_Description}
									</p>
								</div>
							</div>
						</div>

						<div className='col-lg-3 col-md-5 col-sm-12 m-2 mb-lg-5'>
							<div className='card background-dark list-choose'>
								<img
									className='card-img-top img-card'
									src='/assets/icons/trusted.svg'
									alt='Experience | Entertrim Technology'
								/>
								<div className='card-body'>
									<h5 className='card-title'>
										{setLang().Reasons_Experience}
									</h5>
									<p className='card-text'>
										{setLang().Reasons_Experience_Description}
									</p>
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
					d='M0,32L120,64C240,96,480,160,720,176C960,192,1200,160,1320,144L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'></path>
			</svg>
		</>
	);
}
