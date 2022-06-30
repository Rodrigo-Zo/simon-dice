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
En 1 segundo se actualizará el turno a "Te toca".
usuario elegira un colorRandomUsuario
colorRandomUsuario se pintará
colorRandomUsuario se agregara a coloresUsuario[];
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
    hacerTurnoMaquina(); //debería estar fuera de comenzarjuego, no cuenta una historia.
}

function obtenerColorRandom(){
    $colores = document.querySelectorAll('.color');
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





let ronda = 0;
let coloresMaquina = [];
let coloresUsuario = [];
$botonEmpezar = document.querySelector('#boton-empezar');

$botonEmpezar.onclick = function(){
    comenzarJuego();
}






/*EJEMPLOS DE setTimeout:
setTimeout(nombreDeFuncion, tiempoDeDelay); //ATENTO, ES CON FUNCION SIN ()!!!
setTimeout(function(){nombreDeFuncion();}, tiempoDeDelay);
setTimeout(function() {Accionaejecutar;}, tiempoDeDelay);
*/