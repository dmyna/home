
// * Folhas de Estilo
import style from "../style/components/presentation_div.module.scss";

// * Tipagem
import React from "react";
import { JSX } from "react";
interface Props {
    data: any;
}

// * Classe Principal
class PresentationDiv extends React.Component<Props, Record<string, any>> {
    data: any;

    constructor(props: any) {
        super(props);

        this.data = props.data;
    }

    render(): JSX.Element {
        return (
            <div className={style.presentationDiv}>
                <div id={style.presentationText}>
                    {this.data.main.presentationText}
                </div>
                <div id={style.presentationObs}>
                    {this.data.main.presentationObs}
                </div>
            </div >
        );
    }
}

export default PresentationDiv;
