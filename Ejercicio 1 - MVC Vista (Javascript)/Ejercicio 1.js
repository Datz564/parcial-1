document.addEventListener('DOMContentLoaded', function() {

    const encabezado = document.getElementById('encabezado');
    const parrafo = document.getElementById('parrafo');
    const botonCambiarTexto = document.getElementById('botonCambiarTexto');

    // Función para cambiar el texto del párrafo
    function cambiarTextoParrafo() {
        parrafo.textContent = 'Genial has cambiado el texto';
    }

    // Agregar un evento al botón
    botonCambiarTexto.addEventListener('click', cambiarTextoParrafo);
});
