// * External Modules
import { JSX } from "react";

// * Typing
import { types as spotifyTypes } from "//server/modules/spotify";

// * Style
import style from '../style/css.module.scss';

export namespace types {
    export type receive = {
        children: JSX.Element;
        data: {
            images: spotifyTypes.SpotifyUserImage[];
        };
    };
}

// * Main
const Background = ({ children, data }: types.receive): JSX.Element => (
    <div id={style.playlistBg} style={{ backgroundImage: `url(${data.images[0].url})` }}>
        <div id={style.playlistBgGradient}>
            {children}
        </div>
    </div>
);

export default Background;