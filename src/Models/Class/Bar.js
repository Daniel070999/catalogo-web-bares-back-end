class Bar {

    constructor(id_bar, nombre, lema, descripcion, logo) {
        this.id_bar = id_bar;
        this.nombre = nombre;
        this.lema = lema;
        this.descripcion = descripcion;
        this.logo = logo;
    }

    get getId_bar() {
        return this.id_bar;
    }

    set setId_bar(in_id_bar) {
        this.id_bar = in_id_bar;
    }

    get getNombre() {
        return this.nombre;
    }

    set setNombre(in_nombre) {
        this.nombre = in_nombre;
    }

    get getLema() {
        return this.lema;
    }

    set setLema(in_lema) {
        this.lema = in_lema;
    }

    get getDescripcion() {
        return this.descripcion;
    }

    set setDescripcion(in_descripcion) {
        this.descripcion = in_descripcion;
    }

    get getLogo() {
        return this.logo;
    }

    set setLogo(in_logo) {
        this.logo = in_logo;
    }

    /**
     * Método para armar una lista de todos los campos de la clase
     * @returns devuelve una lista con todos los campos de la clase
     */
    buil() {
        return [this.id_bar, this.nombre, this.lema, this.descripcion, this.logo];
    }
}