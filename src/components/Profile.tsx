/** @format */
import * as React from "react";
import { JSX } from "react";

import Image from "next/image";

import style from "../style/components/profile.module.scss";

type Props = React.HTMLProps<HTMLDivElement> & { data: any };

class Profile extends React.Component<Props> {
    data: any;

    constructor(props: Props) {
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
export default Profile;
