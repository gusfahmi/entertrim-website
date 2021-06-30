import React from "react";
import { setLang } from "../lib/Language.js";
import { Link } from "react-router-dom";

export default function How() {
	return (
		<>
			<div className='container-fluid'>
				{/* <section className='wrapper-help'>
					<img
						className='icon-index'
						src='/assets/icons/help.svg'
						alt='How we can help you | Entertrim'
					/>
					<h3 className='text-center text-dark mb-5 mt-4 text-title-explain'>
						<span>{setLang().How_Title}</span>
					</h3>
					<p className='text-center'>{setLang().How_Content}</p>
				</section> */}

				<div className='wrapper-how'>
					<div className='row justify-content-center'>
						<div className='col-lg-5'>
							<div className='content-how-description'>
								<div className='left-line-how mr-3'></div>
								<div className='right-content-how'>
									<h3>
										<span>{setLang().How_Title}</span>
									</h3>
									<p>{setLang().How_Content}</p>
									<Link
										to='/services'
										className='btn btn-gold-services'>
										Layanan kami
									</Link>
								</div>
							</div>
						</div>
						<div className='col-lg-7'>
							<div className='content-image-how'>
								<img src='/assets/icons/business.svg' alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
