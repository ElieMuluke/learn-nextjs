import Head from "next/head";
// import Script from "next/script";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
	return (
		<>
			<Layout>
				<Head>
					<title>First Post</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<h1>First Post</h1>
			</Layout>
		</>
	);
}
