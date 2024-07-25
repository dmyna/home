/** @format */

// * External Modules
import { JSX } from "react";

// * Typing
import { types as spotifyTypes } from "-/server/modules/spotify";

// * Style
import style from "../style/css.module.scss";

export namespace types {
    export type receive = {
        children: JSX.Element;
        userImages?: spotifyTypes.SpotifyUserImage[];
    };
}

// * Main
const Background = ({ children, userImages }: types.receive): JSX.Element => (
    <div
        id={style.playlistBg}
        style={{
            backgroundImage: userImages
                ? `url(${userImages[0].url})`
                : undefined,
        }}
    >
        <div id={style.playlistBgGradient}>{children}</div>
    </div>
);

export default Background;
