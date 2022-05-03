
// Selecionando os elementos que irão ser alterados
let digitalElement = document.querySelector('.digital'); //O  relógio digital
let sElement = document.querySelector('.p_s'); // Ponteiro de segundos
let mElement = document.querySelector('.p_m'); // Ponteiro de minutos
let hElement = document.querySelector('.p_h'); // Ponteiro de Horas


// Função de atualização do relógio
function updateClock() {
    let now = new Date(); //
    let hour = now.getHours(); //Pegar as horas
    let minute = now.getMinutes(); //Pegar os minutos
    let second = now.getSeconds(); // pegar os segundos


    /**/ */
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}


//de 1 em 1 segundo ele executa essa função
setInterval(updateClock, 1000);
updateClock();