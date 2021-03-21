window.onload = pageload;

var x = window.matchMedia("(max-width: 1600px)");
var x2 = window.matchMedia("(max-width: 800px)");
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
}

function resizewindowres(x){
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
}
function resizewindowres2(x2){
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
}

function work12() {
    document.getElementById("content").innerHTML='<object type="text/html" data="work1/index.html" style="width: ' + defaultresX + 'px; height: ' + defaultresY + 'px;"></object>';
    currentWork = 1;
}
function work34() {
    document.getElementById("content").innerHTML='<object type="text/html" data="work4/chickenHw_2.html" style="width: ' + defaultresX + 'px; height: ' + defaultresY + 'px;"></object>';
    currentWork = 2;
}
function work5() {
    document.getElementById("content").innerHTML='<object type="text/html" data="work5/chat.html" style="width: ' + defaultresX + 'px; height: ' + defaultresY + 'px;"></object>';
    currentWork = 3;
}
function work6() {
    document.getElementById("content").innerHTML='<object type="text/html" data="work6/index.html" style="width: ' + defaultresX + 'px; height: ' + defaultresY + 'px;"></object>';
    currentWork = 4;
}
function work7() {
    document.getElementById("content").innerHTML='<object type="text/html" data="work7/index.html" style="width: ' + defaultresX + 'px; height: ' + defaultresY + 'px;"></object>';
    currentWork = 5;
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
        work12();
    }
    else if(currentWork == 2){
        work34();
    }
    else if(currentWork == 3){
        work5();
    }
    else if(currentWork == 4){
        work6();
    }
    else if(currentWork == 5){
        work7();
    }
}