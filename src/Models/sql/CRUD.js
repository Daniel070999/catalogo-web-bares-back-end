class CRUD {

    sql;

    /**
     * Método para armar el query de buscar un registro
     * @param {int} numSelects Número de campos a buscar
     * @returns Devuelve el query para buscar un registro
     * @example select(5) {
                    return 'SELECT ?,?,?,?,? FROM ??';
                }
     */
    select(numSelects) {
        const num = []
        for (let i = 0; i < numSelects; i++) {
            num.push('?');
        }
        this.sql = `SELECT ${num} FROM ??`;
        return this.sql;
    }

    /**
     * Método para armar el query de buscar un registro con condiciones
     * @param {int} numValues Número de campos a buscar
     * @param {String} conditions Condiciones para buscar un registro
     * @returns Devuelve el query para buscar un registro con condiciones.
     * @example selectWhere(3,'?=? AND ??=?') {
                    return 'SELECT ?,?,? FROM ?? WHERE ??=? AND ??=?';
                }
     */
    selectWhere(numValues, conditions) {
        const num = []
        for (let i = 0; i < numValues; i++) {
            num.push('?');
        }
        this.sql = `SELECT ${num} FROM ?? WHERE ${conditions}`;
        return this.sql;
    }

    /**
     * Método para armar el query de actualizar un registro
     * @param {String} values Campos a actulizar 
     * @param {String} conditions Condiciones para actualizar
     * @returns Devuelve el query para actualizar un registro.
     * @example update('?=?,?=?','?=? AND ?=?') {
                    return 'UPDATE ? SET ?=?,?=? WHERE ?=? AND ?=?';
                }
     */
    update(values, conditions) {
        return this.sql = `UPDATE ? SET ${values} WHERE ${conditions}`;
    }

    /**
     * Método para armar el query de insertar un registro
     * @param {int} numValues Número de campos a insertar
     * @returns Devuelve el query para insertar un registro
     * @example insert(3) {
                    return 'INSERT INTO ? (?,?,?) VALUES (?,?,?)';
                }
     */
    insert(numValues) {
        const num = []
        for (let i = 0; i < numValues; i++) {
            num.push('?');
        }
        return this.sql = `INSERT INTO ? (${num}) VALUES (${num})`;
    }

    /**
     * Método para armar el query de eliminar un registro
     * @param {String} conditions Condiciones para eliminar un registro
     * @returns Devuelve el query para eliminar un registro
     * @example delete('?=? AND ?=?') {
                    return 'DELETE FROM ?? WHERE ??=? AND ??=?';
                }
     */
    delete(conditions) {
        return this.sql = `DELETE FROM ?? WHERE ${conditions}`;
    }
}

module.exports = CRUD;