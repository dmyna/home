import Link from 'next/link';

import BuildingWarn from './BuildingWarn';

// * Folhas de Estilo
import style from '../style/components/links_square.module.scss';

// * Tipagem
import React, { JSX } from 'react';
interface Props { }

class LinksSquare extends React.Component<Props, Record<string, any>> {
    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <div className={style.generalSpace}>
                {/* <div className={style.socialMediaDiv}>
                    <div id={style.github} className={style.socialMediaBox}>Github</div>
                    <div id={style.discord} className={style.socialMediaBox}>
                        Discord
                    </div>
                    <div id={style.spotify} className={style.socialMediaBox}>Spotify</div>
                </div> */}
                <BuildingWarn />
                <div className={style.redirects}>
                    <Link href="/medias">
                        Redes Sociais
                    </Link>
                    <Link href="/bio">
                        Biografia Completa
                    </Link>
                    <Link href={
                        "https://open.spotify.com/user/" +
                        "ap0q3dp9xhg4jxaq0c5cs6f39?si=2cb5058497ef415c"
                    } target='_blank'>
                        Meu Spotify
                    </Link>
                </div>
            </div>
        );
    }
}
export default LinksSquare;