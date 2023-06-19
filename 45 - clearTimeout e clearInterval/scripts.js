// clearTimeout
var x = 0;

var myTime = setTimeout(function (){
    console.log("O x é 0");

}, 1500);

x = 5;

if (x > 0) {
    clearTimeout(myTime);
    console.log("O x passou de 0");
}

// clearInterval
var myInterval = setInterval(function () {
    console.log("Imprimindo Interval");
}, 500);

setTimeout(function () {
    console.log("Não precisa mais repetir");
    clearInterval(myInterval);
    
}, 1500);