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
        playlistContainer: (data) => {
            const content = (data,
                <div className="playlistContainer">
                    <div id="playlistImageSpace">
                        <div id="playlistImage" style={{
                            backgroundImage: `url(${data.images[0].url})`
                        }}/>
                    </div>
                    <div id="playlistDataSpace">
                        <div id="playlistTitle">{data.name}</div>
                        <div id="playlistDescription">{data.description}</div>
                    </div>
                </div>
            )
            return content;
        }
    }
    return { obj }
}

export const template = main().obj;