/** @format */
//#region               External Modules
import React from "react";
import Link from "next/link";
import { JSX } from "react";
//#endregion
//#region               Typing
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
//#region               Constants
export const vwWidth = "calc(100vw_/_24_*_0.7)";
//#endregion
//#endregion
//#region               Implementation
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
                    <a
                        className={`flex w-[${vwWidth}] h-[${vwWidth}]`}
                    >
                        <img
                            className={
                                "w-full h-full p-[calc(100vw_/_24_*_0.065)] " +
                                "rounded-full"
                            }
                            src={props.uiData.nav.principal.image[0].url}
                        />
                    </a>
                </Link>
            ),
            AsdButton: (props) => (
                <div
                    id={props.id}
                    className={
                        `w-[${vwWidth}] h-[${vwWidth}] ` +
                        "cursor-pointer select-none"
                    }
                >
                    <Link href={props.route} passHref legacyBehavior>
                        <a
                            className={
                                "font-normal text-3xl font-display " +
                                "h-full flex justify-center align-middle relative"
                            }
                        >
                            {props.children}
                        </a>
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
                            className='w-[75%] h-[75%]'
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
            <nav
                className={`flex align-middle flex-col w-[${vwWidth}] h-dvh`}
            >
                <div className={`w-full h-[${vwWidth}]`}>
                    <elements.MainPageButton uiData={this.uiData} />
                </div>
                <hr
                    className={`w-[90%] rounded-[25%] my-[calc(100vw_/_24_*_0.065)] mx-0`}
                />
                <div className='w-full h-[calc(100vw_-_(100vh / 24 * 1.5))]'>
                    <elements.AllAsdButtons uiData={this.uiData} />
                </div>
                <div className={`w-full h-[${vwWidth}]`}></div>
            </nav>
        );
    }
}

export default NavAsdButtonsClass;
//#endregion
