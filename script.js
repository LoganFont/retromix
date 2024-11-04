document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    logo.classList.add('animacion-neon');
});

document.addEventListener('DOMContentLoaded', () => {
    const secciones = document.querySelectorAll('.seccion');

    const mostrarSeccion = () => {
        secciones.forEach(seccion => {
            const posicionTop = seccion.getBoundingClientRect().top;
            if (posicionTop < window.innerHeight) {
                seccion.style.opacity = '1';
            }
        });
    };

    mostrarSeccion();
    window.addEventListener('scroll', mostrarSeccion);
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active'); // Activa/desactiva el menú
    });
});

const productos = {
    1: {
        nombre: "Producto 1",
        descripcion: "Descripción detallada del Producto 1.",
        imagen: "img1.jpg"
    },
    2: {
        nombre: "Producto 2",
        descripcion: "Descripción detallada del Producto 2.",
        imagen: "img2.jpg"
    },
    3: {
        nombre: "Producto 3",
        descripcion: "Descripción detallada del Producto 3.",
        imagen: "img3.jpg"
    }
};

// Detectar clic en los productos destacados
document.querySelectorAll('.producto-destacado').forEach(producto => {
    producto.addEventListener('click', (e) => {
        const productId = e.target.getAttribute('data-product-id');
        mostrarInformacionProducto(productId);
    });
});

// Función para mostrar la información del producto seleccionado
function mostrarInformacionProducto(productId) {
    const productoInfo = document.getElementById('producto-info');
    const producto = productos[productId];
    
    // Actualizar contenido de la sección de productos
    productoInfo.innerHTML = `
        <h3>${producto.nombre}</h3>
        <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 200px; margin-top: 10px;">
        <p>${producto.descripcion}</p>
    `;

    // Desplazar a la sección de productos
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    const botonesProducto = document.querySelectorAll('.producto-boton');
    const productoDetalle = document.getElementById('producto-detalle');
    const productoTitulo = document.getElementById('producto-titulo');
    const productoDescripcion = document.getElementById('producto-descripcion');

    // Información de cada producto
    const productosInfo = {
        1: {
            titulo: "Producto 1",
            descripcion: "Descripción detallada del Producto 1."
        },
        2: {
            titulo: "Producto 2",
            descripcion: "Descripción detallada del Producto 2."
        },
        3: {
            titulo: "Producto 3",
            descripcion: "Descripción detallada del Producto 3."
        },
        4: {
            titulo: "Producto 4",
            descripcion: "Descripción detallada del Producto 4."
        },
        5: {
            titulo: "Producto 5",
            descripcion: "Descripción detallada del Producto 5."
        }
    };

    // Evento para cada botón
    botonesProducto.forEach(boton => {
        boton.addEventListener('click', () => {
            const productId = boton.getAttribute('data-product-id');
            const producto = productosInfo[productId];

            if (producto) {
                productoTitulo.textContent = producto.titulo;
                productoDescripcion.textContent = producto.descripcion;
                productoDetalle.style.display = 'block'; // Muestra la información detallada
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const botonesProducto = document.querySelectorAll('.producto-boton');
    const productoInfo = document.querySelector('.producto-info');
    const productoDetalle = document.getElementById('producto-detalle');
    const productoTitulo = document.getElementById('producto-titulo');
    const productoDescripcion = document.getElementById('producto-descripcion');
    const infoProductoDescripcion = document.getElementById('info-producto-descripcion');

    // Información de cada producto
    const productosInfo = {
        1: {
            titulo: "Producto 1",
            descripcion: "Descripción detallada del Producto 1."
        },
        2: {
            titulo: "Producto 2",
            descripcion: "Descripción detallada del Producto 2."
        },
        3: {
            titulo: "Producto 3",
            descripcion: "Descripción detallada del Producto 3."
        },
        4: {
            titulo: "Producto 4",
            descripcion: "Descripción detallada del Producto 4."
        },
        5: {
            titulo: "Producto 5",
            descripcion: "Descripción detallada del Producto 5."
        }
    };

        // Evento para cada botón
        botonesProducto.forEach(boton => {
            boton.addEventListener('click', () => {
                const productId = boton.getAttribute('data-product-id');
                const producto = productosInfo[productId];
    
                if (producto) {
                    // Actualizar información en ambas secciones
                    productoTitulo.textContent = producto.titulo;
                    productoDescripcion.textContent = producto.descripcion;
                    infoProductoDescripcion.textContent = producto.descripcion;
    
                    // Mostrar ambas secciones
                    productoInfo.style.display = 'block';
                    productoDetalle.style.display = 'block';
                }
            });
        });
    });