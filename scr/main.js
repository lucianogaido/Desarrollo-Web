let totalCarrito = 0;
const carrito = [];
const productos = [{
        id: 1,
        titulo: "Mermelada de Arandanos",
        precio: 500,
        stock: 100,
        img: "../assets/mermeladas/arandanos.png"
    },
    {
        id: 2,
        titulo: "Mermelada de Ciruela",
        precio: 500,
        stock: 0,
        img: "../assets/mermeladas/ciruela.png"
    },
    {
        id: 3,
        titulo: "Mermelada de Durazno",
        precio: 500,
        stock: 100,
        img: "../assets/mermeladas/durazno.png"
    },
    {
        id: 4,
        titulo: "Mermelada de Frambuesa",
        precio: 500,
        stock: 100,
        img: "../assets/mermeladas/frambuesa.png"

    },
    {
        id: 5,
        titulo: "Mermelada de Frutilla",
        precio: 500,
        stock: 100,
        img: "../assets/mermeladas/frutilla.png"

    },
    {
        id: 6,
        titulo: "Mermelada de Kiwi",
        precio: 500,
        stock: 100,
        img: "../assets/mermeladas/kiwi.png"

    },
    {
        id: 7,
        titulo: "Mermelada de Mandarina",
        precio: 500,
        stock: 100,
        img: "../assets/mermeladas/mandarina.png"

    },
    {
        id: 8,
        titulo: "Mermelada de Naranja",
        precio: 500,
        stock: 100,
        img: "../assets/mermeladas/naranja.png"

    },
    {
        id: 9,
        titulo: "Mermelada de Tomate",
        precio: 500,
        stock: 100,
        img: "../assets/mermeladas/tomate.png"

    },
];
let nombre = prompt('Hola, como te llamas?');
alert(`Hola ${nombre}. Bievenido a Nuna`);

// const calculo = (nombreProducto, precioProducto, stockProducto, cantidadPedida, porcentaje) => {

//     const hayStock = validarStock(stockProducto, cantidadPedida);

//     const resultado = total(cantidadPedida, precioProducto);

//     if (hayStock) {
//         console.log(`Agregaste al carrito ${cantidadPedida} ${nombreProducto} a $${precioProducto}. Total: $${resultado}`);
//     } else {
//         console.log('No tenemos el stock suficiente');
//     };

// };


