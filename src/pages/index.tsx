/** @format */
//#region               External Modules
import React, { JSX } from "react";
//#endregion
//#region               Modules
import Layout from "C/Layout";
import PresentationDiv from "C/PresentationDiv";
import LinksSquare from "C/LinksSquare";
import Profile from "C/Profile";

import style from "S/pages/index.module.scss";
//#endregion
//#region               Typing
import utilsTypes from "-/utils/types";
import { GetServerSideProps, GetServerSidePropsResult } from "next";

export namespace types {
    export type Props = React.HTMLProps<HTMLDivElement> & {
        serverData: utilsTypes.ServerReceivedData;
    };
}
//#endregion
//#region               Implementation
class MainPage extends React.Component<types.Props> {
    children: React.ReactNode;
    serverData: utilsTypes.ServerReceivedData;

    constructor(props: types.Props) {
        super(props);

        this.children = props.children;
        this.serverData = props.serverData;
    }
    render(): JSX.Element {
        return (
            <div className={"mainPageSpace " + style.mainPageSpace}>
                <div
                    className={"perfilBg " + style.perfilBg}
                    style={{
                        backgroundImage: `url(${this.serverData.perfilData.perfilBg[0].url})`,
                    }}
                >
                    <div className={"bgEffect " + style.bgEffect}></div>
                </div>
                <div className={"elementsBody " + style.elementsBody}>
                    <Profile perfilData={this.serverData.perfilData} />
                    <div
                        className={"mainContentSpace " + style.mainContentSpace}
                    >
                        <PresentationDiv/>
                    </div>
                    <LinksSquare />
                </div>
            </div>
        );
    }
}

export const getServerSideProps = (async (): Promise<
    GetServerSidePropsResult<utilsTypes.ServerReceivedData>
> => {
    const data = (await import("../server/modules/data")).default;

    const perfilData = (await data.getPerfil()).val;
    const uiData = (await data.getUiData()).val;

    return { props: { perfilData, uiData } };
}) satisfies GetServerSideProps;

const main = ({
    perfilData,
    uiData,
}: utilsTypes.ServerReceivedData): JSX.Element => {
    return (
        <Layout fullview={true} navAsdData={uiData}>
            <MainPage serverData={{ perfilData, uiData }} />
        </Layout>
    );
};
export default main;
//#endregion
