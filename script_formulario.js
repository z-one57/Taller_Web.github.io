document.addEventListener("DOMContentLoaded", function () {
    // === EFECTO HOVER EN BOTONES DE NAVEGACIÓN ===
    const botonesNavegacion = document.querySelectorAll(".BotonEnc");

    botonesNavegacion.forEach(boton => {
        boton.addEventListener("mouseover", () => {
            boton.style.color = "#e69138"; 
        });

        boton.addEventListener("mouseout", () => {
            boton.style.color = ""; 
        });
    });
    
    // === CONTADOR DE CARACTERES ===
    const textarea = document.getElementById('comentario');
    const contador = document.getElementById('contador');

    textarea.addEventListener('input', function () {
        const longitud = this.value.length;
        contador.textContent = `${longitud}/600 caracteres usados`;

        if (longitud > 500) {
            contador.style.color = 'red';
        } else {
            contador.style.color = '';
        }
    });

    // === VALIDACIÓN Y MENSAJES TOAST ===
    const botonEnviar = document.getElementById('enviarBtn');
    const formulario = botonEnviar.closest('form');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const comentario = document.getElementById('comentario').value.trim();

        if (!nombre || !apellidos || !email || !telefono || !comentario) {
            M.toast({ html: 'Por favor, complete todos los campos', classes: 'red darken-1' });
            return;
        }

        if (!/^\d{7,22}$/.test(telefono)) {
            M.toast({ html: 'Teléfono inválido (solo números, 7 a 22 dígitos)', classes: 'red darken-1' });
            return;
        }

        M.toast({ html: '¡Mensaje enviado correctamente!', classes: 'green darken-2' });

        setTimeout(() => {
            formulario.reset();
            contador.textContent = '0/600 caracteres usados';
            contador.style.color = '';
        }, 2000);
    });
});
