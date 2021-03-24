window.onload = pageload;

var NavBar = document.getElementById("header");
var VerNavBar = document.getElementById("dropdownheader");

var currentWork = 0;

function pageload() {
    loadfooter();
    unityproject();
    NavBar.style.display = "none";
    VerNavBar.style.display = "block";
}

function unityproject() {
    document.getElementById("projectshow").innerHTML = '<h3 class="projecttitle">Unity Projects</h3><br><b class="headerproject">GoGo Balls</b><br><img src="otherproject/unity/GoGo_Ball_1.jpg" alt="" class="projectimg imgcenter">';
    document.getElementById("projectshow").innerHTML += '<p class="projectdescription">"GoGo Ball is a 2D endless game in which the player takes the ball. Which must survive as long as possible "</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">GoGo Ball is a mobile game that I will release on Google PlayStore, it is a 2D endless game where the player will be in one room, </p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">then there will be enemies coming out and the player will have to survive as long as possible.</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">In the game when the players accumulate up to a certain amount of money Player was able to use those money to purchase an</p></div>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">upgrade items to make their own characters better.</p>'

    document.getElementById("projectshow").innerHTML += '<br><hr><br><b class="headerproject">Dimension Break</b><br><img src="otherproject/unity/DimensionBreak_1.png" alt="" class="projectimg imgcenter">'
    document.getElementById("projectshow").innerHTML += '<p class="projectdescription">"Dimension Break is a 2D Action Side Scrolling game that allows players to fight monsters to restore human habitation"</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">Dimension Break is a game that I have been working on during the 3th year, it a 2D Action Side Scrolling game inspired by Starbound.</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">In this game, the concept is likly a Monster Hunter game. It a grinding game where players will have to get resources to improve your</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">character and bring resources to develop your own camp.</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">GitHub: <a href="https://github.com/PinKunGg/DimensionBreak-E0V" target="_blank">https://github.com/PinKunGg/DimensionBreak-E0V</a></p>'

    document.getElementById("projectshow").innerHTML += '<br><hr><br><b class="headerproject">GOA-T (NSC 2020)</b><br><img src="otherproject/unity/GOA-T_1.jpg" alt="" class="projectimg imgcenter">'
    document.getElementById("projectshow").innerHTML += '<p class="projectdescription">"GOA-T is a 3D Tower defense + card game to add a unique twist to the players"</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">GOA-T is a game that 3 of us have made in the 3rd year for NSC 2020.It will be 3D Tower defense + card game genre to add</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">variety to the game and players.</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">In general, tower defense games, players will be able to know exactly how many enemies they will have, what are the enemies type, </p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">and players can be able to form teams to play immediately, but I would like to add a new twist by incorporating the card game</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">genre. Usually in that card game, the player will never be able to know what kind of card the other player has. Players will have to</p>'
    document.getElementById("projectshow").innerHTML += '<p class="solve problems on their own, and this is our concept of GOA-T.</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">GitHub: <a href="https://github.com/PinKunGg/GOA-T" target="_blank">https://github.com/PinKunGg/GOA-T</a></p>'

    document.getElementById("projectshow").innerHTML += '<br><hr><br><b class="headerproject">Battle Suite</b><br><img src="otherproject/unity/BattleSuite_1.jpg" alt="" class="projectimg imgcenter">'
    document.getElementById("projectshow").innerHTML += '<p class="projectdescription">"Battle Suite is a 3D Thirdperson shooter that allows players to drive robots to protect cities"</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">Battle Suite is a game that I have been working on in the 2nd year. It is a 3D Thirdperson shooter inspired by various</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">robot games. The most robot game gameplay that I has play it only has two type gameplay not flying norwalk. So I</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">wanted to try and create a robot game that allows players to freely choose how to operate that robot.</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">GitHub: <a href="https://github.com/PinKunGg/BattleSuite" target="_blank">https://github.com/PinKunGg/BattleSuite</a></p>'

    document.getElementById("projectshow").innerHTML += '<br><hr><br><b class="headerproject">I-Magin</b><br><img src="otherproject/unity/I-Magin_1.jpg" alt="" class="projectimg imgcenter">'
    document.getElementById("projectshow").innerHTML += '<p class="projectdescription">"I-Magin Project is a 3D Action platformer that will allow players to explore different stages of the game"</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">I-Magin Project is a game that I have been working on over the 1st year, a 3D action platformer game that has an</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">inspired largely from a game call "Typoman".</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">GitHub: <a href="https://github.com/PinKunGg/I_Magin" target="_blank">https://github.com/PinKunGg/I_Magin</a></p><br><hr>'

    document.getElementById("unityproject").className = "active";
    document.getElementById("asepriteproject").className = "";
    document.getElementById("blenderproject").className = "";
    currentWork = 1;
}

function asepriteproject() {
    document.getElementById("projectshow").innerHTML = '<h3 class="projecttitle">Aseprite Projects</h3><br><b class="headerproject">Dimension Break character design</b><br><img src="otherproject/unity/Aseprite_1.png" alt="" class="projectimg imgcenter">';
    document.getElementById("projectshow").innerHTML += '<p class="projectdescription">"Character design for "Dimension Break" game."</p>'
    document.getElementById("projectshow").innerHTML += '<p class="centertxt">Dimension Break is a 2D Action Side Scrolling game that allows players to fight monsters to restore human habitation.</p><br><hr>'

    document.getElementById("unityproject").className = "";
    document.getElementById("asepriteproject").className = "active";
    document.getElementById("blenderproject").className = "";
    currentWork = 2;
}

function blenderproject() {
    document.getElementById("projectshow").innerHTML = '<h3 class="projecttitle">Blender Projects</h3><br><b class="headerproject">Battle Suite model</b><br><img src="otherproject/unity/Blender_1.jpg" alt="" class="projectimg imgcenter">';
    document.getElementById("projectshow").innerHTML += '<p class="projectdescription">"Model that create for "Battle Suite" game."</p>'
    document.getElementById("projectshow").innerHTML += '<p class="centertxt">Battle Suite is a 3D Thirdperson shooter that allows players to drive robots to protect cities.</p><br><hr>'

    document.getElementById("unityproject").className = "";
    document.getElementById("asepriteproject").className = "";
    document.getElementById("blenderproject").className = "active";
    currentWork = 3;
}


//"Load HTML page in div" ref: https://stackoverflow.com/questions/17636528/how-do-i-load-an-html-page-in-a-div-using-javascript

function reloadcurrentWork() {

    if (currentWork == 1) {
        work4();
    } else if (currentWork == 2) {
        work5();
    } else if (currentWork == 3) {
        work6();
    } else if (currentWork == 4) {
        work7();
    }
}