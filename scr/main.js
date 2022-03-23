let totalCarrito = 0; 
                        // ARRAYS 
const carrito = [];
const productos = [{
        id: 1,
        titulo:"Mermelada de Arandanos",
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
        img: ""

    },
    {
        id: 9,
        titulo: "Mermelada de Tomate",
        precio: 500,
        stock: 100,
        img: "../assets/mermeladas/tomate.png"

    },
];
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
                <img src="${(elemento.img === "")? '../assets/Nuna.png' : elemento.img}" class="card-img-top" alt="Mermelada de Arandanos">
                <div class="card-body">
                <h5 class="card-titulo">${elemento.titulo}</h5>
                <input value= "1" min="1" id="cantidad-${elemento.id}" type="number" name="cant" id="cant">
                <button type="button" class="btn btn-warning"
                onclick="agregarAlCarrito(${elemento.id})">
                Añadir al Carrito
                </button>
                </div>
                </div>
                </div>
                `
});
};
generarCards(productos);
                            //  GENERADOR DE CARDS EN MODAL CARRITO

function cardsEnCarrito (productosCarrito){
    let acumuladorProductosCarrito = '';
productosCarrito.forEach((elemento) => {
    acumuladorProductosCarrito +=`
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-sm-4">
                <img src="${(elemento.img === "")? '../assets/Nuna.png' : elemento.img}" alt="Imagen producto ${elemento.titulo}">
                </div>
                <div class="col-sm-8 card-body">
                    <h5 class="card-title">${elemento.titulo}</h5>
                </div>
            </div>
        </div>
    `
});
    mostrarProductosCarrito(acumuladorProductosCarrito);
};

function mostrarProductosCarrito(cards){
    document.getElementById("modalCarrito").innerHTML = cards;
}

cardsEnCarrito(carrito);

            //      BUSCADOR 

function buscador(){
    const nombreProductoBuscado = document.getElementById('productoBuscado').value.toUpperCase().trim();
    const productosEncontrados = productos.filter((producto) => {
        return producto.titulo.toUpperCase().match(nombreProductoBuscado);
    });
    generarCards(productosEncontrados);
}
//*************************************************************************************************************************************                                                 F U N C I O N E S *************************************************************************************************************************************

const agregarAlCarrito = (idProducto) =>{
    
    const valorDeCantidad = document.getElementById(`cantidad-${idProducto}`).value; //VALOR DE LA CANTIDAD DE PRODUCTOS SELECCIONADA
    const productoAgregado = productos.find(producto => producto.id === idProducto ); //ACCEDO AL PRODUCTO SELECCIONADO
    productoAgregado.cantidad = valorDeCantidad;
    if (productoAgregado.stock > productoAgregado.cantidad){            //COMPRUEBO SI HAY STOCK
    carrito.push (productoAgregado);
    productoAgregado.stock -- ;
    document.getElementById("cantidad-prod").innerHTML = carrito.length;    //DIFERENTES PRODUCTOS AGREGADOS AL CARRITO ...    (Todavia no logro sumar el total de productos agregado, me concatena los valores)
    let valorCompra = productoAgregado.precio * productoAgregado.cantidad;
    totalCarrito += valorCompra;                                            //ACUMULO EL TOTAL DEL CARRITO
    document.getElementById("total-carrito").innerHTML = "$" + totalCarrito;  //PRECIO TOTAL EN BOTON CARRITO
    cardsEnCarrito(carrito);
}else{                  // SI NO HAY STOCK
    alert(`No hay stock suficiente`);
};
}
