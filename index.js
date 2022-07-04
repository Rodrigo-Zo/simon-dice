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
    }, 1000);
}

function obtenerColorRandom(){
    numeroRandom = Math.floor(Math.random() * 4);
    $colorRandom = $colores[numeroRandom];
    coloresMaquina.push($colorRandom);
}

function pintarColoresMaquina(){
    coloresMaquina.forEach(function($color, index){
        let retraso = (index + 1) * 750;
        
        setTimeout(function(){
            pintarColor($color);
        }, retraso);

    });
}

function hacerTurnoMaquina(){
    ronda ++;
    actualizarRondaDisplay(ronda);
    actualizarTurnoDisplay('Turno de la máquina');
    obtenerColorRandom();
    pintarColoresMaquina();
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

    if($colorUsuario.id !== coloresMaquina[indice].id){
        console.log('perdiste');
    }

    if($colorUsuario.id === coloresMaquina[indice].id){
        indice ++;
        coloresUsuario.push($colorUsuario);
    }

    if(coloresUsuario.length === coloresMaquina.length){
        coloresUsuario = [];
        indice = 0;
        hacerTurnoMaquina();
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
