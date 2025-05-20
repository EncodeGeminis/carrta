function abrirCarta() {
    const sobre = document.getElementById("sobre");
    const contenedor = document.getElementById("contenedorCorazones");

    sobre.classList.toggle("abierto");

    if (sobre.classList.contains("abierto")) {
        lanzarCorazones(10); // Puedes cambiar el número de corazones
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

