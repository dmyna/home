import React from 'react'

import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'

import NavAsdButtons from './navAsdButtons'

import style from '../style/pages/index.normal.module.scss';
import fullStyle from '../style/pages/index.full.module.scss';


const Layout = ({ fullview, navAsdData, children }: any) => {
    const element = {
        fullview: (
            <div className={"body " + fullStyle.body}>
                <Head>
                    <title>Dev Myna</title>
                    <meta name="author" content="Dev Myna" />
                    <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/72279988" type="image/x-icon" />
                </Head>
                <div className={"mainFlex " + fullStyle.mainFlex}>
                    <main id={"main " + fullStyle.main}>
                        <article className={"main " + fullStyle.main}>
                            {children}
                        </article>
                    </main>
                </div>
                <div className={"floatBoxesController " + fullStyle.floatBoxesController}>

                </div>
            </div>
        ),
        normal: (
            <div className={"body " + style.body}>
                <Head>
                    <title>Dev Myna</title>
                    <meta name="author" content="Dev Myna" />
                    <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/72279988" type="image/x-icon" />
                </Head>
                <aside className={"navegation " + style.navegation}>
                    <NavAsdButtons data={navAsdData} />
                </aside>
                <div className={"mainFlex " + style.mainFlex}>
                    <header>
                        <div></div>
                    </header>
                    <main className={"main " + style.main}>
                        <article className={"main " + style.main}>
                            {children}
                        </article>
                    </main>
                    <footer>
                    </footer>
                </div>
                <div className={"floatBoxesController " + style.floatBoxesController}>

                </div>
            </div>
        )
    }

    if (fullview) {
        return element.fullview
    } else {
        return element.normal
    }
}
export default Layout
