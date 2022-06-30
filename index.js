function ocultarElemento(elemento){
    elemento.className = 'oculto';
}
function desocultarElemento(elemento){
    elemento.className = '';
}

function perder(){
    ronda = 0;
    patronColoresMaquina = '';
    desocultarElemento($botonEmpezar);
    actualizarTextoTurno('Has perdido, toca empezar para volver a jugar');
}

function iniciarJuego(){
    ocultarElemento($botonEmpezar);
    ronda++;
    coloresMaquina = [];
    coloresUsuario = [];
}

function hacerTurnoMaquina(){
    actualizarNumeroRonda(ronda);
    actualizarTextoTurno('Es el turno de la máquina');
    elegirColorRandom();
}

function actualizarNumeroRonda(ronda){
    let $displayRonda = document.querySelector('#ronda');
    $displayRonda.textContent = ronda;
}

function actualizarTextoTurno(textoTurno){
    let $displayTurno = document.querySelector('#turno');
    $displayTurno.textContent = textoTurno;
}

function elegirColorRandom(){
    let numeroAleatorio = Math.floor(Math.random() * $colores.length);
    coloresMaquina.push($colores[numeroAleatorio]);
}

function hacerTurnoUsuario(){
    actualizarTextoTurno('Te toca');
    $colores.forEach(function($color){
        $color.onclick = elegirColorUsuario;
    });

}

function elegirColorUsuario(evento){
    let $colorUsuario = evento.target;
    coloresUsuario.push($colorUsuario);
    
    if(coloresMaquina.length === coloresUsuario.length){
        compararColores();
    }
}

function compararColores(){
    let patronColoresUsuario = '';

    coloresMaquina.forEach(function(color){
        patronColoresMaquina += color.id;
    });

    coloresUsuario.forEach(function(color){
        patronColoresUsuario += color.id;
    });

    if(patronColoresMaquina === patronColoresUsuario){
        ronda++;
        coloresUsuario = [];
        patronColoresUsuario = '';
        patronColoresMaquina = '';
        hacerTurnoMaquina();
        hacerTurnoUsuario();
    }else{
        perder();
    }
}

let coloresUsuario = [];
let coloresMaquina = [];
let patronColoresMaquina = '';
let ronda = 0;

let $colores = document.querySelectorAll('.color');
let $botonEmpezar = document.querySelector('#boton-empezar');

$botonEmpezar.onclick = function(){
    iniciarJuego();
    hacerTurnoMaquina();
    hacerTurnoUsuario();
}
