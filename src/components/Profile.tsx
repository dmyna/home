/** @format */
// * External Modules
import Image from "next/image";
import { JSX } from "react";
import * as React from "react";

// * Typing
import utilsTypes from "-/utils/types";

export namespace types {
    export type Props = React.HTMLProps<HTMLDivElement> & {
        perfilData: utilsTypes.PerfilData;
    };
}

// * Main
class ProfileClass extends React.Component<types.Props> {
    perfilData: utilsTypes.PerfilData;

    constructor(props: types.Props) {
        super(props);

        this.perfilData = props.perfilData;
    }
    render(): JSX.Element {
        return (
            <div className='w-full flex justify-center'>
                <div className='p-[2%] w-[13vw] h-full flex flex-row'>
                    <div
                        className={
                            "w-full rounded-full " +
                            "shadow-2xl border-1 border-black " +
                            "select-none pointer-events-none overflow-hidden relative h-auto " +
                            "before:h-0 before:float-left before:pb-[100%] " +
                            "after:block after:clear-both " +
                            "md:w-[13vw] lg:w-[20vw] lx:w-[27vw]"
                        }
                    >
                        <Image
                            src={this.perfilData.avatar[0].url}
                            alt='User Image'
                            fill
                            sizes='100vw'
                        />
                    </div>
                </div>
                <div className='py-0 px-9 flex flex-col justify-center'>
                    <div
                        className={
                            "font-bold text-[5.5vw] font-arial " +
                            "whitespace-nowrap select-none h-max text-gray-200"
                        }
                    >
                        {this.perfilData.username}
                    </div>
                </div>
            </div>
        );
    }
}
export default ProfileClass;
