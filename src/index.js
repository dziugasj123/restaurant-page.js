import './style/styles.css';
import loadHome from './pages/home';
import loadMenu from './pages/menu';
import loadContact from './pages/contact';
import backgroundUrl from './pages/images/background.png';
import {createImg, createDiv, createH1, createBtn} from './functions/domFunctions';

let content = document.getElementById("content");

function createBackgroundImage(){
    const image = createImg(backgroundUrl, "background-image");
    image.alt = "Pasta";
    return image;
}

function createHeader(){
    const header = document.createElement("header");
    const navBar = document.createElement("nav");
    navBar.classList.add("header-nav");

    const title = createH1("header-restaurant-name")
    const linktitle = document.createElement("a");
    linktitle.href = "./";
    linktitle.textContent = "PASTARIFFIC";

    title.append(linktitle);

    const createNavButtonsDiv = createDiv("header-nav-buttons");
    createNavButtonsDiv.addEventListener('click', (e) =>{
        const isButton = e.target.nodeName === 'BUTTON';
        if(!isButton){
            return;
        }
        else {
            createNavButtonsDiv.querySelectorAll("button")
            .forEach(btn => btn.classList.remove("active"));

            e.target.classList.add("active");

            pageLoader(createNavButtonsDiv, e.target.classList[0]);
        }
    })

    const homeButton = createBtn("home-btn");
    homeButton.classList.add("active");
    homeButton.textContent = "Home";

    const menuButton = createBtn("menu-btn");
    menuButton.textContent = "Menu";

    const contactButton = createBtn("contact-btn");
    contactButton.textContent = "Contact";

    createNavButtonsDiv.append(homeButton, menuButton, contactButton);
    navBar.append(title, createNavButtonsDiv);
    header.append(navBar);
    return header;
};

function createMain(button = "home-btn"){
    let main = document.querySelector(".main");
    if (main) {
        main.textContent = "";
    } 
    else {
        main = createDiv("main");
    }
    
    let mainContent = ''; 
    if (button === "home-btn"){
        mainContent = loadHome();
    }
    else if (button === "menu-btn"){
        mainContent = loadMenu();
    }
    else if (button === "contact-btn"){
        mainContent = loadContact();
    }
    main.append(mainContent);
    return main;
}

function createFooter(){
    const footer = document.createElement("footer");
    const navBar = document.createElement("nav");
    navBar.classList.add("footer-nav");
    const h1 = createH1("footer-nav-copyright");
    h1.textContent = "Made by dziugasj123";
    navBar.append(h1);
    footer.append(navBar);
    return footer;
}

function pageLoader(buttonsContainer,button){
    for(const child of buttonsContainer.children){
        if (child.classList.contains(button)){
            createMain(button);
            break;
        }
    }
}

function createWebsite(){
    content.append(
        createBackgroundImage(), 
        createHeader(), 
        createMain(), 
        createFooter()
    );
}

createWebsite();

