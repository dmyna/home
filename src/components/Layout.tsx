/** @format */
// * External Modules
import React from "react";
import { JSX } from "react";
import Head from "next/head";

// * Internal Modules
import NavAsdButtons, { vwWidth } from "./NavAsdButtons";

// * Typing
import utilsTypes from "../utils/types";
export namespace types {
    export type receive = {
        fullview: boolean;
        navAsdData: utilsTypes.NavAsdData;
        children: JSX.Element;
    };
}
// * Main
const Layout = ({
    fullview,
    navAsdData,
    children,
}: types.receive): JSX.Element => {
    const head = (
        <Head>
            <title>Dev Myna</title>
            <meta name='author' content='Dev Myna' />
            <link
                rel='shortcut icon'
                href='https://avatars.githubusercontent.com/u/72279988'
                type='image/x-icon'
            />
        </Head>
    );

    const element = {
        fullview: (
            <div className='w-dvw h-dvh'>
                {head}
                <div className='w-dvw h-dvh'>
                    <main className='w-full'>
                        <article>{children}</article>
                    </main>
                </div>
                <div></div>
            </div>
        ),
        normal: (
            <div className='flex overflow-hidden h-dvh'>
                {head}
                <aside className='w-max flex-shrink-0 bg-gray-950'>
                    <NavAsdButtons uiData={navAsdData} />
                </aside>
                <div className='flex flex-col h-dvh w-full bg-gray-950'>
                    <header
                        className={`h-[${vwWidth}] w-full font-bold font-display text-xl`}
                    >
                        <div className='flex justify-center align-middle w-full h-full'></div>
                    </header>
                    <main className='flex-grow overflow-y-auto rounded-ss-lg bg-gray-900'>
                        <article className='py-8 px-32'>{children}</article>
                    </main>
                    <footer></footer>
                </div>
                <div></div>
            </div>
        ),
    };

    return fullview ? element.fullview : element.normal;
};
export default Layout;
