/** @format */

import * as React from "react";

import Image from "next/image";

import Layout from "../components/Layout";
import PresentationDiv from "../components/PresentationDiv";
import LinksSquare from "../components/LinksSquare";

import style from "../style/pages/index.module.scss";

export const getServerSideProps = async () => {
    const data = (await import("../lib/data")).default;

    const navAsdData = data.getUiData();
    const userData = data.getUserPerfil();
    const uiData = data.getUiData();

    return { props: { navAsdData, userData, uiData } };
};

interface Props {
    id?: string;
    data?: unknown;
    className?: unknown;
    style?: object;
}

const SocialPage = class SocialPage extends React.Component<Props, object> {
    children: JSX.Element;
    data: unknown;
    avatarImg: unknown;
    perfilSpace: unknown;
    state: unknown;

    constructor(props: unknown) {
        super(props);

        this.children = props.children;
        this.data = props.data;
        this.avatarImg = React.createRef();
        this.perfilSpace = React.createRef();
        this.state = {
            avatarHeight: "",
            perfilSpaceRows: "",
        };
    }
    componentDidMount(): void {
        const perfilSpaceHeight = this.perfilSpace.current.clientHeight;

        if (perfilSpaceHeight >= 2000) {
            this.setState({ perfilSpaceRows: "100vh auto" });
        } else if (perfilSpaceHeight >= 1000) {
            this.setState({ perfilSpaceRows: "75vh auto" });
        }
    }
    render(): JSX.Element {
        return <div></div>;
    }
};

const main = ({ navAsdData, userData, uiData }: unknown) => {
    return <Layout fullview={false} navAsdData={navAsdData}></Layout>;
};
export default main;
