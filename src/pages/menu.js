import pastaDish1Url from './images/pasta_dish_1.png';
import pastaDish2Url from './images/pasta_dish_2.png';
import pastaDish3Url from './images/pasta_dish_3.png';
import pastaDish4Url from './images/pasta_dish_4.png';
import pastaDish5Url from './images/pasta_dish_5.png';
import pastaDish6Url from './images/pasta_dish_6.png';
import {createDiv, createP, createImg} from "../functions/domFunctions";

class MenuItem {
    constructor(name, desc, img){
        this.name = name;
        this.desc = desc;
        this.img = img;
    }
}

const menuItems = [
    new MenuItem(
        "Cacio e Pepe",
        "A Roman pasta dish made simply with pecorino cheese and black pepper. Very creamy and rich despite its simplicity.",
        pastaDish1Url
    ),
    new MenuItem(
        "Spaghetti al Pomodoro",
        "Classic spaghetti with a fresh tomato sauce, usually made with ripe tomatoes, garlic, and olive oil.",
        pastaDish2Url
    ),
    new MenuItem(
        "Spaghetti alla Napoletana",
        "Similar to pomodoro, but garnished with fresh basil leaves, highlighting Naples’ signature flavors.",
        pastaDish3Url
    ),
    new MenuItem(
        "Pasta al Pesto",
        "Pasta with green basil pesto sauce, made from basil, pine nuts, Parmesan, garlic, and olive oil.",
        pastaDish4Url
    ),
    new MenuItem(
        "Lasagna",
        "Layers of pasta sheets baked with tomato sauce, béchamel (or ricotta), cheese, and sometimes meat or vegetables.",
        pastaDish5Url
    ),
    new MenuItem(
        "Pasta al Pesto Genovese",
        "Another pesto pasta, but here the pesto is chunkier.",
        pastaDish6Url
    ),
];

function loadMenu(){
    const menuContainer = createDiv("menu-container");
    renderImages(menuContainer);
    return menuContainer;
}

function renderImages(menuContainer){
    for (let i = 0; i < menuItems.length; i++){
        const image = createImg(menuItems[i].img, "menu-img");

        const menuItemContainer = createDiv("menu-item");

        const itemNameDescContainer = createDiv("menu-item-name-desc-container");

        const itemName = createP("item-name-p");
        itemName.textContent = menuItems[i].name;

        const itemDesc = createP("item-desc-p");
        itemDesc.textContent = menuItems[i].desc;

        itemNameDescContainer.append(itemName, itemDesc)
        menuItemContainer.append(image, itemNameDescContainer);
        menuContainer.append(menuItemContainer);
    }
}
export default loadMenu;