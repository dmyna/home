/** @format */

import fsp from "fs/promises";
import axios from "axios";
import { Ok } from "ts-results";
import { AxiosRequestConfig, AxiosResponse } from "axios";


import { Playlist, SimplifiedPlaylist } from "spotify-types";

export namespace types {
    export type SpotifyUserImage = {
        height: number | null;
        url: string;
        width: number | null;
    };
    export type SpotifyUserData = {
        display_name: string;
        external_urls: { spotify: string };
        followers: {
            href: string | null;
            total: number;
        };
        href: string;
        id: string;
        images: SpotifyUserImage[];
        type: string;
        uri: string;
    };
    export type SpotifyUserMinimalData = {
        display_name: string;
        external_urls: { spotify: string };
        href: string;
        id: string;
        type: string;
        uri: string;
    };

    export type SpotifyPlaylistItem = {
        collaborative: boolean;
        description: string;
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        images: SpotifyUserImage[];
        name: string;
        owner: SpotifyUserMinimalData;
        primary_color: string | null;
        public: boolean;
        snapshot_id: string;
        tracks: {
            href: string;
            total: number;
        };
        type: string;
        uri: string;
    };
    export type SpotifyPlaylistsListData = {
        href: string;
        items: SimplifiedPlaylist[];
        limit: number;
        next: string | null;
        offset: number;
        previous: number | null;
        total: number;
    };
    export type SpotifyPlaylistFunctions = {
        descriptionFilter: (playlist: Playlist) => unknown;
        requestSpotify: <T = UnknownObj>(
            url: string,
        ) => Promise<Ok<AxiosResponse<T>>>;
        getPlaylist: (id: string) => Promise<Ok<Playlist>>;
        getUserData: () => Promise<Ok<SpotifyUserData>>;
        getPlaylistsList: () => Promise<Ok<SimplifiedPlaylist[]>>;
        listPlaylistsId: (playlists: SpotifyPlaylistsListData) => Ok<string[]>;
        updatePlaylistsList: (playlistsList: SpotifyPlaylistsListData) => void;
        updateUserArchive: () => Promise<Ok<void>>;
        writePlaylistArchive: (playlist: Playlist) => Promise<Ok<void>>;
        writeAllPlaylists: (playlists: SpotifyPlaylistsListData) => Promise<Ok<void>>;
    };

    export type SpotifyAuthResponse = {
        access_token: string;
        token_type: string;
        scope: string;
        expires_in: number;
        refresh_token: string;
    };
}

const Default: Factory<types.SpotifyPlaylistFunctions> = () => {
    const jsonDir = `data/json/`;

    const client_id = process.env.DEVMYNA_PAGE_SPOTIFY_CLIENT_ID;
    const client_secret = process.env.DEVMYNA_PAGE_SPOTIFY_CLIENT_SECRET;
    const myUser = process.env.DEVMYNA_PAGE_SPOTIFY_USER;
    const apiBase = "https://api.spotify.com/v1/";
    const authorization = client_id + ":" + client_secret;
    const authURL = "https://accounts.spotify.com/api/token";

    const authOptions: AxiosRequestConfig = {
        headers: {
            Authorization:
                "Basic " +
                Buffer.alloc(authorization.length, authorization).toString(
                    "base64",
                ),
        },
    };

    const obj: types.SpotifyPlaylistFunctions = {
        descriptionFilter: (playlist) => {
            var text = playlist.description || "";
            var search = text.indexOf("&#x2F;&#x2F; (");
            if (search === -1) {
                console.log(
                    `${playlist.name} - (${playlist.id}): Comentário não encontrado`,
                );
            } else {
                var comment = text.slice(search);
                playlist.description = text.replace(comment, "");
            }
            return playlist;
        },
        requestSpotify: async <T>(getReqURL: string) => {
            const res = await axios.post<types.SpotifyAuthResponse>(
                authURL,
                {
                    grant_type: "client_credentials",
                },
                authOptions,
            );

            const token = res.data.access_token;
            const getReqConfig: AxiosRequestConfig = {
                headers: {
                    Authorization: "Bearer " + token,
                },
            };

            const getRes: AxiosResponse<T> = await axios.get(
                getReqURL,
                getReqConfig,
            );

            if (getRes.status === 200) return Ok(getRes);
            else throw getRes;
        },
        getPlaylist: async (id) => {
            const playlist = (
                await obj.requestSpotify<Playlist>(
                    `${apiBase}playlists/${id}`,
                )
            ).val.data;

            return Ok(playlist);
        },
        getPlaylistsList: async () => {
            const getData = (
                await obj.requestSpotify<types.SpotifyPlaylistsListData>(
                    `${apiBase}users/${myUser}/playlists?limit=50`,
                )
            ).val.data;

            let playlistsList = getData.items;

            while (getData.next) {
                const res = (
                    await obj.requestSpotify<types.SpotifyPlaylistsListData>(
                        getData.next,
                    )
                ).val.data;

                playlistsList = playlistsList.concat(
                    res.items,
                );
                getData.next = res.next;
            }

            return Ok(playlistsList);
        },
        getUserData: async () => {
            const res = await obj.requestSpotify<types.SpotifyUserData>(
                `${apiBase}users/${myUser}`,
            );

            return Ok(res.val.data);
        },
        listPlaylistsId: (playlists) => {
            const playlistsIds = [];
            for (const i of playlists.items) {
                playlistsIds.push(i.id);
            }

            return Ok(playlistsIds);
        },
        updatePlaylistsList: async (playlists) => {
            await fsp.writeFile(
                `${jsonDir}playlists.json`,
                JSON.stringify(playlists),
            );

            await obj.writeAllPlaylists(playlists);
        },
        updateUserArchive: async () => {
            const userData = (await obj.getUserData()).val;

            fsp.writeFile(`${jsonDir}user.json`, JSON.stringify(userData));

            return Ok.EMPTY;
        },
        writePlaylistArchive: async (playlist: Playlist) => {
            await fsp.writeFile(
                `${jsonDir}playlists/${playlist.id}.json`,
                JSON.stringify(obj.descriptionFilter(playlist)),
            );

            return Ok.EMPTY;
        },
        writeAllPlaylists: async (playlists) => {
            const playlistsIds = obj.listPlaylistsId(playlists);

            for (const id of playlistsIds) {
                const playlist = (await obj.getPlaylist(id)).val;

                await obj.writePlaylistArchive(playlist);
            }

            return Ok.EMPTY;
        },
    };
    return obj;
};
export default Default();