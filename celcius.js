class Celsius extends Temperatura{
    constructor(cantidad) {
        super(cantidad);
    }
    toFarenheit() {
        return this.cantidad * (9/5) + 32
    }

}
Medida.tipos.Temperatura.Celsius = Celsius;
