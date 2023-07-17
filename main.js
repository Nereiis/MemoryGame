let tarjet = 0;
let tarjet1 = null;
let tarjet2 = null;
let firstResult = null;
let secondResult = null;
let moves = 0;
let success = 0;
let timer = false;
let time = 30;
let timeOn = 30;
let timeOff = null;


let showMoves = document.getElementById('moves');
let showSuccess = document.getElementById('success');
let showTime = document.getElementById('timer');

let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

numbers = numbers.sort(() => {return Math.random() - 0.5});

console.log(numbers);

function setTime(){
    timeOff = setInterval(() => {
        time--;
        showTime.innerHTML = `Tiempo ${time} segundos`;

        if(time == 0){
            clearInterval(timeOff);
            blockTarjets();
        }
    }, 1000)
}

function blockTarjets(){
    for(let i = 0; i <= 15; i++) {
        let blockTarjet = document.getElementById(i);
        blockTarjet.innerHTML = numbers[i];
        blockTarjet.disabled = true;
    }
}

function show(id){

    if(timer == false) {
        setTime();
        timer = true;
    }

    tarjet++;
    console.log(tarjet);

    if(tarjet == 1){
        tarjet1 = document.getElementById(id);
        firstResult = numbers[id];
        tarjet1.innerHTML = numbers[id];

        tarjet1.disabled = true;
    } else if(tarjet == 2) {
        tarjet2 = document.getElementById(id);
        secondResult = numbers[id];
        tarjet2.innerHTML = secondResult;

        tarjet2.disabled = true;

        moves++;
        showMoves.innerHTML = `Movimientos: ${moves}`;

        if(firstResult == secondResult){
            tarjet = 0;

            success++;
            showSuccess.innerHTML = `Aciertos: ${success}`;

            if(success == 8){

                clearInterval(timer);

                showMoves.innerHTML = `Aciertos: ${success}  👀 `;
                showMoves.innerHTML = `Movimientos: ${moves}  🥸 `;
                showTime.innerHTML = `Genial  🎉  has tardado ${timeOn - time} segundos`;
            }
        } else {
            setTimeout(() => {
                tarjet1.innerHTML = ' ';
                tarjet2.innerHTML = ' ';
                
                tarjet1.disabled = false;
                tarjet2.disabled = false;

                tarjet = 0;
            }, 800);
        }
    }
}