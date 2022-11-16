import * as React from 'react'
import * as ReactDomServer from 'react-dom/server'

import Layout from '../components/layout'
import MainPage from '../components/mainPage'

import style from '../style/css.module.scss'

export const getServerSideProps = async () => {
    const data = await require('/modules/data');

    const navAsdData = data.getUiData();
    const userData = data.getUserPerfil();

    return { props: { navAsdData, userData } }
}

const main = ({ navAsdData, userData }: any) => {
    return (
        <Layout navAsdData={navAsdData}>
            <MainPage data={userData} />
        </Layout>
    )
}
export default main;