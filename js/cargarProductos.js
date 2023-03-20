
const productoLista = document.querySelector('[data-tipo-contendor]');


export function cargarProductos(productosElegidos) {
    productoLista.innerHTML = "";
    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add('producto');
        const productoImagen = document.createElement("img");
        productoImagen.classList.add('producto__imagen');
        productoImagen.src = producto.imagen;
        productoImagen.alt = producto.titulo;
        const productoDetalle = document.createElement("div");
        productoDetalle.classList.add('producto__detalle');
        const productoTitulos = document.createElement("h4");
        productoTitulos.classList.add('producto__detalles');
        const productoNombre = document.createElement("span");
        productoNombre.classList.add('producto__nombre');
        productoNombre.textContent = producto.titulo;
        const productoItem = document.createElement("div");
        productoItem.classList.add('producto__Item');
        const productoPrecio = document.createElement("span");
        productoPrecio.classList.add('producto__precio');
        productoPrecio.textContent = producto.precio;
        const productoAgregar = document.createElement("button");
        productoAgregar.classList.add('producto__agregar');
        productoAgregar.textContent = "Agregar";
        productoAgregar.id = producto.id;
        productoAgregar.dataset.tipo_agregar = "";



        productoLista.appendChild(div);
        div.appendChild(productoImagen);
        div.appendChild(productoDetalle);
        productoDetalle.appendChild(productoTitulos);
        productoTitulos.appendChild(productoNombre);
        productoDetalle.appendChild(productoItem);
        productoItem.appendChild(productoPrecio);
        productoItem.appendChild(productoAgregar);
    });
};






