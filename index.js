function ocultarElemento(elemento){
    elemento.className = 'oculto';
}
function desocultarElemento(elemento){
    elemento.className = '';
}

function perder(){
    ronda = 0;
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
    //PINTAR COLORES DE TODO EL  ARRAY
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
    actualizarTextoTurno('Te toca');//DEBERÍA HABER UN TIMER!!!
    $colores.forEach(function($color){
        $color.onclick = elegirColorUsuario;
    });
}

function elegirColorUsuario(evento){
    let $colorUsuario = evento.target;
    coloresUsuario.push($colorUsuario);
}


let coloresUsuario = [];
let coloresMaquina = [];
let ronda = 0;

let $colores = document.querySelectorAll('.color');
let $botonEmpezar = document.querySelector('#boton-empezar');

$botonEmpezar.onclick = function(){
    iniciarJuego();
    hacerTurnoMaquina();
    hacerTurnoUsuario(); 
    compararColores();

}

function compararColores(){
    let patronColoresMaquina = '';
    let patronColoresUsuario = '';

    coloresMaquina.forEach(function(color){
        patronColoresMaquina += color.id;
    });

    coloresUsuario.forEach(function(color){
        patronColoresUsuario += color.id;
    });

    if(patronColoresMaquina === patronColoresUsuario){
        ronda++;
        hacerTurnoMaquina();
    }else{
        perder();
    }
}


