const formulario = document.querySelector('#formulario-contacto');
const botonEnviar = document.querySelector('.boton-enviar');

if (formulario) {
    formulario.addEventListener('submit', async function(event) {
        event.preventDefault();

        // Cambiamos el texto del botón para dar feedback
        const textoOriginal = botonEnviar.textContent;
        botonEnviar.textContent = "Enviando...";
        botonEnviar.disabled = true;

        const formData = new FormData(this);

        try {
            const respuesta = await fetch(this.action, {
                method: this.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (respuesta.ok) {
                // redirección manual
                window.location.href = "gracias.html";
            } else {
                const datosError = await respuesta.json();
                alert("Hubo un error: " + (datosError.errors.map(e => e.message).join(", ") || "No se pudo enviar."));
                botonEnviar.textContent = textoOriginal;
                botonEnviar.disabled = false;
            }
        } catch (error) {
            // Error de conexión o de red
            alert("Oops! Parece que hay un problema de conexión.");
            botonEnviar.textContent = textoOriginal;
            botonEnviar.disabled = false;
        }
    });
}