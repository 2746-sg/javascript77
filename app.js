import "./style.css";

window.onload = function() {
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
  function excuse() {
    let randomwho = who[Math.floor(Math.random() * who.length)];
    let randomaction = action[Math.floor(Math.random() * action.length)];
    let randomwhat = what[Math.floor(Math.random() * what.length)];
    let randomwhen = when[Math.floor(Math.random() * when.length)];

    return randomwho + " " + randomaction + " " + randomwhat + " " + randomwhen;
  }
  document.getElementById("#excuse").innerHTML = excuse();
};