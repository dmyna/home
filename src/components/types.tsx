/** @format */

import { JSX } from "react";
export namespace MainBackground {
    export type receive = {
        children: JSX.Element;
        image: string;
    };
}
export namespace MainPagePlaylists {
    export type Props = {
        id?: string;
        data?: unknown;
        className?: unknown;
        style?: object;
        userData?: object;
        playlistList?: string[];
        playlistsData?: object[];
    };
}