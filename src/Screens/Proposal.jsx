import React, { useState } from "react";

import Header from "../Components/Header";

export default function Proposal() {
	return (
		<div>
			<Header />
			<iframe
				src='https://docs.google.com/gview?url=https://media.neliti.com/media/publications/25405-ID-remaja-sehat-melalui-pelayanan-kesehatan-peduli-remaja-di-tingkat-puskesmas.pdf&embedded=true'
				style={{ width: "100%", height: "100vh", marginTop: 70 }}
				frameborder='0'></iframe>
		</div>
	);
}
