document.getElementById("add-button1").addEventListener("click", function (){
    addLink('input-field1')
});

document.getElementById("add-button2").addEventListener("click", function (){
    addLink('input-field2')
});

document.getElementById("add-button3").addEventListener("click", function (){
    addLink('input-field3')
});

document.getElementById("add-button4").addEventListener("click", function (){
    addLink('input-field4')
});

document.getElementById("add-button5").addEventListener("click", function (){
    addLink('input-field5')
});

document.getElementById("add-button6").addEventListener("click", function (){
    addLink('input-field6')
});

document.getElementById("add-button7").addEventListener("click", function (){
    addLink('input-field7')
});

document.getElementById("add-button8").addEventListener("click", function (){
    addLink('input-field8')
});

document.getElementById("add-button9").addEventListener("click", function (){
    addLink('input-field9')
});

document.getElementById("add-button10").addEventListener("click", function (){
    addLink('input-field10')
});

function addLink(field1) {
    document.getElementById(field1).style.visibility = 'visible';
}


document.getElementById("submit1").addEventListener("click", function(){
    assignLink('input-field1', 'link1', 'name1', 'input-take1', 'name-take1')
})

document.getElementById("submit2").addEventListener("click", function(){
    assignLink('input-field2', 'link2', 'name2', 'input-take2', 'name-take2')
})

document.getElementById("submit3").addEventListener("click", function(){
    assignLink('input-field3', 'link3', 'name3', 'input-take3', 'name-take3')
})

document.getElementById("submit4").addEventListener("click", function(){
    assignLink('input-field4', 'link4', 'name4', 'input-take4', 'name-take4')
})

document.getElementById("submit5").addEventListener("click", function(){
    assignLink('input-field5', 'link5', 'name5', 'input-take5', 'name-take5')
})

document.getElementById("submit6").addEventListener("click", function(){
    assignLink('input-field6', 'link6', 'name6', 'input-take6', 'name-take6')
})

document.getElementById("submit7").addEventListener("click", function(){
    assignLink('input-field7', 'link7', 'name7', 'input-take7', 'name-take7')
})

document.getElementById("submit8").addEventListener("click", function(){
    assignLink('input-field8', 'link8', 'name8', 'input-take8', 'name-take8')
})

document.getElementById("submit9").addEventListener("click", function(){
    assignLink('input-field9', 'link9', 'name9', 'input-take9', 'name-take9')
})

document.getElementById("submit10").addEventListener("click", function(){
    assignLink('input-field10', 'link10', 'name10', 'input-take10', 'name-take10')
})

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



document.getElementById("del1").addEventListener("click", function () {
    removeLink('link1', 'name1')
})

document.getElementById("del12").addEventListener("click", function () {
    removeLink('link2', 'name2')
})

document.getElementById("del3").addEventListener("click", function () {
    removeLink('link3', 'name3')
})

document.getElementById("del4").addEventListener("click", function () {
    removeLink('link4', 'name4')
})

document.getElementById("del5").addEventListener("click", function () {
    removeLink('link5', 'name5')
})

document.getElementById("del6").addEventListener("click", function () {
    removeLink('link6', 'name6')
})

document.getElementById("del7").addEventListener("click", function () {
    removeLink('link7', 'name7')
})

document.getElementById("del8").addEventListener("click", function () {
    removeLink('link8', 'name8')
})

document.getElementById("del9").addEventListener("click", function () {
    removeLink('link9', 'name9')
})

document.getElementById("del10").addEventListener("click", function () {
    removeLink('link10', 'name10')
})

function removeLink(linkNum, nameNum){
    localStorage.removeItem(linkNum);
    localStorage.removeItem(nameNum);
}
