// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigoSecreto = 0;
let intentos = 0;
let listaAmigosSorteados = [];
let adicionMaxima = 6;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del input
    let nombreAmigo = document.getElementById('nombreAmigo').value.trim();

    // Verificar que el nombre no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Crear un nuevo elemento para la lista
    let amigoSecreto = document.createElement('div');
    amigoSecreto.className = 'amigoSecreto';
    amigoSecreto.textContent = nombreAmigo;

    // Agregar el nuevo amigo a la lista
    document.getElementById('listaAmigosSecretos').appendChild(amigoSecreto);

    // Limpiar la caja de texto
    document.getElementById('nombreAmigo').value = '';
}

function sortearAmigoSecreto() {
    let amigoGanador =  Math.floor(Math.random()*adicionMaxima)+1;

    console.log(amigoGanador);
    console.log(listaAmigosSorteados);
    //Si ya sorteamos todos los amigos
    if (listaAmigosSorteados.length == adicionMaxima) {
        asignarTextoElemento('p','Ya se sortearon todos los amigos posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(amigoGanador)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(amigoGanador);
            return amigoGanador;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${adicionMaxima}`);
    amigoGanador = generarAmigoSecreto();
    intentos = 1;
    console.log(amigoGanador);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();