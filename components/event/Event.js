class Event {

    constructor(id_evento, nombre, descripcion, fecha, id_bar, image) {
        this.id_evento = id_evento;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.id_bar = id_bar;
        this.image = image;
    }

    get getId_evento() {
        return this.id_evento;
    }

    set setId_evento(in_id_evento) {
        this.id_evento = in_id_evento;
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

    get getFecha() {
        return this.fecha;
    }

    set setFecha(in_fecha) {
        this.fecha = in_fecha;
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

        if (this.id_evento) {
            data.push(this.id_evento);
        }
        if (this.nombre) {
            data.push(this.nombre);
        }
        if (this.descripcion) {
            data.push(this.descripcion);
        }
        if (this.fecha) {
            data.push(this.fecha);
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
        if (this.id_evento) {
            data.id_evento = this.id_evento;
        }
        if (this.nombre) {
            data.nombre = this.nombre;
        }
        if (this.descripcion) {
            data.descripcion = this.descripcion;
        }
        if (this.fecha) {
            data.fecha = this.fecha;
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

module.exports = Event;