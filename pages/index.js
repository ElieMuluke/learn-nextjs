import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Hi. Iam <span style={{ fontWeight: "bold" }}>Elie.</span>I am a
					software engineer and fullstack web. I speak English, French and
					Swahili. Currently learning Japanese. You can contact me on{" "}
					<Link href='https://www.linkedin.com/in/eliemuluke/' target='_blank'>
						LinkedIn
					</Link>
				</p>
				<Link href='/posts/first-post'>First Post &rarr;</Link>
				<p>
					(This is a sample website - you’ll be building a site like this on{" "}
					<a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
				</p>
			</section>
		</Layout>
	);
}
