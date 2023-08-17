class pessoa {
    constructor(nome, idade, filho = null) {
        this.nome = nome;
        this.idade = idade;
        this.filho = filho;
    }
}

const pessoa1 = new pessoa("Fernando",33);
const pessoa2 = new pessoa("Lucas",27);
const pessoa3 = new pessoa("Ítalo",10);
const pessoa4 = new pessoa("Bernardo",7);

pessoa1.filho = pessoa3;
pessoa2.filho = pessoa4;

const pessoas = [pessoa1, pessoa2, pessoa3, pessoa4];


pessoas.forEach(pessoa => {
    const filhoNome = pessoa.filho ? pessoa.filho.nome : "Nenhum";
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Filho: ${filhoNome}`);
});