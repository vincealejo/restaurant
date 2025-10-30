import "./styles.css";
import home from "./pages/home.js";
import menu from "./pages/menu.js";


const content = document.querySelector("#content");
const navButtons = document.querySelector(".nav-buttons");
const pages = {
    home: home(),
    menu: menu(),
};

// initial page
displayPage("menu");

// changes page corresponding to what button is clicked on the nav bar
navButtons.addEventListener("click", (e) => {
    const pageNames = ["home", "menu", "about"];
    if(pageNames.includes(e.target.dataset.name)) {
        displayPage(e.target.dataset.name);
    };
});

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



