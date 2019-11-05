export const parseCSV = <T = any>([headers, ...data]: string[][]): T[] => {
    try {
        return data.map(line =>
            line.reduce(
                (entry, cell, index) => ({
                    ...entry,
                    [headers[index].replace('[]', '')]: headers[index].endsWith(
                        '[]'
                    )
                        ? cell.split(',')
                        : cell,
                }),
                {} as T
            )
        );
    } catch (e) {
        console.error('Failed parsing CSV', { headers, data });
        throw e;
    }
};
