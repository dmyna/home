import { global } from './global.js';
import { data } from './data.js';
import { template } from './template.js';
const mainRoot = global.root('article#main');
/**
 *
 *
 *
**/

const main = () => {
  const obj = {
    individualPlaylist: id => {
      data.getPlaylist(id, data => {
        mainRoot.render(template.individualPlaylist({
          playlistName: data.name,
          playlistImg: data.images[0].url
        }));
      });
    }
  };
  return {
    obj
  };
};

export const render = main().obj;