'use strict'
import { global } from './global.js'
import { data } from './data.js'
import { component } from './component.js'
import { events } from './events.js'
import { button } from './button.js'

// Root's
const mainRoot = global.root('article#main');
const fbox = global.root('div.floatBoxesController');
const asdRoot = global.root('aside')

/**
 * @param {Function} individualPlaylist - Página da Playlist individual
 *
 *
**/

const main = () => {
    const obj = {
        individualPlaylist: (id: any) => {
            data.getPlaylist(id, (data: any) => {
                mainRoot.render(<component.main.IndividualPlaylist data={data} />);
            });
        },
        mainPagePlaylists: () => {
            data.getPlaylistList((list: string) => {
                var containers: any[] = [];
                for (let i of list) {
                    data.getPlaylist(i, (data: any) => {
                        containers.push(//@ts-ignore
                            <component.main.PlaylistContainer key={i} id={i} data={data} />
                        );
                    })
                }
                data.getUserData((user: any) => {
                    mainRoot.render(<component.main.MainPage bgData={user} component={
                        <component.main.pages.AllPlaylists component={
                            containers
                        } />
                    } />)
                });
            });
        },
        navegation: () => {
            asdRoot.render(<component.nav.Navegation  />)
        },
        navMenu: () => {
            const obj = {
                unmount: () => {
                    fbox.render(null);
                },
                mount: (id: string) => {//@ts-ignore
                    fbox.render(<component.nav.navMenu className="navFloatingMenu" style={{//@ts-ignore
                        left: $('aside').width() + ($('aside').width() / 100 * 15),//@ts-ignore
                        top: document.querySelector(`#${id}`).getBoundingClientRect().top
                    }} />);
                    const tOut = setTimeout(() => {
                        button.clickOutside(`.navFloatingMenu`, () => {
                            render.navMenu().unmount();
                            clearInterval(tOut);
                        })
                    }, 50);
                }
            }
            return obj;
        }
    }
    return obj;
}
export const render = main();