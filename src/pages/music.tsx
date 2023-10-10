/** @format */

import * as React from "react";

import Layout from "../components/Layout";
import MainPagePlaylists from "../components/MainPagePlaylists";

export const getServerSideProps = async (context: any) => {
    const data = (await import("../lib/data")).default;
    const spotifyData = await (
        await import("../server/modules/spotify")
    ).default;

    spotifyData.updatePlaylistsList();
    spotifyData.updateUserArchive();

    const playlistList = data.getPlaylistsList().val;
    const userData = data.getUserData().val;
    const navAsdData = data.getUiData().val;
    const playlistsData = data.getPlaylistsData().val;

    return { props: { navAsdData, userData, playlistList, playlistsData } };
};

const Spotify = ({
    navAsdData,
    userData,
    playlistList,
    playlistsData,
}: any) => {
    return (
        <Layout fullview={false} navAsdData={navAsdData} background={userData.images[1].url}>
            <MainPagePlaylists
                playlistList={playlistList}
                playlistsData={playlistsData}
            />
        </Layout>
    );
};
export default Spotify;
