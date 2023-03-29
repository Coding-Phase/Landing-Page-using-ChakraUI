import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";

export default function Home() {
	return (
		<>
			<Head>
				<title>Landing Page using Chakra UI</title>
				<meta name="description" content="Created by Vishal Thakur" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>
				<HeroSection />
				<Features />
				<Testimonial />
				<Contact />
			</div>
		</>
	);
}
