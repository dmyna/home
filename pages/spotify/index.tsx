import * as React from 'react'

import Layout from '../../components/layout'
import MainPagePlaylists from '../../components/mainPagePlaylists';

export const getServerSideProps = async () => {
    const data = await require('/modules/data');
    // const spotifyData = await require('/server/modules/spotify');

    // await spotifyData.updatePlaylistsList();
    // await spotifyData.updateUserArchive();

    const playlistList = data.getPlaylistList();
    const userData = data.getUserData();
    const navAsdData = data.getUiData();

    return { props: { navAsdData, userData, playlistList } }
}


const Spotify = ({ navAsdData, userData, playlistList }: any) => {
    return (
        <Layout navAsdData={navAsdData}>
            <MainPagePlaylists userData={userData} playlistList={playlistList} />
        </Layout>
    )
}
export default Spotify;
