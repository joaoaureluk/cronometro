const start = document.querySelector("#iniciar");
const pause = document.querySelector("#pause");
const stopp = document.querySelector("#stop");
var hr=0
var sec=0
var min=0
var timeconuter






start.addEventListener("click", start1);
pause.addEventListener("click", pause1);
stopp.addEventListener("click", stopp1);

addEventListener("keypress", function(e){

    if(e.key === ''){
    start.click()
    }

})



function start1 (){
   time()
    timeconuter =  setInterval(time,1000)

    start.disabled = true;
}




function pause1(){
clearInterval(timeconuter)


if (start.disabled = true) {
   start.disabled = false;
}





}
function stopp1(){
clearInterval(timeconuter)
sec=0
min=0
hr=0


if (start.disabled = true) {
    start.disabled = false;
}




document.getElementById("time").innerText=`00:00:00`
}

function twoD(digit){

    if(digit<10){
        return('0'+digit)
    }
    else{
        return(digit)
    }
}

function time(){
sec++
if(sec==60){
    min++
    sec=0
}
else if(min==60){
    hr++
    min=0
    sec=0
}

document.getElementById("time").innerText=`${twoD(hr)}:${twoD(min)}:${twoD(sec)}`

}
