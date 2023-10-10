/** @format */

// * External Modules
import { JSX } from "react";

// * Typing
import { Background } from "dmyna/client/components";

// * Style
import style from "../style/components/background.module.scss";

// * Main
const Background = ({ children, url }: Background.receive): JSX.Element => (
    <div
        id='playlistBg'
        className={style.playlistBg}
        style={url ? { backgroundImage: `url(${url})` } : undefined}
    >
        <div id='playlistBgGradient' className={style.playlistBgGradient}>
            {children}
        </div>
    </div>
);

export default Background;
