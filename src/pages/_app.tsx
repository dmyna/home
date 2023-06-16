import { Component } from 'react';
import '../style/themes/dark-theme/geral.scss';

const MyApp = ({ Component, pageProps }: any) => {
    return <Component {... pageProps} />
}
export default MyApp;