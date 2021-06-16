import React from "react";

export default function JumbotronContent({ titleContent }) {
	return (
		<>
			<div className='jumbotron-fluid jumbotron-content background-dark d-flex justify-content-center align-items-center'>
				<div className='wrapper-jumbotron-content d-flex flex-column justify-content-center align-items-center'>
					<h1 className='title-jumbotron-content'>{titleContent}</h1>
					{/* <span className='line-jumbotron-content'></span> */}
				</div>
			</div>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#000'
					fill-opacity='1'
					d='M0,160L30,144C60,128,120,96,180,122.7C240,149,300,235,360,234.7C420,235,480,149,540,138.7C600,128,660,192,720,218.7C780,245,840,235,900,224C960,213,1020,203,1080,213.3C1140,224,1200,256,1260,245.3C1320,235,1380,181,1410,154.7L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z'></path>
			</svg>
		</>
	);
}
