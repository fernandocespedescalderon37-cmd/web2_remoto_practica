const productos = [
    { nombre: "Teclado Mecánico RGB Switch Red", categoria: "perifericos", precio: "450 Bs." },
    { nombre: "Mouse Gamer Inalámbrico 16000 DPI", categoria: "perifericos", precio: "320 Bs." },
    { nombre: "Monitor IPS 24 pulgadas 144Hz", categoria: "monitores", precio: "1.450 Bs." },
    { nombre: "Auriculares Surround 7.1 con Micrófono", categoria: "perifericos", precio: "380 Bs." },
    { nombre: "Monitor Curvo 27 pulgadas QHD", categoria: "monitores", precio: "2.100 Bs." },
    { nombre: "Mousepad XL Antideslizante", categoria: "perifericos", precio: "110 Bs." }
];

const contenedor = document.getElementById("grid-productos");

function mostrarProductos(lista) {
    contenedor.innerHTML = "";
    lista.forEach(item => {
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
            <span class="categoria">${item.categoria.toUpperCase()}</span>
            <h3>${item.nombre}</h3>
            <p class="precio">${item.precio}</p>
        `;
        contenedor.appendChild(card);
    });
}

function filtrarProductos(categoria) {
    if (categoria === "todos") {
        mostrarProductos(productos);
    } else {
        const filtrados = productos.filter(p => p.categoria === categoria);
        mostrarProductos(filtrados);
    }
}

mostrarProductos(productos);