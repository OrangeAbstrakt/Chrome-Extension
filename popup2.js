document.getElementById("add-button11").addEventListener("click", function () {
    addLink('input-field11')
});

document.getElementById("add-button12").addEventListener("click", function () {
    addLink('input-field12')
});

document.getElementById("add-button13").addEventListener("click", function () {
    addLink('input-field13')
});

document.getElementById("add-button14").addEventListener("click", function () {
    addLink('input-field14')
});

document.getElementById("add-button15").addEventListener("click", function () {
    addLink('input-field15')
});

document.getElementById("add-button16").addEventListener("click", function () {
    addLink('input-field16')
});

document.getElementById("add-button17").addEventListener("click", function () {
    addLink('input-field17')
});

document.getElementById("add-button18").addEventListener("click", function () {
    addLink('input-field18')
});

document.getElementById("add-button19").addEventListener("click", function () {
    addLink('input-field19')
});

document.getElementById("add-button20").addEventListener("click", function () {
    addLink('input-field20')
});

function addLink(field1) {
    document.getElementById(field1).style.visibility = 'visible';
}



document.getElementById("submit11").addEventListener("click", function () {
    assignLink('input-field11', 'link11', 'name11', 'input-take11', 'name-take11')
})

document.getElementById("submit12").addEventListener("click", function () {
    assignLink('input-field12', 'link12', 'name12', 'input-take12', 'name-take12')
})

document.getElementById("submit13").addEventListener("click", function () {
    assignLink('input-field13', 'link13', 'name13', 'input-take13', 'name-take13')
})

document.getElementById("submit14").addEventListener("click", function () {
    assignLink('input-field14', 'link14', 'name14', 'input-take14', 'name-take14')
})

document.getElementById("submit15").addEventListener("click", function () {
    assignLink('input-field15', 'link15', 'name15', 'input-take15', 'name-take15')
})

document.getElementById("submit16").addEventListener("click", function () {
    assignLink('input-field16', 'link16', 'name16', 'input-take16', 'name-take16')
})

document.getElementById("submit17").addEventListener("click", function () {
    assignLink('input-field17', 'link17', 'name17', 'input-take17', 'name-take17')
})

document.getElementById("submit18").addEventListener("click", function () {
    assignLink('input-field18', 'link18', 'name18', 'input-take18', 'name-take18')
})

document.getElementById("submit19").addEventListener("click", function () {
    assignLink('input-field19', 'link19', 'name19', 'input-take19', 'name-take19')
})

document.getElementById("submit20").addEventListener("click", function () {
    assignLink('input-field20', 'link20', 'name20', 'input-take20', 'name-take20')
})

function assignLink(field, linkVar, nameVar, i, n) {
    document.getElementById(field).style.visibility = 'hidden';
    localStorage.setItem(linkVar, document.getElementById(i).value);
    localStorage.setItem(nameVar, document.getElementById(n).value);
}

document.getElementById('btn11').innerText = localStorage.getItem("name11");
document.getElementById('btn12').innerText = localStorage.getItem("name12");
document.getElementById('btn13').innerText = localStorage.getItem("name13");
document.getElementById('btn14').innerText = localStorage.getItem("name14");
document.getElementById('btn15').innerText = localStorage.getItem("name15");
document.getElementById('btn16').innerText = localStorage.getItem("name16");
document.getElementById('btn17').innerText = localStorage.getItem("name17");
document.getElementById('btn18').innerText = localStorage.getItem("name18");
document.getElementById('btn19').innerText = localStorage.getItem("name19");
document.getElementById('btn20').innerText = localStorage.getItem("name20");



document.getElementById("del11").addEventListener("click", function () {
    removeLink('link11', 'name11')
})

document.getElementById("del12").addEventListener("click", function () {
    removeLink('link12', 'name12')
})

document.getElementById("del13").addEventListener("click", function () {
    removeLink('link13', 'name13')
})

document.getElementById("del14").addEventListener("click", function () {
    removeLink('link14', 'name14')
})

document.getElementById("del15").addEventListener("click", function () {
    removeLink('link15', 'name15')
})

document.getElementById("del16").addEventListener("click", function () {
    removeLink('link16', 'name16')
})

document.getElementById("del17").addEventListener("click", function () {
    removeLink('link17', 'name17')
})

document.getElementById("del18").addEventListener("click", function () {
    removeLink('link18', 'name18')
})

document.getElementById("del19").addEventListener("click", function () {
    removeLink('link19', 'name19')
})

document.getElementById("del20").addEventListener("click", function () {
    removeLink('link20', 'name20')
})

function removeLink(linkNum, nameNum) {
    localStorage.removeItem(linkNum);
    localStorage.removeItem(nameNum);
}

document.getElementById("btn11").addEventListener("click", function () {
    chrome.tabs.create({
        active: true,
        url: localStorage.getItem("link11"),
    })
})

document.getElementById("btn12").addEventListener("click", function () {
    chrome.tabs.create({
        active: true,
        url: localStorage.getItem("link12"),
    })
})

document.getElementById("btn13").addEventListener("click", function () {
    chrome.tabs.create({
        active: true,
        url: localStorage.getItem("link13"),
    })
})

document.getElementById("btn14").addEventListener("click", function () {
    chrome.tabs.create({
        active: true,
        url: localStorage.getItem("link14"),
    })
})

document.getElementById("btn15").addEventListener("click", function () {
    chrome.tabs.create({
        active: true,
        url: localStorage.getItem("link15"),
    })
})

document.getElementById("btn16").addEventListener("click", function () {
    chrome.tabs.create({
        active: true,
        url: localStorage.getItem("link16"),
    })
})

document.getElementById("btn17").addEventListener("click", function () {
    chrome.tabs.create({
        active: true,
        url: localStorage.getItem("link17"),
    })
})

document.getElementById("btn18").addEventListener("click", function () {
    chrome.tabs.create({
        active: true,
        url: localStorage.getItem("link18"),
    })
})

document.getElementById("btn19").addEventListener("click", function () {
    chrome.tabs.create({
        active: true,
        url: localStorage.getItem("link19"),
    })
})

document.getElementById("btn20").addEventListener("click", function () {
    chrome.tabs.create({
        active: true,
        url: localStorage.getItem("link20"),
    })
})