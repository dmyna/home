import * as React from 'react'
import * as ReactDomServer from 'react-dom/server'
import ReactHtmlParser from 'react-html-parser'

import Layout from '../../components/layout'


export const getServerSideProps = async () => {
    const render = await require('/modules/render');
    const data = await require('/modules/data');
    const spotifyData = await require('/server/modules/spotify');

    await spotifyData.updatePlaylistsList();
    await spotifyData.updateUserArchive();

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
