/** @format */
import "-/tailwind.css";

import { JSX } from "react";
import { AppProps } from "next/app";

const MyApp = ({
    Component,
    pageProps,
}: AppProps): JSX.Element => {
    return <Component {...pageProps} />;
};
export default MyApp;
