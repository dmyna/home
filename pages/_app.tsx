import { Component } from 'react';

const MyApp = ({ Component, pageProps }: any) => {
    return <Component {... pageProps} />
}
export default MyApp;