export default function home() {
    const home = document.createElement("div");
    home.id = "home";

    const background = document.createElement("div");
    background.className = "background";

    const logo = document.createElement("h1");
    logo.className = "logo";
    logo.innerText = "Restaurant";

    const aboutCont = document.createElement("div");
    aboutCont.className = "about-cont";

    const aboutHeader = document.createElement("h2");
    aboutHeader.className = "about-header title";
    aboutHeader.innerText = "About us";

    const aboutText = document.createElement("p");
    aboutText.className = "about-text";
    aboutText.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quos, accusantium obcaecati molestiae rem a quasi nulla quis quisquam explicabo officiis sequi facere, laudantium atque quidem hic. Dolorum, id incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rem doloremque quaerat, consectetur facilis repellendus commodi voluptate ipsum. Ea cum laudantium totam sed voluptatem, quod molestiae enim similique harum delectus?";

    home.append(background, aboutCont);
    background.append(logo);
    aboutCont.append(aboutHeader, aboutText);

    return home;
}