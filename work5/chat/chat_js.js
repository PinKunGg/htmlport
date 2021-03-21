var wish = 0;

var x = window.matchMedia("(max-width: 1500px)");
var x2 = window.matchMedia("(max-width: 600px)");
resizewindowres(x);
x.addListener(resizewindowres);
resizewindowres2(x2);
x2.addListener(resizewindowres2);

function resizewindowres(x)
{
    console.log("X = " + x);
    if(x.matches){
        document.getElementById("grid0").innerHTML = "";
        document.getElementById("grid2").innerHTML = "";
        randpos = 500 - 25;
    }
    else{
        document.getElementById("grid0").innerHTML = '<img src="chat/pic/ganyu.png" alt="">';
        document.getElementById("grid2").innerHTML = '<img src="chat/pic/keqing.png" alt="">';
        randpos = 300 - 25;
    }
}
function resizewindowres2(x)
{
    console.log("X2 = " + x);
    if(x.matches){
        document.getElementById("grid0").innerHTML = "";
        document.getElementById("grid2").innerHTML = "";
    }
}

function Post()
{
    var input = document.getElementById("ChatInput").value;
    var topic = document.getElementById("Chat1");
    var Comment1 = document.getElementById("Chat2");
    var Comment2 = document.getElementById("Chat3");


    if(wish == 0 && input != "")
    {
        topic.innerHTML = "Wish 1 : "+input;
        document.getElementById("ChatInput").value = "";
        wish++;
    }
    else if(wish == 1 && input != "")
    {
        Comment1.innerHTML = "Wish 2 : "+input;
        document.getElementById("ChatInput").value = "";
        wish++;
    }
    else if(wish == 2 && input != "")
    {
        Comment2.innerHTML = "Wish 3 : "+input;
        document.getElementById("ChatInput").value = "";
        wish++;
    }
    else if(input != "")
    {
        alert("Please click 'Clear' button and try again.");
    }
}

function Clear()
{
    document.getElementById("ChatInput").value = "";
    document.getElementById("Chat1").innerHTML = "";
    document.getElementById("Chat2").innerHTML = "";
    document.getElementById("Chat3").innerHTML = "";
    wish = 0;
}