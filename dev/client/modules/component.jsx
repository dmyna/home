import { global } from './global.js'
import { data } from './data.js'
import { button } from './button.js'

/**
 *
 *
 *
**/

const main = () => {
    const obj = {
        Background: (p) => {
            return (
                <div id="playlistBg" style={{ backgroundImage: `url(${p.data.images[0].url})` }}>
                    <div id="playlistBgGradient">
                        {p.component}
                    </div>
                </div>
            )
        },
        IndividualPlaylist: (p) => {
            return (
                <obj.Background data={p.data} component={
                    <div id="playlistSpace">
                        <div id="playlistImgSpace">
                            <img src={p.data.images[0].url}></img>
                        </div>
                        <div id="playlistDataSpace">
                            <div id="playlistName">
                                {p.data.name}
                            </div>
                            <div id="playlistDescription">
                                {global.convertHTMLHex(p.data, p.data.description)}
                            </div>
                        </div>
                    </div>
                } />
            )
        },
        MainPage: (p) => {
            return (
                <obj.Background data={p.bgData} component={
                    <div id="playlistsSpace">
                        <div id="playlistsList">
                            {p.component}
                        </div>
                    </div>
                } />
            )
        },
        PlaylistContainer: class PlaylistContainer extends React.Component {
            constructor(p) {
                super(p)
                this.id = p.id;
                this.data = p.data;
            }
            componentDidMount() {
                button.individualPlaylist(this.id);
            }
            render() {
                return (
                    <div key={this.key} id={this.id} className="playlistContainer">
                        <div className="playlistLeftSpace">
                            <div className="playlistImage" style={{
                                backgroundImage: `url(${this.data.images[0].url})`
                            }} />
                        </div>
                        <div className="playlistRightSpace">
                            <div className="playlistTitle">
                                {this.data.name}
                            </div>
                            <div className="playlistDescription">
                                {global.convertHTMLHex(this.data, this.data.description)}
                            </div>
                        </div>
                    </div>
                )
            };
        }
    }
    return obj
}

export const comp = main();