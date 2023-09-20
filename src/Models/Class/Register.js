class Register {

    constructor(id_registro, usuario, email, clave, rol, intentoslogin) {
        this.id_registro = id_registro;
        this.usuario = usuario;
        this.clave = clave;
        this.email = email;
        this.rol = rol;
        this.intentoslogin = intentoslogin;
    }

    get getId_registro() {
        return this.id_registro;
    }

    set setId_registro(in_id_registro) {
        this.id_registro = in_id_registro;
    }

    get getUsuario() {
        return this.usuario;
    }

    set setUsuario(in_usuario) {
        this.usuario = in_usuario;
    }

    get getEmail() {
        return this.email;
    }

    set setEmail(in_email) {
        this.email = in_email;
    }

    get getClave() {
        return this.clave;
    }

    set setClave(in_clave) {
        this.clave = in_clave;
    }

    get getRol() {
        return this.rol;
    }

    set setRol(in_rol) {
        this.rol = in_rol;
    }

    get getIntentosLogin() {
        return this.intentoslogin;
    }

    set setIntentosLogin(in_intentoslogin) {
        this.intentoslogin = in_intentoslogin;
    }

    /**
     * Método para armar una lista de todos los campos de la clase
     * @returns devuelve una lista con todos los campos de la clase
     */
    buil() {
        return [this.id_registro, this.usuario, this.clave, this.email, this.rol, this.intentoslogin];
    }
}