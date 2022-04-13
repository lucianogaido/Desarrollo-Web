let productos = [];

fetch("/data.json")
    .then((response) => response.json())
    .then((data) => productos = data.productos)
/*************************************************************************************************************************************                                                           DOM                       ************************************************************************************************************************************/

fetch("/data.json")
    .then((response) => response.json())
    .then((data) => generarCards(data.productos))

// GENERADOR DE CARDS 


function generarCards(productosAMostrar) {
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
                <p><span>Precio: $${elemento.precio}</span></p>
                <input value= "1" min="1" class="cart-quantity-input" id="cantidad-${elemento.id}" type="number" name="cant" id="cant">
                <button type="button" class="boton btn btn-warning"
                ${(elemento.stock == 0) && "disabled"}
                onclick="agregarAlCarrito(${elemento.id})" >
                Añadir al Carrito
                </button>
                </div>
                </div>
                </div>
                `
    });
};

//  GENERADOR DE CARDS EN MODAL CARRITO

function cardsEnCarrito(productosCarrito) {
    let acumuladorProductosCarrito = '';
    productosCarrito.forEach((elemento) => {
        acumuladorProductosCarrito += `
        <div class="cart-items">
            <div class="cart-row">
                <div class="cart-item cart-column">
                <img src="${(elemento.img === "")? '../assets/Nuna.png' : elemento.img}" alt="Imagen producto ${elemento.titulo}" width="100" height="100">
                    <span class="cart-item-title">${elemento.titulo}</span>
                </div>
                <span class="cart-price cart-column">$${elemento.precio}</span>
                <div class="cart-quantity cart-column">
                    <button type="button" onclick="restarUno(${elemento.id})" class="badge btn btn-warning ms-1 rounded-pill">-</button>
                    <input class="cart-quantity-input" id="cant-${elemento.id}" value= "${elemento.cantidad}">
                    <button type="button" onclick="agregarUno(${elemento.id})" class="badge btn btn-warning ms-1 rounded-pill">+</button>
                    <button onclick="removerUnProducto(${elemento.id})" class="btn btn-danger" type="button">QUITAR</button>
                </div>
            </div>
        </div>
    `
    });
    mostrarProductosCarrito(acumuladorProductosCarrito);
};

function mostrarProductosCarrito(cards) {
    document.getElementById("modalCarrito").innerHTML = cards;
}

cardsEnCarrito(carrito);

//      BUSCADOR 

function buscador() {
    const nombreProductoBuscado = document.getElementById('productoBuscado').value.toUpperCase().trim();
    const productosEncontrados = productos.filter((producto) => {
        return producto.titulo.toUpperCase().match(nombreProductoBuscado);
    });
    if (nombreProductoBuscado != '') {
        document.getElementById("cards").innerHTML = `<div class="col-lg-12"><h2>Resultados que coinciden con "${nombreProductoBuscado}"</h2></div>`;
        generarCards(productosEncontrados);
    }
};
//*************************************************************************************************************************************                                                 F U N C I O N E S *************************************************************************************************************************************

const agregarAlCarrito = (idProducto) => {

    const valorDeCantidad = Number(document.getElementById(`cantidad-${idProducto}`).value);
    const productoAgregado = productos.find(producto => producto.id === idProducto);
    let productoExistente = carrito.find(producto => producto.id === idProducto);
    if ((productoAgregado.stock > valorDeCantidad) && (productoExistente === undefined)) {
        productoAgregado.cantidad = valorDeCantidad;
        carrito.push(productoAgregado);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        productoAgregado.stock - (Number(valorDeCantidad));
        cantProdCarrito();
        cardsEnCarrito(carrito);
        totalDelCarrito();
        // SWEET ALERT

        swal({
            title: `Agregaste ${productoAgregado.titulo} al Carrito!`,
            icon: "success",
            button: "Continuar comprando",
        });
    } else if ((productoAgregado.stock > valorDeCantidad) && (productoExistente = !undefined)) {
        const indiceProducto = carrito.findIndex(producto => producto.id === idProducto);
        let nuevaCantidad = (Number(carrito[indiceProducto].cantidad += valorDeCantidad));
        if (productoAgregado.stock > nuevaCantidad) {
            productoExistente.cantidad += nuevaCantidad;
            localStorage.setItem("carrito", JSON.stringify(carrito));
            productoAgregado.stock - (Number(valorDeCantidad));
            cantProdCarrito();
            cardsEnCarrito(carrito);
            totalDelCarrito();
            // SWEET ALERT
            swal({
                title: `Agregaste ${productoAgregado.titulo} al Carrito!`,
                icon: "success",
                button: "Continuar comprando",
            });
        } else {
            swal({
                title: `No tenemos Stock suficiente de ${productoAgregado.titulo}`,
                text: "Intenta con una cantidad menor",
                icon: 'error',
                button: "Continuar comprando",
            });

        }
    } else {
        swal({
            title: `No tenemos Stock suficiente de ${productoAgregado.titulo}`,
            text: "Intenta con una cantidad menor",
            icon: 'error',
            button: "Continuar comprando",
        });
    };
};

//  remover del carrito

function removerUnProducto(idProducto) {
    const productoARemover = carrito.find(producto => producto.id === idProducto);
    let indexDelProducto = carrito.indexOf(productoARemover);
    carrito.splice((indexDelProducto), 1);
    cardsEnCarrito(carrito);
    totalDelCarrito();
    cantProdCarrito();
    localStorage.setItem('carrito', JSON.stringify(carrito));
    //    TOASTIFY
    Toastify({
        text: `Eliminaste ${productoARemover.titulo}`,
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}
    }).showToast();
};

//             FUNCION AUMENTAR CANTIDAD EN MODAL CARRITO

function agregarUno(idProducto) {
    const producto = productos.find(producto => producto.id === idProducto);
    const productoAgregado = carrito.findIndex(producto => producto.id === idProducto);
    if (producto.stock > carrito[productoAgregado].cantidad){
    carrito[productoAgregado].cantidad++;
    cardsEnCarrito(carrito);
    totalDelCarrito();
    } else{
        swal({
        title: `No tenemos Stock suficiente de ${producto.titulo}`,
        text: "Intenta con una cantidad menor",
        icon: 'error',
        button: "Continuar comprando",
    });}
};

//             FUNCION RESTAR CANTIDAD EN MODAL CARRITO


function restarUno(idProducto) {
    const productoAgregado = carrito.findIndex(producto => producto.id === idProducto);
    const producto = carrito.find(producto => producto.id === idProducto);
    if (carrito[productoAgregado].cantidad > 1) {
        carrito[productoAgregado].cantidad--;
        cardsEnCarrito(carrito);
        totalDelCarrito();
    } else {
        totalDelCarrito();
        cantProdCarrito();
        localStorage.setItem('carrito', JSON.stringify(carrito));
        //    TOASTIFY
        Toastify({
            text: `Eliminaste ${producto.titulo}`,
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () {}
        }).showToast();
        carrito.splice((productoAgregado), 1);
        cardsEnCarrito(carrito);
    };
};
//             FUNCION TOTAL CARRITO


function totalDelCarrito() {
    const precioTotalCarrito = carrito.reduce((acc, productoAgregado) => (acc + (productoAgregado.precio * productoAgregado.cantidad)), 0);
    document.getElementById("total-precio").innerHTML = `$${precioTotalCarrito}`;
    localStorage.setItem("totalCarrito", JSON.stringify(precioTotalCarrito));
};

//             FUNCION TOTAL CANTIDAD CARRITO


function cantProdCarrito() {
    const cantidadTotalCarrito = carrito.reduce((acc, productoAgregado) => (acc + Number(productoAgregado.cantidad)), 0);
    document.getElementById("cantidad-prod").innerHTML = cantidadTotalCarrito;
    localStorage.setItem("cantidadCarrito", JSON.stringify(cantidadTotalCarrito));
}

// FUNCION VACIAR CARRITO 

function vaciarCarrito() {
    carrito.splice(0, carrito.length);
    cardsEnCarrito(carrito);
    totalDelCarrito();
    cantProdCarrito();
    localStorage.setItem('carrito', JSON.stringify(carrito));
};
const vaciar = document.getElementById("vaciarCarrito");
vaciar.addEventListener("click", vaciarCarrito);