import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'


class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
				<Script
					onError={(err) => console.log(err)}
					onReady={() => console.log("is ready")}
					strategy="lazyOnload"
					type="module" id="annotate-site-webapp-script" defer src="https://cdn.jsdelivr.net/gh/devVSdesign/webapp-script-dev@v.1.0.2/index.js?bId=6512c6187ae6ece170f7bc81" />
					<link
						href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap"
						rel="stylesheet"
					/>
					{/* FAVICONS */}
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/favicons/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicons/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicons/favicon-16x16.png"
					/>
					<link rel="manifest" href="/favicons/site.webmanifest" />
					<meta
						name="msapplication-config"
						content="/favicons/browserconfig.xml"
					/>
					<meta name="msapplication-TileColor" content="#FF0066" />
					<meta name="theme-color" content="#FF0066" />
					
				</Head>
				<body>
					<Main />
					<NextScript />
					
					<div id="modal-root"></div>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
