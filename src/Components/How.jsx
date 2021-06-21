import React from "react";
import { setLang } from "../lib/Language.js";

export default function How() {
	return (
		<>
			<div className='container-fluid'>
				<section className='wrapper-help'>
					<img
						className='icon-index'
						src='/assets/icons/help.svg'
						alt='How we can help you | Entertrim'
					/>
					<h3 className='text-center text-dark mb-5 mt-5 text-title-explain'>
						{/* <span>HOW CAN WE HELP YOU</span> */}
						<span>{setLang().How_Title}</span>
					</h3>
					<p className='text-center'>{setLang().How_Content}</p>
				</section>
			</div>

			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#000'
					fill-opacity='1'
					d='M0,96L120,117.3C240,139,480,181,720,202.7C960,224,1200,224,1320,224L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'></path>
			</svg>
		</>
	);
}
