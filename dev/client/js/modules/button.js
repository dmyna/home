'use strict';

import { global } from './global.js';
import { render } from './render.js';
/**
 *
 *
 *
**/

const main = () => {
  const obj = {
    asideButtons: () => {
      $('div.asdButton').on('click', e => {
        if ($('.navFloatingMenu').length == 0) {
          render.navMenu(e.currentTarget.id).mount();
        }
      });
    },
    clickOutside: (selector, callback) => {
      $('body').on('click', e => {
        if (e.target != $(selector)) {
          callback();
        }
      });
    },
    individualPlaylist: id => {
      $(`#${id}`).on('click', () => {
        render.individualPlaylist(id);
      });
    }
  };
  obj.asideButtons();
  return obj;
};

export const button = main();