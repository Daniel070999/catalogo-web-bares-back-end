class LocationBar {

    constructor(id_ubicacionbar, direccion, latitud, longitud, ciudad, pais, id_bar) {
        this.id_ubicacionbar = id_ubicacionbar;
        this.direccion = direccion;
        this.latitud = latitud;
        this.longitud = longitud;
        this.ciudad = ciudad;
        this.pais = pais;
        this.id_bar = id_bar;
    }

    get getId_ubicacionbar() {
        return this.id_ubicacionbar;
    }

    set setId_ubicacionbar(in_id_ubicacionbar) {
        this.id_ubicacionbar = in_id_ubicacionbar;
    }

    get getDireccion() {
        return this.direccion;
    }

    set setDireccion(in_direccion) {
        this.direccion = in_direccion;
    }

    get getLatitud() {
        return this.latitud;
    }

    set setLatitud(in_latitud) {
        this.latitud = in_latitud;
    }

    get getLongitud() {
        return this.longitud;
    }

    set setLongitud(in_longitud) {
        this.longitud = in_longitud;
    }

    get getCiudad() {
        return this.ciudad;
    }

    set setCiudad(in_ciudad) {
        this.ciudad = in_ciudad;
    }

    get getPais() {
        return this.pais;
    }

    set setPais(in_pais) {
        this.pais = in_pais;
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

        if (this.id_ubicacionbar) {
            data.push(this.id_ubicacionbar);
        }
        if (this.direccion) {
            data.push(this.direccion);
        }
        if (this.latitud) {
            data.push(this.latitud);
        }
        if (this.longitud) {
            data.push(this.longitud);
        }
        if (this.ciudad) {
            data.push(this.ciudad);
        }
        if (this.pais) {
            data.push(this.pais);
        }
        if (this.id_bar) {
            data.push(this.id_bar);
        }

        return data;
    }

    object() {
        const data = {};
        if (this.id_ubicacionbar) {
            data.id_ubicacionbar = this.id_ubicacionbar;
        }
        if (this.direccion) {
            data.direccion = this.direccion;
        }
        if (this.latitud) {
            data.latitud = this.latitud;
        }
        if (this.longitud) {
            data.longitud = this.longitud;
        }
        if (this.ciudad) {
            data.ciudad = this.ciudad;
        }
        if (this.pais) {
            data.pais = this.pais;
        }
        if (this.id_bar) {
            data.id_bar = this.id_bar;
        }
        return data;
    }
}

module.exports = LocationBar;