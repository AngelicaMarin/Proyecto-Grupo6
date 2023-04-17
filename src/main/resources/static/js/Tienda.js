//Productos
const productos = [

    //Videojuegos

    //NS
    {
        id: "MARIOPARTY-NS",
        titulo: "Mario Party",
        imagen: "./images/CV/NSMarioParty.jpg",
        categoria: {
            nombre: "Videojuegos",
            id: "videojuegos"
        },
        precio: 1000
    },
    {
        id: "MARIORABBIDS-NS",
        titulo: "MARIO & RABBIDS",
        imagen: "./images/CV/NSMarioRabbids.jpg",
        categoria: {
            nombre: "Videojuegos",
            id: "videojuegos"
        },
        precio: 1000
    },
    {
        id: "MarioOdyssey-NS",
        titulo: "Super Mario Odyssey",
        imagen: "./images/CV/NSSMOdyssey.jpg",
        categoria: {
            nombre: "Videojuegos",
            id: "videojuegos"
        },
        precio: 1000
    },
    {
        id: "SonicMania-NS",
        titulo: "Aonic Mania",
        imagen: "./images/CV/NSSonicMania.jpg",
        categoria: {
            nombre: "Videojuegos",
            id: "videojuegos"
        },
        precio: 1000
    },

    //PC

    {
        id: "CallofDuty-PC",
        titulo: "Call Of Duty",
        imagen: "./images/CV/PCCallofDuty.jpg",
        categoria: {
            nombre: "Videojuegos",
            id: "videojuegos"
        },
        precio: 1000
    },
    {
        id: "HogwartsLegacy-PC",
        titulo: "Hogwarts Legacy",
        imagen: "./images/CV/PCHogwartsL.jpg",
        categoria: {
            nombre: "Videojuegos",
            id: "videojuegos"
        },
        precio: 1000
    },
    {
        id: "Horizon-PC",
        titulo: "Horizon",
        imagen: "./images/CV/PCHorizon.jpg",
        categoria: {
            nombre: "Videojuegos",
            id: "videojuegos"
        },
        precio: 1000
    },
    {
        id: "ResidentEvil2-PC",
        titulo: "Resident Evil 2",
        imagen: "./images/CV/PCRE2.jpg",
        categoria: {
            nombre: "Videojuegos",
            id: "videojuegos"
        },
        precio: 1000
    },

    //PS4
    {
        id: "FIFA18-PS4",
        titulo: "FIFA 18",
        imagen: "./images/CV/PS4FIFA18.jpg",
        categoria: {
            nombre: "Videojuegos",
            id: "videojuegos"
        },
        precio: 1000
    },
    {
        id: "BATTLEFIELD-PS4",
        titulo: "BATTLEFIELD",
        imagen: "./images/CV/PS4BATTLEFIELD.jpg",
        categoria: {
            nombre: "Videojuegos",
            id: "videojuegos"
        },
        precio: 1000
    },
    {
        id: "FARCRY6-PS4",
        titulo: "FARCRY 6",
        imagen: "./images/CV/PS4Farcry6.jpg",
        categoria: {
            nombre: "Videojuegos",
            id: "videojuegos"
        },
        precio: 1000
    },
    {
        id: "Horizon-PS4",
        titulo: "Horizon",
        imagen: "./images/CV/PS4Horizon.jpg",
        categoria: {
            nombre: "Videojuegos",
            id: "videojuegos"
        },
        precio: 1000
    },
    {
        id: "MORTALKOMBAT-PS4",
        titulo: "MORTAL KOMBAT",
        imagen: "./images/CV/PS4MortalKombat.jpg",
        categoria: {
            nombre: "Videojuegos",
            id: "videojuegos"
        },
        precio: 1000
    },
    {
        id: "Uncharted4-PS4",
        titulo: "Uncharted 4",
        imagen: "./images/CV/PS4Uncharted4.jpg",
        categoria: {
            nombre: "Videojuegos",
            id: "videojuegos"
        },
        precio: 1000
    },

    //XBOX

    {
        id: "ASSASSINSCREED-XBOX",
        titulo: "Assasins Creed",
        imagen: "./images/CV/XBOXAssassinsCreed.jpg",
        categoria: {
            nombre: "Videojuegos",
            id: "videojuegos"
        },
        precio: 1000
    },
    {
        id: "FIFA22-XBOX",
        titulo: "FIFA 22",
        imagen: "./images/CV/XBOXFIFA22.jpg",
        categoria: {
            nombre: "Videojuegos",
            id: "videojuegos"
        },
        precio: 1000
    },
    {
        id: "BATMAN-XBOX",
        titulo: "Batman",
        imagen: "./images/CV/XBOXBatman.jpg",
        categoria: {
            nombre: "Videojuegos",
            id: "videojuegos"
        },
        precio: 1000
    },
    {
        id: "Left4Dead-XBOX",
        titulo: "Left 4 Dead",
        imagen: "./images/CV/XBOXLeft4Dead.jpg",
        categoria: {
            nombre: "Videojuegos",
            id: "videojuegos"
        },
        precio: 1000
    },

    //COMPONENTES

    {
        id: "TARJETAMADRE1-Componente",
        titulo: "ASUS ROG CROSSHAIR X670E HERO WIFI",
        imagen: "./images/CC/ASUS ROG CROSSHAIR X670E HERO WIFI.jpg",
        categoria: {
            nombre: "Componentes",
            id: "componentes"
        },
        precio: 1000
    },
    {
        id: "PROCESADOR1-Componente",
        titulo: "INTEL CORE I9 13900K",
        imagen: "./images/CC/INTEL CORE I9 13900K.jpg",
        categoria: {
            nombre: "Componentes",
            id: "componentes"
        },
        precio: 1000
    },
    {
        id: "FUENTEPODER-Componente",
        titulo: "EVGA SUPERNOVA 1600 G",
        imagen: "./images/CC/EVGA SUPERNOVA 1600 G.jpg",
        categoria: {
            nombre: "Componentes",
            id: "componentes"
        },
        precio: 1000
    },
    {
        id: "Geforce4090-Componente",
        titulo: "Geforce 4090",
        imagen: "./images/CC/Geforce4090.jpg",
        categoria: {
            nombre: "Componentes",
            id: "componentes"
        },
        precio: 1000
    },
    {
        id: "TARJETAMADRE2-Componente",
        titulo: "GIGABYTE Z690 AORUS ELITE AX DDR4",
        imagen: "./images/CC/GIGABYTE Z690 AORUS ELITE AX DDR4.jpg",
        categoria: {
            nombre: "Componentes",
            id: "componentes"
        },
        precio: 1000
    },
    {
        id: "PROCESADOR2-Componente",
        titulo: "RYZEN 9 7950X3D",
        imagen: "./images/CC/RYZEN97950X3D.jpg",
        categoria: {
            nombre: "Componentes",
            id: "componentes"
        },
        precio: 1000
    },
    {
        id: "RAM-Componente",
        titulo: "T-FORCE DELTA RGB 16GB DDR5",
        imagen: "./images/CC/T-FORCE DELTA RGB 16GB DDR5.jpg",
        categoria: {
            nombre: "Componentes",
            id: "componentes"
        },
        precio: 1000
    },

    //PERIFERICOS

    {
        id: "CAMARA-Periferico",
        titulo: "LOGITECH C920S PRO",
        imagen: "./images/CP/LOGITECH C920S PRO.jpg",
        categoria: {
            nombre: "Perifericos",
            id: "perifericos"
        },
        precio: 1000
    },
    {
        id: "VOLANTE-Periferico",
        titulo: "LOGITECH G923  PC PLAYSTATION",
        imagen: "./images/CP/LOGITECH G923  PC PLAYSTATION.jpeg",
        categoria: {
            nombre: "Perifericos",
            id: "perifericos"
        },
        precio: 1000
    },
    {
        id: "MOUSE-Periferico",
        titulo: "RAZER DEATHADDER V3 PRO - WIRELESS",
        imagen: "./images/CP/RAZER DEATHADDER V3 PRO - WIRELESS.jpg",
        categoria: {
            nombre: "Perifericos",
            id: "perifericos"
        },
        precio: 1000
    },
    {
        id: "MICROFONO-Periferico",
        titulo: "RAZER SEIREN ELITE",
        imagen: "./images/CP/RAZER SEIREN ELITE.jpg",
        categoria: {
            nombre: "Perifericos",
            id: "perifericos"
        },
        precio: 1000
    },
    {
        id: "HEADSET-Periferico",
        titulo: "SKULLCANDY PLYR NEGRO",
        imagen: "./images/CP/SKULLCANDY PLYR NEGRO.jpg",
        categoria: {
            nombre: "Perifericos",
            id: "perifericos"
        },
        precio: 1000
    },
    {
        id: "TECLADO-Periferico",
        titulo: "STEELSERIES APEX PRO MINI WIRELESS",
        imagen: "./images/CP/STEELSERIES APEX PRO MINI WIRELESS.jpg",
        categoria: {
            nombre: "Perifericos",
            id: "perifericos"
        },
        precio: 1000
    },
    {
        id: "STREAMPLIFY-Periferico",
        titulo: "STREAMPLIFY HUB CTRL 7",
        imagen: "./images/CP/STREAMPLIFY HUB CTRL 7.jpg",
        categoria: {
            nombre: "Perifericos",
            id: "perifericos"
        },
        precio: 1000
    },

    //CONSOLAS

    {
        id: "NSLite-CONSOLAS",
        titulo: "Nintendo Switch Lite",
        imagen: "./images/CConsolas/NSLite.jpg",
        categoria: {
            nombre: "Consolas",
            id: "consolas"
        },
        precio: 1000
    },
    {
        id: "NSOLED-CONSOLAS",
        titulo: "Nintendo Switch OLED",
        imagen: "./images/CConsolas/NSOled.jpg",
        categoria: {
            nombre: "Consolas",
            id: "consolas"
        },
        precio: 1000
    },
    {
        id: "PS4-CONSOLAS",
        titulo: "Play Station 4",
        imagen: "./images/CConsolas/PS4.jpeg",
        categoria: {
            nombre: "Consolas",
            id: "consolas"
        },
        precio: 1000
    },
    {
        id: "PS5-CONSOLAS",
        titulo: "Play Station 5",
        imagen: "./images/CCONSOLAS/PS5.jpg",
        categoria: {
            nombre: "Consolas",
            id: "consolas"
        },
        precio: 1000
    },
    {
        id: "XboxXSeries-CONSOLAS",
        titulo: "Xbox X Series",
        imagen: "./images/CCONSOLAS/Xbox X Series.jpg",
        categoria: {
            nombre: "Consolas",
            id: "consolas"
        },
        precio: 1000
    },
    {
        id: "Xbox360-CONSOLAS",
        titulo: "Xbox 360",
        imagen: "./images/CCONSOLAS/Xbox 360.jpeg",
        categoria: {
            nombre: "Consolas",
            id: "consolas"
        },
        precio: 1000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");



function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
       `;
        contenedorProductos.append(div);
    });

    actualizarBotonesAgregar();
}
cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    });
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));
if (productosEnCarritoLS) {
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

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


    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}