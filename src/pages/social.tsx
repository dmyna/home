/** @format */

import * as React from "react";

import Image from "next/image";

import Layout from "../components/Layout";
import PresentationDiv from "../components/PresentationDiv";
import LinksSquare from "../components/LinksSquare";

import style from "../style/pages/index.module.scss";

export const getServerSideProps = async () => {
    const data = (await import("../lib/data")).default;

    const navAsdData = data.getUiData().val;
    const userData = data.getUserPerfil().val;
    const uiData = data.getUiData().val;

    return { props: { navAsdData, userData, uiData } };
};

interface Props {
    id?: string;
    data?: any;
    className?: any;
    style?: object;
}

const SocialPage = class SocialPage extends React.Component<Props, object> {
    children: JSX.Element;
    data: any;
    avatarImg: any;
    perfilSpace: any;
    state: any;

    constructor(props: any) {
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

const main = ({ navAsdData, userData, uiData }: any) => {
    return <Layout fullview={false} navAsdData={navAsdData}></Layout>;
};
export default main;
