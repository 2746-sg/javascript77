import "./style.css";

window.onload = function() {
  // document.getElementById("#excuse").innerHTML = excuse();
};
let who = ["El mono", "El gato", "El caballo", "Mi perro", "Mi madre"];
let action = ["come", "maulla", "corre", "muerde ", "llora"];
let what = ["mucho", "demasiado", "lento", "fuerte", "poco"];
let when = [
  "cuando tiene hambre",
  "cuando esta enfadado",
  "cuando se lo dicen ",
  "cuando esta enfadado",
  "cuando esta triste"
];
const getRandomElement = listElement => {
  let element = "";
  element = listElement[Math.floor(Math.random() * listElement.length)];
  //console.log(element)
  return element;
};

const onLoad = () => {
  let excuseGen = document.querySelector("#excuse");
  excuseGen.innerHTML =
    getRandomElement(who) +
    " " +
    getRandomElement(action) +
    " " +
    getRandomElement(what) +
    " " +
    getRandomElement(when);
};

window.onLoad = onLoad();
