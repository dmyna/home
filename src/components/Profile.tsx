/** @format */
// * External Modules
import Image from "next/image";
import { JSX } from "react";
import * as React from "react";

// * Typing
import utilsTypes from "//utils/types";

// * Style
import style from "../style/components/profile.module.scss";

export namespace types {
    export type Props = React.HTMLProps<HTMLDivElement> & {
        data: utilsTypes.PerfilData;
    };
}

// * Main
class ProfileClass extends React.Component<types.Props> {
    data: utilsTypes.PerfilData;

    constructor(props: types.Props) {
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
