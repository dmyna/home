/** @format */

import { Err, Ok } from "ts-results";

export class SpotifyHandler {
    private client_id?: string;
    private client_secret?: string;
    private my_user?: string;
    private authorization: string;
    private authOptions: object;

    api_base: string;

    constructor() {
        this.client_id = process.env.DEVMYNA_PAGE_SPOTIFY_CLIENT_ID;
        this.client_secret = process.env.DEVMYNA_PAGE_SPOTIFY_CLIENT_SECRET;
        this.my_user = process.env.DEVMYNA_PAGE_SPOTIFY_USER;
        this.authorization = this.client_id + ":" + this.client_secret;

        this.api_base = "https://api.spotify.com/v1/";
        this.authOptions = {};
    }

    public async Auth(): Promise<Ok<void>> {
        if (!this.client_id || !this.client_secret || !this.my_user) {
            throw Err({
                message: "Some value between client_id, client_secret or my_user is missing",
                type: "internal",
            });
        }

        this.authOptions = {
            url: "https://accounts.spotify.com/api/token",
            headers: {
                Authorization:
                    "Basic " +
                    Buffer.alloc(
                        this.authorization.length,
                        this.authorization,
                    ).toString("base64"),
            },
            form: {
                grant_type: "client_credentials",
            },
            json: true,
        };

        return Ok(void 0);
    }
}
