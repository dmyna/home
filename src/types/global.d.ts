declare type UnknownFun = (...args: unknown[]) => unknown
declare type UnknownObj = Record<string, unknown>
declare type AnyErr = {
    message: string
}

declare type FunctionsObj<T> = {
    [K in keyof T]: T[K] extends UnknownFun
        ? T[K]
        : T[K] extends object
        ? FunctionsObj<T[K]>
        : never;
};
declare type FactoryObj<T> = {
    [key: string]: T[keyof T] extends UnknownFun
    ? T[keyof T]
    : T[keyof T] extends object
    ? FunctionsObj<T[keyof T]>
    : never;
} & {
    [K in keyof T]: T[K] extends UnknownFun
    ? T[K]
    : T[K] extends object
    ? FunctionsObj<T[K]>
    : never;
};

declare type Factory<T> = () => FactoryObj<T>;

declare type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

declare interface JSONObject {
    [x: string]: JSONValue;
}

declare interface JSONArray extends Array<JSONValue> {}