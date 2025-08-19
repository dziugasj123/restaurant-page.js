import {createDiv, createP} from '../functions/domFunctions';

class ContactItem{
    constructor(loc, numb, open){
        this.loc = loc;
        this.numb = numb;
        this.open = open;
    }
}

const contactItems = [
    new ContactItem(
        "Highland Dr. 198, Chicago",
        "+37061234567",
        "I - VII 11:00 - 22:00"
    ),
    new ContactItem(
        "Maple Ave. 742, New York",
        "+37069847215",
        "I - VII 14:00 - 23:00"
    ),
];

function loadContact(){
    const contactContainer = createDiv("contact-container");
    renderContacts(contactContainer);
    return contactContainer;
}

function renderContacts(contactContainer){
    for (let i = 0; i < contactItems.length; i++){
        const contactDiv = createDiv("contact-div")
        const locationDiv = createDiv("contact-location");

        const location = createP("contact-location");
        location.textContent = contactItems[i].loc;

        const phoneTimeDiv = createDiv("contact-phone");
        const phoneText = createP("contact-phone-p");
        phoneText.textContent = "Order online:"
        const phoneNumber = createP("phone-number-p");
        phoneNumber.textContent = contactItems[i].numb;

        const timeText = createP("time-text-p");
        timeText.textContent = "Openning times: ";

        const actualTime = createP("actual-time-text-p");
        actualTime.textContent = contactItems[i].open;

        phoneTimeDiv.append(phoneText, phoneNumber, timeText, actualTime);
        locationDiv.append(location);
        contactDiv.append(locationDiv, phoneTimeDiv);
        contactContainer.append(contactDiv);
    }
}

export default loadContact;