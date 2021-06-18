import React from "react";

export default function ModalContact() {
	return (
		<>
			<div
				className='modal fade'
				id='modalContact'
				tabindex='-1'
				role='dialog'>
				<div className='modal-dialog modal-dialog-centered' role='document'>
					<div className='modal-content'>
						<div className='modal-header' style={{ display: "block" }}>
							<center>
								<h5 className='modal-title text-center title-modal-contact'>
									CONTACT US
								</h5>
							</center>
						</div>
						<div className='modal-body mb-2'>
							<div className='wrap-contact-modal'>
								<div className='row'>
									<div className='col-6 wrap-btn-contact mb-4'>
										<a href='tel:+6282166216671'>
											<button className='btn btn-contact-modal shadow-none'>
												<i
													className='fa fa-phone fa-2x'
													style={{ color: "#fff" }}></i>
											</button>
										</a>
									</div>
									<div className='col-6 wrap-btn-contact mb-4'>
										<a
											href='https://wa.me/6282166216671?text=Hello Entertrim'
											rel='noreferrer'
											target='_blank'>
											<button className='btn btn-contact-modal shadow-none'>
												<i
													className='fab fa-whatsapp fa-2x'
													style={{ color: "#fff" }}></i>
											</button>
										</a>
									</div>
								</div>

								<div className='row'>
									<div className='col-6 wrap-btn-contact mt-1'>
										<a
											href='https://t.me/@gusfahmi'
											rel='noreferrer'
											target='_blank'>
											<button className='btn btn-contact-modal shadow-none'>
												<i
													className='fab fa-telegram fa-2x'
													style={{ color: "#fff" }}></i>
											</button>
										</a>
									</div>
									<div className='col-6 wrap-btn-contact mt-1'>
										<a href='mailto:halo@entertrim.com'>
											<button className='btn btn-contact-modal shadow-none'>
												<i
													className='fa fa-envelope fa-2x'
													style={{ color: "#fff" }}></i>
											</button>
										</a>
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
