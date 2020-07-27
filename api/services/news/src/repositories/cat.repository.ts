type queryFunction = (
    sql: string,
    values: any[],
    convertResult?: Function
) => Promise<unknown>;

export const queryGetCats = (query: queryFunction) =>
    query("SELECT * FROM cat", [], res => res.rows);
