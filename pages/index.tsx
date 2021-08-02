import Head from 'next/head';
import Navbar from '../cpmponents/navbar';
import About from '../cpmponents/about';
import Skills from '../cpmponents/skills';
import Contact from '../cpmponents/contact';


export default function Home() {
	return (
		<div>
			<Head>
				<title>Akash Sarode</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<main>
				<About />

				<Skills />
				
				<Contact />
				
				<BackToTop />
			</main>

		</div>
	)
}

function BackToTop () {
	return (
		<a href="#about" className="absolute p-4 right-0 m-2">
			<svg className="w-8 text-green-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7"></path></svg>
		</a>
	);
}
