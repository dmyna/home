import { Component } from 'react';
import '../style/themes/dark-theme/geral.scss';
import '../style/global.scss';

const MyApp = ({ Component, pageProps }: any) => {
    return <Component {... pageProps} />;
};
export default MyApp;