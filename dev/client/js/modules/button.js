import { global } from './global.js';
import { data } from './data.js';
import { comp } from './component.js';
import { render } from './render.js';
/**
 *
 *
 *
**/

const main = () => {
  const obj = {
    mainPageButton: () => {
      $('#mainPlaylistsPage').on('click', () => {
        render.mainPagePlaylists();
      });
    },
    individualPlaylist: id => {
      $(`#${id}`).on('click', () => {
        render.individualPlaylist(id);
      });
    }
  };
  obj.mainPageButton();
  return obj;
};

export const button = main();