import React from 'react'
import ReactHtmlParser from 'react-html-parser'

import Image from 'next/image'

import style from '../style/css.module.scss'

interface Props {
    id?: string,
    data?: any,
    className?: any,
    style?: object
}

const MainPage = class MainPage extends React.Component<Props, {}> {
    children: JSX.Element;
    data: any;
    avatarImg: any;
    perfilSpace: any;
    state: any;

    constructor(props: any) {
        super(props);

        this.children = props.children;
        this.data = props.data;
        this.avatarImg = React.createRef();
        this.perfilSpace = React.createRef();
        this.state = {
            avatarHeight: '',
            perfilSpaceRows: ''
        }
    }
    componentDidMount() {
        const avatarHeight = this.avatarImg.current.clientWidth;
        const perfilSpaceHeight = this.perfilSpace.current.clientHeight;
        console.log(perfilSpaceHeight)

        this.setState({ avatarHeight });
        if (perfilSpaceHeight >= 2000) {
            this.setState({ perfilSpaceRows: '100vh auto' })
        } else if (perfilSpaceHeight >= 1000) {
            this.setState({ perfilSpaceRows: '75vh auto' })
        }
    }
    render() {
        return (
            <div id={style.mainPageSpace}>
                <div id={style.perfilBg}
                    style={{ backgroundImage: `url(${this.data.perfilbg[0].url})` }}>
                    <div id={style.bgGradient}></div>
                </div>
                <div id={style.perfilSpace} ref={this.perfilSpace}
                    style={{ gridTemplateRows: this.state.perfilSpaceRows }}>
                    <div id={style.avatarSpace}>
                        <div id={style.avatarImg} ref={this.avatarImg}
                            style={{ height: this.state.avatarHeight }}>
                            <Image src={this.data.avatar[0].url}
                                alt="User Image"
                                layout="fill"
                            />
                        </div>
                    </div>
                    <div id={style.nameSpace}>
                        <div id={style.username}>{this.data.username}</div>
                    </div>
                </div>
                <div>

                </div>

            </div>
        )
    }
}
export default MainPage;