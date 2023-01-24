import React from 'react'

import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'

import NavAsdButtons from './navAsdButtons'

import style from '../style/css.module.scss'


const Layout = ({ navAsdData, children }: any) => (
    <div id={style.body}>
        <Head>
            <title>Dev Myna</title>
            <meta name="author" content="Dev Myna" />
            <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/72279988" type="image/x-icon" />
        </Head>
        <aside id={style.navegation}>
            <NavAsdButtons data={navAsdData} />
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
export default Layout;
