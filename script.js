
var productos =  [];

class Producto {
    constructor(codigo, descripcion, tipo, precioCompra, precioVenta, stock){
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.stock = stock;
    }

    setStock(cantidad) {
        this.stock = cantidad;
    }
}

/*Llamar para ingresar al sistema*/
function laJefecita() {
    var iniciado = true;
    while(iniciado) {
        switch (menu()) {
            case '1':
                productos.push(agregarProducto());
                break;
            case '2':
                if(productos.length > 0)
                    modificarStock(prompt("Ingrese el codigo del producto al que desea cambiar el stock: "));
                else
                    console.log("No hay ningun producto registrado.");
                break;
            case '3':
                
                break;
            case '4':
                
                break;
            case '5':
                if(productos.length > 0)
                    stockCero();
                else
                    console.log("No hay ningun producto registrado.");
                break;
            case '6':
                iniciado = false;
                break;
        
            default:
                console.log("Ingrese una opcion valida.")
                break;
        }
    }
    console.log(productos);    
}

function menu() {
    console.log("========== Dulces La Jefecita ==========");
    console.log("1.) Agregar producto");
    console.log("2.) Modificar stock");
    console.log("3.) Registrar venta");
    console.log("4.) Mostrar promedio de ventas");
    console.log("5.) Mostrar productos con stock 0");
    console.log("6.) Salir");
    return prompt("Que desea hacer?: ");
}

function agregarProducto() {
    return new Producto(
        prompt("Ingrese el codigo del producto: "),
        prompt("Ingrese una descripcion para el producto: "),
        prompt("Ingrese el tipo del producto: "),
        prompt("Ingrese el precio de compra del producto: "),
        prompt("Ingrese el precio de venta del producto: "),
        prompt("Ingrese el stock del producto: "),
    );
}

function modificarStock(codigo) {
    for(let producto in productos){
        if(producto.codigo === codigo) {
            producto.setStock(prompt("Ingrese la nueva cantidad de stock: "));
            return;
        }
    }
    console.log("No se econtro un producto con el codigo " + codigo);    
}

function stockCero() {
    productos.forEach(producto => {
        if(producto.stock === 0) {
            console.log(producto);
        }
    }); 
}

function registrarVenta(codigo, cantidad) {

}