window.onload = pageload;
function pageload()
{
    var resigform = document.getElementById("registerform");
    resigform.onsubmit = submitregister;
}

function submitregister()
{
    var regpass = document.forms["registerform"]["regpassword"].value;
    var retrypass = document.forms["registerform"]["retypepassword"].value;

    if(regpass == retrypass){
        alert("Register Success.");
    }
    else{
        alert("Password and RetryPassword not match");
        document.forms["registerform"]["regpassword"].value = "";
        document.forms["registerform"]["retypepassword"].value = "";
        return false;
    }
}

console.log("Register Script Loaded");
