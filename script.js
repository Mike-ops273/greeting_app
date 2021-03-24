var name = window.prompt("What is your name?");
var message1 = "Hello\n"; 
var message2= "there\n";
var fullstop = ".";
var nameSpan = document.getElementById("user_name");
var stranger = "stranger";

//document.write(message.fontcolor("white") + name.fontcolor("yellow") + fullstop.fontcolor("white"));

/*
function check(name) {
    if (name == "") {
        return stranger;
    } else {
        return name;
    }
}
*/

function checkName() {
    if (name == "") {
        name = "stranger";
    } else {
        return name;
    }
}

//check(name);
checkName();
document.body.style.backgroundColor = "black";
document.write(message1); 
document.write(message2);
document.write(name + ".");

