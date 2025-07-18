document.addEventListener("DOMContentLoaded", function () {
    // === CAMBIO DE TEMA ===
    const botonTema = document.getElementById('tema');
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado === 'oscuro') {
        document.body.classList.add('tema-oscuro');
    }

    if (botonTema) {
        botonTema.addEventListener('click', () => {
            document.body.classList.toggle('tema-oscuro');
            const temaActual = document.body.classList.contains('tema-oscuro') ? 'oscuro' : 'claro';
            localStorage.setItem('tema', temaActual);
        });
    }

    // === CARRUSEL ===
    const carrusel = document.querySelector('.carrusel');
    const slides = document.querySelectorAll('.carrusel a');
    const btnIzquierda = document.querySelector('.flecha.izquierda');
    const btnDerecha = document.querySelector('.flecha.derecha');

    let index = 0;
    const total = slides.length;

    function mostrarSlide(i) {
        carrusel.style.transform = `translateX(-${i * 100}%)`;
    }

    btnDerecha.addEventListener('click', () => {
        index = (index + 1) % total;
        mostrarSlide(index);
    });

    btnIzquierda.addEventListener('click', () => {
        index = (index - 1 + total) % total;
        mostrarSlide(index);
    });

    setInterval(() => {
        index = (index + 1) % total;
        mostrarSlide(index);
    }, 3000);

    // === EFECTO HOVER EN BOTONES DE NAVEGACIÓN CON RESPUESTA AL TEMA ===
    const botonesNavegacion = document.querySelectorAll(".BotonEnc");

    botonesNavegacion.forEach(boton => {
        boton.addEventListener("mouseover", () => {
            // Si está en modo oscuro, usamos un color claro
            if (document.body.classList.contains('tema-oscuro')) {
                boton.style.color = "#0510add3";
            } else {
                boton.style.color = "#44f010ff"; 
            }
        });

        boton.addEventListener("mouseout", () => {
            boton.style.color = ""; // Restaura al color original
        });
    });
});