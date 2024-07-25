/** @format */
//#region               External Modules
import React, { JSX } from "react";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
//#endregion
//#region               Modules
import Layout from "C/Layout";
import utilsTypes from "-/utils/types";
import PlaylistsContainer from "-/components/PlaylistsContainer";
//#endregion
//#region               Typing
import { types as spotifyTypes } from "-/server/modules/spotify";
import { types as playlistsContainerTypes } from "-/components/PlaylistsContainer";
import { SimplifiedPlaylist } from "spotify-types";

export namespace types {
    export type ServerSidePropsResult =
        GetServerSidePropsResult<ServerSideProps>;
    export type ServerSideProps = {
        uiData: utilsTypes.UiData;
    } & playlistsContainerTypes.MainPagePlaylistisProps;

    export type MusicPageState = {
        avatarHeight: string;
        perfilSpaceRows: string;
    };
}
//#endregion
//#region               Implementation
const MusicPage = class MusicPage extends React.Component<
    React.HTMLProps<HTMLDivElement> &
        playlistsContainerTypes.MainPagePlaylistisProps,
    object
> {
    userImages?: spotifyTypes.SpotifyUserImage[];
    playlistsIds: string[];
    playlistsListData: SimplifiedPlaylist[];

    children: React.ReactNode;
    perfilSpace: React.RefObject<HTMLDivElement>;
    state: types.MusicPageState;

    constructor(
        props: React.HTMLProps<HTMLDivElement> &
            playlistsContainerTypes.MainPagePlaylistisProps,
    ) {
        super(props);

        this.userImages = props.userImages;
        this.playlistsIds = props.playlistsIds;
        this.playlistsListData = props.playlistsListData;

        this.children = props.children;
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
        return (
            <div>
                <PlaylistsContainer
                    userImages={this.userImages}
                    playlistsIds={this.playlistsIds}
                    playlistsListData={this.playlistsListData}
                />
            </div>
        );
    }
};

export const getServerSideProps = (async (): Promise<
    GetServerSidePropsResult<types.ServerSideProps>
> => {
    const data = (await import("../server/modules/data")).default;

    const uiData = (await data.getUiData()).val;
    const userImages = (await data.getUserData()).val.images;
    const playlistsListData = (await data.getPlaylistsList()).val;
    const playlistsIds = data.listPlaylistsIds(playlistsListData).val;

    return { props: { uiData, userImages, playlistsIds, playlistsListData } };
}) satisfies GetServerSideProps;

const main = ({
    uiData,
    userImages,
    playlistsIds,
    playlistsListData,
}: types.ServerSideProps): JSX.Element => {
    return (
        <Layout fullview={false} navAsdData={uiData}>
            <MusicPage
                userImages={userImages}
                playlistsIds={playlistsIds}
                playlistsListData={playlistsListData}
            />
        </Layout>
    );
};
export default main;
//#endregion
