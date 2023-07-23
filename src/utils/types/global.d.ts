type AnyFunction = (...args: any[]) => any
type AnyObj = Record<string, any>
type AnyErr = {
    message: string
}

type FactoryObj<T> = {
    [key: string]: T[keyof T] extends AnyFunction
    ? T[keyof T]
    : T[keyof T] extends object
    ? FunctionsObj<T[keyof T]>
    : never;
} & {
    [K in keyof T]: T[K] extends AnyFunction
    ? T[K]
    : T[K] extends object
    ? FunctionsObj<T[K]>
    : never;
};

type Factory<T> = () => FactoryObj<T>;

type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

interface JSONObject {
    [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> {}