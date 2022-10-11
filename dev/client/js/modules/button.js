import { global } from './global.js';
import { data } from './data.js';
import { template } from './template.js';
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
        render.mainPagePlaylists('5MdH8lh5RAk1RGnYbL0xSo');
      });
    }
  };
  obj.mainPageButton();
  return obj;
};

export const button = main;