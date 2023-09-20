class TableMenu extends CRUD {

    table = 'tmenu';
    id_menu = 'id_menu';
    nombre = 'nombre';
    descripcion = 'descripcion';
    precio = 'precio';
    id_bar = 'id_bar';
    image = 'image';

    get columns() {
        return [this.id_menu, this.nombre, this.descripcion, this.precio, this.id_bar, this.image];
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