/** @format */

//#region               External Modules
import { JSX } from "react";
//#endregion
//#region               Typing
import { types as spotifyTypes } from "-/server/modules/spotify";
//#endregion
export namespace types {
    export type receive = {
        children: JSX.Element;
        userImages?: spotifyTypes.SpotifyUserImage[];
    };
}
//#endregion
//#region               Implementation
const Background = ({ children, userImages }: types.receive): JSX.Element => (
    <div
        className='bg-no-repeat bg-center bg-auto h-full rounded-ss-lg'
        style={{
            backgroundImage: userImages
                ? `url(${userImages[0].url})`
                : undefined,
        }}
    >
        <div className='h-full rounded-ss-lg'>{children}</div>
    </div>
);

export default Background;
//#endregion
