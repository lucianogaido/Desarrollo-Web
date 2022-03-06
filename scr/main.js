let nombre = prompt('Hola, como te llamas?');
alert(`Hola ${nombre}. Bievenido a Nuna`);
let promo = prompt(`Contame ${nombre}. Esta es tu primer compra?`);
if (promo == 'si' ){
    alert('Felicitaciones recibiste un descuento del 20% por ser cliente nuevo');
}

do{
const agregarAlCarrito = (nombreProducto, precioProducto, stockProducto, cantidadPedida, porcentaje) => {
    
    const hayStock = validarStock(stockProducto, cantidadPedida);
    
    const resultado = total(cantidadPedida, precioProducto);
    
    if ((promo == 'si') && (hayStock)){

        function impuesto(resultado, porcentaje){
            return resultado - ((resultado * porcentaje)/100)
        }
        for (i = 0; i < 3; i++){
            let descuento = impuesto(resultado, 20);
            console.log(`Agregaste al carrito ${cantidadPedida} ${nombreProducto} a $${precioProducto}. Total: $${descuento}`);
            
        }
    } else if ((promo == 'no') && (hayStock)){
        console.log(`Agregaste al carrito ${cantidadPedida} ${nombreProducto} a $${precioProducto}. Total: $${resultado}`);
        } else {
            console.log('No tenemos el stock suficiente');
        }

    };

function validarStock(stockProducto, cantidadPedida) {
    return (stockProducto > cantidadPedida);
}

function total( cantidadPedida, precioProducto){
    return (cantidadPedida * precioProducto);
}

agregarAlCarrito(sabor=prompt('Que mermelada te gustaria comprar? Arandanos / Frutilla / Ciruela'),
500, 100, cantidad=Number(prompt('Cuantas queres?')));

alert(`Se agregó al carrito: Mermelada de ${sabor}.
Cantidad: ${cantidad}`);
continuar = prompt('Desea continuar comprando? si o no?');
}while (continuar !== 'no');
