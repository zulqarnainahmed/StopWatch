var hr = 0
var min = 0;
var sec = 0;
var msec = 0;
var hrHeading = document.getElementById("hr")
var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")
var interval;

function timer()
{
    msec++
    msecHeading.innerHTML = msec
    if(msec>=100)
    {
        sec++
        secHeading.innerHTML = sec
        msec = 0;
    }
    else if(sec >=5){
        min++
        minHeading.innerHTML = min
        sec = 0;
    } else if(min >=5){
        hr++
        hrHeading.innerHTML = hr
        min = 0;
    }
}
function start(){
    interval = setInterval(timer,10)
}
function pause(){
    clearInterval(interval)
}
function reset(){
    hr = 0
    min = 0
    sec = 0
    msec = 0
    hrHeading.innerHTML = hr
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
    pause()
}
