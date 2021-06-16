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
								<h5 className='modal-title text-center'>CONTACT US</h5>
							</center>
						</div>
						<div className='modal-body mb-2'>
							<div className='wrap-contact-modal'>
								<a href='tel:+6282166216671'>
									<button
										className='btn btn-contact-modal shadow-none'
										style={{
											backgroundColor: "#000",
											width: 70,
											height: 70,
										}}>
										<i
											className='fa fa-phone fa-2x'
											style={{ color: "#fff" }}></i>
									</button>
								</a>

								<a
									href='https://wa.me/6282166216671?text=Hello Entertrim'
									target='_blank'>
									<button
										className='btn btn-contact-modal shadow-none'
										style={{
											backgroundColor: "#000",
											width: 70,
											height: 70,
										}}>
										<i
											className='fab fa-whatsapp fa-2x'
											style={{ color: "#fff" }}></i>
									</button>
								</a>

								<a href='https://t.me/@gusfahmi' target='_blank'>
									<button
										className='btn btn-contact-modal shadow-none'
										style={{
											backgroundColor: "#000",
											width: 70,
											height: 70,
										}}>
										<i
											className='fab fa-telegram fa-2x'
											style={{ color: "#fff" }}></i>
									</button>
								</a>

								<a href='mailto:halo@entertrim.com'>
									<button
										className='btn btn-contact-modal shadow-none'
										style={{
											backgroundColor: "#000",
											width: 70,
											height: 70,
										}}>
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
		</>
	);
}
