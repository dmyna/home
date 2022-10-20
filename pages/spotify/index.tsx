import * as React from 'react'
import * as ReactDomServer from 'react-dom/server'
import style from '../style/css.module.scss'
import Layout from '../../components/layout'
import ReactHtmlParser from 'react-html-parser';

export const getServerSideProps = ({req, res}: any) => {
    const render = require('../../modules/render');

    const MainPagePlaylists = ReactDomServer.renderToString(render.mainPagePlaylists());

    return {props: { MainPagePlaylists }}
}



const Spotify = ({ MainPagePlaylists }: any) => {
    return (
        <Layout>
            {ReactHtmlParser(MainPagePlaylists)}
        </Layout>
    )
}
export default Spotify;
