class Kelvin extends Temperatura{
    constructor(cantidad) {
        super(cantidad);
    }
    toFarenheit() {
        return this.cantidad * (9/5) - 459.67
    }
    toCelcius() {
        return this.cantidad -273.15
    }
}
Medida.tipos.Temperatura.Kelvin = Kelvin;
