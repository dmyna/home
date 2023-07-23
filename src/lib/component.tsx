'use strict';
import React from 'react';
import { global } from './global';
// import { button } from './button'
import style from '../style/css.module.scss';
import Image from "next/image";
import Link from 'next/link';
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
                <obj.main.Background data={p.data}>
                    <div id={style.playlistSpace}>
                        <div id={style.playlistImgSpace}>
                            <img src={p.data.images[0].url}></img>
                        </div>
                        <div id={style.playlistDataSpace}>
                            <div id={style.playlistName}>
                                {p.data.name}
                            </div>
                            <div id={style.playlistDescription}>
                                {p.data.description}
                            </div>
                        </div>
                    </div>
                </obj.main.Background>
            ),
            SpotifyMainPage: (p: any) => (
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
                    super(props);
                    this.id = props.id;
                    this.data = props.data;
                }
                render() {
                    return (
                        <Link href={`/spotify/playlist/${this.id}`} passHref legacyBehavior>
                            <a key={this.key} id={this.id} className={style.playlistContainer}>
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
                            </a>
                        </Link>
                    );
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
                                <obj.nav.SpotifyMainPageButton data={this.data} />
                            </div>
                            <hr className={style.asdHr} />
                            <div className={style.navCenterDivision}>
                                <obj.nav.AllAsdButtons data={this.data} />
                            </div>
                            <div className={style.navBottomDivision}>

                            </div>
                        </nav>
                    );
                }
            },
            SpotifyMainPageButton: (props: any) => (
                <Link href={props.data.nav.principal.route} passHref legacyBehavior>
                    <a className={style.asdLogo}>
                        <img src={props.data.nav.principal.image[0].url} />
                    </a>
                </Link>
            ),
            AsdButton: (props: any) => (
                <div id={props.id} className={style.asdButton}>
                    <Link href={props.route} passHref legacyBehavior>
                        <a>{props.children}</a>
                    </Link>
                </div>
            ),
            AllAsdButtons: (props: any) => {
                var container: any = [];
                const setLogo = (i: any, route: string, element: JSX.Element) => {
                    container.push(
                        <obj.nav.AsdButton key={i.id} id={i.id} route={route}>
                            {element}
                        </obj.nav.AsdButton>
                    );
                };
                for (const i of props.data.nav.items) {
                    if (i.image) {
                        setLogo(i, i.route || "", <img className={style.asdImage} src={i.image[0].url} />);
                    } else if (i.symbol) {
                        setLogo(i, i.route || "", <p>{i.symbol}</p>);
                    }
                }
                return (
                    container
                );
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
                    );
                }
            }
        }
    };
    return obj;
};

export const component = main();