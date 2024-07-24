/** @format */
// * External Modules
import React from "react";
import { JSX } from "react";
import Head from "next/head";

// * Internal Modules
import NavAsdButtons from "./NavAsdButtons";

// * Typing
import utilsTypes from "../utils/types";
export namespace types {
    export type receive = {
        fullview: boolean;
        navAsdData:  utilsTypes.NavAsdData;
        children: JSX.Element;
    };
}
// * Style
import style from "../style/components/layout.normal.module.scss";
import fullStyle from "../style/components/layout.full.module.scss";

// * Main
const Layout = ({ fullview, navAsdData, children }: types.receive): JSX.Element => {
    const element = {
        fullview: (
            <div className={"body " + fullStyle.body}>
                <Head>
                    <title>Dev Myna</title>
                    <meta name='author' content='Dev Myna' />
                    <link
                        rel='shortcut icon'
                        href='https://avatars.githubusercontent.com/u/72279988'
                        type='image/x-icon'
                    />
                </Head>
                <div className={"mainFlex " + fullStyle.mainFlex}>
                    <main className={fullStyle.main}>
                        <article className={"mainContent " + fullStyle.main}>
                            {children}
                        </article>
                    </main>
                </div>
                <div
                    className={
                        "floatBoxesController " + fullStyle.floatBoxesController
                    }
                ></div>
            </div>
        ),
        normal: (
            <div className={"body " + style.body}>
                <Head>
                    <title>Dev Myna</title>
                    <meta name='author' content='Dev Myna' />
                    <link
                        rel='shortcut icon'
                        href='https://avatars.githubusercontent.com/u/72279988'
                        type='image/x-icon'
                    />
                </Head>
                <aside className={"navegation " + style.navegation}>
                    <NavAsdButtons data={navAsdData} />
                </aside>
                <div className={"mainFlex " + style.mainFlex}>
                    <header className={"mainHeader " + style.mainHeader}>
                        <div></div>
                    </header>
                    <main className={"mainContent"}>
                        <article className={style.mainContent}>
                            {children}
                        </article>
                    </main>
                    <footer
                        className={"mainFooter " + style.mainFooter}
                    ></footer>
                </div>
                <div
                    className={
                        "floatBoxesController " + style.floatBoxesController
                    }
                ></div>
            </div>
        ),
    };

    return fullview ? element.fullview : element.normal;
};
export default Layout;
