/** @format */

export namespace types {
    export type SpotifyUserImage = {
        height: number | null;
        url: string;
        width: number | null;
    };
    export type SpotifyUserData = {
        display_name: string;
        external_urls: { spotify: string };
        followers: {
            href: string | null;
            total: number;
        };
        href: string;
        id: string;
        images: SpotifyUserImage[];
        type: string;
        uri: string;
    };
    export type SpotifyUserMinimalData = {
        display_name: string;
        external_urls: { spotify: string };
        href: string;
        id: string;
        type: string;
        uri: string;
    };

    export type SpotifyPlaylistItem = {
        collaborative: boolean;
        description: string;
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        images: SpotifyUserImage[];
        name: string;
        owner: SpotifyUserMinimalData;
        primary_color: string | null;
        public: boolean;
        snapshot_id: string;
        tracks: {
            href: string;
            total: number;
        };
        type: string;
        uri: string;
    };
    export type SpotifyPlaylistsData = {
        href: string;
        items: SpotifyPlaylistItem[];
        limit: number;
        next: number | null;
        offset: number;
        previous: number | null;
        total: number;
    };
    export type SpotifyPlaylistFunctions = {
        requestSpotify: (url: string, callback: UnknownFun) => void;
        updatePlaylistsList: () => void;
        updateUserArchive: () => void;
        repeatRequestIfNextExists: () => void;
        listPlaylistsId: (callback: UnknownFun) => void;
        getUserData: (callback: UnknownFun) => void;
        descriptionFilter: (body: unknown, id: string) => unknown;
        writePlaylistArchive: (currentPlaylist: string) => void;
        writeAllPlaylists: () => void;
    };
}

export const getServerSideProps: Factory<
    types.SpotifyPlaylistFunctions
> = () => {
    var request = require("request");
    var fs = require("fs");

    const jsonDir = `data/json/`;

    const client_id = process.env.DEVMYNA_PAGE_SPOTIFY_CLIENT_ID;
    const client_secret = process.env.DEVMYNA_PAGE_SPOTIFY_CLIENT_SECRET;
    const myUser = process.env.DEVMYNA_PAGE_SPOTIFY_USER;
    const apiBase = "https://api.spotify.com/v1/";
    const authorization = client_id + ":" + client_secret;

    const authOptions = {
        url: "https://accounts.spotify.com/api/token",
        headers: {
            Authorization:
                "Basic " + //@ts-ignore
                new Buffer.alloc(authorization.length, authorization).toString(
                    "base64",
                ),
        },
        form: {
            grant_type: "client_credentials",
        },
        json: true,
    };

    const obj: FactoryObj<types.SpotifyPlaylistFunctions> = {
        requestSpotify: (url: string, callback: UnknownFun) => {
            request.post(
                authOptions,
                (err: unknown, res: unknown, body: unknown) => {
                    const token = body.access_token;
                    const options = {
                        url: url,
                        headers: {
                            Authorization: "Bearer " + token,
                        },
                        json: true,
                    };
                    request.get(
                        options,
                        (err: unknown, res: unknown, body: object) => {
                            callback(res, body, err);
                        },
                    );
                },
            );
        },
        updatePlaylistsList: () => {
            // Atualizar as playlists
            obj.requestSpotify(
                `${apiBase}users/${myUser}/playlists?limit=50`,
                (res: unknown, body: object) => {
                    fs.writeFileSync(
                        `${jsonDir}playlists.json`,
                        JSON.stringify(body),
                    );
                    obj.repeatRequestIfNextExists();
                    obj.writeAllPlaylists();
                },
            );
        },
        updateUserArchive: () => {
            obj.getUserData((body: object) => {
                fs.writeFileSync(`${jsonDir}user.json`, JSON.stringify(body));
            });
        },
        repeatRequestIfNextExists: () => {
            fs.readFile(
                `${jsonDir}/playlists.json`,
                "utf-8",
                (err: unknown, data: string) => {
                    var newJSON = JSON.parse(data);

                    if (!newJSON.next) return;

                    obj.requestSpotify(
                        newJSON.next,
                        (res: string, body: unknown) => {
                            newJSON.items = newJSON.items.concat(body.items);
                            newJSON.next = body.next;
                            fs.writeFileSync(
                                `${jsonDir}playlists.json`,
                                JSON.stringify(newJSON),
                            );

                            if (!newJSON.next) return;

                            obj.repeatRequestIfNextExists();
                        },
                    );
                },
            );
        },
        listPlaylistsId: (callback: UnknownFun) => {
            fs.readFile(
                `${jsonDir}playlists.json`,
                "utf-8",
                (err: unknown, data: string) => {
                    const dataJSON = JSON.parse(data);
                    var playlists = [];
                    for (const i of dataJSON.items) {
                        playlists.push(i.id);
                    }
                    callback(playlists);
                },
            );
        },
        getUserData: (callback: UnknownFun) => {
            obj.requestSpotify(
                `${apiBase}users/${myUser}`,
                (res: unknown, body: object) => {
                    callback(body);
                },
            );
        },
        descriptionFilter: (body: unknown, id: string) => {
            var text = body.description;
            var search = text.indexOf("&#x2F;&#x2F; (");
            if (search == -1) {
                console.log(
                    `${body.name} - (${id}): Comentário não encontrado`,
                );
            } else {
                var comment = text.slice(search);
                body.description = text.replace(comment, "");
            }
            return body;
        },
        writePlaylistArchive: (currentPlaylist: string) => {
            obj.requestSpotify(
                `${apiBase}playlists/${currentPlaylist}`,
                (res: unknown, body: object) => {
                    fs.writeFileSync(
                        `${jsonDir}playlists/${currentPlaylist}.json`,
                        JSON.stringify(
                            obj.descriptionFilter(body, currentPlaylist),
                        ),
                    );
                },
            );
        },
        writeAllPlaylists: () => {
            obj.listPlaylistsId((playlists: string) => {
                for (const i of playlists) {
                    obj.writePlaylistArchive(i);
                }
            });
        },
    };
    return obj;
};
module.exports = getServerSideProps();
