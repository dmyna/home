/** @format */

"use strict";
import { Err, Ok, Result } from "ts-results";

import { data } from "../types/modules";


import fs from "fs";
import filter from "../lib/filter";
import path from "path";

const jsonDir = path.resolve(__dirname, "../../data/json/");

const data: Factory<data.DataFuns> = () => {
    const obj = {
        // Funções
        get: (reqUrl: string): Result<object, AnyErr> => {
            try {
                const data = fs.readFileSync(reqUrl, "utf-8");

                const json = JSON.parse(data);

                return Ok(json);
            } catch (err) {
                return Err({
                    message: "Unable to complete this request!",
                    type: "external",
                    obj: err
                });
            }
        },
        verifyStatus: (data: any): Result<any, AnyErr> => {
            if (data.status) {
                if (data.status === 200) {
                    return data;
                } else {
                    console.log(
                        `Error: ${data.status} - ${data.message}`,
                    );

                    return Err({
                        message: "The request failed!",
                        type: "external",
                        obj: data
                    });
                }
            }
            return Ok(data);
        },
        getPlaylist: (id: string): Result<any, AnyErr> => {
            const getData = obj.get(`${jsonDir}/playlists/${id}.json`);
            if (getData.err) return getData;

            const data = obj.verifyStatus(
                getData.val
            );
            if (data.err) return data;

            return Ok(data.val);
        },
        getPlaylistsList: (): Result<string[], AnyErr> => {
            const receivedData = obj.get(`${jsonDir}/playlists.json`).val;
            const data = obj.verifyStatus(receivedData);
            if (data.err) return data;

            var list: string[] = [];
            for (const i of data.val.items) {
                list.push(i.id);
            }

            return Ok(list);
        },
        getPlaylistsData: (): Result<any[], AnyErr> => {
            const playlists = obj.getPlaylistsList();
            const data = [];

            for (const i of playlists) {
                const getPlaylist = obj.getPlaylist(i);
                if (getPlaylist.err) continue;

                data.push({
                    id: i,
                    body: filter.data.playlists(getPlaylist.val),
                });
            }

            return Ok(data);
        },
        getUserData: (): Result<any, AnyErr> => {
            const data = obj.verifyStatus(obj.get(`${jsonDir}/user.json`).val);
            if (data.err) return data;

            return Ok(data.val);
        },
        getUiData: (): Result<any, AnyErr> => {
            const data = obj.verifyStatus(obj.get(`${jsonDir}/uidata.json`).val);
            if (data.err) return data;

            return Ok(data.val);
        },
        getUserPerfil: (): Result<any, AnyErr> => {
            const data = obj.verifyStatus(obj.get(`${jsonDir}/perfil.json`).val);
            if (data.err) return data;

            return Ok(data.val);
        },
    };
    return obj;
};

export default data();
