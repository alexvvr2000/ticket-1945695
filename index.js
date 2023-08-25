var sumaTotal = 0;

function agregarTicket(nombreArticulo, precioArticulo) {
    const mensajePantalla = `${nombreArticulo}: ${precioArticulo}`
    let listaElementos = document.getElementById("listaArticulos")
    let nuevoElemento = document.createElement("LI");
    nuevoElemento.innerHTML = mensajePantalla
    listaElementos.appendChild(nuevoElemento)
    actualizarTotal();
}

function agregarArticulo(){
    let nombreArticulo = document.getElementById("articulotxt").value
    let precioArticulo = document.getElementById("preciotxt").value
    sumaTotal += parseInt(precioArticulo)
    agregarTicket(nombreArticulo, precioArticulo);
}