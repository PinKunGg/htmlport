window.onload = GameStartClick;

var timedelay = null;
var isStartDelay = null;

var timelimite = null;
var isStartCountTime = null;

var isGameStart = false;
var isSquareCreate = false;

var numofbox = 0;
var boxcolor = null;
var squarebox = null;

var randpos = 0;

var x = window.matchMedia("(max-width: 1500px)");
var x2 = window.matchMedia("(max-width: 600px)");
resizewindowres(x);
x.addListener(resizewindowres);
resizewindowres2(x2);
x2.addListener(resizewindowres2);

function resizewindowres(x)
{
    if(x.matches){
        document.getElementById("grid0").innerHTML = "";
        document.getElementById("grid2").innerHTML = "";
        randpos = 500 - 25;
    }
    else{
        document.getElementById("grid0").innerHTML = '<img src="hot.png" alt="">';
        document.getElementById("grid2").innerHTML = '<img src="hov.png" alt="">';
        randpos = 300 - 25;
    }
}
function resizewindowres2(x)
{
    if(x.matches){
        randpos = 300 - 25;
    }
    else{
        randpos = 500 - 25;
    }
}

function GameStartClick()
{
    document.getElementById("start").onclick = startgame;
    var debug = document.getElementById("game-layer");
    debug.onmousemove = debug.onmousedown = mouseDebug;
}

function startgame()
{
    if(!isGameStart){
        if(isStartDelay == null){
            timedelay = 3;
            isStartDelay = setInterval(startdelay,1000);
        }
        else{
            clearInterval(isStartDelay);
            isStartDelay = null;
            timedelay = null;
            document.getElementById("timer").innerHTML = "Timer: 0";
        }
    }
}
function startdelay()
{
    if(timedelay >= 0){
        document.getElementById("timer").innerHTML = "Game will start in: " + timedelay;
        timedelay--;

        if(timedelay == -1){
            isGameStart = true;
            isSquareCreate = false;
            clearInterval(isStartDelay);
            isStartDelay = null;
            timedelay = null;
            
            timelimite = 30;
            isStartCountTime = setInterval(timeCount,1000);
        }
    }
    else{
        console.log("stardelay Nani???");

        clearInterval(isStartDelay);

        isGameStart = true;
        isSquareCreate = false;
        isStartDelay = null;
        timedelay = null;
    }
}
function timeCount()
{
    if(!isSquareCreate){
        createSquare();
        isSquareCreate = true;
    }

    if(timelimite >= 0){
        document.getElementById("timer").innerHTML = "Timer: " + timelimite;
        timelimite--;

        if(timelimite == -1){
            alert("Time Out!");
            document.getElementById("timer").innerHTML = "Timer: 0";
            clearInterval(isStartCountTime);
            isStartCountTime == null;
            timelimite = null;
            isGameStart = false;
            isSquareCreate = false;
            Timeoutcheck();
        }
    }
    else{
        console.log("timeCount Nani???");

        document.getElementById("timer").innerHTML = "Timer: 0";
        clearInterval(isStartCountTime);
        isStartCountTime == null;
        timelimite = null;
        isGameStart = false;
        isSquareCreate = false;
    }
}

function createSquare()
{
    console.log(randpos);
    numofbox = document.getElementById("numberbox").value;
    boxcolor = document.getElementById("boxcolor").value;
    console.log(numofbox);
    console.log(boxcolor);

    if(numofbox != 0){
        for(var i = 0; i < numofbox; i++){
            var bigboysquare = document.createElement("div");
            bigboysquare.className = boxcolor;
            bigboysquare.id = "square" + i;
            document.getElementById("game-layer").appendChild(bigboysquare);

            bigboysquare.style.left = Math.random()*(randpos)+"px";
		    bigboysquare.style.top = Math.random()*(randpos)+"px";

            whenBoxClick(bigboysquare);
        }
    }
}

function whenBoxClick(bigbox)
{
    bigbox.onclick = function(){
        console.log("You click" + bigbox.id);
        document.getElementById(bigbox.id).remove();
        checkIfwinorlose();
    }
}

function checkIfwinorlose()
{
    var allbox = document.getElementById("game-layer");

    if(allbox.childElementCount <= 0){
        alert("You Win");
        clearScreen();
    }
}

function Timeoutcheck()
{
    var allbox = document.getElementById("game-layer");

    if(allbox.childElementCount > 0){
        alert("You Lose");
    }
    else{
        alert("You Win");
    }
    clearScreen();
}

function clearScreen()
{
    var allbox = document.getElementById("game-layer");
    console.log(allbox.childElementCount);

    while(allbox.firstChild){
        allbox.removeChild(allbox.lastChild);
    }

    document.getElementById("timer").innerHTML = "Timer: 0";
    clearInterval(isStartCountTime);
    isStartCountTime == null;
    timelimite = null;
    isGameStart = false;
    isSquareCreate = false;
}

function mouseDebug(event)
{
    document.getElementById("debug").innerHTML = "screen : " + event.screenX + " , " + event.screenY + " / client : " + event.clientX + " , " + event.clientY + " / button : " + event.button;
}

function nutty()
{
    var nut = document.createElement("div");
    var imgnut = document.createElement("img");
    var txtnut = document.createElement("p");

    imgnut.src = "Nutty.png";
    imgnut.className = "centerNutty";

    txtnut.className = "WTF";
    txtnut.innerHTML = "มองเข้ามาในตาของฉันสิ แล้วนายจะเห็นความจริง";

    nut.appendChild(imgnut);
    nut.appendChild(txtnut);

    document.getElementById("main").innerHTML = nut.innerHTML;
}