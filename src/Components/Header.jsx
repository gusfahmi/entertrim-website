import React from "react";

export default function Header() {
	return (
		<div className='wrapper-header'>
			<nav className='navbar navbar-expand-md fixed-top background-dark wrapper-head'>
				<a className='navbar-brand ' href='#'>
					<img src='/assets/images/logo.png' className=' img-logo' />
				</a>
				<button
					className='navbar-toggler p-0 menu-toggle'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<i className='fa fa-bars text-light'></i>
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
