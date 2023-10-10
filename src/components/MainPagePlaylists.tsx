/** @format */
// * External Modules
import Link from "next/link";
import React, { JSX } from "react";

// * Typing
import { SpotifyUserImage } from "external/spotify";
import { MainPagePlaylists } from "dmyna/client/components";

// * Style
import style from "../style/css.module.scss";

// * Main
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
        console.log(this.data);
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
    const list: string[] = props.playlistList;
    const playlistsData: any = props.playlistsData;

    var containers: JSX.Element[] = [];
    for (const id of list) {
        var playlist;

        for (let i = 0; i < playlistsData.length; i++) {
            if (id === playlistsData[i].id) {
                playlist = playlistsData[i].body;
            }
        }
        containers.push(<PlaylistContainer key={id} id={id} data={playlist} />);
    }

    return <div id={style.allPlaylists}>{containers}</div>;
};

class MainPagePlaylistsClass extends React.Component<MainPagePlaylists.Props> {
    playlistList: string[];
    playlistsData: object;

    constructor(props: any) {
        super(props);
        this.playlistList = props.playlistList;
        this.playlistsData = props.playlistsData;
    }

    render() {
        return (
            <Containers
                playlistList={this.playlistList}
                playlistsData={this.playlistsData}
            />
        );
    }
}
export default MainPagePlaylistsClass;
