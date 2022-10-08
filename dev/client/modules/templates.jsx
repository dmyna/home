/**
 *
 *
 *
**/

import { global } from './global.js'
import { data } from './data.js'

const main = () => {
    const obj = {
        individualPlaylist: (data) => {
            var root = global.root("article#main");

            const content = (
                <div id="playlistBg" style={{backgroundImage: `url(${data.playlistImg})`}}>
                    <div id="playlistBgGradient">
                        <div id="playlistSpace">
                            <div id="playlistImgSpace">
                                <img src={data.playlistImg}></img>
                            </div>
                            <div id="playlistDataSpace">
                                <div id="playlistName">{data.playlistName}</div>
                                <div id="playlistDescription">{data.playlistDescription}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            root.render(content);
        }
    }
    return { obj }
}

export const template = main().obj;