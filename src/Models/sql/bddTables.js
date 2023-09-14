tregistros = {
    table: "tregistros",
    columns: ["id_registro", "usuario", "email", "clave", "rol"],
};
tbar = {
    table: "tbar",
    columns: ["nombre", "lema", "descripcion", "logo"]
};
tubicacionbar = {
    table: "tubicacionbar",
    columns: ["direccion", "latitud", "longitud", "ciudad", "pais", "id_bar"]
};
tusuarios = {
    table: "tusuarios",
    columns: ["nombre", "genero", "telefono", "fechanacimiento", "id_registro"]
}
tmenu = {
    table: "tmenu",
    columns: ["nombre", "descripcion", "precio", "id_bar", "image"]
}
troles = {
    table: "troles",
    columns: ["id_rol","descripcion", "rol"]
}

module.exports = {
    tregistros,
    tbar,
    tubicacionbar,
    tusuarios,
    tmenu,
    troles
}