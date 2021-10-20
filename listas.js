class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIgv() {
        this.precio = this.precio * 1.18;
    }
}
const productos = [];
productos.push(new Producto("torta", "54"));
productos.push(new Producto("milojas", "30"));
productos.push(new Producto("mousse", "25"));
let prod1 = new Producto("complementos", "5");
productos.push(prod1);
for (const producto of productos) {
    producto.sumaIgv();
    console.log("Precio con igv: " + producto.precio);
}
console.log(productos);

let preciosParaGanancia = productos.map(producto => producto.precio + 15);
console.log(preciosParaGanancia);