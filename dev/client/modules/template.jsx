import { global } from './global.js'
import { data } from './data.js'

/**
 *
 *
 *
**/

const main = () => {
    const obj = {
        background: (data, component) => {
            const content = (
                <div id="playlistBg" style={{ backgroundImage: `url(${data.playlistImg})` }}>
                    <div id="playlistBgGradient">
                        {component}
                    </div>
                </div>
            )
            return content;
        },
        individualPlaylist: (data) => {
            const content = obj.background(data,
                <div id="playlistSpace">
                    <div id="playlistImgSpace">
                        <img src={data.playlistImg}></img>
                    </div>
                    <div id="playlistDataSpace">
                        <div id="playlistName">{data.playlistName}</div>
                        <div id="playlistDescription">{data.playlistDescription}</div>
                    </div>
                </div>
            )
            return content;
        },
        mainPage: (data) => {
            const content = obj.background(data,
                <div id="playlistsSpace">

                </div>
            )
            return content;
        }
    }
    return { obj }
}

export const template = main().obj;