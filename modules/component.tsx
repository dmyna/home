'use strict'
import React from 'react';
import { global } from './global'
// import { button } from './button'
import style from '../style/css.module.scss'
import Image from 'next/image';

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
            Background: (p: any) => (
                <div id={style.playlistBg} style={{ backgroundImage: `url(${p.data.images[0].url})` }}>
                    <div id={style.playlistBgGradient}>
                        {p.children}
                    </div>
                </div>
            ),
            IndividualPlaylist: (p: any) => (
                <obj.main.Background data={p.data} component={
                    <div id={style.playlistSpace}>
                        <div id={style.playlistImgSpace}>
                            <img src={p.data.images[0].url}></img>
                        </div>
                        <div id={style.playlistDataSpace}>
                            <div id={style.playlistName}>
                                {p.data.name}
                            </div>
                            <div id={style.playlistDescription}>
                                {global.convertHexToHTML(p.data, p.data.description)}
                            </div>
                        </div>
                    </div>
                } />
            ),
            MainPage: (p: any) => (
                <obj.main.Background data={p.bgData}>
                    <div id={style.playlistsSpace}>
                        {p.children}
                    </div>
                </obj.main.Background>
            ),
            pages: {
                AllPlaylists: (p: any) => (
                    <div id={style.allPlaylists}>
                        {p.children}
                    </div>
                )
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
                    // button.individualPlaylist(this.id);
                }
                render() {
                    return (
                        <div key={this.key} id={this.id} className={style.playlistContainer}>
                            <div className={style.playlistLeftSpace}>
                                <div className={style.playlistImage} style={{
                                    backgroundImage: `url(${this.data.images[0].url})`
                                }} />
                            </div>
                            <div className={style.playlistRightSpace}>
                                <div className={style.playlistTitle}>
                                    {this.data.name}
                                </div>
                                <div className={style.playlistDescription}>
                                    <p>
                                        {this.data.description}
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
                        <nav id={style.navegation}>
                            <div className={style.navTopDivision}>
                                <a className={style.asdLogo} href="https://www.instagram.com/minatiuu">
                                    <img src="https://i.imgur.com/jPLx8fi.png" />
                                </a>
                            </div>
                            <hr className={style.asdHr} />
                            <div className={style.navCenterDivision}>
                                <obj.nav.AllAsdButtons data={this.data} />
                            </div>
                            <div className={style.navBottomDivision}>

                            </div>
                        </nav>
                    )
                }
            },
            AsdButton: (props: any) => (
                <div id={props.id} className={style.asdButton}>
                    <a>
                        {props.children}
                    </a>
                </div>
            ),
            AllAsdButtons: (props: any) => {
                var container: any = [];
                const setLogo = (i: any, element: JSX.Element) => {
                    container.push(
                        <obj.nav.AsdButton key={i.id} id={i.id}>
                            {element}
                        </obj.nav.AsdButton>
                    );
                }
                for (let i of props.data.nav.items) {
                    if (i.image) {
                        setLogo(i, <img className={style.asdImage} src={i.image[0].url} />)
                    } else if (i.symbol) {
                        setLogo(i, <p>{i.symbol}</p>)
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
                        <div id={this.id} className={style.navFloatingMenu} style={this.style}>

                        </div>
                    )
                }
            }
        }
    }
    return obj
}

export const component = main();