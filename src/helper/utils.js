function createObjectData(body, tabla) {
    const objetoDatos = {};
    tabla.columns.forEach((columna) => {
        if (body[columna]) {
            objetoDatos[columna] = body[columna];
        }
    });
    return objetoDatos;
}
function generateColumnsAndPlaceholders(table) {
    const columnsString = table.columns.join(',');
    const placeholdersString = table.columns.map(() => '?').join(',');
    return { columnsString, placeholdersString };
}
function insertBDD(table) {
    const { columnsString, placeholdersString } = generateColumnsAndPlaceholders(table);
    const sql = `INSERT INTO ${table.table} (${columnsString}) VALUES (${placeholdersString})`;
    return sql;
}
function selectBDD(table){
    const sql =`SELECT * FROM ${table.table}`;
return sql;
}
function selectBDDwithParams(table,params=String){
    const { columnsString } = generateColumnsAndPlaceholders(table);
    const sql =`SELECT ${columnsString} FROM ${table.table} WHERE ${params}`;
return sql;
}
module.exports = {
    createObjectData,
    insertBDD,
    selectBDD,
    selectBDDwithParams
}