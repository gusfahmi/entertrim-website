import React from "react";
import { Link } from "react-router-dom";
import ModalLanguage from "./ModalLanguage";
import { setLang } from "../lib/Language";

export default function Footer() {
	return (
		<div>
			<ModalLanguage />
			<div className='container-fluid background-dark'>
				<div className='row justify-content-center'>
					<div className='col-lg-6 col-md-12 col-sm-12'>
						<div className='wrapper-footer'>
							<div className='wrapper-follow'>
								<a
									href='https://instagram.com/entertrim'
									target='_blank'
									rel='noreferrer'
									className='social-icon'>
									<i className='fa fa-instagram fa-2x social-icon-ig'></i>
								</a>
								<a
									href='https://twitter.com/entertrim'
									target='_blank'
									rel='noreferrer'
									className='social-icon '>
									<i className='fa fa-twitter fa-2x social-icon-twitter'></i>
								</a>
								<a
									href='https://facebook.com/entertrim'
									target='_blank'
									rel='noreferrer'
									className='social-icon '>
									<i className='fa fa-facebook fa-2x social-icon-fb'></i>
								</a>
								<a
									href='https://www.youtube.com'
									target='_blank'
									rel='noreferrer'
									className='social-icon '>
									<i className='fa fa-youtube fa-2x social-icon-youtube'></i>
								</a>
							</div>

							<div className='wrapper-link-menu'>
								<Link to='/services' className='link-footer'>
									{setLang().Footer_Services}
								</Link>
								<Link to='/about' className='link-footer'>
									{setLang().Footer_About}
								</Link>
								<Link to='/contact' className='link-footer'>
									{setLang().Footer_Contact}
								</Link>
								<span
									className='link-footer'
									data-toggle='modal'
									data-target='#modalLanguage'>
									{setLang().Footer_Language}
								</span>
								<a
									href='/files/Entertrim_Proposal.pdf'
									className='link-footer'
									download>
									Proposal
								</a>
								<a
									href='https://github.com/gusfahmi'
									target='_blank'
									className='link-footer'
									rel='noreferrer'>
									Github
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
