/** @format */
import fs from "fs";
import filter from "../lib/filter";

export namespace types {
    export type DataFuns = {
        get: (requrl: string, encoding?: string) => UnknownObj;
        verifyStatus: (data: unknown) => unknown | void;
        getPlaylist: (id: string) => UnknownObj;
        getPlaylistsList: () => string[];
        getPlaylistsData: () => UnknownObj[];
        getUserData: () => UnknownObj;
        getUiData: () => UnknownObj;
        getUserPerfil: () => UnknownObj;
    };
}

const jsonDir = "data/json/";
const data: Factory<types.DataFuns> = () => {
    const obj: FactoryObj<types.DataFuns> = {
        // Funções
        get: (reqUrl: string) => {
            const data = fs.readFileSync(reqUrl, "utf-8");

            const json = JSON.parse(data);

            return json;
        },
        verifyStatus: (data: unknown) => {
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
            const data = obj.verifyStatus(
                obj.get(`${jsonDir}playlists/${id}.json`),
            );

            return data;
        },
        getPlaylistsList: () => {
            const data = obj.verifyStatus(obj.get(`${jsonDir}playlists.json`));

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
            const data = obj.verifyStatus(obj.get(`${jsonDir}user.json`));

            return data;
        },
        getUiData: () => {
            const data = obj.verifyStatus(obj.get(`${jsonDir}uidata.json`));

            return data;
        },
        getUserPerfil: () => {
            const data = obj.verifyStatus(obj.get(`${jsonDir}perfil.json`));

            return data;
        },
    };
    return obj;
};

export default data();
