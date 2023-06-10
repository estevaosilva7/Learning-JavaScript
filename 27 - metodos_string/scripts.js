// toLowerCase e toUpperCase

var frase = "O melhor do mundo!";

var caixaAlta = frase.toUpperCase();
console.log(caixaAlta);
var caixaBaixa = frase.toLowerCase();
console.log(caixaBaixa);

// Trim

var nome = "               Estevão                  ";
console.log(nome);

var nomeTrim = nome.trim();
console.log(nomeTrim);

//Split

console.log(frase.split(" "));

var tags = "JavaScript,  Java, Html, CSS";

console.log(tags.split(","))

var frase2 = "O melhor do mundo melhor";
console.log(frase2.indexOf("melhor"));
console.log(frase2.lastIndexOf("melhor"));