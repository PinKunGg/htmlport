window.onload = pageload;

//Get the button
var ToTopButton = document.getElementById("GoToTopButton");
var NavBar = document.getElementById("header");
var VerNavBar = document.getElementById("dropdownheader");

var contactelement = document.getElementById("contact");

function pageload() {
    NavBar.style.display = "none";
    VerNavBar.style.display = "block";
}
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        ToTopButton.style.display = "block";
        NavBar.style.display = "block";
        VerNavBar.style.display = "none";
    } else {
        ToTopButton.style.display = "none";
        NavBar.style.display = "none";
        VerNavBar.style.display = "block";
    }
}

// When the user clicks on the button, scroll to the top of the document
function GoTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* GoToTop Button ref: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp */