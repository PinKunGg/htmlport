window.onload = pageload;

var x = window.matchMedia("(max-width: 1600px)");
var x2 = window.matchMedia("(max-width: 800px)");

var NavBar = document.getElementById("header");
var VerNavBar = document.getElementById("dropdownheader");

resizewindowres(x);
x.addListener(resizewindowres);
resizewindowres2(x2);
x2.addListener(resizewindowres2);

var defaultresX = 1600;
var defaultresY = 900;

var currentWork = 0;

function pageload(){
    work7();
    resizewindowres(x);
    NavBar.style.display = "none";
    VerNavBar.style.display = "block";
}

function resizewindowres(x){
    console.log(this.x);
    if(x.matches){
        defaultresX = 800;
        defaultresY = 450;
        reloadcurrentWork();
    }
    else if(!x.matches){
        defaultresX = 1600;
        defaultresY = 900;
        reloadcurrentWork();
    }
    else if(x2.matches && !x.matches){
        resizewindowres2(x2);
    }
    else{
        defaultresX = 1600;
        defaultresY = 900;
        reloadcurrentWork();
    }
}
function resizewindowres2(x2){
    console.log(this.x2);
    if(x2.matches){
        defaultresX = 400;
        defaultresY = 225;
        reloadcurrentWork();
    }
    else if(!x2.matches){
        defaultresX = 800;
        defaultresY = 450;
        reloadcurrentWork();
    }
    else if(!x2.matches && x.matches){
        resizewindowres(x);
    }
    else{
        defaultresX = 1600;
        defaultresY = 900;
        reloadcurrentWork();
    }
}

function work34() {
    document.getElementById("contentport").innerHTML='<object type="text/html" data="work4/chickenHw_2.html" style="width: ' + defaultresX + 'px; height: ' + defaultresY + 'px;"></object>';
    document.getElementById("work34").className = "active";
    document.getElementById("work5").className = "";
    document.getElementById("work6").className = "";
    document.getElementById("work7").className = "";
    currentWork = 1;
}
function work5() {
    document.getElementById("contentport").innerHTML='<object type="text/html" data="work5/chat.html" style="width: ' + defaultresX + 'px; height: ' + defaultresY + 'px;"></object>';
    document.getElementById("work34").className = "";
    document.getElementById("work5").className = "active";
    document.getElementById("work6").className = "";
    document.getElementById("work7").className = "";
    currentWork = 2;
}
function work6() {
    document.getElementById("contentport").innerHTML='<object type="text/html" data="work6/index.html" style="width: ' + defaultresX + 'px; height: ' + defaultresY + 'px;"></object>';
    document.getElementById("work34").className = "";
    document.getElementById("work5").className = "";
    document.getElementById("work6").className = "active";
    document.getElementById("work7").className = "";
    currentWork = 3;
}
function work7() {
    document.getElementById("contentport").innerHTML='<object type="text/html" data="work7/index.html" style="width: ' + defaultresX + 'px; height: ' + defaultresY + 'px;"></object>';
    document.getElementById("work34").className = "";
    document.getElementById("work5").className = "";
    document.getElementById("work6").className = "";
    document.getElementById("work7").className = "active";
    currentWork = 4;
}

//"Load HTML page in div" ref https://stackoverflow.com/questions/17636528/how-do-i-load-an-html-page-in-a-div-using-javascript

function reschange1(){
    defaultresX = 1600;
    defaultresY = 900;
    reloadcurrentWork();
}
function reschange2(){
    defaultresX = 768;
    defaultresY = 1024;
    reloadcurrentWork();
}
function reschange3(){
    defaultresX = 375;
    defaultresY = 812;
    reloadcurrentWork();
}

function reloadcurrentWork(){

    if(currentWork == 1){
        work34();
    }
    else if(currentWork == 2){
        work5();
    }
    else if(currentWork == 3){
        work6();
    }
    else if(currentWork == 4){
        work7();
    }
}