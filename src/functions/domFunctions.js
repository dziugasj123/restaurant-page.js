function createDiv(className = ""){
    const div = document.createElement("div");
    if (className){
        div.classList.add(className);
    }
    return div;
}

function createP(className = "") {
    const p = document.createElement("p");
    if (className) {
        p.classList.add(className);
    }
    return p;
}

function createH1(className = "") {
    const h1 = document.createElement("h1");
    if (className) {
        h1.classList.add(className);
    }
    return h1;
}

function createH2(className = "") {
    const h2 = document.createElement("h2");
    if (className) {
        h2.classList.add(className);
    }
    return h2;
}

function createH3(className = "") {
    const h3 = document.createElement("h3");
    if (className) {
        h3.classList.add(className);
    }
    return h3;
}

function createImg(src = "", className=""){
    const img = new Image();
    if (src) {
        img.src = src;
    }
    if (className) {
        img.classList.add(className);
    }
    return img;
}

function createBtn(className = ""){
    const btn = document.createElement("button");
    if (className){
        btn.classList.add(className);
    }
    return btn;
}

export {
createDiv, 
createP, 
createH1, 
createH2, 
createH3,
createImg,
createBtn
};