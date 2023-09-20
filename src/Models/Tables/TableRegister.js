class TableRegister extends CRUD {

    table = 'tregistros';
    id_registro = 'id_registro';
    usuario = 'usuario';
    email = 'email';
    clave = 'clave';
    rol = 'rol';
    intentoslogin = 'intentoslogin';

    get columns() {
        return [this.id_registro, this.usuario, this.email, this.clave, this.rol, this.intentoslogin];
    }

    /**
     * Método para obtener el query de buscar un registro
     * @returns Devuelve el query para buscar un registro
     * @example getData() {
                    return 'SELECT ?,... FROM ?';
                }
     */
    getData() {
        return this.select(this.columns.length);
    }

    /**
     * Método para obtener el query de buscar un registro con un número de select definido
     * @param {int} columnsGet Número de campos a buscar
     * @returns Devuelve el query para buscar un registro con un número de select definido
     * @example getDataOnly(3) {
                    return 'SELECT ?,?,? FROM ?';
                }
     */
    getDataOnly(columnsGet) {
        return this.select(columnsGet);
    }

    /**
     * Método para obtener el query de buscar un registro con condiciones
     * @param {String} conditions Condiciones para buscar el registro
     * @returns Devuelve el query para buscar un registro con condiciones
     * @example getDataWhere('?=? AND ?=?') {
                    return 'SELECT ?,... FROM ? WHERE ?=? AND ?=?';
                }
     */
    getDataWhere(conditions) {
        return this.selectWhere(this.columns.length, conditions);
    }

    /**
     * Método para obtener el query de buscar un registro con un número de select definido con condiciones
     * @param {int} columnsGet Número de campos a buscar
     * @param {String} conditions Condiciones para buscar el registro
     * @returns  Devuelve el query para buscar un registro con un número de select definido y con condiciones
     * @example getDataOnlyAndWhere(2, '?=? AND ?=?') {
                    return 'SELECT ?,? FROM ? WHERE ?=? AND ?=?';
                }
     */
    getDataOnlyAndWhere(columnsGet, conditions) {
        return this.selectWhere(columnsGet, conditions);
    }

    /**
     * Método para armar el query de actualizar un registro
     * @param {String} values Campos a actualizar
     * @param {String} conditions Condiciones para actualizar
     * @returns Devuelve el query para actualizar un registro
     * @example updateData('?=?,?=?','?=? AND ?=?') {
                    return 'UPDATE ? SET ?=?,?=? WHERE ?=? AND ?=?';
                }
     */
    updateData(values, conditions) {
        return this.update(values, conditions);
    }

    /**
     * Método para armar el query de insertar un registro
     * @returns Devuelve el query para insertar un registro
     * @example insertData(3) {
                    return 'INSERT INTO ? (?,?,?) VALUES (?,?,?)';
                }
     */
    insertData() {
        return this.insert(this.columns.length);
    }

    /**
     * Método para armar el query de eliminar un registro
     * @param {String} conditions Condiciones para eliminar un registro
     * @returns Devuelve el query para eliminar un registro
     * @example deleteData('?=? AND ?=?') {
                    return 'DELETE FROM ? WHERE ?=? AND ?=?';
                }
     */
    deleteData(conditions) {
        return this.delete(conditions);
    }
}

const tableRegister = new TableMenu();
const columns = [tableRegister.usuario, tableRegister.email];
const conditions = `?=?`;
const values = '?=?'

console.log(tableRegister.getData());
console.log(tableRegister.getDataOnly(columns.length));
console.log(tableRegister.getDataWhere(conditions));
console.log(tableRegister.getDataOnlyAndWhere(columns.length, conditions));
console.log(tableRegister.updateData(values, conditions));
console.log(tableRegister.insertData());
console.log(tableRegister.deleteData(conditions));
