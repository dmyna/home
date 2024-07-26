/** @format */
//#region               Imports
import React, { JSX } from "react";
//#endregion
//#region               Modules
import Layout from "C/Layout";
import Profile from "C/Profile";
import BiographyText from "-/md/BiographyText.mdx";

import style from "S/pages/bio.module.scss";
//#endregion
//#region               Typing
import utilsTypes from "-/utils/types";
import { GetServerSideProps, GetServerSidePropsResult } from "next";

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
const BioPage = class BioPage extends React.Component<types.Props> {
    serverData: utilsTypes.ServerReceivedData;

    constructor(props: types.Props) {
        super(props);

        this.serverData = props.serverData;
    }
    render(): JSX.Element {
        return (
            <div className={style.mainBox}>
                <Profile perfilData={this.serverData.perfilData} />
                <div className={style.textBox}>
                    <BiographyText />
                </div>
            </div>
        );
    }
};

export const getServerSideProps = (async (): Promise<
    GetServerSidePropsResult<utilsTypes.ServerReceivedData>
> => {
    const data = (await import("-/server/modules/data")).default;

    const perfilData = (await data.getPerfil()).val;
    const uiData = (await data.getUiData()).val;

    return { props: { perfilData, uiData } };
}) satisfies GetServerSideProps;

const main = ({
    perfilData,
    uiData,
}: utilsTypes.ServerReceivedData): JSX.Element => {
    return (
        <Layout fullview={false} navAsdData={uiData}>
            <BioPage serverData={{ perfilData, uiData }} />
        </Layout>
    );
};
export default main;
//#endregion
