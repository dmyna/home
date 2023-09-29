/** @format */

import Link from "next/link";

// * Folhas de Estilo
import style from "../style/components/links_square.module.scss";

// * Tipagem
import React, { JSX } from "react";
interface Props {}

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
                <div className={style.redirects}>
                    <Link href='/social'>Social Media</Link>
                    <Link href='/bio'>Full Biography</Link>
                    <Link href='/music'>Music Corner</Link>
                </div>
            </div>
        );
    }
}
export default LinksSquare;
