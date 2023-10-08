/** @format */

declare module "dmyna/utils" {
    import React, { HTMLAttributes } from "react";

    export namespace Aliases {
        export type BaseProps<T> = React.HTMLProps<HTMLAttributes> & T;
    }
}
