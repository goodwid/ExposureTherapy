function gebi(el) { // gleefully stolen from Al!
    return document.getElementById(el);
}

function createEl (el,data) {
    var newEl = document.createElement(el);
    if (data) {
        var newText = document.createTextNode(data);
        newEl.appendChild(newText);
    }
    return newEl;
}
