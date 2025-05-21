function abrirCarta() {
    const sobre = document.getElementById("sobre");
    const contenedor = document.getElementById("contenedorCorazones");
    const boton = document.getElementById("botonAbrir");

    sobre.classList.toggle("abierto");

    if (sobre.classList.contains("abierto")) {
        lanzarCorazones(10); // Puedes cambiar el número de corazones
        boton.innerText = "Cerrar";
    } else {
        boton.innerText = "Abrir";
    }
}


function lanzarCorazones(cantidad) {
    const contenedor = document.getElementById("contenedorCorazones");

    for (let i = 0; i < cantidad; i++) {
        const corazon = document.createElement("div");
        corazon.classList.add("corazon");

        // Posición aleatoria horizontal
        const offsetX = Math.random() * 200 - 100; // entre -100 y 100px
        corazon.style.left = `calc(50% + ${offsetX}px)`;

        // Animación con delay aleatorio
        corazon.style.animationDelay = `${Math.random() * 0.5}s`;

        contenedor.appendChild(corazon);

        // Eliminar el corazón después de la animación
        setTimeout(() => {
            corazon.remove();
        }, 2000);
    }
}
function reproducirMusica() {
    const audio = document.getElementById("musica");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

let tarjetaAbierta = null;

function voltear(elemento) {
    if (tarjetaAbierta && tarjetaAbierta !== elemento) {
        tarjetaAbierta.classList.remove("volteada");
    }

    elemento.classList.toggle("volteada");

    tarjetaAbierta = elemento.classList.contains("volteada") ? elemento : null;
}

const canciones = [
    { titulo: "You'll be okey", artista: "Gareth Emery", videoId: "apKja6C804o" },
    { titulo: "Ojos Marrones", artista: "Lasso, Sebastian Yatra", videoId: "otz8jqPaxbQ" },
    { titulo: "Mañana", artista: "Alvaro Soler", videoId: "gYVBv6vlVl0" },
    { titulo: "Photograph", artista: "Ed Sheeran", videoId: "p1JmzB6E-C8" },
    { titulo: "Behind blue eyes", artista: "Limp biskit", videoId: "LFA3csrk" },
    { titulo: "El mas triste adios", artista: "WarCry", videoId: "REphgzcZ4mI" },
    { titulo: "Niamh", artista: "Celtian", videoId: "u_78h2iNXr8" },
    { titulo: "Morir de amor", artista: "Kudai", videoId: "B1RFNkdktpI" },
    { titulo: "Memories", artista: "Within Temptation", videoId: "jwCeO9Rt4S0" },
    { titulo: "Reencuentro", artista: "DLD", videoId: "oxGzufGCRFQ" }
];

function mostrarCancion(index) {
    const cancion = canciones[index];
    document.getElementById("listaCanciones").style.display = "none";
    document.getElementById("cancionVista").style.display = "block";

    document.getElementById("tituloCancion").innerText = cancion.titulo;
    document.getElementById("artistaCancion").innerText = cancion.artista;
    document.getElementById("videoIframe").src = `https://www.youtube.com/embed/${cancion.videoId}?autoplay=1`;

    document.getElementById("botonEscuchar").onclick = () => {
        window.open(`https://www.youtube.com/watch?v=${cancion.videoId}`, "_blank");
    };
}

function volverALista() {
    document.getElementById("videoIframe").src = "";
    document.getElementById("cancionVista").style.display = "none";
    document.getElementById("listaCanciones").style.display = "flex";
}


