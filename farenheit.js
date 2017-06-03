class Farenheit extends Temperatura{
    constructor(cantidad) {
        super(cantidad);
    }
    toFarenheit() {
        return this.cantidad
    }

}
Medida.tipos.Temperatura.Farenheit = Farenheit;
