class Promotion {

    constructor(id_promocion, nombre, descripcion, fecha_inicio, fecha_fin, id_bar, image) {
        this.id_promocion = id_promocion;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.id_bar = id_bar;
        this.image = image;
    }

    get getId_promocion() {
        return this.id_promocion;
    }

    set setId_promocion(in_id_promocion) {
        this.id_promocion = in_id_promocion;
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

    get getFecha_inicio() {
        return this.fecha_inicio;
    }

    set setFecha_inicio(in_fecha_inicio) {
        this.fecha_inicio = in_fecha_inicio;
    }

    get getFecha_fin() {
        return this.fecha_fin;
    }

    set setFecha_fin(in_fecha_fin) {
        this.fecha_fin = in_fecha_fin;
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
     * @returns devuelve una lista con todos los campos de la clase que no sean vacios
     */
    list() {

        const data = [];

        if (this.id_promocion) {
            data.push(this.id_promocion);
        }
        if (this.nombre) {
            data.push(this.nombre);
        }
        if (this.descripcion) {
            data.push(this.descripcion);
        }
        if (this.fecha_inicio) {
            data.push(this.fecha_inicio);
        }
        if (this.fecha_fin) {
            data.push(this.fecha_fin);
        }
        if (this.id_bar) {
            data.push(this.id_bar);
        }
        if (this.image) {
            data.push(this.image);
        }

        return data;
    }
    object() {
        const data = {};
        if (this.id_promocion) {
            data.id_promocion = this.id_promocion;
        }
        if (this.nombre) {
            data.nombre = this.nombre;
        }
        if (this.descripcion) {
            data.descripcion = this.descripcion;
        }
        if (this.fecha_inicio) {
            data.fecha_inicio = this.fecha_inicio;
        }
        if (this.fecha_fin) {
            data.fecha_fin = this.fecha_fin;
        }
        if (this.id_bar) {
            data.id_bar = this.id_bar;
        }
        if (this.image) {
            data.image = this.image;
        }
        return data;
    }
}

module.exports = Promotion;