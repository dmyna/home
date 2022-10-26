import * as React from 'react'
import * as ReactDomServer from 'react-dom/server'
import ReactHtmlParser from 'react-html-parser';
import Layout from '../components/layout'
import style from '../style/css.module.scss'

export const getServerSideProps = () => {
    const render = require('../modules/render')

    const NavAsdButtons = ReactDomServer.renderToString(render.navegation());

    return { props: { NavAsdButtons } }
}

const main = ({ NavAsdButtons }: any) => {
    return (
        <Layout NavAsdButtons={NavAsdButtons}>

        </Layout>
    )
}
export default main;