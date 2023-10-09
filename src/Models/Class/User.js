class User {

    constructor(id_usuario, nombre, apellido, genero, telefono, fechanacimiento, id_registro, id_bar) {
        this.id_usuario = id_usuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.genero = genero;
        this.telefono = telefono;
        this.fechanacimiento = fechanacimiento;
        this.id_registro = id_registro;
        this.id_bar = id_bar;
    }

    get getId_usuario() {
        return this.id_usuario;
    }

    set setId_usuario(in_id_usuario) {
        this.id_usuario = in_id_usuario;
    }

    get getNombre() {
        return this.nombre;
    }

    set setNombre(in_nombre) {
        this.nombre = in_nombre;
    }

    get getApellido() {
        return this.apellido;
    }

    set setApellido(in_apellido) {
        this.apellido = in_apellido;
    }

    get getGenero() {
        return this.genero;
    }

    set setGenero(in_genero) {
        this.genero = in_genero;
    }

    get getTelefono() {
        return this.telefono;
    }

    set setTelefono(in_telefono) {
        this.telefono = in_telefono;
    }

    get getFechanacimiento() {
        return this.fechanacimiento;
    }

    set setFechanacimiento(in_fechanacimiento) {
        this.fechanacimiento = in_fechanacimiento;
    }

    get getId_registro() {
        return this.id_registro;
    }

    set setId_registro(in_id_registro) {
        this.id_registro = in_id_registro;
    }

    get getId_bar() {
        return this.id_bar;
    }

    set setId_bar(in_id_bar) {
        this.id_bar = in_id_bar;
    }

    /**
     * Método para armar una lista de todos los campos de la clase
     * @returns devuelve una lista con todos los campos de la clase que no sean vacios
     */
    list() {

        const data = [];

        if (this.id_usuario) {
            data.push(this.id_usuario);
        }
        if (this.nombre) {
            data.push(this.nombre);
        }
        if (this.apellido) {
            data.push(this.apellido);
        }
        if (this.genero) {
            data.push(this.genero);
        }
        if (this.telefono) {
            data.push(this.telefono);
        }
        if (this.fechanacimiento) {
            data.push(this.fechanacimiento);
        }
        if (this.id_registro) {
            data.push(this.id_registro);
        }
        if (this.id_bar) {
            data.push(this.id_bar);
        }

        return data;
    }

    object() {

        const data = {};

        if (this.id_usuario) {
            data.id_usuario = this.id_usuario;
        }
        if (this.nombre) {
            data.nombre = this.nombre;
        }
        if (this.apellido) {
            data.apellido = this.apellido;
        }
        if (this.genero) {
            data.genero = this.genero;
        }
        if (this.telefono) {
            data.telefono = this.telefono;
        }
        if (this.fechanacimiento) {
            data.fechanacimiento = this.fechanacimiento;
        }
        if (this.id_registro) {
            data.id_registro = this.id_registro;
        }
        if (this.id_bar) {
            data.id_bar = this.id_bar;
        }

        return data;
    }
}

module.exports = User;