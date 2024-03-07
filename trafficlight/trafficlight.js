let stopBtn = document.getElementById("stopBtn");
let readyBtn = document.getElementById("readyBtn");
let goBtn = document.getElementById("goBtn");

let stopLight = document.getElementById("stopLight");
let readyLight = document.getElementById("readyLight");
let goLight = document.getElementById("goLight");

function onStopLight (){
    stopBtn.style.backgroundColor="#cf1124";
    stopLight.style.backgroundColor="#cf1124";

    readyBtn.style.backgroundColor="#1f1d41";
    readyLight.style.backgroundColor="#4b5069";

    goBtn.style.backgroundColor="#1f1d41";
    goLight.style.backgroundColor="#4b5069";
}

function onReadyLight (){
    readyBtn.style.backgroundColor="#f7c948";
    readyLight.style.backgroundColor="#f7c948";

    stopBtn.style.backgroundColor="#1f1d41";
    stopLight.style.backgroundColor="#4b5069";

    goBtn.style.backgroundColor="#1f1d41";
    goLight.style.backgroundColor="#4b5069";
}

function onGoLight (){
    goBtn.style.backgroundColor="#199473";
    goLight.style.backgroundColor="#199473";

    readyBtn.style.backgroundColor="#1f1d41";
    readyLight.style.backgroundColor="#4b5069";

    stopBtn.style.backgroundColor="#1f1d41";
    stopLight.style.backgroundColor="#4b5069";
}