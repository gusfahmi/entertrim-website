import React from "react";
import { Helmet } from "react-helmet";

export default function Helmer({ title, description, keywords }) {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keywords' content={keywords} />
			<link rel='canonical' href='https://www.entertrim.com/' />

			<meta property='og:locale' content='id_ID' />
			<meta property='og:type' content='website' />
			<meta
				property='og:title'
				content='Entertrim Technology | Consultant IT in Medan'
			/>
			<meta property='og:description' content='Consultant IT' />
			<meta property='og:url' content='https://www.entertrim.com/' />
			<meta property='og:site_name' content='Entertrim Technology' />
			<meta
				property='og:image'
				content='https://www.entertrim.com/assets/images/logo.svg'
			/>

			<meta name='twitter:card' content='summary' />
			<meta name='twitter:title' content='Jasa Pembuatan Website di Medan' />
			<meta
				name='twitter:description'
				content='Jasa Pembuatan Website di Medan. Kami Memberikan Harga dan Pelayanan Terbaik, Online Support 24 Jam. Respon Cepat Hub 0812 1189 0349 (WA)'
			/>
			<meta
				name='twitter:image'
				content='https://teknoweb.id/wp-content/uploads/2019/08/developer-teknoweb.jpg'
			/>
			<meta name='twitter:label1' content='Estimasi waktu membaca' />
			<meta name='twitter:data1' content='8 menit' />
		</Helmet>
	);
}
