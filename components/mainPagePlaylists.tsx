import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import Background from './Background'

import style from '../style/css.module.scss';
import { setRevalidateHeaders } from 'next/dist/server/send-payload';


interface Props {
    id?: string,
    data?: any,
    className?: any,
    style?: object,
    userData?: object,
    playlistList?: string[]
}

const SpotifyMainPage = (p: any) => (
    <Background data={p.bgData}>
        <div id={style.playlistsSpace}>
            {p.children}
        </div>
    </Background>
)

const PlaylistContainer = class PlaylistContainer extends React.Component<Props, {}> {
    id: string;
    data: any;
    key: React.Key | null | undefined;
    constructor(props: any) {
        super(props)
        this.id = props.id;
        this.data = props.data;
    }
    render() {
        return (
            <Link href={`/spotify/playlist/${this.id}`} passHref legacyBehavior>
                <a key={this.key} id={this.id} className={style.playlistContainer}>
                    <div className={style.playlistLeftSpace}>
                        <div className={style.playlistImage} style={{
                            backgroundImage: `url(${this.data.images[0].url})`
                        }} />
                    </div>
                    <div className={style.playlistRightSpace}>
                        <div className={style.playlistTitle}>
                            {this.data.name}
                        </div>
                        <div className={style.playlistDescription}>
                            <p>
                                {this.data.description}
                            </p>
                        </div>
                    </div>
                </a>
            </Link>
        )
    };
}

const getPlaylist = async (id: string, callback: Function) => {
    const [playlist, setData] = useState(null);

    useEffect(() => {
        fetch(`/api/playlists/${id}`)
            .then((res) => res.json()
            .then((data) => {
                setData(data);
            }))
    })

    callback(playlist);
}
const Containers = (props: any) => {
    const user: object = props.userData;
    const list: string[] = props.playlistList;

    var containers: JSX.Element[] = [];
    for (let i of list) {
        getPlaylist(i, (playlist: object) => {
            containers.push(
                <PlaylistContainer key={i} id={i} data={playlist} />
            );
        });
    }

    return (
        <SpotifyMainPage bgData={user}>
            <div id={style.allPlaylists}>
                {containers}
            </div>
        </SpotifyMainPage>
    )
}

const MainPagePlaylists = class MainPagePlaylists extends React.Component<Props, {}> {
    userData: any;
    playlistList: string[];

    constructor(props: any) {
        super(props);
        this.userData = props.userData;
        this.playlistList = props.playlistList;
    }

    render() {
        return (
            <Containers userData={this.userData} playlistList={this.playlistList} />
        )
    }
}
export default MainPagePlaylists;