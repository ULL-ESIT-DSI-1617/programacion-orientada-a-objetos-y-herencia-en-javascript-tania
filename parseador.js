function parsear(temp) {
    //var numericPart = "([-+]?\d+(?:\.\d*)?)\s*";
    //var cadenaUnidadDesde = "\s*([fFcC])";
    //var regexp = "/" + numericPart + cadenaUnidadDesde "/";

    var regexp = new RegExp(''
        + [-+]?\d+(?:\.\d*)?
        + (\s*)
        + ([fFcC])
    );

    var m = temp.match(regexp);

    return instanciarMedida(m[1], m[2]);
}

 function instanciarMedida(cantidad, unidad) {
     var instanciaDeMedida;
     try {
         Medida.tipos.Temperatura[unidad] = unidad;
         instanciaDeMedida = new Medida.tipos.Temperatura[unidad] (cantidad, unidad);
     } catch (e){}

     try {
         Medida.tipos.Distancia[unidad] = unidad;
         instanciaDeMedida = new Medida.tipos.Distancia[unidad] (cantidad);
     } catch (e){}

     return instanciaDeMedida;
 }
