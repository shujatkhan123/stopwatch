
var min = 0;
var sec = 0;
var msec = 0;
var minHead = document.getElementById("min1");
var secHead = document.getElementById("sec1");
var msecHead = document.getElementById("msec1");
var interval;


function watch(){

    msec++
    msecHead.innerHTML = msec;
    if(msec >= 60){

        sec++
        secHead.innerHTML = sec;
        msec = 0;
    }
    else if(sec >= 60){

        min++
        minHead.innerHTML = min;
        sec = 0;
    }

}


function start(){
   
interval = setInterval(watch,1000)

}



function stop(){

    clearInterval(interval);
}




function reset(){

    min = 0;
    sec = 0;
    msec = 0;
    minHead.innerHTML = min;
    secHead.innerHTML = sec;
    msecHead.innerHTML = msec;
    stop()
}