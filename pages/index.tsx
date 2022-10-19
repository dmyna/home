import * as React from 'react'
import { global } from '../modules/global.js'
import { data } from '../modules/data.js'
import { events } from '../modules/events.js'
import { component } from '../modules/component.js'
import { render } from '../modules/render.js'
import { button } from '../modules/button.js'
import Head from 'next/head'
import Script from 'next/script'
import style from '../style/css.module.scss'

const main = () => {
    return (
        <>
            <Head>
                <title>Dev Myna</title>
                <meta name="author" content="Dev Myna" />
                <link rel="shortcut icon" href="https://i.imgur.com/jPLx8fi.png?1" type="image/x-icon" />
            </Head>

            <Script src="../main.tsx" />
            <style jsx>{`${style}`}</style>

            <aside id="navegation">
            </aside>
            <div id="main-flex">
                <header>
                    <div></div>
                </header>
                <main>
                    <article id="main">

                    </article>
                </main>
                <footer>
                </footer>
            </div>
            <div className="floatBoxesController">

            </div>
        </>
    )
}
export default main;