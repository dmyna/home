/** @format */
//#region               External Modules
import Link from "next/link";
import React, { JSX } from "react";
//#endregion
//#region               Implementation
class LinksSquare extends React.Component<UnknownObj, UnknownObj> {
    constructor(props: UnknownObj) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <div className='w-full flex align-middle justify-center flex-col'>
                <div
                    className={
                        "*:text-center flex flex-col align-middle justify-center md:flex-row " +
                        "p-4 *:w-full md:*:w-[30%] py-6 px-8 " +
                        "font-bold text-xl text-gray-200 drop-shadow-[2px_2px_5px_#0003]"
                    }
                >
                    <Link href='/social'>Social Media</Link>
                    <Link href='/bio'>Full Biography</Link>
                    <Link href='/music'>Music Corner</Link>
                </div>
            </div>
        );
    }
}
export default LinksSquare;
//#endregion
