import React from 'react';
import * as doc from 'next/document';

const Document = () => {
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