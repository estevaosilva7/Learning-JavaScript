var obj = {
nome: "Estevão",
idade: 24,
profissao: "Progrmador",
estarTrabalhando: true,
};

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);
console.log(obj.estarTrabalhando);
console.log("O meu nome é " + obj.nome);

document.write("O meu nome é ", obj.nome);

obj.nome = "Carlos";

console.log("O meu nome é " + obj.nome); 
document.write("O meu nome é ", obj.nome);

obj.graduacao = true;
console.log(obj);

