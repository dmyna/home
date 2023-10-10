/** @format */
// * External Modules
import Image from "next/image";
import { JSX } from "react";
import * as React from "react";

// * Typing
import { Profile } from "dmyna/client/components";
import { PerfilData } from "dmyna/utils/data";

// * Style
import style from "../style/components/profile.module.scss";

// * Main
class ProfileClass extends React.Component<Profile.Props> {
    data: PerfilData;

    constructor(props: Profile.Props) {
        super(props);

        this.data = props.data;
    }
    render(): JSX.Element {
        return (
            <div className={"perfilSpace " + style.perfilSpace}>
                <div className={"avatarSpace " + style.avatarSpace}>
                    <div className={"avatarImg " + style.avatarImg} style={{}}>
                        <Image
                            src={this.data.avatar[0].url}
                            alt='User Image'
                            fill
                            sizes='100vw'
                        />
                    </div>
                </div>
                <div className={"nameSpace " + style.nameSpace}>
                    <div className={"username " + style.username}>
                        {this.data.username}
                    </div>
                </div>
            </div>
        );
    }
}
export default ProfileClass;
