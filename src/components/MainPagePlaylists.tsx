/** @format */
// * External Modules
import Link from "next/link";
import React, { JSX } from "react";

// * Internal Modules
import Background from "./Background";

// * Typing
import { SpotifyUserImage } from "external/spotify";
import { MainPagePlaylists } from "dmyna/components";

// * Style
import style from "../style/css.module.scss";

// * Main
const SpotifyMainPage = (p: any): JSX.Element => (
    <Background data={p.bgData}>
        <div id={style.playlistsSpace}>{p.children}</div>
    </Background>
);

class PlaylistContainer extends React.Component<MainPagePlaylists.Props> {
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
                <a
                    key={this.key}
                    id={this.id}
                    className={style.playlistContainer}
                >
                    <div className={style.playlistLeftSpace}>
                        <div
                            className={style.playlistImage}
                            style={{
                                backgroundImage: `url(${this.data.images[0].url})`,
                            }}
                        />
                    </div>
                    <div className={style.playlistRightSpace}>
                        <div className={style.playlistTitle}>
                            {this.data.name}
                        </div>
                        <div className={style.playlistDescription}>
                            <p>{this.data.description}</p>
                        </div>
                    </div>
                </a>
            </Link>
        );
    }
}
const Containers = (props: any) => {
    const user = props.userData;
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
        containers.push(<PlaylistContainer key={id} id={id} data={playlist} />);
    }

    return (
        <SpotifyMainPage bgData={user}>
            <div id={style.allPlaylists}>{containers}</div>
        </SpotifyMainPage>
    );
};

class MainPagePlaylistsClass extends React.Component<MainPagePlaylists.Props> {
    userData: SpotifyUserImage[];
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
            <Containers
                userData={this.userData}
                playlistList={this.playlistList}
                playlistsData={this.playlistsData}
            />
        );
    }
}
export default MainPagePlaylistsClass;
