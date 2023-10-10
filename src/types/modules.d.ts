/** @format */

import { Result } from "ts-results";

export namespace data {
    type DataFuns = {
        get: (reqUrl: string) => Result<object, AnyErr>;
        verifyStatus: (data: any) => Result<any, AnyErr>;
        getPlaylist: (id: string) => Result<any, AnyErr>;
        getPlaylistsList: () => Result<string[], AnyErr>;
        getPlaylistsData: () => Result<any[], AnyErr>;
        getUserData: () => Result<any, AnyErr>;
        getUiData: () => Result<any, AnyErr>;
        getUserPerfil: () => Result<any, AnyErr>;
    };
}

export namespace render {
    type RenderFuns = {
        individualPlaylist: (id: string) => any;
    };
}
