export type queryFunction = (
    sql: string,
    values: any[],
    convertResult?: Function
) => Promise<unknown>;
