import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default function NotFound() {
	return (
		<>
			<Header />

			<div className='container-fluid'>
				<div className='wrap-not-found d-flex justify-content-center align-items-center'>
					<img src='/assets/icons/notfound.svg' alt='' />
				</div>
			</div>

			<Footer />
		</>
	);
}
