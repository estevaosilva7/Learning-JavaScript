console.log(this);


let pessoa = {
    nome: "Estevão",
    idade: 24,

    falar: function() {
        console.log("Olá, tudo bem?");
    },

    dizerNome: function() {
        console.log("O meu nome é " + this.nome);
    },
    aniversario: function() {
        this.idade += 1;
    },
    saudacao: function() {
        return "Sr. " + this.nome;
    }

};


pessoa.falar();
pessoa.dizerNome();

pessoa.aniversario();
console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade);

var sdc = pessoa.saudacao();
console.log(sdc);




