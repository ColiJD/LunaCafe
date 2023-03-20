import { productos } from "./productos.js";
import { cargarProductos } from "./cargarProductos.js";


const botonesCategorias = document.querySelectorAll('[data-tipo-boton]');
let botonesAgregar = document.querySelectorAll(".producto__agregar");
const numerito = document.querySelector("#boton__numerito");


cargarProductos(productos);
actualizarBotonesAgregar();

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (event) => {
        botonesCategorias.forEach(boton => {
            boton.classList.remove("active");
        })
        event.currentTarget.classList.add("active");
        if (event.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto =>
                producto.categoria.id === event.currentTarget.id);

            const productosBoton = productos.filter(producto => producto.categoria.id === event.currentTarget.id);
            cargarProductos(productosBoton);
        }
        else {
            cargarProductos(productos);
        }
        actualizarBotonesAgregar();
    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto__agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarALcarrito);
    });
}

let productosEnCarrito;
const productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}


function agregarALcarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();
    localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito));
};

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
};










