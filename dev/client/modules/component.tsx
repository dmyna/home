'use strict'
import { global } from './global.js'
import { button } from './button.js'
import { render } from './render.js'

/**
 *
 *
 *
**/
interface Props {
    id?: string,
    data?: any,
    className?: any,
    style?: object
}

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
            PlaylistContainer: class PlaylistContainer extends React.Component<Props, {}> {
                id: string;
                data: any;
                key: React.Key | null | undefined;
                constructor(props: any) {
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
            Navegation: class navegation extends React.Component<Props, {}> {
                data: object;
                constructor(props: any) {
                    super(props);
                    this.data = props.data;
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
                                <obj.nav.AllAsdButtons data={this.data} />
                            </div>
                            <div className="navBottomDivision">

                            </div>
                        </nav>
                    )
                }
            },
            AsdButton: (props: any) => {
                return (
                    <div id={props.id} className="asdButton">
                        <a>
                            {props.index}
                        </a>
                    </div>
                )
            },
            AllAsdButtons: (props: any) => {
                var container: any = [];
                const selectLogo = (i: any, element: JSX.Element) => {
                    container.push(
                        <obj.nav.AsdButton key={i.id} id={i.id} index={element} />
                    );
                }
                for (let i of props.data.nav.items) {
                    if (i.image) {
                        selectLogo(i, <img src={i.image[0].url} />)
                    } else if (i.symbol) {
                        selectLogo(i, <p>{i.symbol}</p>)
                    }
                }
                return (
                    container
                )
            },
            navMenu: class navMenu extends React.Component<Props, {}> {
                id: string;
                style: any;
                className: any;

                constructor(props: any) {
                    super(props);
                    this.id = props.id;
                    this.style = props.style;
                    this.className = props.className;
                }
                componentWillUnmount() {
                    $('body').off('click');
                }
                render() {
                    return (
                        <div id={this.id} className="navFloatingMenu" style={this.style}>

                        </div>
                    )
                }
            }
        }
    }
    return obj
}

export const component = main();