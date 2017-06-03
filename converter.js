function convert() {
    var temp = original.value;
    var parseada = parsear(temp);
    //var convertida = converter(parseada[1], parseada[2]);
    console.log(parseada[0] + " " + parseada[1] + " " + parseada[2]);
    var instanciaDeMedida = instanciarMedida(parseada[0], parseada[1]);
    console.log(instanciaDeMedida);

    converted.innerHTML = converter(instanciaDeMedida, parseada[2]);
}

function converter(instanciaDeMedida, to) {
    var nueva;
    if (to == "Kelvin") nueva = instanciaDeMedida.toKelvin();
    if (to == "Celsius") nueva = instanciaDeMedida.toCelcius();
    if (to == "Farenheit") nueva =instanciaDeMedida.toFarenheit();

    return nueva + " " + to;
}
