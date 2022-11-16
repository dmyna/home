import React from 'react';

import Link from 'next/link';

import style from '../style/css.module.scss'


interface Props {
    id?: string,
    data?: any,
    className?: any,
    style?: object
}


const MainPageButton = (props: any) => (
    <Link href={props.data.nav.principal.route} passHref legacyBehavior>
        <a className={style.asdLogo}>
            <img src={props.data.nav.principal.image[0].url} />
        </a>
    </Link>
)

const AsdButton = (props: any) => (
    <div id={props.id} className={style.asdButton}>
        <Link href={props.route} passHref legacyBehavior>
            <a>{props.children}</a>
        </Link>
    </div>
)

const AllAsdButtons = (props: any) => {
    var container: any = [];
    const setLogo = (i: any, route: string, element: JSX.Element) => {
        container.push(
            <AsdButton key={i.id} id={i.id} route={route}>
                {element}
            </AsdButton>
        );
    }
    for (let i of props.data.nav.items) {
        if (i.image) {
            setLogo(i, i.route || "", <img className={style.asdImage} src={i.image[0].url} />)
        } else if (i.symbol) {
            setLogo(i, i.route || "", <p>{i.symbol}</p>)
        }
    }
    return (
        container
    )
}

const NavAsdButtons = class NavAsdButtons extends React.Component<Props, {}> {
    data: object;
    constructor(props: any) {
        super(props);
        this.data = props.data;

    }

    render() {
        return (
            <nav id={style.navegation}>
                <div className={style.navTopDivision}>
                    <MainPageButton data={this.data} />
                </div>
                <hr className={style.asdHr} />
                <div className={style.navCenterDivision}>
                    <AllAsdButtons data={this.data} />
                </div>
                <div className={style.navBottomDivision}>

                </div>
            </nav>
        )
    }
}
export default NavAsdButtons;