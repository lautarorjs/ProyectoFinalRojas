const precioPanBlanco=900
const precioPanIntegral=1000

function formadepago(pago,costo){
    let precio
    switch (pago){
        case "Credito": precio = costo * 1.13
        alert("El precio total es de: " + precio)
        break
        case "Debito":  precio = costo * 1.05
        alert("El precio total es de: " + precio)
        break
        case "Efectivo": alert("El precio total es de: " + costo)
        break
        default: alert("Ha escrito mal la forma de pago, recuerde utilizar mayusculas donde corresponda")
    }
}

let producto

while(true){
    producto = prompt("Eliga el producto que desea comprar: Pan Blanco, Pan Integral")
    if(producto == "Pan Blanco" || producto == "Pan Integral"){
        break;
    }
    else{
        alert("Ha escrito mal el producto, recuerde utilizar mayusculas donde corresponda")
    }
}

let cantidad = Number(prompt("Ingrese la cantidad que desee comprar"))

if(producto=="Pan Blanco"){
    let costo = precioPanBlanco * cantidad 
    let pago
    while (true){
        pago = prompt("Eliga la forma de pago: 'Credito'  13% recargo, 'Debito' 5% recargo, 'Efectivo' sin recargo")
        if(pago == "Credito" || pago== "Debito" || pago== "Efectivo"){
            break
        }
        else{
            alert("Ha escrito mal la forma de pago, recuerde utilizar mayusculas donde corresponda")
        }
    }
    formadepago(pago,costo)

}
else if(producto == "Pan Integral"){ 
    let costo = precioPanIntegral * cantidad 
    let pago
    while(true){
        pago = prompt("Eliga la forma de pago: 'Credito'  13% recargo, 'Debito' 5% recargo, 'Efectivo' sin recargo")
        if(pago == "Credito" || pago== "Debito" || pago== "Efectivo"){
            break
        }
        else{
            alert("Ha escrito mal la forma de pago, recuerde utilizar mayusculas donde corresponda")
        }
    }
    formadepago(pago,costo)
}





