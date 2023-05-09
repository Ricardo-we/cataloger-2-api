import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from "@/redux/app.store";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {

	return (
		<ReduxProvider store={store}>
			<Component {...pageProps} />
		</ReduxProvider>
	)
}
