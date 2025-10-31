export default function contact() {
    const container = document.createElement("div");
    container.className  = "contact";

    const header = document.createElement("h2");
    header.className = "title";
    header.innerText = "Contact us";

    const contactCont = document.createElement("div");
    contactCont.className = "contact-cont";

    const number = document.createElement("p");
    number.className = "contact-number";
    number.innerText = "+1-999-999-999";

    const email = document.createElement("p");
    email.className = "contact-email";
    email.innerText = "restaurant@nonexistent.email.com"

    container.append(header, contactCont);
    contactCont.append(number, email);

    return container;
}