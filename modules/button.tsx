'use strict'

import { global } from './global.jsx'
import { render } from './render.jsx'

/**
 *
 *
 *
**/

const main = () => {
    const obj = {
        asideButtons: () => {
            $('div.asdButton').on('click', (e) => {
                if ($('.navFloatingMenu').length == 0) {
                    render.navMenu().mount(e.currentTarget.id);
                } else {
                    if (e.currentTarget.id == $(`.navFloatingMenu`).attr('id')) {
                        return;
                    } else {
                        render.navMenu().unmount();
                        const tOut = setInterval(() => {
                            render.navMenu().mount(e.currentTarget.id);
                            clearInterval(tOut);
                        }, 50);
                    }
                }
            });
        },
        clickOutside: (selector: string, callback: Function) => {
            $('body').on('click', (e) => {
                if (e.target != document.querySelector(selector)) {
                    callback();
                }
            });
        },
        individualPlaylist: (id: string) => {
            $(`#${id}`).on('click', () => {
                render.individualPlaylist(id);
            });
        }
    }
    return obj;
}

export const button = main();