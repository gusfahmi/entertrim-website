import React from "react";

export default function Footer() {
	return (
		<>
			<div className='container-fluid background-dark'>
				<div className='row justify-content-center'>
					<div className='col-lg-6 col-md-12 col-sm-12'>
						<div className='wrapper-footer'>
							<div className='wrapper-follow'>
								<a href='#' className='social-icon social-icon-ig'>
									<i className='fab fa-instagram fa-2x'></i>
								</a>
								<a href='#' className='social-icon social-icon-twitter'>
									<i className='fab fa-twitter fa-2x'></i>
								</a>
								<a
									href='#'
									className='social-icon social-icon-facebook'>
									<i className='fab fa-facebook fa-2x'></i>
								</a>
								<a href='#' className='social-icon social-icon-youtube'>
									<i className='fab fa-youtube fa-2x'></i>
								</a>
							</div>

							<div className='wrapper-link-menu'>
								<a href='#' className='link-footer'>
									Services
								</a>
								<a href='#' className='link-footer'>
									About
								</a>
								<a href='#' className='link-footer'>
									Connect
								</a>
								<a href='#' className='link-footer'>
									Contact
								</a>
								<a href='#' className='link-footer'>
									Proposal
								</a>
							</div>

							<div className='wrapper-copyright'>
								<p className='copyright'>&copy; Entertrim Technology</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
