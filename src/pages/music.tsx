/** @format */

import React, { JSX } from "react";

import Layout from "../components/Layout";

export const getServerSideProps = async (): Promise<UnknownObj> => {
    const data = (await import("../lib/data")).default;

    const navAsdData = data.getUiData();
    const userData = data.getUserPerfil();
    const uiData = data.getUiData();

    return { props: { navAsdData, userData, uiData } };
};

interface Props extends React.ComponentPropsWithRef<unknown> {
    id?: string;
    data?: unknown;
    className?: unknown;
    style?: object;
}

const MusicPage = class MusicPage extends React.Component<Props, object> {
    children: JSX.Element;
    data: unknown;
    avatarImg: unknown;
    perfilSpace: unknown;
    state: UnknownObj;

    constructor(props: Props) {
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
