/*
xAl hacer click en empezar:
xEn 1 segundo se ocultará el boton empezar.
xEn 1 segundos comenzará el turnoMaquina.

xturnoMaquina:
xEn 1 segundo se actualizará nº ronda.
xEn 1 segundo se actualizará el turno a "Turno Maquina".
xSe obtendrá un colorRandom
xcolorRandom se agregara a coloresMaquina[];
xSe pintaran los coloresMaquina en orden: Nº1: El 1º seg, Nº2: El 2º segundo...

turnoUsuario:
xEn 1 segundo se actualizará el turno a "Te toca".
xusuario elegira un colorUsuario
xcolorUsuario se pintará
xcolorUsuario se agregara a coloresUsuario[];
forEach coloresMaquina (color, indice) se verificará si color es igual a coloresUsuario[indice].
IF es diferente, perder.
if es igual: ronda++ , coloresUsuario = [], 
*/
function actualizarRonda(ronda){
    document.querySelector('#ronda').textContent = ronda;
}
function actualizarTurno(turno){
    document.querySelector('#turno').textContent = turno;
}

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




/*EJEMPLOS DE setTimeout:
setTimeout(nombreDeFuncion, tiempoDeDelay); //ATENTO, ES CON FUNCION SIN ()!!!
setTimeout(function(){nombreDeFuncion();}, tiempoDeDelay);
setTimeout(function() {Accionaejecutar;}, tiempoDeDelay);
*/
