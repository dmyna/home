/** @format */

import React, { JSX } from "react";
import * as doc from "next/document";

const Document = (): JSX.Element => {
    return (
        <doc.Html className='dark'>
            <doc.Head></doc.Head>
            <body
                className='mx-0 box-border transition-[0.2s] visited:no-underline select-none'
                style={{ boxSizing: "border-box" }}
            >
                <doc.Main />
                <doc.NextScript />
            </body>
        </doc.Html>
    );
};
export default Document;
