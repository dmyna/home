'use strict'
import { global } from './global.js'
import { button } from './button.js'
import { render } from './render.js'

/**
 *
 *
 *
**/

const main = () => {
    const obj = {
        main: {
            Background: (p: any) => {
                return (
                    <div id="playlistBg" style={{ backgroundImage: `url(${p.data.images[0].url})` }}>
                        <div id="playlistBgGradient">
                            {p.component}
                        </div>
                    </div>
                )
            },
            IndividualPlaylist: (p: any) => {
                return (
                    <obj.main.Background data={p.data} component={
                        <div id="playlistSpace">
                            <div id="playlistImgSpace">
                                <img src={p.data.images[0].url}></img>
                            </div>
                            <div id="playlistDataSpace">
                                <div id="playlistName">
                                    {p.data.name}
                                </div>
                                <div id="playlistDescription">
                                    {global.convertHexToHTML(p.data, p.data.description)}
                                </div>
                            </div>
                        </div>
                    } />
                )
            },
            MainPage: (p: any) => {
                return (
                    <obj.main.Background data={p.bgData} component={
                        <div id="playlistsSpace">
                            {p.component}
                        </div>
                    } />
                )
            },
            pages: {
                AllPlaylists: (p: any) => {
                    return (
                        <div id="allPlaylists">
                            {p.component}
                        </div>
                    )
                }
            },
            PlaylistContainer: class PlaylistContainer extends React.Component {
                id: string;
                data: any;
                key: React.Key | null | undefined;
                constructor(props: { id: string, data: string }) {
                    super(props)
                    this.id = props.id;
                    this.data = props.data;
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
                                    <p>
                                        {global.convertHexToHTML(this.data, this.data.description)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                };
            }
        },
        nav: {
            Navegation: class navegation extends React.Component {
                constructor(props: any) {
                    super(props);
                }
                render() {
                    return (
                        <nav id="navegation">
                            <div className="navTopDivision">
                                <a className="asdLogo" href="https://www.instagram.com/minatiuu">
                                    <img src="https://i.imgur.com/jPLx8fi.png" />
                                </a>
                            </div>
                            <hr className="asdHr" />
                            <div className="navCenterDivision">
                                <div id="mainPage" className="asdButton">
                                    <a id="mainPlaylistsPage">
                                        <img
                                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/571e5943-4616-4654-bf99-10b3c98f8686/d98301o-426f05ca-8fe5-4636-9009-db9dd1fca1f3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU3MWU1OTQzLTQ2MTYtNDY1NC1iZjk5LTEwYjNjOThmODY4NlwvZDk4MzAxby00MjZmMDVjYS04ZmU1LTQ2MzYtOTAwOS1kYjlkZDFmY2ExZjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._SlX6x3jb9hDMoBDw92f_N0pVlwkrn-bMncfkRdFDXo" />
                                    </a>
                                </div>
                                <div id="backToCentral" className="asdButton">
                                    <a>
                                        <p>C</p>
                                    </a>
                                </div>
                                <div id="productionPage" className="asdButton">
                                    <a>
                                        <p>P</p>
                                    </a>
                                </div>
                            </div>
                            <div className="navBottomDivision">

                            </div>
                        </nav>
                    )
                }
            },
            navMenu: class navMenu extends React.Component {
                style: any;
                className: any;

                constructor(props: any) {
                    super(props);
                    this.style = props.style;
                    this.className = props.className;
                }
                componentWillUnmount() {
                    $('body').off('click');
                }
                render() {
                    return (
                        <div className="navFloatingMenu" style={this.style}>

                        </div>
                    )
                }
            }
        }
    }
    return obj
}

export const component = main();