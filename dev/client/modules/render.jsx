import { global } from './global.js'
import { data } from './data.js'
import { template } from './template.js'
import { button } from './button.js'

const mainRoot = global.root('article#main');

/**
 * @param {Function} individualPlaylist - Página da Playlist individual
 *
 *
**/

const main = () => {
    const obj = {
        individualPlaylist: (id) => {
            data.getPlaylist(id, (data) => {
                mainRoot.render(template.individualPlaylist(data));
            });
        },
        mainPagePlaylists: (id) => {
            data.getPlaylist(id, (data) => {
                mainRoot.render(template.mainPage(data,
                    template.playlistContainer(data, id)
                ))
            });
            setTimeout(() => {
                button().individualPlaylist(id);
            }, 1000);
        }
    }
    return obj;
}
export const render = main();