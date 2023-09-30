class Roles {

    constructor(id_rol, descripcion, rol) {
        this.id_rol = id_rol;
        this.descripcion = descripcion;
        this.rol = rol;
    }

    get getid_rol() {
        return this.id_rol;
    }

    set setid_rol(in_id_rol) {
        this.id_rol = in_id_rol;
    }

    get getDescripcion() {
        return this.descripcion;
    }

    set setDescripcion(in_descripcion) {
        this.descripcion = in_descripcion;
    }

    get getrol() {
        return this.rol;
    }

    set setrol(in_rol) {
        this.rol = in_rol;
    }

    /**
     * Método para armar una lista de todos los campos de la clase
     * @returns devuelve una lista con todos los campos de la clase que no sean vacios
     */
    list() {

        const data = [];

        if (this.id_rol) {
            data.push(this.id_rol);
        }
        if (this.descripcion) {
            data.push(this.descripcion);
        }
        if (this.rol) {
            data.push(this.rol);
        }

        return data;
    }

    Object() {
        const data = {};
        if (this.id_rol) {
            data.id_rol = this.id_rol;
        }
        if (this.descripcion) {
            data.descripcion = this.descripcion;
        }
        if (this.rol) {
            data.rol = this.rol;
        }
        return data;
    }
}

module.exports = Roles;