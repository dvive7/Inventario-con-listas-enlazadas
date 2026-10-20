
class Producto {
    constructor(codigo, nombre, cantidad, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
        this.sig = null;
    }

    infoHTML() {
        return `
            <div class="producto">
                <strong>Código:</strong> ${this.codigo}<br>
                <strong>Nombre:</strong> ${this.nombre}<br>
                <strong>Cantidad:</strong> ${this.cantidad}<br>
                <strong>Costo:</strong> $${this.costo.toFixed(2)}
            </div>
        `;
    }
}
