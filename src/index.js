function genFragment(text) {
    const fragment = document.createDocumentFragment();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    while (doc.body.lastChild) {
        fragment.insertBefore(document.adoptNode(doc.body.lastChild), fragment.firstChild || null);
    }

    return fragment;
}

function appendText(text) {
    document.body.appendChild(genFragment(text));
}

function genAddExample(a, b) {
    return `<div>${a} + ${b} = ${a + b}<div>`
}

appendText(genAddExample(3,6));
