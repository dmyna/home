import { global } from './global.js'
import { template } from './template.js'

const jsonDir = './data/json/';

const main = () => {
    const obj = {
        // Funções
        getPlaylist: (id, callback) => {
            $.getJSON(`${jsonDir}playlists/${id}.json`, (data) => {
                callback(data);
            });
        }
    }
    return { obj }
}
export const data = main().obj;