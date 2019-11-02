export interface Dict<T = any> {
    [key: string]: T;
}

type MapFunction<T, R> = (key: string, value: T) => [string, R];

const mapDict = <T, R>(dict: T, mapFn: MapFunction<T, R>) =>
    Object.fromEntries(Object.entries(dict).map(pair => mapFn(...pair)));

export default mapDict;
