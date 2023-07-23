import * as React from 'react';
import * as ReactDomServer from 'react-dom/server';

import Layout from '../../../components/layout';

export const getServerSideProps = async ({params: {pid} }: any) => {
    const data = (await import('../../../lib/data')).default;

    const navAsdData = data.getUiData();

    return { props: { navAsdData } };
};
const Playlist = ({ navAsdData }: any) => {
    return (
        <Layout navAsdData={navAsdData}>
            
        </Layout>
    );
};
export default Playlist;