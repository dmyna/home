/** @format */
declare module "external/spotify" {
    export type SpotifyUserImage = {
        height: number | null;
        url: string;
        width: number | null;
    }
    export type SpotifyUserData = {
        display_name: string;
        external_urls: { spotify: string }
        followers: {
            href: string | null;
            total: number;
        }
        href: string;
        id: string;
        images: SpotifyUserImage[]
        type: string;
        uri: string;
    }
    export type SpotifyUserMinimalData = {
        display_name: string
        external_urls: { spotify: string }
        href: string;
        id: string;
        type: string;
        uri: string;
    }

    export type SpotifyPlaylistItem = {
        collaborative: boolean;
        description: string;
        external_urls: {
            spotify: string;
        }
        href: string
        id: string
        images: SpotifyUserImage[]
        name: string;
        owner: SpotifyUserMinimalData;
        primary_color: string | null;
        public: boolean;
        snapshot_id: string;
        tracks: {
            href: string;
            total: number;
        }
        type: string;
        uri: string
    }
    export type SpotifyPlaylistsData = {
        href: string;
        items: SpotifyPlaylistItem[];
        limit: number;
        next: number | null;
        offset: number;
        previous: number | null;
        total: number;
    }
}
declare module "dmyna/utils/data" {
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
