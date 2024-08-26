
let [second, minutes, hours] = [0,0,0];
let  displayTime = document.getElementById("displayTime");
let watchstop = document.querySelector(".stop");
let watchstart = document.querySelector(".start");
let watchreset = document.querySelector('.reset');
let Timer  = null;

watchstop.addEventListener('click', watchStop);
watchstart.addEventListener('click', watchStart);
watchreset.addEventListener('click', watchReset);


function stopWatch(){
    second++;
    if(second == 60){
        second = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes :minutes;
    let s = second < 10 ? "0" + second : second;


    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart(){
    if(Timer !== null){
        clearInterval(Timer);
    }
    Timer = setInterval(stopWatch, 1000);
}

function watchStop(){
    clearInterval(Timer);
}

function watchReset(){
    clearInterval(Timer);
    [second, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}

