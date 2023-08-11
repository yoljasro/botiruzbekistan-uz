//next
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
//react
import { useEffect, useRef } from "react";
//redux
import { Provider } from "react-redux";
//next-intl
import { NextIntlProvider } from "next-intl";
//component
//material ui
import { ThemeProvider } from "@mui/material";
//lib
//sass
import "../styles/globals.sass";

type PagePropsType = {
	messages: typeof import("../messages/uz.json")
}

const usePreviousRoute = () => {
	const { asPath } = useRouter();

	const ref = useRef<string | null>(null);

	useEffect(() => {
		ref.current = asPath;
	}, [asPath]);

	return ref.current;
};


function MyApp({ Component, pageProps }: AppProps<PagePropsType>) {
	const previousRoute = usePreviousRoute();

	return (
		<>
			<NextIntlProvider messages={pageProps.messages}>
						<Component {...pageProps} {...{previousRoute: previousRoute}} />
			</NextIntlProvider>
		</>
	)
}

export default MyApp