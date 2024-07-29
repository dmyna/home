// * External Modules
import { JSX } from 'react';

// * Typing
import { MainBackground } from "C/types";

// * Main
const Background = ({ children, image }: MainBackground.receive): JSX.Element => (
    <div style={{ backgroundImage: image }}>
        <div>
            {children}
        </div>
    </div>
);
export default Background;