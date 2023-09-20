class User {

    constructor(id_usuario, nombre, genero, telefono, fechanacimiento, id_registro, id_bar) {
        this.id_usuario = id_usuario;
        this.nombre = nombre;
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
     * @returns devuelve una lista con todos los campos de la clase
     */
    buil() {
        return [this.id_usuario, this.nombre, this.genero, this.telefono, this.fechanacimiento, this.id_registro, this.id_bar];
    }
}