do {
    const numero = Number(prompt(`Que mermelada te gustaria comprar? Ingresa el número. 
    1. Arandanos
    2. Ciruela
    3. Durazno
    4. Frambuesa
    5. Frutilla
    6. Kiwi
    7. Mandarina
    8. Naranja
    9. Tomate`));
    if (numero === 1) {
        let cantidad = Number(prompt('Ingresá la cantidad'));
        let valorCompra = cantidad * productos[0].precio;
        totalCarrito += valorCompra;
        alert(`Agregaste al carrito ${cantidad} ${productos[0].titulo} a $${productos[0].precio} c/u. Total $ ${valorCompra}`);
        alert(`Total del carrito : $ ${totalCarrito}`);
        // calculo(productos[0].titulo, productos[0].precio, productos[0].stock, cantidadPedida = Number(prompt('Cuantas queres?')));
        // agregarAlCarrito(productos[0]);
        // alert(`Agregaste al carrito ${cantidadPedida} ${productos[0].titulo} a $${productos[0].precio}`);

    } else if (numero === 2) {
        let cantidad = Number(prompt('Ingresá la cantidad'));
        let valorCompra = cantidad * productos[1].precio;
        totalCarrito += valorCompra;
        alert(`Agregaste al carrito ${cantidad} ${productos[1].titulo} a $${productos[1].precio} c/u. Total $ ${valorCompra}`);
        alert(`Total del carrito : $ ${totalCarrito}`);
        // calculo(productos[1].titulo, productos[1].precio, productos[1].stock, cantidadPedida = Number(prompt('Cuantas queres?')));
        // agregarAlCarrito(productos[1]);
        // alert(`Agregaste al carrito ${cantidadPedida} ${productos[1].titulo} a $${productos[1].precio}`)

    } else if (numero === 3) {
        let cantidad = Number(prompt('Ingresá la cantidad'));
        let valorCompra = cantidad * productos[2].precio;
        totalCarrito += valorCompra;
        alert(`Agregaste al carrito ${cantidad} ${productos[2].titulo} a $${productos[2].precio} c/u. Total $ ${valorCompra}`);
        alert(`Total del carrito : $ ${totalCarrito}`);
        // calculo(productos[2].titulo, productos[2].precio, productos[2].stock, cantidadPedida = Number(prompt('Cuantas queres?')));
        // agregarAlCarrito(productos[2]);
        // alert(`Agregaste al carrito ${cantidadPedida} ${productos[2].titulo} a $${productos[2].precio}`)

    } else if (numero === 4) {
        let cantidad = Number(prompt('Ingresá la cantidad'));
        let valorCompra = cantidad * productos[3].precio;
        totalCarrito += valorCompra;
        alert(`Agregaste al carrito ${cantidad} ${productos[3].titulo} a $${productos[3].precio} c/u. Total $ ${valorCompra}`);
        alert(`Total del carrito : $ ${totalCarrito}`);
        // calculo(productos[3].titulo, productos[3].precio, productos[3].stock, cantidadPedida = Number(prompt('Cuantas queres?')));
        // agregarAlCarrito(productos[3]);
        // alert(`Agregaste al carrito ${cantidadPedida} ${productos[3].titulo} a $${productos[3].precio}`)

    } else if (numero === 5) {
        let cantidad = Number(prompt('Ingresá la cantidad'));
        let valorCompra = cantidad * productos[4].precio;
        totalCarrito += valorCompra;
        alert(`Agregaste al carrito ${cantidad} ${productos[4].titulo} a $${productos[4].precio} c/u. Total $ ${valorCompra}`);
        alert(`Total del carrito : $ ${totalCarrito}`);
        // calculo(productos[4].titulo, productos[4].precio, productos[4].stock, cantidadPedida = Number(prompt('Cuantas queres?')));
        // agregarAlCarrito(productos[4]);
        // alert(`Agregaste al carrito ${cantidadPedida} ${productos[4].titulo} a $${productos[4].precio}`)

    } else if (numero === 6) {
        let cantidad = Number(prompt('Ingresá la cantidad'));
        let valorCompra = cantidad * productos[5].precio;
        totalCarrito += valorCompra;
        alert(`Agregaste al carrito ${cantidad} ${productos[5].titulo} a $${productos[5].precio} c/u. Total $ ${valorCompra}`);
        alert(`Total del carrito : $ ${totalCarrito}`);
        // calculo(productos[5].titulo, productos[5].precio, productos[5].stock, cantidadPedida = Number(prompt('Cuantas queres?')));
        // agregarAlCarrito(productos[5]);
        // alert(`Agregaste al carrito ${cantidadPedida} ${productos[5].titulo} a $${productos[5].precio}`)

    } else if (numero === 7) {
        let cantidad = Number(prompt('Ingresá la cantidad'));
        let valorCompra = cantidad * productos[6].precio;
        totalCarrito += valorCompra;
        alert(`Agregaste al carrito ${cantidad} ${productos[6].titulo} a $${productos[6].precio} c/u. Total $ ${valorCompra}`);
        alert(`Total del carrito : $ ${totalCarrito}`);
        // calculo(productos[6].titulo, productos[6].precio, productos[6].stock, cantidadPedida = Number(prompt('Cuantas queres?')));
        // agregarAlCarrito(productos[6]);
        // alert(`Agregaste al carrito ${cantidadPedida} ${productos[6].titulo} a $${productos[6].precio}`)

    } else if (numero === 8) {
        let cantidad = Number(prompt('Ingresá la cantidad'));
        let valorCompra = cantidad * productos[7].precio;
        totalCarrito += valorCompra;
        alert(`Agregaste al carrito ${cantidad} ${productos[7].titulo} a $${productos[7].precio} c/u. Total $ ${valorCompra}`);
        alert(`Total del carrito : $ ${totalCarrito}`);
        // calculo(productos[7].titulo, productos[7].precio, productos[7].stock, cantidadPedida = Number(prompt('Cuantas queres?')));
        // agregarAlCarrito(productos[7]);
        // alert(`Agregaste al carrito ${cantidadPedida} ${productos[7].titulo} a $${productos[7].precio}`)

    } else if (numero === 9) {
        let cantidad = Number(prompt('Ingresá la cantidad'));
        let valorCompra = cantidad * productos[8].precio;
        totalCarrito += valorCompra;
        alert(`Agregaste al carrito ${cantidad} ${productos[8].titulo} a $${productos[8].precio} c/u. Total $ ${valorCompra}`);
        alert(`Total del carrito : $ ${totalCarrito}`);
        // calculo(productos[8].titulo, productos[8].precio, productos[8].stock, cantidadPedida = Number(prompt('Cuantas queres?')));
        // agregarAlCarrito(productos[8]);
        // alert(`Agregaste al carrito ${cantidadPedida} ${productos[8].titulo} a $${productos[8].precio}`)

    } else {
        alert('ingresaste mal el numero')
    }
    // totalAPagar();
    continuar = prompt('Desea continuar comprando? si o no');
} while (continuar !== 'no');

