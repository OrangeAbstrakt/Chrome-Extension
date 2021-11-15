document.getElementById("add-button21").addEventListener("click", function () {
    addLink('input-field21')
});

document.getElementById("add-button22").addEventListener("click", function () {
    addLink('input-field22')
});

document.getElementById("add-button23").addEventListener("click", function () {
    addLink('input-field23')
});

document.getElementById("add-button24").addEventListener("click", function () {
    addLink('input-field24')
});

document.getElementById("add-button25").addEventListener("click", function () {
    addLink('input-field25')
});

document.getElementById("add-button26").addEventListener("click", function () {
    addLink('input-field26')
});

document.getElementById("add-button27").addEventListener("click", function () {
    addLink('input-field27')
});

document.getElementById("add-button28").addEventListener("click", function () {
    addLink('input-field28')
});

document.getElementById("add-button29").addEventListener("click", function () {
    addLink('input-field29')
});

document.getElementById("add-button30").addEventListener("click", function () {
    addLink('input-field30')
});

function addLink(field1) {
    document.getElementById(field1).style.visibility = 'visible';
}



document.getElementById("submit21").addEventListener("click", function () {
    assignLink('input-field21', 'link21', 'name21', 'input-take21', 'name-take21')
})

document.getElementById("submit22").addEventListener("click", function () {
    assignLink('input-field22', 'link22', 'name22', 'input-take22', 'name-take22')
})

document.getElementById("submit23").addEventListener("click", function () {
    assignLink('input-field23', 'link23', 'name23', 'input-take23', 'name-take23')
})

document.getElementById("submit24").addEventListener("click", function () {
    assignLink('input-field24', 'link24', 'name24', 'input-take24', 'name-take24')
})

document.getElementById("submit25").addEventListener("click", function () {
    assignLink('input-field25', 'link25', 'name25', 'input-take25', 'name-take25')
})

document.getElementById("submit26").addEventListener("click", function () {
    assignLink('input-field26', 'link26', 'name26', 'input-take26', 'name-take26')
})

document.getElementById("submit27").addEventListener("click", function () {
    assignLink('input-field27', 'link27', 'name27', 'input-take27', 'name-take27')
})

document.getElementById("submit28").addEventListener("click", function () {
    assignLink('input-field28', 'link28', 'name28', 'input-take28', 'name-take28')
})

document.getElementById("submit29").addEventListener("click", function () {
    assignLink('input-field29', 'link29', 'name29', 'input-take29', 'name-take29')
})

document.getElementById("submit30").addEventListener("click", function () {
    assignLink('input-field30', 'link30', 'name30', 'input-take30', 'name-take30')
})

function assignLink(field, linkVar, nameVar, i, n) {
    document.getElementById(field).style.visibility = 'hidden';
    localStorage.setItem(linkVar, document.getElementById(i).value);
    localStorage.setItem(nameVar, document.getElementById(n).value);
}

document.getElementById('btn21').innerText = localStorage.getItem("name21");
document.getElementById('btn22').innerText = localStorage.getItem("name22");
document.getElementById('btn23').innerText = localStorage.getItem("name23");
document.getElementById('btn24').innerText = localStorage.getItem("name24");
document.getElementById('btn25').innerText = localStorage.getItem("name25");
document.getElementById('btn26').innerText = localStorage.getItem("name26");
document.getElementById('btn27').innerText = localStorage.getItem("name27");
document.getElementById('btn28').innerText = localStorage.getItem("name28");
document.getElementById('btn29').innerText = localStorage.getItem("name29");
document.getElementById('btn30').innerText = localStorage.getItem("name30");



document.getElementById("del21").addEventListener("click", function () {
    removeLink('link21', 'name21')
})

document.getElementById("del22").addEventListener("click", function () {
    removeLink('link22', 'name22')
})

document.getElementById("del23").addEventListener("click", function () {
    removeLink('link23', 'name23')
})

document.getElementById("del24").addEventListener("click", function () {
    removeLink('link24', 'name24')
})

document.getElementById("del25").addEventListener("click", function () {
    removeLink('link25', 'name25')
})

document.getElementById("del26").addEventListener("click", function () {
    removeLink('link26', 'name26')
})

document.getElementById("del27").addEventListener("click", function () {
    removeLink('link27', 'name27')
})

document.getElementById("del28").addEventListener("click", function () {
    removeLink('link28', 'name28')
})

document.getElementById("del29").addEventListener("click", function () {
    removeLink('link29', 'name29')
})

document.getElementById("del30").addEventListener("click", function () {
    removeLink('link30', 'name30')
})

function removeLink(linkNum, nameNum) {
    localStorage.removeItem(linkNum);
    localStorage.removeItem(nameNum);
}

document.getElementById("btn21").addEventListener("click", function () {
    chrome.tabs.create({
        active: true,
        url: localStorage.getItem("link21"),
    })
})

document.getElementById("btn22").addEventListener("click", function () {
    chrome.tabs.create({
        active: true,
        url: localStorage.getItem("link22"),
    })
})

document.getElementById("btn23").addEventListener("click", function () {
    chrome.tabs.create({
        active: true,
        url: localStorage.getItem("link23"),
    })
})

document.getElementById("btn24").addEventListener("click", function () {
    chrome.tabs.create({
        active: true,
        url: localStorage.getItem("link24"),
    })
})

document.getElementById("btn25").addEventListener("click", function () {
    chrome.tabs.create({
        active: true,
        url: localStorage.getItem("link25"),
    })
})

document.getElementById("btn26").addEventListener("click", function () {
    chrome.tabs.create({
        active: true,
        url: localStorage.getItem("link26"),
    })
})

document.getElementById("btn27").addEventListener("click", function () {
    chrome.tabs.create({
        active: true,
        url: localStorage.getItem("link27"),
    })
})

document.getElementById("btn28").addEventListener("click", function () {
    chrome.tabs.create({
        active: true,
        url: localStorage.getItem("link28"),
    })
})

document.getElementById("btn29").addEventListener("click", function () {
    chrome.tabs.create({
        active: true,
        url: localStorage.getItem("link29"),
    })
})

document.getElementById("btn30").addEventListener("click", function () {
    chrome.tabs.create({
        active: true,
        url: localStorage.getItem("link30"),
    })
})