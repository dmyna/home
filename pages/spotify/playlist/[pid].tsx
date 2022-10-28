import * as React from 'react';
import * as ReactDomServer from 'react-dom/server';
import ReactHtmlParser from 'react-html-parser';

import Layout from '../../../components/layout';

export const getServerSideProps = async ({params: {pid} }: any) => {
    const render = require('../../../modules/render');

    const NavAsdButtons = ReactDomServer.renderToString(render.navegation());
    const playlistPage = ReactDomServer.renderToString(render.individualPlaylist(pid))

    return { props: { NavAsdButtons, playlistPage } };
}
const Playlist = ({ NavAsdButtons, playlistPage }: any) => {
    return (
        <Layout NavAsdButtons={NavAsdButtons}>
            {ReactHtmlParser(playlistPage)}
        </Layout>
    )
}
export default Playlist;