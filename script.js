let carritoCompras = [];
let divProducts = document.getElementById('divProducts')


//cards
mostrarProductos(stockProductos);

function mostrarProductos(array){
    array.forEach(zapatilla => {
        divProducts.innerHTML += `
        <div class="card card-item">
            <img src=${zapatilla.img} alt="zapatilla ${zapatilla.estilo}">
            <div class="card-body"> 
            <p class="nombre-card">${zapatilla.nombre}</p>
            <p> Estilo: ${zapatilla.estilo}</p>
            <p class="precioCard"> Precio: $${zapatilla.precio}</p> 
            <a id="btn${zapatilla.id}" class="btn btn-secondary add-cart"><i class="fas fa-shopping-bag"></i></a>
                <div class="input-group mb-3">
                <select class="form-select lista-talles" id="inputGroupSelect01">
                <option selected>Talle...</option>
                <option value="1">37</option>
                <option value="2">38</option>
                <option value="3">39</option>
                <option value="4">40</option>
                </select>
                </div>
            </div>
        </div>
        `

    let botonAgregar = document.getElementById(`btn${zapatilla.id}`);

botonAgregar.addEventListener('click', ()=>{
    console.log(zapatilla.id)
})
        
    });
}

let carritoContenedor = document.getElementById('cart-content')

//agregar al carrito
function agregarAlCarrito(id){
    let agregarProducto = stockProductos.find(zapatilla => zapatilla.id == id)

    carritoCompras.push(agregarProducto)
    
    let div = document.createElement('div')
    div.classList.add('cart-box')
    div.innerHTML = `                        
        <img src=${agregarProducto.img} alt="">
        <div class="detail-box">
            <p class="cart-product-title">${agregarProducto.nombre}</p>
            <p class="cart-price">$${agregarProducto.precio}</p>
            <input type="number" value="1" class="cart-quantity">
        </div>

        <i class="fas fa-trash-alt cart-remove"></i>
    `
    carritoContenedor.appendChild(div)
}


//comprar y actualizar carrito
function actualizarCarrito(){
    
}

//filtrar por estilos
var estilo = document.querySelectorAll('.estilo')
let aplicarEstilos = document.getElementById('aplicarEstilos')

aplicarEstilos.addEventListener('click', () => {
    estilo.forEach((e) => {
        if(e.checked == true){
            mostrarProductos(stockProductos.filter(elemento => elemento.id == estilo.id))
        }
    })
})



//cerrar carrito
let cerrarCarrito = document.getElementById('close-cart');
let btnCarritoFinalizado = document.getElementById('cart-icon');

btnCarritoFinalizado.addEventListener('click', () =>{
    $('#cart').show()
})

cerrarCarrito.addEventListener('click', () => {
    $('#cart').hide()
})









/*let formCompra = document.getElementById("formCompra")

class Clientes{
    constructor(nombre, apellido, email, direccion, telefono){
        this.nombre = nombre; 
        this.apellido = apellido;
        this.email = email;
        this.direccion = direccion;
        this.telefono = telefono;
    }
}
let clientes = [];

formCompra.addEventListener('submit', (e) => {
    e.preventDefault()

    let nombreCliente = document.getElementById("inputNombre").value
    let apellidoCliente = document.getElementById("inputApellido").value
    let emailCliente = document.getElementById("inputEmail").value
    let direccionCliente = document.getElementById("inputDireccion").value
    let numeroCliente = document.getElementById("inputTelefono").value

    let cliente = new Clientes(nombreCliente, apellidoCliente, emailCliente, direccionCliente, numeroCliente)
    
    clientes.push(cliente)

    localStorage.setItem('clientes', JSON.stringify(clientes))
    
    formCompra.reset()
})
*/