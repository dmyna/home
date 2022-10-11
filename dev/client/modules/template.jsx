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
                <div id="playlistBg" style={{ backgroundImage: `url(${data.images[0].url})` }}>
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
                        <img src={data.images[0].url}></img>
                    </div>
                    <div id="playlistDataSpace">
                        <div id="playlistName">{data.name}</div>
                        <div id="playlistDescription">{data.description}</div>
                    </div>
                </div>
            )
            return content;
        },
        mainPage: (data, component) => {
            const content = (
                <div id="playlistsSpace">
                    <div id="playlistsList">
                        {component}
                    </div>
                </div>
            )
            return content;
        },
        playlistContainer: (data, id) => {
            const content = (data,
                <div id={id} className="playlistContainer">
                    <div className="playlistLeftSpace">
                        <div className="playlistImage" style={{
                            backgroundImage: `url(${data.images[0].url})`
                        }} />
                    </div>
                    <div className="playlistRightSpace">
                        <div className="playlistTitle">{data.name}</div>
                        <div className="playlistDescription">{global.convertHTMLHex(data, data.description)}</div>
                    </div>
                </div>
            )
            return content;
        }
    }
    return { obj }
}

export const template = main().obj;