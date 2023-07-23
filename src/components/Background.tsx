
import style from '../style/css.module.scss';

const Background = ({ children, data }: any) => (
    <div id={style.playlistBg} style={{ backgroundImage: `url(${data.images[0].url})` }}>
        <div id={style.playlistBgGradient}>
            {children}
        </div>
    </div>
);

export default Background;