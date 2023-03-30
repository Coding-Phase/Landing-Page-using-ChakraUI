import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</ChakraProvider>
	);
}
