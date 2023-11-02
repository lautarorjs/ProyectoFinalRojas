const productos = [
    {nombre: "Pan Blanco", precio: 900},
    {nombre: "Pan Integral", precio: 1000},
    {nombre: "Pizza", precio: 3200},
];

let carrito = [];

// let panBlanco = document.getElementsByClassName("panBlanco");
// let panNegro = document.getElementsByClassName("panNegro");
// let pizza = document.getElementsByClassName("pizza");

// panBlanco.addEvenListen("click", agregarcarrito);
// panNegro.addEvenListen("click", agregarcarrito);
// pizza.addEvenListen("click", agregarcarrito);

function agregarAlCarrito(producto){
    let lista = document.getElementById("carrito");
    let nuevoProducto = document.createElement('li');
    nuevoProducto.innerText = producto 
    lista.append(nuevoProducto);
}

// while(true){
//     let producto = prompt("Agrega un producto a tu carrito de compras (Pan Blanco, Pan Integral, Prepizza)");
//     let precio=0;
//     if(producto == "Pan Blanco" || producto == "Pan Integral" || producto == "Prepizza"){
//         switch (producto){
//             case "Pan Blanco":
//                 precio =900;
//             break;
//             case "Pan Integral":
//                 precio=1000;
//             break;
//             case "Prepizza":
//                 precio=700;
//             break;
//             default:
//             break;
//         }
//         alert(precio)
//         let cantidad = Number(prompt("Ingrese la cantidad que desee comprar"))
//         carrito.push({producto,cantidad,precio})
//         console.log(carrito);
//     }
//     else{
//         alert("Ha escrito mal el producto, recuerde utilizar mayusculas donde corresponda")
//     }
//     let seleccion = prompt("Desea seguir comprando?")
//     while(seleccion === "No" || seleccion === "no"){
//         alert("Gracias por su compra, hasta pronto")
//         carrito.forEach((carritoFinal) => {
//         console.log(`Producto: ${carritoFinal.producto}, Unidades: ${carritoFinal.cantidad}, Total a pagar por producto ${carritoFinal.cantidad * carritoFinal.precio}`)
//         })
//         break;
//     }
// }
