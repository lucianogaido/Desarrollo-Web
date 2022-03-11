const carrito= [];
const products = [
    {id: 1, title: "Mermelada de Arandanos", price: 500, stock: 100},
    {id: 2, title: "Mermelada de Ciruela", price: 500, stock: 100},
    {id: 3, title: "Mermelada de Durazno", price: 500, stock: 100 },
    {id: 4, title: "Mermelada de Frambuesa", price: 500, stock: 100 },
    {id: 5, title: "Mermelada de Frutilla", price: 500,stock: 100},
    {id: 6, title: "Mermelada de Kiwi", price: 500, stock: 100},
    {id: 7, title: "Mermelada de Mandarina", price: 500, stock: 100},
    {id: 8, title: "Mermelada de Naranja", price: 500, stock: 100},
    {id: 9, title: "Mermelada de Tomate", price: 500, stock: 100},
];
let nombre = prompt('Hola, como te llamas?');
alert(`Hola ${nombre}. Bievenido a Nuna`);

const calculo = (nombreProducto, precioProducto, stockProducto, cantidadPedida, porcentaje) => {

    const hayStock = validarStock(stockProducto, cantidadPedida);

    const resultado = total(cantidadPedida, precioProducto);
    if (hayStock) {
        console.log(`Agregaste al carrito ${cantidadPedida} ${nombreProducto} a $${precioProducto}. Total: $${resultado}`);
    } else {
        console.log('No tenemos el stock suficiente');
    };

};


do {
    const numero = Number(prompt(`Que mermelada te gustaria comprar? Ingresa el número. 
    1. Arandanos
    2. Ciruela
    3. Durazno
    4. frambuesa
    5. Frutilla
    6. Kiwi
    7. Mandarina
    8. Naranja
    9. Tomate`));
    if (numero === 1) {
        calculo(products[0].title, products[0].price, products[0].stock, cantidadPedida = Number(prompt('Cuantas queres?')));
        agregarAlCarrito(products[0]);
        alert(`Agregaste al carrito ${cantidadPedida} ${products[0].title} a $${products[0].price}`);

    } else if (numero === 2) {
        calculo(products[1].title, products[1].price, products[1].stock, cantidadPedida = Number(prompt('Cuantas queres?')));
        agregarAlCarrito(products[1]);
        alert(`Agregaste al carrito ${cantidadPedida} ${products[1].title} a $${products[1].price}`)

    } else if (numero === 3) {
        calculo(products[2].title, products[2].price, products[2].stock, cantidadPedida = Number(prompt('Cuantas queres?')));
        agregarAlCarrito(products[2]);
        alert(`Agregaste al carrito ${cantidadPedida} ${products[2].title} a $${products[2].price}`)

    } else if (numero === 4) {
        calculo(products[3].title, products[3].price, products[3].stock, cantidadPedida = Number(prompt('Cuantas queres?')));
        agregarAlCarrito(products[3]);
        alert(`Agregaste al carrito ${cantidadPedida} ${products[3].title} a $${products[3].price}`)

    } else if (numero === 5) {
        calculo(products[4].title, products[4].price, products[4].stock, cantidadPedida = Number(prompt('Cuantas queres?')));
        agregarAlCarrito(products[4]);
        alert(`Agregaste al carrito ${cantidadPedida} ${products[4].title} a $${products[4].price}`)

    } else if (numero === 6) {
        calculo(products[5].title, products[5].price, products[5].stock, cantidadPedida = Number(prompt('Cuantas queres?')));
        agregarAlCarrito(products[5]);
        alert(`Agregaste al carrito ${cantidadPedida} ${products[5].title} a $${products[5].price}`)

    } else if (numero === 7) {
        calculo(products[6].title, products[6].price, products[6].stock, cantidadPedida = Number(prompt('Cuantas queres?')));
        agregarAlCarrito(products[6]);
        alert(`Agregaste al carrito ${cantidadPedida} ${products[6].title} a $${products[6].price}`)

    } else if (numero === 8) {
        calculo(products[7].title, products[7].price, products[7].stock, cantidadPedida = Number(prompt('Cuantas queres?')));
        agregarAlCarrito(products[7]);
        alert(`Agregaste al carrito ${cantidadPedida} ${products[7].title} a $${products[7].price}}`)

    } else if (numero === 9) {
        calculo(products[8].title, products[8].price, products[8].stock, cantidadPedida = Number(prompt('Cuantas queres?')));
        agregarAlCarrito(products[8]);
        alert(`Agregaste al carrito ${cantidadPedida} ${products[8].title} a $${products[8].price}`)

    } else {
        alert('ingresaste mal el numero')
    }
    continuar = prompt('Desea continuar comprando? si o no');
} while (continuar !== 'no');
totalAPagar();

//*************************************************************************************************************************************                                                 F U N C I O N E S *************************************************************************************************************************************



function validarStock(stockProducto, cantidadPedida) {
    return (stockProducto > cantidadPedida);
}

function total(cantidadPedida, precioProducto) {
    return (cantidadPedida * precioProducto);
}

function agregarAlCarrito(product) {
    carrito.push(product);
}

function totalAPagar() {
    const totalDelCarrito = carrito.reduce((acumulador, product) => acumulador + (product.price), 0);
    console.log("Total del carrito:" + totalDelCarrito);
    alert("Total del carrito: $" + totalDelCarrito);
}
