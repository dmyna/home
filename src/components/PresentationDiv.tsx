/** @format */

// * External Modules
import React from "react";
import { JSX } from "react";

// * Style
import style from "S/components/presentation_div.module.scss";

// * Text
import PresentationText from "M/PresentationText.mdx";
import PresentationObs from "M/PresentationObs.mdx";

// * Main
class PresentationDiv extends React.Component<React.HTMLProps<HTMLDivElement>> {
    constructor(props: React.HTMLProps<HTMLDivElement>) {
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

export default PresentationDiv;
