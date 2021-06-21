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
					d='M0,64L80,64C160,64,320,64,480,101.3C640,139,800,213,960,213.3C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'></path>
			</svg>
		</>
	);
}
