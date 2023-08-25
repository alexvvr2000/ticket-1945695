var sumaTotal = 0;

function agregarTicket(nombreArticulo, precioArticulo) {
}

function actualizarTotal() {
}

function agregarArticulo(){
    let nombreArticulo = document.getElementById("articulotxt").value
    let precioArticulo = document.getElementById("preciotxt").value
    sumaTotal += parseInt(precioArticulo)
    agregarTicket(nombreArticulo, precioArticulo);
    actualizarTotal();
}