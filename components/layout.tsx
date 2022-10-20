import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import style from '../style/css.module.scss'

const Layout = ({ children }: any) => {
    return (
        <div id={style.body}>
            <Head>
                <title>Dev Myna</title>
                <meta name="author" content="Dev Myna" />
                <link rel="shortcut icon" href="https://i.imgur.com/jPLx8fi.png?1" type="image/x-icon" />
            </Head>

            <aside id={style.navegation}>
                <nav></nav>
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