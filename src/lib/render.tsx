'use strict';
import React from 'react';
import { component } from './component';
import { events } from './events';
// import { button } from './button'

// Root's

/**
 * @param {Function} individualPlaylist - Página da Playlist individual
 *
 *
**/

const Default = async (context?: any) => {
    const data = (await import('./data')).default;

    const render = () => {
        const obj = {
            individualPlaylist: (id: string) => {
                const playlist = data.getPlaylist(id);

                return <component.main.IndividualPlaylist data={playlist} />;
            },
            navMenu: () => {
                const mnt = {
                    mount: (id: string) => {
                        // const tOut = setTimeout(() => {
                        //     button.clickOutside(`.navFloatingMenu`, () => {
                        //         mnt.unmount();
                        //         clearInterval(tOut);
                        //     })
                        // }, 50);
                        return (
                            <component.nav.navMenu id={id} className="navFloatingMenu" style={{//@ts-ignore
                                left: $('aside').width() + ($('aside').width() / 100 * 15),//@ts-ignore
                                top: document.querySelector(`div.asdButton#${id}`).getBoundingClientRect().top
                            }} />
                        );
                    },
                    unmount: () => {
                        return (
                            <></>
                        );
                    }
                };
                return mnt;
            }
        };
        return obj;
    };
    return render();
};
export default Default();