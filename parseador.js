function parsear(temp) {
    var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcCkK])\s*((to)|(-))?\s*([fFcCkK])/;
    var objetoMatch = temp.match(regexp);
    var cantidad = objetoMatch[1];
    var from = objetoMatch[2];
    var to = objetoMatch[6];
    if ((from == 'k') || (from == 'K')) from = "Kelvin";
    if ((from == 'f') || (from == 'F')) from = "Farenheit";
    if ((from == 'c') || (from == 'C')) from = "Celsius";

    if ((to == 'k') || (to == 'K')) to = "Kelvin";
    if ((to == 'f') || (to == 'F')) to = "Farenheit";
    if ((to == 'c') || (to == 'C')) to = "Celsius";
    console.log(to);
    var objectoParseado = [];
    objectoParseado.push(cantidad);
    objectoParseado.push(from);
    objectoParseado.push(to);
    return objectoParseado;
}

 function instanciarMedida(cantidad, unidad) {
     var instanciaDeMedida;

     try {
         instanciaDeMedida = new Medida.tipos.Temperatura[unidad] (cantidad);
     } catch (e){}

     try {
         instanciaDeMedida = new Medida.tipos.Distancia[unidad] (cantidad);
     } catch (e){}

     return instanciaDeMedida;
 }
