
function sayHello() {
    var myName ='AHMED';
    alert('Hello Every One '+'My Name is ' + myName +'' );
}
sayHello();

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
document.getElementById("myBtn").innerHTML = Date();
}

function myFunction() {
    var text = "";
    var i;
    for (i = 1; i < 5; i++) {
    text += "Already Send " + i + "<br>";
    }
    document.getElementById("button").innerHTML = text;
}