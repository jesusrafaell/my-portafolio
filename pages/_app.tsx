import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
//import { CustomCursorProvider } from '../components/CustomCursor/context/CustomCursorContex';
import CustomCursor from '../components/CustomCursor';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<CustomCursor />
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
