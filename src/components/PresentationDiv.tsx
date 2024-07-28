/** @format */

// * External Modules
import React from "react";
import { JSX } from "react";

// * Text
import PresentationText from "M/PresentationText.mdx";

// * Main
class PresentationDiv extends React.Component<React.HTMLProps<HTMLDivElement>> {
    constructor(props: React.HTMLProps<HTMLDivElement>) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <div className='flex justify-center align-middle fle-col w-full py-0 px-[10vw]'>
                <div
                    className={
                        "font-display font-semibold " +
                        "text-justify md:text-center text-sm md:text-xl " +
                        "text-gray-200 drop-shadow-[0_0_3px_rgba(0,0,0,0.5)]"
                    }
                >
                    <PresentationText />
                </div>
            </div>
        );
    }
}

export default PresentationDiv;
