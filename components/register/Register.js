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
     * @returns devuelve una lista con todos los campos de la clase que no sean vacios
     */
    list() {

        const data = [];

        if (this.id_registro) {
            data.push(this.id_registro);
        }
        if (this.usuario) {
            data.push(this.usuario);
        }
        if (this.clave) {
            data.push(this.clave);
        }
        if (this.email) {
            data.push(this.email);
        }
        if (this.rol) {
            data.push(this.rol);
        }
        if (this.intentoslogin) {
            data.push(this.intentoslogin);
        }

        return data;
    }
    object() {
        const data = {};
        if (this.id_registro) {
            data.id_registro = this.id_registro;
        }
        if (this.usuario) {
            data.usuario = this.usuario;
        }
        if (this.clave) {
            data.clave = this.clave;
        }
        if (this.email) {
            data.email = this.email;
        }
        if (this.rol) {
            data.rol = this.rol;
        }
        if (this.intentoslogin) {
            data.intentoslogin = this.intentoslogin;
        }
        return data;
    }
}

module.exports = Register;