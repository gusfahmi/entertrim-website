import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
	useEffect(() => {
		const loc = window.location.pathname;
		if (loc === "/about") {
			document.querySelector(".link-about").classList.add("active");
		} else if (loc === "/services") {
			document.querySelector(".link-services").classList.add("active");
		} else if (loc === "/contact") {
			document.querySelector(".link-contact").classList.add("active");
		} else if (loc === "/") {
			document.querySelector(".link-home").classList.add("active");
		}

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
				<Link to='/' className='navbar-brand'>
					<img src='/assets/images/logo.svg' className=' img-logo' />
				</Link>
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
							<Link to='/' className='nav-link link-home'>
								Home
							</Link>
						</li>
						<li className='nav-item active'>
							<Link to='/services' className='nav-link link-services'>
								Services
							</Link>
						</li>
						<li className='nav-item active'>
							<Link to='/about' className='nav-link link-about'>
								About
							</Link>
						</li>

						<li className='nav-item active'>
							<Link to='/contact' className='nav-link link-contact'>
								Contact
							</Link>
						</li>
						<li className='nav-item active'>
							<a
								className='nav-link'
								href='/assets/files/Entertrim_Proposal.pdf'
								download>
								Proposal
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
