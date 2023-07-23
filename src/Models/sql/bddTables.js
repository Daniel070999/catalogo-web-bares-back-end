tregistros = {
    table: "tregistros",
    columns: ["usuario", "clave", "email"],
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
    table:"tusuarios",
    columns: ["nombre","genero","telefono","fechanacimiento","tipopersona","id_registro"]
}

module.exports = {
    tregistros,
    tbar,
    tubicacionbar,
    tusuarios
}