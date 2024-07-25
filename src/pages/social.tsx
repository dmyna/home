/** @format */
//#region               External Modules
import React, { JSX } from "react";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
//#endregion
//#region               Modules
import Layout from "C/Layout";
//#endregion
//#region               Typing
import utilsTypes from "-/utils/types";

export namespace types {
    export type Props = React.HTMLProps<HTMLDivElement> & {
        serverData: utilsTypes.ServerReceivedData;
    };

    export type SocialPageState = {
        avatarHeight: string;
        perfilSpaceRows: string;
    };
}
//#endregion
//#region               Implementation
const SocialPage = class SocialPage extends React.Component<
    types.Props,
    object
> {
    children: React.ReactNode;
    serverData: unknown;
    avatarImg: unknown;
    perfilSpace: React.RefObject<HTMLDivElement>;
    state: types.SocialPageState;

    constructor(props: types.Props) {
        super(props);

        this.children = props.children;
        this.serverData = props.data;
        this.avatarImg = React.createRef();
        this.perfilSpace = React.createRef();
        this.state = {
            avatarHeight: "",
            perfilSpaceRows: "",
        };
    }
    componentDidMount(): void {
        //! DEV
        const perfilSpaceHeight = this.perfilSpace.current?.clientHeight;

        if (
            typeof perfilSpaceHeight === "number" &&
            perfilSpaceHeight >= 2000
        ) {
            this.setState({ perfilSpaceRows: "100vh auto" });
        } else if (
            typeof perfilSpaceHeight === "number" &&
            perfilSpaceHeight >= 1000
        ) {
            this.setState({ perfilSpaceRows: "75vh auto" });
        }
    }
    render(): JSX.Element {
        return <div></div>;
    }
};

export const getServerSideProps = (async (): Promise<
    GetServerSidePropsResult<utilsTypes.ServerReceivedData>
> => {
    const data = (await import("../lib/data")).default;

    const perfilData = data.getPerfil();
    const uiData = data.getUiData();

    return { props: { perfilData, uiData } };
}) satisfies GetServerSideProps;

const main = ({
    perfilData,
    uiData,
}: utilsTypes.ServerReceivedData): JSX.Element => {
    return (
        <Layout fullview={false} navAsdData={uiData}>
            <SocialPage serverData={{ perfilData, uiData }} />
        </Layout>
    );
};
export default main;
//#endregion
