// * External Modules
import { JSX } from 'react';

// * Typing
import { MainBackground } from "//components/types";

// * Style
import style from '../style/css.module.scss';

// * Main
const Background = ({ children, image }: MainBackground.receive): JSX.Element => (
    <div id={style.playlistBg} style={{ backgroundImage: image }}>
        <div id={style.playlistBgGradient}>
            {children}
        </div>
    </div>
);
export default Background;