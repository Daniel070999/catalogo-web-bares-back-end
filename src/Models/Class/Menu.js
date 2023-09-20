class Menu {

    constructor(id_menu, nombre, descripcion, precio, id_bar, image) {
        this.id_menu = id_menu;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.id_bar = id_bar;
        this.image = image;
    }

    get getId_menu() {
        return this.id_menu;
    }

    set setId_menu(in_id_menu) {
        this.id_menu = in_id_menu;
    }

    get getNombre() {
        return this.nombre;
    }

    set setNombre(in_nombre) {
        this.nombre = in_nombre;
    }

    get getDescripcion() {
        return this.descripcion;
    }

    set setDescripcion(in_descripcion) {
        this.descripcion = in_descripcion;
    }

    get getPrecio() {
        return this.precio;
    }

    set setPrecio(in_precio) {
        this.precio = in_precio;
    }

    get getId_bar() {
        return this.id_bar;
    }

    set setId_bar(in_id_bar) {
        this.id_bar = in_id_bar;
    }

    get getImage() {
        return this.image;
    }

    set setImage(in_image) {
        this.image = in_image;
    }

    /**
     * Método para armar una lista de todos los campos de la clase
     * @returns devuelve una lista con todos los campos de la clase
     */
    buil() {
        return [this.id_menu, this.nombre, this.descripcion, this.precio, this.id_bar, this.image];
    }
}