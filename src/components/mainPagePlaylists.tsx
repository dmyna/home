import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import Background from './Background';

import style from '../style/css.module.scss';



interface Props {
    id?: string,
    data?: any,
    className?: any,
    style?: object,
    userData?: object,
    playlistList?: string[],
    playlistsData?: object[]
}

const SpotifyMainPage = (p: any) => (
    <Background data={p.bgData}>
        <div id={style.playlistsSpace}>
            {p.children}
        </div>
    </Background>
);

const PlaylistContainer = class PlaylistContainer extends React.Component<Props, {}> {
    id: string;
    data: any;
    key: React.Key | null | undefined;
    constructor(props: any) {
        super(props);
        this.id = props.id;
        this.data = props.data;
    }
    render(): JSX.Element {
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
        );
    };
};
const Containers = (props: any) => {
    const user: object = props.userData;
    const list: string[] = props.playlistList;
    const playlistsData: any = props.playlistsData;

    var containers: JSX.Element[] = [];
    for (const id of list) {
        var playlist = {};

        for (let i = 0; i < playlistsData.length; i++) {
            if (id === playlistsData[i].id) {
                playlist = playlistsData[i].body;
            } else {
                continue;
            }
        }
        containers.push(
            <PlaylistContainer key={id} id={id} data={playlist}/>
        );
    }

    return (
        <SpotifyMainPage bgData={user}>
            <div id={style.allPlaylists}>
                {containers}
            </div>
        </SpotifyMainPage>
    );
};

const MainPagePlaylists = class MainPagePlaylists extends React.Component<Props, {}> {
    userData: any;
    playlistList: string[];
    playlistsData: object;

    constructor(props: any) {
        super(props);
        this.userData = props.userData;
        this.playlistList = props.playlistList;
        this.playlistsData = props.playlistsData;
    }

    render() {
        return (
            <Containers userData={this.userData} playlistList={this.playlistList} playlistsData={this.playlistsData} />
        );
    }
};
export default MainPagePlaylists;