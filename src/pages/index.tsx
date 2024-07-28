/** @format */
//#region               External Modules
import React, { JSX } from "react";
//#endregion
//#region               Modules
import Layout from "C/Layout";
import PresentationDiv from "C/PresentationDiv";
import LinksSquare from "C/LinksSquare";
import Profile from "C/Profile";
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
            <div className='relative flex justify-center w-full h-dvh'>
                <div
                    className={
                        "w-dvw h-dvh bg-gray-400 absolute " +
                        "bg-center bg-cover bg-no-repeat bg-scroll"
                    }
                    style={{
                        backgroundImage: `url(${this.serverData.perfilData.perfilBg[0].url})`,
                    }}
                >
                    <div className='w-full h-full bg-[#0005] backdrop:filter blur(15px)'></div>
                </div>
                <div
                    className={
                        "flex flex-col justify-center align-middle " +
                        "z-10 py-0 px-[5vw]"
                    }
                >
                    <Profile perfilData={this.serverData.perfilData} />
                    <div
                        className='py-8 px-0'
                    >
                        <PresentationDiv />
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
