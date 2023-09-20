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
     * @returns devuelve una lista con todos los campos de la clase
     */
    buil() {
        return [this.id_ubicacionbar, this.direccion, this.latitud, this.longitud, this.ciudad, this.pais, this.id_bar];
    }
}