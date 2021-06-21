import React from "react";

import { setLang } from "../lib/Language";

export default function ModalLanguage() {
	return (
		<>
			<div
				className='modal fade'
				id='modalLanguage'
				tabindex='-1'
				role='dialog'>
				<div className='modal-dialog modal-dialog-centered' role='document'>
					<div className='modal-content'>
						<div className='modal-header' style={{ display: "block" }}>
							<center>
								<h5 className='modal-title text-center title-modal-lang'>
									{setLang().ModalLanguage_Select}
								</h5>
							</center>
						</div>
						<div className='modal-body mb-2'>
							<div className='wrap-lang-modal'>
								<div className='row'>
									<div className='col-6 wrap-btn-lang'>
										<img
											onClick={() => {
												localStorage.removeItem("lang");
												localStorage.clear();
												window.location = "/";
											}}
											src='/assets/icons/usa.svg'
											className='img-lang'
											alt=''
										/>
									</div>
									<div className='col-6 wrap-btn-lang'>
										<img
											onClick={() => {
												localStorage.setItem("lang", "id");
												window.location = "/?lang=id";
											}}
											src='/assets/icons/indonesia.svg'
											className='img-lang'
											alt=''
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
