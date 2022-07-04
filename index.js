function ocultarElemento(elemento){
    elemento.className = 'oculto';
}

function desocultarElemento(elemento){
    elemento.className = '';
}

function actualizarRondaDisplay(ronda){
    let rondaDisplay = document.querySelector('#ronda');
    rondaDisplay.textContent = ronda;
}

function actualizarTurnoDisplay(turno){
    let turnoDisplay = document.querySelector('#turno');
    turnoDisplay.textContent = turno;
}

function pintarColor($color){
    $color.style.opacity = 1;
    
    setTimeout(function() {
        $color.style.opacity = 0.3;
    }, 500);
}



function hacerTurnoMaquina(){
    ronda ++;
    actualizarRondaDisplay(ronda);
    actualizarTurnoDisplay('Turno de la máquina');
    obtenerColorRandom();
    pintarColoresMaquina();

    setTimeout(function(){
        hacerTurnoUsuario();
    },(coloresMaquina.length + 1) * 1000);

}

function obtenerColorRandom(){
    numeroRandom = Math.floor(Math.random() * 4);
    $colorRandom = $colores[numeroRandom];
    coloresMaquina.push($colorRandom);
}

function pintarColoresMaquina(){
    coloresMaquina.forEach(function(color, index){
        
        setTimeout(function(){
            pintarColor(color);
        }, (index + 1) * 1000);
    });
}



function hacerTurnoUsuario(){
actualizarTurnoDisplay('Te Toca');
elegirColorUsuario();
}

function elegirColorUsuario(){
    $colores.forEach(function($color){
        $color.onclick = elegirColor;
    });
}

function hacerTurnoUsuario(){
actualizarTurnoDisplay('Te Toca');
elegirColorUsuario();
}

function elegirColor(e){
    let indice = 0;
    let $colorUsuario = e.target;
    pintarColor($colorUsuario);

    if($colorUsuario.id !== coloresMaquina[coloresUsuario.length - 1].id){
        actualizarTurnoDisplay('Perdiste! toca empezar para jugar nuevamente');
        ronda = 0;
        coloresMaquina = [];
        coloresUsuario = [];
        desocultarElemento($botonEmpezar);
    }

    else if(coloresUsuario.length === coloresMaquina.length){
        coloresUsuario = [];

        setTimeout(function(){
            hacerTurnoMaquina();
        },1000)
    }
}


$colores = document.querySelectorAll('.color');
let ronda = 0;
let coloresUsuario = [];
let coloresMaquina = [];

$botonEmpezar = document.querySelector('#boton-empezar');

$botonEmpezar.onclick = function(){
    ocultarElemento($botonEmpezar);
    hacerTurnoMaquina();

    setTimeout(function(){
        hacerTurnoUsuario();
       },(coloresMaquina.length + 1) * 1000);
}
