import chefUrl from './images/chef.png';
import {createDiv, createH2, createH3, createImg} from '../functions/domFunctions';
function loadHome() {
    const homeItemsDiv = createDiv("home-items-div");

    const h2 = createH2("home-text");
    h2.textContent = "Made with love since 1853";

    const chefImage = createImg(chefUrl, "chef-image");
    chefImage.alt = "Chef";

    const h3 = createH3("text-below-chef");
    h3.textContent = "From our kitchen to your table, every plate tells a story of tradition, passion, and the freshest ingredients.";

    homeItemsDiv.append(h2, chefImage, h3);
    return homeItemsDiv;
};
export default loadHome;