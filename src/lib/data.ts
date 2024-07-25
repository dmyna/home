/** @format */
import fs from "fs";
import filter from "@/filter";

import utilsTypes from "-/utils/types";
import { types as indexPageTypes } from "-/pages/index";
import { types as spotifyTypes } from "-/server/modules/spotify";

export namespace types {
    export type DataFuns = {
        get: <T = UnknownObj>(requrl: string, encoding?: string) => T;
        getPlaylist: (id: string) => UnknownObj;
        getPlaylistsList: () => string[];
        getPlaylistsData: () => UnknownObj[];
        getUserData: () => UnknownObj;
        getUiData: () => utilsTypes.UiData;
        getPerfil: () => utilsTypes.PerfilData;
    };
}

const jsonDir = "data/json/";
const data: Factory<types.DataFuns> = () => {
    const obj: FactoryObj<types.DataFuns> = {
        get: (reqUrl: string) => {
            const json = fs.readFileSync(reqUrl, "utf-8");

            const data = JSON.parse(json);

            if (data.status) {
                if (data.status === 200) {
                    return data;
                } else {
                    return console.log(
                        `Error: ${data.status} - ${data.message}`,
                    );
                }
            }

            return data;
        },
        getPlaylist: (id: string) => {
            const data = obj.get(`${jsonDir}playlists/${id}.json`);

            return data;
        },
        getPlaylistsList: () => {
            const data = obj.get<spotifyTypes.SpotifyPlaylistsData>(`${jsonDir}playlists.json`);

            var list: string[] = [];
            for (const i of data.items) {
                list.push(i.id);
            }

            return list;
        },
        getPlaylistsData: () => {
            const playlists = obj.getPlaylistsList();
            const data = [];

            for (const i of playlists) {
                data.push({
                    id: i,
                    body: filter.data.playlists(obj.getPlaylist(i)),
                });
            }

            return data;
        },
        getUserData: () => {
            const data = obj.get(`${jsonDir}user.json`);

            return data;
        },
        getUiData: () => {
            const data = obj.get<indexPageTypes.UiData>(`${jsonDir}uidata.json`);

            return data;
        },
        getPerfil: () => {
            const data = obj.get<utilsTypes.PerfilData>(`${jsonDir}perfil.json`);

            return data;
        },
    };

    return obj;
};

export default data();
