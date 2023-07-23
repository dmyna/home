import React from 'react';

import Link from 'next/link';

import style from '../style/components/asd_buttons.module.scss';


interface Props {
    id?: string,
    data?: any,
    className?: any,
    style?: object
}

const NavAsdButtons = class NavAsdButtons extends React.Component<Props, {}> {
    data: object;
    constructor(props: any) {
        super(props);
        this.data = props.data;

    }
    private Buttons() {
        return {
            MainPageButton: (props: any) => (
                <Link href={props.data.nav.principal.route} passHref legacyBehavior>
                    <a className={style.asdLogo}>
                        <img src={props.data.nav.principal.image[0].url} />
                    </a>
                </Link>
            ),
            AsdButton: (props: any) => (
                <div id={props.id} className={style.asdButton}>
                    <Link href={props.route} passHref legacyBehavior>
                        <a>{props.children}</a>
                    </Link>
                </div>
            ),
            AllAsdButtons: (props: any) => {
                var container: any = [];
                const setLogo = (i: any, route: string, element: JSX.Element) => {
                    container.push(
                        <props.AsdButton key={i.id} id={i.id} route={route}>
                            {element}
                        </props.AsdButton>
                    );
                };
                for (const i of props.data.nav.items) {
                    if (i.image) {
                        setLogo(i, i.route || "", <img className={style.asdImage} src={i.image[0].url} />);
                    } else if (i.symbol) {
                        setLogo(i, i.route || "", <p>{i.symbol}</p>);
                    }
                }
                return (
                    container
                );
            }
        };
    }

    render() {
        const elements = this.Buttons();

        return (
            <nav className={style.navegation}>
                <div className={style.navTopDivision}>
                    <elements.MainPageButton data={this.data} />
                </div>
                <hr className={style.asdHr} />
                <div className={style.navCenterDivision}>
                    <elements.AllAsdButtons data={this.data} AsdButton={this.Buttons().AsdButton} />
                </div>
                <div className={style.navBottomDivision}>

                </div>
            </nav>
        );
    }
};
export default NavAsdButtons;