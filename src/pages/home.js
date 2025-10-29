export default function home() {
    const home = document.createElement("div");
    home.id = "home";

    const background = document.createElement("div");
    background.className = "background";

    const logo = document.createElement("h1");
    logo.className = "logo";
    logo.innerText = "Restaurant";

    home.append(background);
    background.append(logo);

    return home;
}