import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux/app.store";
import "react-toastify/dist/ReactToastify.css";
import BToaster from "@/components/display-components/Toast/BToaster";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
	defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>

		<ReduxProvider store={store}>
			<BToaster
				position="top-right"
			/>
			<Component {...pageProps} />
		</ReduxProvider>
		 </QueryClientProvider>
	);
}
