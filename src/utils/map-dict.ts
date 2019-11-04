type MapFunction<T, R> = (key: string, value: T) => [string, R];

const mapDict = <T, R>(
    dict: Record<string, T>,
    mapFn: MapFunction<T, R>
): Record<string, R> =>
    Object.fromEntries(Object.entries(dict).map(pair => mapFn(...pair)));

export default mapDict;
