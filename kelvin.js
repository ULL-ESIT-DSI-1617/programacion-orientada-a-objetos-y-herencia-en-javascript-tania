class Kelvin extends Temperatura{
    constructor(cantidad) {
        super(cantidad);
    }
    toFarenheit() {
        return this.cantidad * (9/5) - 459.67
    }
    isKelvin(){
        return true;
    }
}
Medida.tipos.Temperatura.Kelvin = Kelvin;
