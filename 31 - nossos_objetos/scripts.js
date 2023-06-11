let pessoa = {
    nome: "Estevão",
    idade: 24,

    falar: function() {
        console.log("Olá, tudo bem?");
    },

    soma: function(a, b) {
        return a + b;
    }

}

console.log(pessoa.nome);
console.log(pessoa.idade);

console.log(pessoa.falar);
pessoa.falar();

var soma = pessoa.soma(7,7);
console.log(soma);