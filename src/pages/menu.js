import cheeseBurger from "../asset/images/cheese-burger.jpg";
import paella from "../asset/images/paella.jpg";
import pizza from "../asset/images/pizza.jpg"

const menuItems = [
    {
        name: "Cheese Burger", 
        price: "$4",
        image: cheeseBurger ,
        credits: "Photo by Anna Tukhfatullina ", 
        imageSrc: "https://www.pexels.com/photo/burger-with-sliced-vegetables-close-up-photography-2702674/"
    },
    {
        name: "Paella", 
        price: "$12",
        image: paella ,
        credits: "Photo by Denys Gromov ", 
        imageSrc: "https://www.pexels.com/photo/close-up-of-dish-with-seafood-in-pan-12419160/",
    },
    {
        name: "Pizza", 
        price: "$7",
        image: pizza ,
        credits: "Photo by Engin Akyurt ", 
        imageSrc: "https://www.pexels.com/photo/close-up-photo-of-pizza-2619970/",
    },
]

export default function menu() {
    const menu = document.createElement("div");
    menu.id = "menu";

    const title = document.createElement("h1");
    title.className = "title";
    title.innerText = "Menu";

    const container = document.createElement("div");
    container.className = "menu-container";

    menu.append(title, container);
    
    menuItems.forEach(item => {
        const {name, price, image, credits, imageSrc} = item;
        container.append(createMenuItem(name, price, image, credits, imageSrc));
    })

    return menu;
}


function createMenuItem(name, price, image, credits, imgSrc) {
    const container = document.createElement("article");
    container.className = "menu-item";

    const nameCont = document.createElement("div");
    nameCont.className = "name-container";

    const n = document.createElement("p");
    n.className = "menu-item-name";
    n.innerText = name;

    const itemPrice = document.createElement("span");
    itemPrice.className = "menu-item-price";
    itemPrice.innerText = price;

    const img = document.createElement("img");
    img.className = "menu-item-image";
    img.src = image;
    img.alt = "Photo of a cheese-burger";

    const creds = document.createElement("span");
    creds.className = "menu-item-credits";
    creds.innerText = credits;

    const imgLink = document.createElement("a");
    imgLink.className = "menu-item-link"
    imgLink.href = imgSrc;
    imgLink.target = "_blank";
    imgLink.innerText = "Visit";

    const creditText = document.createElement("p");
    creditText.className = "menu-item-credit-text";
    creditText.append(creds, imgLink);

    nameCont.append(n, itemPrice);
    container.append(nameCont, img, creditText);

    return container;
}

