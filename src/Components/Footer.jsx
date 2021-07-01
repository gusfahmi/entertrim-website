import React from "react";
import { Link } from "react-router-dom";
import ModalLanguage from "./ModalLanguage";
import { setLang } from "../lib/Language";

export default function Footer() {
	return (
		<>
			<ModalLanguage />
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#000'
					fill-opacity='1'
					d='M0,192L48,213.3C96,235,192,277,288,266.7C384,256,480,192,576,170.7C672,149,768,171,864,181.3C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
			</svg>
			<div className='background-dark'>
				<div className='wrap-footer'>
					<div className='wrap-entertrim-footer'>
						<img src='/assets/images/logo.svg' alt='' />
					</div>

					<div className='wrap-social-footer'>
						<ul>
							<li>
								<a
									href='https://www.instagram.com/entertrim/'
									rel='noreferrer'
									target='_blank'>
									<i className='fa fa-instagram fa-ig-footer fa-2x'></i>
								</a>
							</li>
							<li>
								<a
									href='https://www.facebook.com/entertrim/'
									rel='noreferrer'
									target='_blank'>
									<i className='fa fa-facebook fa-fb-footer fa-2x'></i>
								</a>
							</li>
							<li>
								<a
									href='https://www.twitter.com/entertrim/'
									rel='noreferrer'
									target='_blank'>
									<i className='fa fa-twitter fa-twitter-footer fa-2x'></i>
								</a>
							</li>
							<li>
								<a
									href='https://www.youtube.com/'
									target='_blank'
									rel='noreferrer'>
									<i className='fa fa-youtube fa-youtube-footer fa-2x'></i>
								</a>
							</li>
						</ul>
					</div>

					<div className='wrap-menu-footer'>
						<ul>
							<li>
								<Link to='/services'>{setLang().Footer_Services}</Link>
							</li>
							<li>
								<Link to='/about'>{setLang().Footer_About}</Link>
							</li>
							<li>
								<Link to='/contact'>{setLang().Footer_Contact}</Link>
							</li>
							<li>
								<span
									className='link-footer'
									data-toggle='modal'
									data-target='#modalLanguage'>
									{setLang().Footer_Language}
								</span>
							</li>
							<li>
								<a href='/files/Entertrim_Proposal.pdf' download>
									Proposal
								</a>
							</li>
							<li>
								<a
									href='https://github.com/gusfahmi'
									target='_blank'
									className='link-footer'
									rel='noreferrer'>
									Github
								</a>
							</li>
						</ul>
					</div>
					<div className='wrap-copyright-footer'>
						<p>&copy; 2021 Entertrim Technology</p>
					</div>
				</div>
			</div>
		</>
	);
}
