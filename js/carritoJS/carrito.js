
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);


const contenedorCarritoVacio = document.querySelector("#carrito__vacio");
const contenedorCarritoProducto = document.querySelector("#carrito__productos");
const contenedorcontenedorAcciones = document.querySelector("#carrito__acciones");
const contenedorcontenedorComprado = document.querySelector("#carrito__comprado");
let botonesEliminar = document.querySelector(".carrito__producto-eliminar");
const botonVaciar = document.querySelector("#carrito__acciones-vaciar");
const contenedorTotal = document.querySelector("#total");


function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {

        
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProducto.classList.remove("disabled");
        contenedorcontenedorAcciones.classList.remove("disabled");
        contenedorcontenedorComprado.classList.add("disabled");

        contenedorCarritoProducto.innerHTML = "";

        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito__producto");
            div.innerHTML = `<img class="producto__carrito-image" src="${producto.imagen}" alt="${producto.titulo}">
    <div class="carrito__producto-titulo">
        <small>Titulo</small>
        <h3>${producto.titulo}</h3>
    </div>
    <div class="carrito__producto-cantidad">
        <small>Cantidad</small>
        <p>${producto.cantidad}</p>
    </div>
    <div class="carrito__producto-precio">
        <small>Precio</small>
        <p>Precio $ ${producto.precio}</p>
    </div>
    <div class="carrito__producto-subtotal">
        <small>SubTotal</small>
        <p>$${producto.precio * producto.cantidad}</p>
    </div>
    <button class="carrito__producto-eliminar" id="${producto.id}"><i class="bi bi-trash"></i></button>`
                ;
            contenedorCarritoProducto.appendChild(div);
        });
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProducto.classList.add("disabled");
        contenedorcontenedorAcciones.classList.add("disabled");
        contenedorcontenedorComprado.classList.add("disabled");

    }
    actualizarBotonesEliminar();
    actualizarTotal();
}
cargarProductosCarrito();


function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito__producto-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}
function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}
botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function actualizarTotal(){
    const totaCalculado =  productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0 );
    total.innerHTML = `$${totaCalculado}`
}