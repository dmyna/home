import * as React from 'react'

import Layout from '../../components/layout'
import MainPagePlaylists from '../../components/mainPagePlaylists';

export const getServerSideProps = async () => {
    const data = (await import('../../lib/data')).default;
    // const spotifyData = await require('/server/modules/spotify');

    // await spotifyData.updatePlaylistsList();
    // await spotifyData.updateUserArchive();

    const playlistList = data.getPlaylistsList();
    const userData = data.getUserData();
    const navAsdData = data.getUiData();
    const playlistsData = data.getPlaylistsData();

    return { props: { navAsdData, userData, playlistList, playlistsData } }
}


const Spotify = ({ navAsdData, userData, playlistList, playlistsData }: any) => {
    return (
        <Layout navAsdData={navAsdData}>
            <MainPagePlaylists userData={userData} playlistList={playlistList} playlistsData={playlistsData} />
        </Layout>
    )
}
export default Spotify;
