function exibir(num) {
    console.log("O resultado foi: " + num);
}

function soma(a, b, callback) {
    var op = a + b;
    callback(op);
}

function multiplicaçao(a, b, cb) {
    var op = a * b;
    cb(op);
}

soma(7,7,exibir);
multiplicaçao(7, 7, exibir);