/*************************************************************************************************************************************                                                           DOM                       ************************************************************************************************************************************/
            // GENERADOR DE CARDS 

function generarCards(productosAMostrar){
const divCards = document.getElementById('cards')
productosAMostrar.forEach(elemento => {
    divCards.innerHTML += `
    <div class="col mb-4">
            <div class="card ">
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
                ${(elemento.stock > 0) ? 'Disponible' : 'Sin Stock'}
            </div>
                <img src="${elemento.img}" class="card-img-top" alt="Mermelada de Arandanos">
                <div class="card-body">
                <h5 class="card-titulo">${elemento.titulo}</h5>
                <input type="number" name="cant" id="cant">
                        <button type="button" class="btn btn-warning">Añadir al Carrito</button>
                </div>
            </div>
    </div>
    `
});
};
generarCards(productos);

            // BUSCADOR 

function buscador(){
    const nombreProductoBuscado = document.getElementById('productoBuscado').value.toUpperCase().trim();
    const productosEncontrados = productos.filter((producto) => {
        return producto.titulo.toUpperCase().match(nombreProductoBuscado);
    });
    generarCards(productosEncontrados);
}
//*************************************************************************************************************************************                                                 F U N C I O N E S *************************************************************************************************************************************

// function calculo(){
//     haystock = validarStock(productos[e].precio, cantidad);
//     if (haystock){
//         valorCompra = cantidad * productos[e].precio;
//         totalCarrito += valorCompra;
//         alert(`Agregaste al carrito ${cantidad} ${productos[e].titulo} a $${productos[e].precio} c/u. Total $ ${valorCompra}`);
//         alert(`Total del carrito : $ ${totalCarrito}`);
//     }else{
//         alert('No hay Stock suficiente');
//     }
// }

function validarStock(precio, cantidad) {
    return (precio > cantidad);
}



function total(cantidadPedida, precioProducto) {
    return (cantidadPedida * precioProducto);
}



function agregarAlCarrito(product) {
    carrito.push(product);
}



// function totalAPagar() {
//     const totalDelCarrito = carrito.reduce((acumulador, product) => acumulador += (product.precio * cantidadPedida), 0);
//     console.log("Total del carrito:" + totalDelCarrito);
//     alert("Total del carrito: $" + totalDelCarrito);
// }