import * as React from 'react'
import * as ReactDomServer from 'react-dom/server'
import ReactHtmlParser from 'react-html-parser';

import Layout from '../../components/layout'


export const getServerSideProps = () => {
    const render = require('../../modules/render');
    const data = require('../../modules/data');

    const MainPagePlaylists = ReactDomServer.renderToString(render.mainPagePlaylists());
    const NavAsdButtons = ReactDomServer.renderToString(render.navegation());

    return { props: { MainPagePlaylists, NavAsdButtons } }
}


const Spotify = ({ MainPagePlaylists, NavAsdButtons }: any) => {
    return (
        <Layout NavAsdButtons={NavAsdButtons}>
            {ReactHtmlParser(MainPagePlaylists)}
        </Layout>
    )
}
export default Spotify;
