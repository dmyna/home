/** @format */

import "-/style/themes/dark-theme/geral.scss";
import "-/style/global.scss";
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
