import React from "react";

export default function JumbotronContent({ titleContent }) {
	return (
		<>
			<div className='jumbotron-fluid jumbotron-content background-dark d-flex justify-content-center align-items-center'>
				<div className='wrapper-jumbotron-content d-flex flex-column justify-content-center align-items-center'>
					<h1 className='title-jumbotron-content'>{titleContent}</h1>
				</div>
			</div>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 230'>
				<path
					fill='#000'
					fill-opacity='1'
					d='M0,128L80,149.3C160,171,320,213,480,208C640,203,800,149,960,133.3C1120,117,1280,139,1360,149.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'></path>
			</svg>
		</>
	);
}
