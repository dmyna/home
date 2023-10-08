
export namespace data {
    type DataFuns = {
        get: (requrl: string, encoding?: string) => AnyObj
        verifyStatus: (data: any) => any | void
        getPlaylist: (id: string) => AnyObj
        getPlaylistsList: () => string[]
        getPlaylistsData: () => AnyObj[]
        getUserData: () => AnyObj
        getUiData: () => AnyObj
        getUserPerfil: () => AnyObj
    }
}

export namespace render {
    type RenderFuns = {
        individualPlaylist: (id: string) => any
    }
}

