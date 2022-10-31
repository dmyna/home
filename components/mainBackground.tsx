import style from '../style/css.module.scss'

const Background = ({ children, image }: any) => (
    <div id={style.playlistBg} style={{ backgroundImage: image }}>
        <div id={style.playlistBgGradient}>
            {children}
        </div>
    </div>
)
export default Background;