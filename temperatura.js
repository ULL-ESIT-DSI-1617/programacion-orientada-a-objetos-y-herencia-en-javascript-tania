class Temperatura extends Medida {
    constructor(cantidad) {
        super(cantidad);
    }
    toFarenheit(){
        return this.farenheit();
    }
}
Medida.tipos.Temperatura = Temperatura;
