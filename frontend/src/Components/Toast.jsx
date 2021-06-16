import React from "react";

export default function Toast({ text, bg }) {
	return (
		<>
			<div id='snackbar' className='toast' style={{ backgroundColor: bg }}>
				{text}
			</div>
		</>
	);
}
