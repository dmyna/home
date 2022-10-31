import * as React from 'react'
import * as ReactDomServer from 'react-dom/server'
import ReactHtmlParser from 'react-html-parser'

import Layout from '../components/layout'
import MainPage from '../components/mainPage'

import style from '../style/css.module.scss'

export const getServerSideProps = async () => {
    const render = await require('/modules/render');
    const data = await require('/modules/data');

    const NavAsdButtons = ReactDomServer.renderToString(render.navegation());
    const userData = data.getUserPerfil();

    return { props: { NavAsdButtons, userData } }
}

const main = ({ NavAsdButtons, userData }: any) => {
    return (
        <Layout NavAsdButtons={NavAsdButtons}>
            <MainPage data={userData} />
        </Layout>
    )
}
export default main;