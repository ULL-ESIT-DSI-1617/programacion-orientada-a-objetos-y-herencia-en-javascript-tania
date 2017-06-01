class Temperatura extends Medida {
    constructor(cantidad, unidad) {
        super(cantidad);
        this.cantidad = cantidad;
        this.unidad = unidad;
    }
}
Medida.tipos.Temperatura = Temperatura;
