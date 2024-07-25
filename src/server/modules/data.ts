/** @format */
import fsp from "fs/promises";
import { Ok } from "ts-results";

import utilsTypes from "-/utils/types";
import { Playlist, PublicUser, SimplifiedPlaylist } from "spotify-types";
import { types as spotifyTypes } from "-/server/modules/spotify";

export namespace types {
    export type DataFuns = {
        get: <T = UnknownObj>(
            requrl: string,
            encoding?: string,
        ) => Promise<Ok<T>>;
        getPlaylist: (id: string) => Promise<Ok<Playlist>>;
        getPlaylistsList: () => Promise<Ok<SimplifiedPlaylist[]>>;
        getUserData: () => Promise<Ok<PublicUser>>;
        getUiData: () => Promise<Ok<utilsTypes.UiData>>;
        getPerfil: () => Promise<Ok<utilsTypes.PerfilData>>;
        listPlaylistsIds: (playlists: SimplifiedPlaylist[]) => Ok<string[]>;
    };
}

const jsonDir = "data/json/";
const Default = (): types.DataFuns => {
    const obj: types.DataFuns = {
        get: async <T>(reqUrl: string) => {
            const json = await fsp.readFile(reqUrl, { encoding: "utf-8" });

            const data: T = JSON.parse(json);

            return Ok(data);
        },
        getPlaylist: async (id: string) => {
            const data = (
                await obj.get<Playlist>(`${jsonDir}playlists/${id}.json`)
            ).val;

            return Ok(data);
        },
        getPlaylistsList: async () => {
            const playlists = (
                await obj.get<spotifyTypes.SpotifyPlaylistsListData>(
                    `${jsonDir}playlists.json`,
                )
            ).val.items;

            return Ok(playlists);
        },
        getUserData: () => {
            const data = obj.get<PublicUser>(`${jsonDir}user.json`);

            return data;
        },
        getUiData: async () => {
            const data = (
                await obj.get<utilsTypes.UiData>(`${jsonDir}uidata.json`)
            ).val;

            return Ok(data);
        },
        getPerfil: async () => {
            const data = (
                await obj.get<utilsTypes.PerfilData>(`${jsonDir}perfil.json`)
            ).val;

            return Ok(data);
        },
        listPlaylistsIds: (playlists) => {
            const list: string[] = [];
            for (const i of playlists) {
                list.push(i.id);
            }

            return Ok(list);
        },
    };

    return obj;
};

export default Default();
