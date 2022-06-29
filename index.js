function ocultarElemento(elemento){
    elemento.className = 'oculto';
}

function desocultarElemento(elemento){
    elemento.className = '';
}

function actualizarTextoRonda(numeroDeRonda){
    $rondaDisplay = document.querySelector('#ronda');
    $rondaDisplay.textContent = numeroDeRonda;
}

function actualizarTextoTurno(turno){
    $turnoDisplay = document.querySelector('#turno');
    $turnoDisplay.textContent = turno;
}

function elegirColorRandom(){
    let $colores = document.querySelectorAll('.color');
    let numeroRandom = Math.floor(Math.random() * 4);
    coloresMaquina.push($colores[numeroRandom]);
}

function turnoMaquina(){
    actualizarTextoRonda(ronda);
    actualizarTextoTurno('Es el turno de la maquina');
    elegirColorRandom();
}




$botonEmpezar = document.querySelector('button[type=button]');
let ronda = 1;
let coloresMaquina = [];
let coloresUsuario = [];


$botonEmpezar.onclick = function(){
    ocultarElemento($botonEmpezar);
    turnoMaquina();
