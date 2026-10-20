
const inventario = new Inventario();

const codigo = document.getElementById("codigo");
const nombre = document.getElementById("nombre");
const cantidad = document.getElementById("cantidad");
const costo = document.getElementById("costo");
const posicion = document.getElementById("posicion");
const detalles = document.getElementById("detalles");

document.getElementById("btnAgregar").addEventListener("click", () => {
    if (codigo.value === "" || nombre.value === "" ||
        cantidad.value === "" || costo.value === "") {
        detalles.textContent = "Completa todos los campos.";
        return;
    }

    const nuevo = new Producto(
        codigo.value, nombre.value,
        Number(cantidad.value), Number(costo.value)
    );

    if (inventario.buscar(nuevo.codigo) !== null) {
        detalles.textContent = "El código ya existe.";
        return;
    }

    inventario.agregar(nuevo);
    detalles.textContent = inventario.listar();
});

document.getElementById("btnBuscar").addEventListener("click", () => {
    const producto = inventario.buscar(codigo.value);

    if (producto !== null) {
        detalles.innerHTML = producto.infoHTML();
    } else {
        detalles.textContent = "Producto no encontrado.";
    }
});

document.getElementById("btnEliminar").addEventListener("click", () => {
    const producto = inventario.eliminar(codigo.value);

    if (producto !== null) {
        detalles.textContent = "Producto eliminado: " +
            producto.nombre + "\n\n" + inventario.listar();
    } else {
        detalles.textContent = "Producto no encontrado.";
    }
});

document.getElementById("btnInsertar").addEventListener("click", () => {
    if (codigo.value === "" || nombre.value === "" ||
        cantidad.value === "" || costo.value === "" ||
        posicion.value === "") {
        detalles.textContent = "Completa todos los campos.";
        return;
    }

    const nuevo = new Producto(
        codigo.value, nombre.value,
        Number(cantidad.value), Number(costo.value)
    );

    if (inventario.buscar(nuevo.codigo) !== null) {
        detalles.textContent = "El código ya existe.";
        return;
    }

    if (inventario.insertar(nuevo, Number(posicion.value))) {
        detalles.textContent = inventario.listar();
    } else {
        detalles.textContent = "Posición no válida.";
    }
});

document.getElementById("btnListar").addEventListener("click", () => {
    detalles.textContent = inventario.listar();
});

document.getElementById("btnExtraer").addEventListener("click", () => {
    const producto = inventario.extraerPrimero();

    if (producto !== null) {
        detalles.innerHTML = "Producto extraído:<br>" +
            producto.infoHTML();
    } else {
        detalles.textContent = "El inventario está vacío.";
    }
});

document.getElementById("btnInicio").addEventListener("click", () => {
    if (codigo.value === "" || nombre.value === "" ||
        cantidad.value === "" || costo.value === "") {
        detalles.textContent = "Completa todos los campos.";
        return;
    }

    const nuevo = new Producto(
        codigo.value, nombre.value,
        Number(cantidad.value), Number(costo.value)
    );

    if (inventario.buscar(nuevo.codigo) !== null) {
        detalles.textContent = "El código ya existe.";
        return;
    }

    inventario.agregarInicio(nuevo);
    detalles.textContent = inventario.listar();
});

document.getElementById("btnLimpiar").addEventListener("click", () => {
    codigo.value = "";
    nombre.value = "";
    cantidad.value = "";
    costo.value = "";
    posicion.value = "";
});
