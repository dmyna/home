/** @format */
// * External Modules
import Link from "next/link";
import React, { JSX } from "react";

// * Style
import style from "//style/components/links_square.module.scss";

// * Main
class LinksSquare extends React.Component<UnknownObj, UnknownObj> {
    constructor(props: UnknownObj) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <div className={style.generalSpace}>
                <div className={style.redirects}>
                    <Link href='/social'>Social Media</Link>
                    <Link href='/bio'>Full Biography</Link>
                    <Link href='/music'>Music Corner</Link>
                </div>
            </div>
        );
    }
}
export default LinksSquare;
