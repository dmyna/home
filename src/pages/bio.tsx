/** @format */

import * as React from "react";
import { JSX } from "react";

import Image from "next/image";

import Layout from "../components/Layout";
import Profile from "../components/Profile";
import BiographyText from "../md/BiographyText.mdx";

import style from "../style/pages/bio.module.scss";

export const getServerSideProps = async () => {
    const data = (await import("../lib/data")).default;

    const navAsdData = data.getUiData();
    const userData = data.getUserPerfil();
    const uiData = data.getUiData();

    return { props: { navAsdData, userData, uiData } };
};

type Props = React.HTMLProps<HTMLDivElement> & { data: unknown };

const BioPage = class BioPage extends React.Component<Props> {
    data: unknown;

    constructor(props: Props) {
        super(props);

        this.data = props.data;
    }
    render(): JSX.Element {
        return (
            <div className={style.mainBox}>
                <Profile data={this.data} />
                <div className={style.textBox}>
                    <BiographyText />
                </div>
            </div>
        );
    }
};

const main = ({ navAsdData, userData, uiData }: unknown): JSX.Element => {
    return (
        <Layout fullview={false} navAsdData={navAsdData}>
            <BioPage data={{ ...userData, ...uiData }} />
        </Layout>
    );
};
export default main;
