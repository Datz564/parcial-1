function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
    var mensajeError = document.getElementById('mensajeError');

    mensajeError.innerHTML = '';

    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
        mensajeError.innerHTML = 'Todos los campos son obligatorios';
        return false;
    }

    if (!validarEmail(email)) {
        mensajeError.innerHTML = 'Correo electrónico no válido';
        return false;
    }

    return true;
}

function validarEmail(email) {
    // Expresión regular para validar un correo electrónico básico
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}