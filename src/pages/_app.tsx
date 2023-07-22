import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux/app.store";
import "react-toastify/dist/ReactToastify.css";
import BToaster from "@/components/display-components/Toast/BToaster";
import { QueryClient, QueryClientProvider } from "react-query";
import NavBar from "@/components/app_components/NavBar";
import { useRouter } from "next/router";
import { appConfig } from "@/settings";
import { ThemeProvider } from "@mui/material";
import { MainTheme } from "@/settings/themes/MainTheme";

const queryClient = new QueryClient({
	defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
});

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<QueryClientProvider client={queryClient}>
			<ReduxProvider store={store}>
				<ThemeProvider theme={MainTheme()} >
					<BToaster position="top-right" />
					{appConfig.NAVBAR_HIDDED_ROUTES.includes(
						router.pathname
					) ? (
						<></>
					) : (
						<NavBar />
					)}
					<Component {...pageProps} />
				</ThemeProvider>
			</ReduxProvider>
		</QueryClientProvider>
	);
}
