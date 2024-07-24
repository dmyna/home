/** @format */
import React, { HTMLAttributes } from "react";

namespace types {
    export namespace Aliases {
        export type BaseProps<T> = React.HTMLProps<HTMLAttributes<T>> & T;
    }
    export type NavAsdItem = {
        id: string;
        route: string;
        image: {
            url: string;
        }[];
    };
    export type NavAsdData = {
        nav: {
            principal: {
                id: string;
                route: string;
                image: {
                    url: string;
                }[];
            };
            items: NavAsdItem[];
        };
    };
    export type PerfilData = {
        username: string;
        avatar: { url: string }[];
        perfilBg: { url: string }[];
        socialMedias: {
            name: string;
            username: string;
            url: string;
            img: { url: string }[];
        }[];
    };
}

export default types;