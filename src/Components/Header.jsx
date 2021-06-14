import React, { useEffect } from "react";

export default function Header() {
	useEffect(() => {
		const btnMenu = document.getElementById("menu-toggle");
		btnMenu.addEventListener("click", () => {
			document.querySelector(".menu-1").classList.toggle("click");
			document.querySelector(".menu-2").classList.toggle("click");
			document.querySelector(".menu-3").classList.toggle("click");

			document.querySelector(".navbar-collapse").classList.toggle("active");
		});
	});

	return (
		<div className='wrapper-header'>
			<nav className='navbar navbar-expand-md fixed-top background-dark wrapper-head'>
				<a className='navbar-brand ' href='#'>
					<img src='/assets/images/logo.png' className=' img-logo' />
				</a>
				<button
					id='menu-toggle'
					className='navbar-toggler p-0 menu-toggle'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					{/* <i className='fa fa-bars text-light'></i> */}
					<span className='menu-1'></span>
					<span className='menu-2'></span>
					<span className='menu-3'></span>
				</button>

				<div
					className='collapse navbar-collapse mt-mobile '
					id='navbarSupportedContent'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item active'>
							<a className='nav-link active' href='#'>
								Services
							</a>
						</li>
						<li className='nav-item active'>
							<a className='nav-link' href='#'>
								About
							</a>
						</li>
						<li className='nav-item active'>
							<a className='nav-link' href='#'>
								Connect
							</a>
						</li>
						<li className='nav-item active'>
							<a className='nav-link' href='#'>
								Contact
							</a>
						</li>
						<li className='nav-item active'>
							<a className='nav-link' href='#'>
								Proposal
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
