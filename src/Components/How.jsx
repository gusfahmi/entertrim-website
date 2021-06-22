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
					<h3 className='text-center text-dark mb-5 mt-4 text-title-explain'>
						{/* <span>HOW CAN WE HELP YOU</span> */}
						<span>{setLang().How_Title}</span>
					</h3>
					<p className='text-center'>{setLang().How_Content}</p>
				</section>
			</div>

			<div className='border-bg-black'></div>
		</>
	);
}
