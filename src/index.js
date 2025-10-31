import "./styles.css";
import home from "./pages/home.js";
import menu from "./pages/menu.js";
import contact from "./pages/contact.js";


const content = document.querySelector("#content");
const navButtons = document.querySelector(".nav-buttons");
const pages = {
    home: home(),
    menu: menu(),
    contact: contact(),
};

// initial page
displayPage("home");

// tab switch
navButtons.addEventListener("click", (e) => {
    const pageNames = ["home", "menu", "contact"];
    if(pageNames.includes(e.target.dataset.name)) {
        displayPage(e.target.dataset.name);
    };
});

// show tab and changes tab button's color
function displayPage(name) {
    [...navButtons.children].forEach(child => {
        content.innerHTML = "";
        content.append(pages[name]);
        if(child.dataset.name !== name) {
            child.style.backgroundColor = "#ccc";
        } else {
            child.style.backgroundColor = "";
        };
    });
}



