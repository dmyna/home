declare type UnknownFun = (...args: unknown[]) => unknown
declare type UnknownObj = Record<string, unknown>
declare type AnyErr = {
    message: string
    type: "user" | "internal" | "external" | "unknown"
    obj?: unknown
}
declare type IsAny<T> = 0 extends 1 & T ? true : false;

declare type FunctionsObj<T> = {
    [K in keyof T]: T[K] extends UnknownFun
        ? T[K]
        : T[K] extends object
        ? FunctionsObj<T[K]>
        : never;
};

declare type FactoryObj<T = UnknownObj> = IsAny<T> extends true
    ? {
          [K: string]: UnknownFun | { [L: string]: UnknownFun };
      }
    : FunctionsObj<T>;

declare type Factory<T> = () => FactoryObj<T>;

declare type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

declare interface JSONObject {
    [x: string]: JSONValue;
}

declare interface JSONArray extends Array<JSONValue> {}