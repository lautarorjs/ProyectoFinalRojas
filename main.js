const productos = [
    { nombre: "Pan Blanco", precio: 900, img: "./images/pan-con-masa-madre-kBNB--1200x630@abc.jpg" },
    { nombre: "Pan Integral", precio: 1000, img: "./images/pan_integral_de_masa_madre_700.jpg" },
    { nombre: "Pizza", precio: 3200, img: "./images/pizza-masa-madre_5.jpg.webp" },
];

let contenedor = document.getElementById("contenedor");
let carrito = [];

productos.forEach((producto) => {
    let card = document.createElement("div");
    card.className = "card"
    card.innerHTML = `
        <img src="${producto.img}" alt="${producto.nombre}">
        <p>${producto.nombre}</p>
        <p>$${producto.precio}</p>
        <button class="btn" onclick="agregarAlCarrito('${producto.nombre}','${producto.precio}')">Agregar al carrito</button>
    `;
    contenedor.appendChild(card);
});

function agregarAlCarrito(nombre, precio) {
    carrito.push({nombre:nombre,precio:precio});
    console.log(carrito);
    actualizarCarrito();
}

function actualizarCarrito() {
    let lista = document.getElementById("carrito");
    lista.innerHTML = '';

    carrito.forEach(producto => {
        let nuevoProducto = document.createElement('li');
        nuevoProducto.innerText = `${producto.nombre} - $${producto.precio}`;
        lista.appendChild(nuevoProducto);
    });
    
    let cantidadCarrito = document.getElementById("cantidad-carrito");
    cantidadCarrito.innerText = carrito.length;
}


function mostrarCarrito() {
    let modal = document.getElementById("carrito-modal");
    modal.style.display = "block";
}

function cerrarCarrito() {
    // Cerrar el modal de carrito
    let modal = document.getElementById("carrito-modal");
    modal.style.display = "none";
}


