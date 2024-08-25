document.addEventListener('DOMContentLoaded', function () {
    const formularioLista = document.getElementById('formularioLista');
    const textoElemento = document.getElementById('textoElemento');
    const listaElementos = document.getElementById('listaElementos');
  
    //un boton con el atributo submit busca el formulario mas cercano para realizar el submit (el evento de el formulario)
    formularioLista.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita accion por defecto del evento al que se asocie la funcion

        const textoElementoValuejeje = textoElemento.value;

        // Crear un nuevo espacio en la lista al precionar el boton 
        const nuevoElemento = document.createElement('li');
        nuevoElemento.className = 'list-group-item';
        nuevoElemento.textContent = textoElementoValuejeje;

        //doble clic para eliminar elementos de la lista
        nuevoElemento.addEventListener('dblclick', function () {
            listaElementos.removeChild(nuevoElemento);
        }); 

        //Agregar el nuevo elemento a la lista
        listaElementos.appendChild(nuevoElemento);

        //Limpiar el campo de texto una vez pecionado el boton 
        formularioLista.reset();
    });

    formularioLista.addEventListener('reset', function (event) {
        //no se agrega event.preventDefault(); porque quiero que se ejecute tambien la accion por defecto asociada al evento reset 
        alert('se limpian campos')
        
    });

  
});
