/** @format */

// * External Modules
import React from "react";
import { JSX } from "react";

// * Style
import style from "../style/components/presentation_div.module.scss";

// * Text
import PresentationText from "../md/PresentationText.mdx";
import PresentationObs from "../md/PresentationObs.mdx";

// * Main
class PresentationDivClass extends React.Component<UnkObj> {
    constructor(props: UnkObj) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <div className={style.presentationDiv}>
                <div id={style.presentationText}>
                    <PresentationText />
                </div>
                <div id={style.presentationObs}>
                    <PresentationObs />
                </div>
            </div>
        );
    }
}

export default PresentationDivClass;
