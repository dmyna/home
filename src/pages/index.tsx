/** @format */

import * as React from "react";

import Layout from "../components/layout";
import PresentationDiv from "../components/PresentationDiv";
import LinksSquare from "../components/LinksSquare";
import Profile from "../components/Profile";

import style from "../style/pages/index.module.scss";

export const getServerSideProps = async () => {
    const data = (await import("../lib/data")).default;

    const navAsdData = data.getUiData();
    const userData = data.getUserPerfil();
    const uiData = data.getUiData();

    return { props: { navAsdData, userData, uiData } };
};

type Props = React.HTMLProps<HTMLDivElement> & { data: any };

class MainPage extends React.Component<Props> {
    children: JSX.Element;
    data: any;

    constructor(props: Props) {
        super(props);

        this.children = props.children;
        this.data = props.data;
    }
    render() {
        return (
            <div className={"mainPageSpace " + style.mainPageSpace}>
                <div
                    className={"perfilBg " + style.perfilBg}
                    style={{
                        backgroundImage: `url(${this.data.perfilbg[0].url})`,
                    }}
                >
                    <div className={"bgEffect " + style.bgEffect}></div>
                </div>
                <div className={"elementsBody " + style.elementsBody}>
                    <Profile data={this.data} />
                    <div
                        className={"mainContentSpace " + style.mainContentSpace}
                    >
                        <PresentationDiv data={this.data.uiData} />
                    </div>
                    <LinksSquare />
                </div>
            </div>
        );
    }
}

const main = ({ navAsdData, userData, uiData }: any) => {
    return (
        <Layout fullview={true} navAsdData={navAsdData}>
            <MainPage data={{ ...userData, uiData }} />
        </Layout>
    );
};
export default main;
