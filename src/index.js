import "./styles.css";
import home from "./pages/home.js";


const content = document.querySelector("#content");
const homepage = home();

content.append(homepage);

