// Variables globales
let listaAmigosSecretos = []; // Lista para almacenar los nombres de los amigos
let inputAmigo; // Variable para el input del nombre
let ulLista;    // Variable para la lista impresa
let resultadoSorteo; // Variable para mostrar el resultado del sorteo

// Función para asignar texto a un elemento del DOM
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    // Obtener el valor del input
    let nombreAmigo = document.getElementById('amigo').value.trim(); // Eliminar espacios en blanco al inicio y final

    // Validar que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre.");
        return; // Salir de la función si no hay nombre
    }

    // Validar que el nombre no contenga números
    if (/\d/.test(nombreAmigo)) {
        alert("Por favor, ingresa un nombre válido sin números.");
        return; // Salir de la función si el nombre contiene números
    }

    // Agregar el nombre al array
    listaAmigosSecretos.push(nombreAmigo);

    // Limpiar el input
    document.getElementById('amigo').value = "";

    // Mostrar la lista actualizada en pantalla
    mostrarLista();
}

function mostrarLista() {
    // Limpiar la lista antes de actualizarla
    ulLista.innerHTML = "";

    // Recorrer el array y agregar cada nombre a la lista
    for (let i = 0; i < listaAmigosSecretos.length; i++) {
        let amigo = listaAmigosSecretos[i];
        ulLista.innerHTML += `<li>${amigo}</li>`; // Usar innerHTML para agregar el <li>
    }
}

function sortearAmigo() {
    // Verificar que haya al menos un nombre en la lista
    if (listaAmigosSecretos.length === 0) {
        alert("Por favor, añade al menos un amigo antes de sortear.");
        return;
    }

    // Seleccionar un nombre al azar
    let indiceAleatorio = Math.floor(Math.random() * listaAmigosSecretos.length);
    let amigoSecreto = listaAmigosSecretos[indiceAleatorio];

    // Mostrar el resultado del sorteo usando asignarTextoElemento
    asignarTextoElemento('#resultado', `¡El amigo secreto es: ${amigoSecreto}!`);
}

// Inicializar las variables globales con sus enlaces al HTML
function inicializar() {
    inputAmigo = document.getElementById("amigo"); // Asignar el input
    ulLista = document.getElementById("listaAmigos"); // Asignar la lista <ul>
    resultadoSorteo = document.getElementById("resultado"); // Asignar el elemento para mostrar el resultado
    mostrarLista(); // Mostrar la lista inicial (vacía)
}

inicializar();