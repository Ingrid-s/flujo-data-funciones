+function () {
    // Traer los elementos que se necesitan del HTML
    var agregar = document.getElementById("agregar");
    var mostrar = document.getElementById("mostrar");
    var buscar = document.getElementById("buscar");
    var tecnico = document.getElementById("top-tecnico");
    var hse = document.getElementById("top-hse");


    // Evento Click - Agregar
    var eventoAgregar = function (e) {
        e.preventDefault();
        var estudiante = agregarEstudiante();
        resultado.innerHTML = mostrar(estudiante);
    };

    var eventoMostrar = function (e) {
        e.preventDefault();
        var estudiantes = obtenerListaEstudiantes();
        resultado.innerHTML = mostrarLista(estudiantes);
    };

    var eventoBuscar = function (e) {
        e.preventDefault();
        var estudiantes = obtenerListaEstudiantes();
        var nombreEstudiante = prompt("¿Qué nombre desea buscar?");
        var estudianteBuscado = buscar(nombreEstudiante, estudiantes);
        resultado.innerHTML = mostrarLista(estudianteBuscado);
    };

    var eventoTopTecnico = function (e) {
        e.preventDefault();
        var estudiantes = obtenerListaEstudiantes();
        var estudiantesTopTecnico = topTecnico(estudiantes);
        resultado.innerHTML = mostrarLista(estudiantesTopTecnico);
    };

    var eventoTopHSE = function (e) {
        e.preventDefault();
        var estudiantes = obtenerListaEstudiantes();
        var estudiantesTopHSE = topHSE(estudiantes);
        resultado.innerHTML = mostrarLista(estudiantesTopHSE);
    };

    // Agregar eventos que correspondan
    agregar.addEventListener("click", eventoAgregar);
    mostrar.addEventListener("click", eventoMostrar);
    buscar.addEventListener("click", eventoBuscar);
    var tecnico = document.getElementById("top-tecnico");
    var hse = document.getElementById("top-hse");

}();
