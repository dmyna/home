'use strict'
import { global } from './global.js'

const jsonDir = './data/json/';

const main = () => {
    const obj = {
        // Funções
        get: (reqUrl: string, callback: Function, data?: any) => {
            $.getJSON(reqUrl, data, (data) => {
                callback(data);
            });
        },
        getPlaylist: (id: string, callback: Function) => {
            obj.get(`${jsonDir}playlists/${id}.json`, callback);
        },
        getPlaylistList: (callback: Function) => {
            obj.get(`${jsonDir}playlists.json`, (data: any) => {
                var list: any = [];
                for (let i of data.items) {
                    list.push(i.id);
                }
                callback(list);
            });
        },
        getUserData: (callback: Function) => {
            obj.get(`${jsonDir}user.json`, callback);
        }
    }
    return obj;
}
export const data = main();