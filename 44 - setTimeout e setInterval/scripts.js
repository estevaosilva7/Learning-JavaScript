// setTimeout
console.log("Antes do settimeout");

setTimeout(function() {

    console.log('Testando o setTimeout');

}, 2000);

console.log("Depois do setTimeout");

// setInterval
setInterval(function () {
    console.log("Testando o setInterval");
}, 1000);