const CRUD = require('../sql/CRUD');

class TableRoles extends CRUD {

    table = 'troles';
    id_rol = 'id_rol';
    descripcion = 'descripcion';
    rol = 'rol';

    get columns() {
        return [this.id_rol, this.descripcion, this.rol];
    }

    /**
     * The function returns a query to obtain registers from a table.
     * @returns The function `getQueryObtainRegisters()` is returning the result of a select query on
     * the table.
     */
    getQueryObtainRegisters() {
        return this.select(this.table);
    }

    /**
     * The function `getQueryObtainRegistersById` returns the result of selecting a row from a table by
     * its ID.
     * @param {any} id - The id parameter is the unique identifier of the register that you want to obtain.
     * @returns The function `getQueryObtainRegistersById` is returning the result of calling the
     * `selectById` method with the `this.table` and `id` as arguments.
     */
    getQueryObtainRegistersById(id) {
        return this.selectById(this.table, id);
    }

    /**
     * The function `getQueryUpdateById` updates a specific field in a table by its ID.
     * @param {any} id - The id parameter is the unique identifier of the record that you want to update in
     * the database.
     * @returns the result of the updateById method with the parameters table, campo, and id.
     */
    getQueryUpdateById(id) {
        return this.updateById(this.table, id);
    }

    /**
     * The function returns an insert query for a specified table.
     * @returns The insert query for the specified table.
     */
    getQueryInsert() {
        return this.insert(this.table);
    }

    /**
     * The function `getQueryDeleteById` returns a query to delete a record from a table based on its
     * ID.
     * @param {any} id - The id parameter is the unique identifier of the record that you want to delete from
     * the table.
     * @returns The function `getQueryDeleteById(id)` is returning the result of calling the
     * `deleteById` method on `this` object, passing in the `table` and `id` as arguments.
     */
    getQueryDeleteById(id) {
        return this.deleteById(this.table, id);
    }
}

module.exports = TableRoles;