import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div>
			<div className='container-fluid background-dark'>
				<div className='row justify-content-center'>
					<div className='col-lg-6 col-md-12 col-sm-12'>
						<div className='wrapper-footer'>
							<div className='wrapper-follow'>
								<a
									href='https://instagram.com/entertrim'
									target='_blank'
									className='social-icon social-icon-ig'>
									<i className='fab fa-instagram fa-2x'></i>
								</a>
								<a
									href='https://twitter.com/entertrim'
									target='_blank'
									className='social-icon social-icon-twitter'>
									<i className='fab fa-twitter fa-2x'></i>
								</a>
								<a
									href='https://facebook.com/entertrim'
									target='_blank'
									className='social-icon social-icon-facebook'>
									<i className='fab fa-facebook fa-2x'></i>
								</a>
								<a
									href='#'
									target='_blank'
									className='social-icon social-icon-youtube'>
									<i className='fab fa-youtube fa-2x'></i>
								</a>
							</div>

							<div className='wrapper-link-menu'>
								<Link to='/services' className='link-footer'>
									Services
								</Link>
								<Link to='/about' className='link-footer'>
									About
								</Link>
								<Link to='/contact' className='link-footer'>
									Contact
								</Link>
								<a
									href='/files/Entertrim_Proposal.pdf'
									className='link-footer'
									download>
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
		</div>
	);
}
