import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

export default function NotFound() {
	return (
		<>
			<Header />

			<div className='wrap-not-found d-flex flex-column justify-content-center align-items-center'>
				<h2>404 | NOT FOUND</h2>
				<div className='border-404'></div>
				<Link to='/'>
					<button className='btn btn-gold btn-not-found'>HOME</button>
				</Link>
			</div>
		</>
	);
}
