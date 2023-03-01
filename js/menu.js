import { productos } from "./productos.js";
import { cargarProductos } from "./cargarProductos.js";


const botonesCategorias = document.querySelectorAll('[data__tipo-boton]');

cargarProductos(productos);

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
    })
});








