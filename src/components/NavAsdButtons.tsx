/** @format */

import React from "react";
import { JSX } from "react";

import Link from "next/link";

import style from "/src/style/components/asd_buttons.module.scss";
import utilsTypes from "-/utils/types";

export namespace types {
    export type Props = {
        id?: string;
        style?: React.StyleHTMLAttributes<HTMLDivElement>;
        className?: string;
        uiData: utilsTypes.NavAsdData;
    };

    export type Buttons = {
        MainPageButton: (
            props: utilsTypes.Aliases.BaseProps<{
                uiData: utilsTypes.NavAsdData;
            }>,
        ) => JSX.Element;
        AsdButton: (
            props: utilsTypes.Aliases.BaseProps<utilsTypes.NavAsdItem>,
        ) => JSX.Element;
        AllAsdButtons: (
            props: utilsTypes.Aliases.BaseProps<{
                uiData: utilsTypes.NavAsdData;
            }>,
        ) => JSX.Element[];
    };
}

class NavAsdButtonsClass extends React.Component<types.Props> {
    private uiData: utilsTypes.NavAsdData;

    constructor(props: types.Props) {
        super(props);
        this.uiData = props.uiData;
    }
    private Buttons(): types.Buttons {
        const factory: types.Buttons = {
            MainPageButton: (props) => (
                <Link
                    href={props.uiData.nav.principal.route}
                    passHref
                    legacyBehavior
                >
                    <a className={style.asdLogo}>
                        <img src={props.uiData.nav.principal.image[0].url} />
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
                        <factory.AsdButton
                            image={item.image}
                            key={item.id}
                            id={item.id}
                            route={item.route || ""}
                        >
                            {element}
                        </factory.AsdButton>,
                    );
                };
                for (const item of props.uiData.nav.items) {
                    setLogo(
                        item,
                        <img
                            className={style.asdImage}
                            src={item.image[0].url}
                        />,
                    );
                }

                return container;
            },
        };

        return factory;
    }

    render(): JSX.Element {
        const elements = this.Buttons();

        return (
            <nav className={style.navegation}>
                <div className={style.navTopDivision}>
                    <elements.MainPageButton uiData={this.uiData} />
                </div>
                <hr className={style.asdHr} />
                <div className={style.navCenterDivision}>
                    <elements.AllAsdButtons
                        uiData={this.uiData}
                    />
                </div>
                <div className={style.navBottomDivision}></div>
            </nav>
        );
    }
}
export default NavAsdButtonsClass;
