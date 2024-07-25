/** @format */

"use strict";

import { SimplifiedPlaylist } from "spotify-types";

const filter = (): object => {
    const obj = {
        data: {
            playlists: (
                data: SimplifiedPlaylist,
            ): {
                images: { url: string }[];
                name: string;
                description: string | null;
            } => {
                const newData = {
                    images: [
                        {
                            url: data.images[0].url,
                        },
                    ],
                    name: data.name,
                    description: data.description,
                };

                return newData;
            },
        },
    };
    return obj;
};

export default filter();
