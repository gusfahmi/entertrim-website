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
					fill='#000000'
					fill-opacity='1'
					d='M0,160L30,144C60,128,120,96,180,74.7C240,53,300,43,360,58.7C420,75,480,117,540,117.3C600,117,660,75,720,74.7C780,75,840,117,900,122.7C960,128,1020,96,1080,112C1140,128,1200,192,1260,229.3C1320,267,1380,277,1410,282.7L1440,288L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z'></path>
			</svg>
		</div>
	);
}
