// * External Modules
import { JSX } from "react";

// * Typing
import { Background } from "dmyna/components";

// * Style
import style from '../style/css.module.scss';

// * Main
const Background = ({ children, data }: Background.receive): JSX.Element => (
    <div id={style.playlistBg} style={{ backgroundImage: `url(${data.images[0].url})` }}>
        <div id={style.playlistBgGradient}>
            {children}
        </div>
    </div>
);

export default Background;