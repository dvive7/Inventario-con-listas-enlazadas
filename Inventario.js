
class Inventario {
    constructor() {
        this.primero = null;
    }

    agregar(nuevo) {
        if (this.primero === null) {
            this.primero = nuevo;
        } else {
            let actual = this.primero;

            while (actual.sig !== null) {
                actual = actual.sig;
            }

            actual.sig = nuevo;
        }
    }

    buscar(codigo) {
        let actual = this.primero;

        while (actual !== null) {
            if (actual.codigo === codigo) {
                return actual;
            }

            actual = actual.sig;
        }

        return null;
    }

    eliminar(codigo) {
        if (this.primero === null) {
            return null;
        }

        if (this.primero.codigo === codigo) {
            let eliminado = this.primero;
            this.primero = eliminado.sig;
            eliminado.sig = null;
            return eliminado;
        }

        let actual = this.primero;

        while (actual.sig !== null) {
            if (actual.sig.codigo === codigo) {
                let eliminado = actual.sig;
                actual.sig = eliminado.sig;
                eliminado.sig = null;
                return eliminado;
            }

            actual = actual.sig;
        }

        return null;
    }

    
    insertar(nuevo, posicion) {
        if (posicion < 1) {
            return false;
        }

        if (posicion === 1) {
            nuevo.sig = this.primero;
            this.primero = nuevo;
            return true;
        }

        let actual = this.primero;
        let contador = 1;

        while (actual !== null && contador < posicion - 1) {
            actual = actual.sig;
            contador++;
        }

        if (actual === null) {
            return false;
        }

        nuevo.sig = actual.sig;
        actual.sig = nuevo;

        return true;
    }

    listar() {
        let actual = this.primero;
        let texto = "";

        while (actual !== null) {
            texto +=
                `Código: ${actual.codigo} | ` +
                `Nombre: ${actual.nombre} | ` +
                `Cantidad: ${actual.cantidad} | ` +
                `Costo: $${actual.costo.toFixed(2)}\n`;

            actual = actual.sig;
        }

        return texto;
    }

    extraerPrimero() {
        if (this.primero === null) {
            return null;
        }

        let extraido = this.primero;
        this.primero = extraido.sig;
        extraido.sig = null;

        return extraido;
    }

    agregarInicio(nuevo) {
        nuevo.sig = this.primero;
        this.primero = nuevo;
    }
}
