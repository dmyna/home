/** @format */

import React from "react";
import { JSX } from "react";

import Link from "next/link";

import style from "//style/components/asd_buttons.module.scss";
import utilsTypes from "//utils/types";

export namespace types {
    export type Props = {
        id?: string;
        style?: React.StyleHTMLAttributes<HTMLDivElement>;
        className?: string;
        data: utilsTypes.NavAsdData;
    };

    export type Buttons = {
        MainPageButton: (
            props: utilsTypes.Aliases.BaseProps<{ data: utilsTypes.NavAsdData }>,
        ) => JSX.Element;
        AsdButton: (props: utilsTypes.Aliases.BaseProps<UnknownObj>) => JSX.Element;
        AllAsdButtons: (
            props: utilsTypes.Aliases.BaseProps<{
                data: utilsTypes.NavAsdData;
                AsdButton: JSX.Element;
            }>,
        ) => JSX.Element[];
    };
}

class NavAsdButtonsClass extends React.Component<types.Props> {
    private data: utilsTypes.NavAsdData;

    constructor(props: types.Props) {
        super(props);
        this.data = props.data;
    }
    private Buttons(): types.Buttons {
        const factory: types.Buttons = {
            MainPageButton: (props) => (
                <Link
                    href={props.data.nav.principal.route}
                    passHref
                    legacyBehavior
                >
                    <a className={style.asdLogo}>
                        <img src={props.data.nav.principal.image[0].url} />
                    </a>
                </Link>
            ),
            AsdButton: (props) => (
                <div id={props.id} className={style.asdButton}>
                    <Link href={props.route} passHref legacyBehavior>
                        <a>{props.children}</a>
                    </Link>
                </div>
            ),
            AllAsdButtons: (props) => {
                var container: JSX.Element[] = [];
                const setLogo = (
                    item: utilsTypes.NavAsdItem,
                    element: JSX.Element,
                ): void => {
                    container.push(
                        <props.AsdButton key={item.id} id={item.id} route={item.route || ""}>
                            {element}
                        </props.AsdButton>,
                    );
                };
                for (const item of props.data.nav.items) {
                    if (item.image) {
                        setLogo(
                            item,
                            <img
                                className={style.asdImage}
                                src={item.image[0].url}
                            />,
                        );
                    } else if (item.symbol) {
                        setLogo(item, <p>{item.symbol}</p>);
                    }
                }

                return container;
            }
        };

        return factory;
    }

    render(): JSX.Element {
        const elements = this.Buttons();

        return (
            <nav className={style.navegation}>
                <div className={style.navTopDivision}>
                    <elements.MainPageButton data={this.data} />
                </div>
                <hr className={style.asdHr} />
                <div className={style.navCenterDivision}>
                    <elements.AllAsdButtons
                        data={this.data}
                        AsdButton={this.Buttons().AsdButton}
                    />
                </div>
                <div className={style.navBottomDivision}></div>
            </nav>
        );
    }
}
export default NavAsdButtonsClass;
