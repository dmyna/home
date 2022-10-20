import React from 'react'
import ReactHtmlParser from 'react-html-parser';

import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'

import style from '../style/css.module.scss'


const Layout = ({ children, NavAsdButtons }: any) => {
    return (
        <div id={style.body}>
            <Head>
                <title>Dev Myna</title>
                <meta name="author" content="Dev Myna" />
                <link rel="shortcut icon" href="https://i.imgur.com/jPLx8fi.png?1" type="image/x-icon" />
            </Head>
            <aside id={style.navegation}>
                {ReactHtmlParser(NavAsdButtons)}
            </aside>
            <div id={style.mainFlex}>
                <header>
                    <div></div>
                </header>
                <main id={style.main}>
                    <article id={style.main}>
                        {children}
                    </article>
                </main>
                <footer>
                </footer>
            </div>
            <div className={style.floatBoxesController}>

            </div>
        </div>
    )
}
export default Layout;