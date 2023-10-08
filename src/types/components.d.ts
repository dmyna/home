/** @format */

declare module "dmyna/components" {
    import React, { HTMLAttributes } from "react";
    import { Ok, Result } from "ts-results";
    import { JSX } from "react";
    import { Aliases } from "dmyna/utils";
    import { NavAsdData, PerfilData, SpotifyUserImage } from "dmyna/utils/data";

    export namespace Background {
        type receive = {
            children: JSX.Element;
            data: {
                images: SpotifyUserImage[];
            };
        };
    }
    export namespace Layout {
        type receive = {
            fullview: boolean;
            navAsdData: NavAsdData;
            children: JSX.Element;
        };
    }
    export namespace LinkSquare {}
    export namespace MainBackground {
        type receive = {
            children: JSX.Element;
            image: string;
        };
    }
    export namespace MainPagePlaylists {
        type Props = {
            id?: string;
            data?: any;
            className?: any;
            style?: object;
            userData?: object;
            playlistList?: string[];
            playlistsData?: object[];
        };
    }
    export namespace NavAsdButtons {
        type Props = {
            id?: string;
            style?: React.StyleHTMLAttributes<HTMLDivElement>;
            className?: string;
            data: NavAsdData;
        };

        type Buttons = {
            MainPageButton: (
                props: Aliases.BaseProps<{ data: NavAsdData }>,
            ) => JSX.Element;
            AsdButton: (props: Aliases.BaseProps<{}>) => JSX.Element;
            AllAsdButtons: (
                props: Aliases.BaseProps<{
                    data: NavAsdData;
                    AsdButton: JSX.Element;
                }>,
            ) => JSX.Element[];
        };
    }
    export namespace PresentationDiv {}
    export namespace Profile {
        type Props = React.HTMLProps<HTMLDivElement> & {
            data: PerfilData;
        };
    }
}
