import React from "react";
import { Helmet } from "react-helmet";

export default function Helmer({ title, description, hrefUrlId, ogURL }) {
	const baseUrl = hrefUrlId.split("?lang=id");

	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<link rel='canonical' href='https://www.entertrim.com/' />
			<link rel='alternate' hreflang='x-default' href={baseUrl[0]} />
			<link rel='alternate' hreflang='id' href={hrefUrlId} />

			<meta property='og:type' content='website' />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:url' content={ogURL} />
			<meta property='og:site_name' content='Entertrim Technology' />
			<meta
				property='og:image'
				content='https://www.entertrim.com/assets/images/logo.svg'
			/>

			<meta
				content='https://www.instagram.com/entertrim/'
				property='og:see_also'
			/>
			<meta
				content='https://www.facebook.com/entertrim/'
				property='og:see_also'
			/>
			<meta content='https://twitter.com/entertrim' property='og:see_also' />

			<meta name='twitter:card' content='summary' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta
				name='twitter:image'
				content='https://www.entertrim.com/assets/images/logo.svg'
			/>
		</Helmet>
	);
}
