import React, { JSX } from 'react';
import * as doc from 'next/document';

const Document = (): JSX.Element => {
    return (
        <doc.Html>
            <doc.Head>

            </doc.Head>
            <body style={{margin: '0px', boxSizing: 'border-box'}}>
                <doc.Main />
                <doc.NextScript />
            </body>
        </doc.Html>
    );
};
export default Document;