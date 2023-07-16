import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux/app.store";
import "react-toastify/dist/ReactToastify.css";

// const queryClient = new QueryClient({
// 	defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
// });

export default function App({ Component, pageProps }: AppProps) {
	return (
		// <QueryClientProvider client={queryClient}>

		<ReduxProvider store={store}>
			<Component {...pageProps} />
		</ReduxProvider>
		// </QueryClientProvider>
	);
}
