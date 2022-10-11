import { global } from './global.js';
import { template } from './template.js';
const jsonDir = './data/json/';

const main = () => {
  const obj = {
    // Funções
    getPlaylist: (id, callback) => {
      $.getJSON(`${jsonDir}playlists/${id}.json`, data => {
        callback(data);
      });
    },
    getPlaylistList: callback => {
      $.getJSON(`${jsonDir}playlists.json`, data => {
        var list = [];

        for (let i of data.items) {
          list.push(i.id);
        }

        callback(list);
      });
    }
  };
  return obj;
};

export const data = main();