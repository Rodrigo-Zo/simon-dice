function ocultarElemento(elemento){
    elemento.className = 'oculto';
}
function desocultarElemento(elemento){
    elemento.className = '';
}

function comenzarJuego(){
    ocultarElemento($botonEmpezar);   
}

function obtenerColorRandom(){
    $colorRandom = $colores[Math.floor(Math.random() * $colores.length)];
    coloresMaquina.push($colorRandom);
}

function pintarColoresMaquina(){
    coloresMaquina.forEach(function($color, indice){
        $color.style.opacity = 1;
        
        setTimeout(function(){
            $color.style.opacity = 0.3;
        },(indice + 1) * 1000);

    });
}

function hacerTurnoMaquina(){
    ronda++;
    actualizarRonda(ronda);
    actualizarTurno('Es el turno de la maquina');
    obtenerColorRandom();
    
    setTimeout(function(){
        pintarColoresMaquina();
    }, 1000);

}

function hacerTurnoJugador(){
    setTimeout(function(){
        actualizarTurno('Te toca');
    },(coloresMaquina.length + 1) * 1250);

    elegirColorUsuario();

}

function elegirColorUsuario(){
    $colores.forEach(function($color){
        $color.onclick = elegirColor;

    });
}

function elegirColor(e){
    let $colorElegido = e.target;
    coloresUsuario.push($colorElegido);
    pintarColor($colorElegido)
}

function pintarColor($color){
    $color.style.opacity = 1;
    setTimeout(function(){;
        $color.style.opacity = 0.3;
    }, 1000);
}


let ronda = 0;
let coloresMaquina = [];
let coloresUsuario = [];
$colores = document.querySelectorAll('.color');
$botonEmpezar = document.querySelector('#boton-empezar');

$botonEmpezar.onclick = function(){
    comenzarJuego();
    hacerTurnoMaquina();
    hacerTurnoJugador();
}

