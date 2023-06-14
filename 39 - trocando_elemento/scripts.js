// criando elemento

var el = document.createElement("h3");
el.classList = "elemento-classe";

var texto = document.createTextNode("Esse é o texto");
el.appendChild(texto)

console.log(el);

// selecionar o elemento que quero trocar
var title = document.querySelector("#title");

console.log(title);

// selecionar o pai do el

var pai = title.parentNode;

// trocar elemento

pai.replaceChild(el, title);