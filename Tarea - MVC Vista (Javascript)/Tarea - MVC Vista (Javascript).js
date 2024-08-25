document.addEventListener('DOMContentLoaded', function () {
// DOMContentLoaded, evento que ocurre cuando el html termina de cargar 
//cuando el evento ocurre ejecuta la funcion que se pasa como parametro 
//a la funcion addEvenListener 

//se usa de esta manera para asegurarse que todas las etiqueteas html
//ya existan antes de ejecutar la funcion del evento 
//de esta manera poder llamar las const de cualquier lado 
    const comentarioFormulario = document.getElementById('comentarioFormulario');
    const nombreUsuario = document.getElementById('nombreUsuario');
    const textoComentario = document.getElementById('textoComentario');
    const contadorCaracteres = document.getElementById('contadorCaracteres');
    const listaComentarios = document.getElementById('listaComentarios');

    
    textoComentario.addEventListener('input', function () {
        const maximoCaracteres = 200;
        const longitudActual = textoComentario.value.length;
        contadorCaracteres.textContent = `${maximoCaracteres - longitudActual} caracteres restantes`;
    });


    comentarioFormulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombreUsuarioValue = nombreUsuario.value;
        const textoComentarioValue = textoComentario.value;
        
        const nuevoComentario = document.createElement('li');
        nuevoComentario.className = 'list-group-item';

        const contenidoComentario = document.createElement('span');
        contenidoComentario.textContent = `${nombreUsuarioValue}: ${textoComentarioValue}`;
        nuevoComentario.appendChild(contenidoComentario);

        const botonEliminar = document.createElement('button');
        botonEliminar.className = 'btn btn-danger btn-sm float-end';
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', function () {
            listaComentarios.removeChild(nuevoComentario);
        });
        nuevoComentario.appendChild(botonEliminar);
    
        listaComentarios.appendChild(nuevoComentario);

        comentarioFormulario.reset();
        contadorCaracteres.textContent = '200 caracteres restantes';
    });
});
 // los simbolos ` ` permiten crear string con enter y variables
    // para agregar variable se usa ${nombreVariable}