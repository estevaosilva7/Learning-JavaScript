var x = 1;  //Escopo global
var y = 2;  //Escopo global

console.log(x, y);

function teste() {
    var z = 3;
    console.log(z); // Escopo local
    console.log(x);
    console.log(y);
}

teste();

if(true) {          //if não funcional Escopo local***
    var h = 7;
    console.log(h);

}
console.log(h);