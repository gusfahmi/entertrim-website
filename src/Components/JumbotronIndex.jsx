import React from "react";
import { Link } from "react-router-dom";

export default function JumbotronIndex() {
	return (
		<div>
			<div className='jumbotron-fluid jumbotron-index d-flex justify-content-center align-items-center'>
				<div className='d-flex flex-column justify-content-center align-items-center p-4'>
					<h2 className='text-light text-center text-title-jumbotron'>
						ENTERTRIM TECHNOLOGY
					</h2>
					<p className='text-light text-center mb-5 text-desc-jumbotron'>
						We will help you to raise your business with innovation and
						technology
					</p>
					<Link to='/services'>
						<button
							className='btn btn-contact my-2 my-sm-0  shadow-none'
							type='submit'>
							SEE SERVICES
						</button>
					</Link>
				</div>
			</div>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#000'
					fill-opacity='1'
					d='M0,256L80,218.7C160,181,320,107,480,96C640,85,800,139,960,149.3C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'></path>
			</svg>
		</div>
	);
}
