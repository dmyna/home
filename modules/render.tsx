'use strict'
import { global } from './global.jsx'
import { data } from './data.jsx'
import { component } from './component.jsx'
import { events } from './events.jsx'
import { button } from './button.jsx'

// Root's
const mainRoot = global.root('article#main');
const fbox = global.root('div.floatBoxesController');
const asdRoot = global.root('aside');

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
            data.getPlaylistList((list: string[]) => {
                var containers: any[] = [];
                for (let i of list) {
                    data.getPlaylist(i, (data: any) => {
                        containers.push(
                            <component.main.PlaylistContainer key={i} id={i} data={data} />
                        );
                    })
                }
                data.getUserData((user: any) => {
                    mainRoot.render(
                        <component.main.MainPage bgData={user}>
                            <component.main.pages.AllPlaylists>
                                {containers}
                            </component.main.pages.AllPlaylists>
                        </component.main.MainPage>
                    )
                });
            });
        },
        navegation: () => {
            data.getUiData((data: object) => {
                asdRoot.render(<component.nav.Navegation data={data} />)
                setTimeout(() => button.asideButtons(), 100);
            });
        },
        navMenu: () => {
            const obj = {
                mount: (id: string) => {
                    fbox.render(<component.nav.navMenu id={id} className="navFloatingMenu" style={{//@ts-ignore
                        left: $('aside').width() + ($('aside').width() / 100 * 15),//@ts-ignore
                        top: document.querySelector(`div.asdButton#${id}`).getBoundingClientRect().top
                    }} />);
                    const tOut = setTimeout(() => {
                        button.clickOutside(`.navFloatingMenu`, () => {
                            render.navMenu().unmount();
                            clearInterval(tOut);
                        })
                    }, 50);
                },
                unmount: () => {
                    fbox.render(null);
                }
            }
            return obj;
        }
    }
    return obj;
}
export const render = main();