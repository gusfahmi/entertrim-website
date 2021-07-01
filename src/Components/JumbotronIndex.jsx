import React from "react";
import { Link } from "react-router-dom";

import { setLang } from "../lib/Language";

export default function JumbotronIndex() {
	return (
		<>
			<div className='jumbotron-fluid jumbotron-index d-flex justify-content-center align-items-center'>
				<div className='d-flex flex-column justify-content-center align-items-center p-4'>
					<h2 class='text-animate'>
						<svg viewBox='0 0 2150 120'>
							<text x='50%' y='50%' dy='.35em' text-anchor='middle'>
								ENTERTRIM TECHNOLOGY
							</text>
						</svg>
					</h2>
					<h2 class='text-animate-large'>
						<svg viewBox='0 0 4500 30'>
							<text x='50%' y='50%' dy='.35em' text-anchor='middle'>
								ENTERTRIM TECHNOLOGY
							</text>
						</svg>
					</h2>
					<h2 class='text-animate-mobile'>
						<svg viewBox='0 0 1150 220'>
							<text x='50%' y='0%' dy='.35em' text-anchor='middle'>
								ENTERTRIM
							</text>
							<text x='50%' y='70%' dy='.35em' text-anchor='middle'>
								TECHNOLOGY
							</text>
						</svg>
					</h2>
					<p className='text-light text-center mb-5 text-desc-jumbotron'>
						{setLang().JumbotronIndex_Desc}
					</p>
					<Link to='/services'>
						<button
							className='btn btn-contact my-2 my-sm-0  shadow-none'
							type='submit'>
							{setLang().JumbotronIndex_Btn_Services}
						</button>
					</Link>
				</div>
			</div>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#000'
					fill-opacity='1'
					d='M0,192L60,176C120,160,240,128,360,122.7C480,117,600,139,720,160C840,181,960,203,1080,192C1200,181,1320,139,1380,117.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'></path>
			</svg>
		</>
	);
}
