/** @format */
//#region               External Modules
import Link from "next/link";
import React, { JSX } from "react";
//#endregion
//#region               Modules
import Background from "C/Background";
//#endregion
//#region               Typing
import { types as spotifyTypes } from "-/server/modules/spotify";
import { SimplifiedPlaylist } from "spotify-types";
export namespace types {
    export type PlaylistContainerProps = {
        playlistId: string;
        playlistData: SimplifiedPlaylist;
        key?: React.Key | null;
    };
    export type MainPagePlaylistisProps = {
        userImages?: spotifyTypes.SpotifyUserImage[];
        playlistsIds: string[];
        playlistsListData: SimplifiedPlaylist[];
    };
}
//#endregion
//#region               Implementation
class PlaylistContainer extends React.Component<
    React.HTMLProps<HTMLDivElement> & types.PlaylistContainerProps
> {
    playlistId: string;
    playlistData: SimplifiedPlaylist;
    key: React.Key | null | undefined;

    constructor(props: types.PlaylistContainerProps) {
        super(props);

        this.playlistId = props.playlistId;
        this.playlistData = props.playlistData;
        this.key = props.key;
    }
    render(): JSX.Element {
        return (
            <Link
                href={`/spotify/playlist/${this.playlistId}`}
                passHref
                legacyBehavior
            >
                <a key={this.key} id={this.playlistId}>
                    <div>
                        <div
                            style={{
                                backgroundImage: `url(${this.playlistData.images[0].url})`,
                            }}
                        />
                    </div>
                    <div>
                        <div>{this.playlistData.name}</div>
                        <div>
                            <p>{this.playlistData.description}</p>
                        </div>
                    </div>
                </a>
            </Link>
        );
    }
}
class PlaylistsContainer extends React.Component<types.MainPagePlaylistisProps> {
    userImages?: spotifyTypes.SpotifyUserImage[];
    playlistsIds: string[];
    playlistListData: SimplifiedPlaylist[];

    constructor(props: types.MainPagePlaylistisProps) {
        super(props);

        this.userImages = props.userImages;
        this.playlistsIds = props.playlistsIds;
        this.playlistListData = props.playlistsListData;
    }
    private mountContainers(): JSX.Element[] {
        const list: string[] = this.playlistsIds;
        const playlistListData = this.playlistListData;

        const containers: JSX.Element[] = [];
        for (const id of list) {
            for (let i = 0; i < list.length; i++) {
                if (id === playlistListData[i].id) {
                    const playlist = playlistListData[i];

                    containers.push(
                        <PlaylistContainer
                            key={id}
                            playlistId={id}
                            playlistData={playlist}
                        />,
                    );
                } else {
                    continue;
                }
            }
        }

        return containers;
    }

    render(): JSX.Element {
        const containers = this.mountContainers();

        return (
            <Background userImages={this.userImages}>
                <div>
                    <div>{containers}</div>
                </div>
            </Background>
        );
    }
}
export default PlaylistsContainer;
//# endregion
