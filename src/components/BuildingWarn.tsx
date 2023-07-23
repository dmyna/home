/** @format */

// * Typing
import React, { JSX } from "react";

import Image from "next/image";

// * Folhas de Estilo
import style from "../style/components/building_warn.module.scss";

export default class BuildingWarn extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <div className={style.baseSpace}>
                <div className={style.bgSpace}>
                    <div className={style.imgSpace}>
                        <svg
                            fill='none'
                            stroke='#90f9'
                            stroke-width='1.5'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                            aria-hidden='true'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d={
                                    "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 " +
                                    "1.948 3.374h14.71c1.73 0 2.813-1.874 " +
                                    "1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 " +
                                    "0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                }
                            ></path>
                        </svg>
                    </div>
                    <div className={style.textSpace}>
                        {
                            "It's under construction. Soon I will add new things here :)"
                        }
                    </div>
                </div>
            </div>
        );
    }
}
