/** @format */

import * as React from "react";
import { JSX } from "react";

import Image from "next/image";

import Layout from "../components/layout";

import style from "../style/pages/bio.module.scss";

export const getServerSideProps = async () => {
    const data = (await import("../lib/data")).default;

    const navAsdData = data.getUiData();
    const userData = data.getUserPerfil();
    const uiData = data.getUiData();

    return { props: { navAsdData, userData, uiData } };
};

interface Props {
}

const BioPage = class BioPage extends React.Component<Props, object> {

    constructor(props: Props) {
        super(props);
    }
    render(): JSX.Element {
        return (
            <div className={style.bioPageBox}>
                <div></div>
            </div>
        );
    }
};

const main = ({ navAsdData }: any): JSX.Element => {
    return (
        <Layout fullview={false} navAsdData={navAsdData}>
            <BioPage />
        </Layout>
    );
};
export default main;
