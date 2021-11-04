function addLink(field, otherField) {
    document.getElementById(field).style.visibility = 'visible';
    document.getElementById(otherField).style.visibility = 'hidden';
}

let links = ["b"];
let names = ["Link 1"];

function assignLink(field, linkVar, nameVar, i, n) {
    document.getElementById(field).style.visibility = 'hidden';
    localStorage.setItem(linkVar , document.getElementById(i).value);
    localStorage.setItem(nameVar, document.getElementById(n).value);
}



document.getElementById('button1').setAttribute("href", localStorage.getItem("link1"));
document.getElementById('btn1').innerText = localStorage.getItem("name1");

document.getElementById('button2').setAttribute("href", localStorage.getItem("link2"));
document.getElementById('btn2').innerText = localStorage.getItem("name2");

document.getElementById('button3').setAttribute("href", localStorage.getItem("link3"));
document.getElementById('btn3').innerText = localStorage.getItem("name3");

document.getElementById('button4').setAttribute("href", localStorage.getItem("link4"));
document.getElementById('btn4').innerText = localStorage.getItem("name4");

document.getElementById('button5').setAttribute("href", localStorage.getItem("link5"));
document.getElementById('btn5').innerText = localStorage.getItem("name5");

document.getElementById('button6').setAttribute("href", localStorage.getItem("link6"));
document.getElementById('btn6').innerText = localStorage.getItem("name6");

document.getElementById('button7').setAttribute("href", localStorage.getItem("link7"));
document.getElementById('btn7').innerText = localStorage.getItem("name7");

document.getElementById('button8').setAttribute("href", localStorage.getItem("link8"));
document.getElementById('btn8').innerText = localStorage.getItem("name8");

document.getElementById('button9').setAttribute("href", localStorage.getItem("link9"));
document.getElementById('btn9').innerText = localStorage.getItem("name9");

document.getElementById('button10').setAttribute("href", localStorage.getItem("link10"));
document.getElementById('btn10').innerText = localStorage.getItem("name10");



function removeLink(linkNum, nameNum){
    localStorage.removeItem(linkNum);
    localStorage.removeItem(nameNum);
}



/*
window.onload = function () {
    document.getElementById("button").onclick = <function>;
}
*/


