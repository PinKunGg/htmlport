const urlGet = new URLSearchParams(window.location.search);
const regUser = urlGet.get("regusername");
const regPass = urlGet.get("regpassword");

function submitlogin()
{
    var username = document.forms["loginform"]["loginusername"].value;
    var password = document.forms["loginform"]["loginpassword"].value;

    if(username == regUser)
    {
        if(password == regPass)
        {
            alert("Login Success");
        }
        else
        {
            alert("Worng Username or Password, please try again.")
            return false;
        }
    }
    else
    {
        alert("Worng Username or Password, please try again.")
        return false;
    }
}

window.onload = pageload;
function pageload()
{
    var loginform = document.getElementById("loginform");
    loginform.onsubmit = submitlogin;
}

console.log("Login Script Loaded");