













// //FUNÇÕES
// const player1 = document.getElementById('p1');
// player1.addEventListener('click', function(){

//      let nomeElemento = prompt('Digite o nome do elemento a ser criado! Ex: (p)');
//     //const novoElemento = document.createElement('p');
//     //const novoElemento = document.createElement('div');
//     //const novoElemento = document.createElement('table');
//     const novoElemento = document.createElement(nomeElemento);
//     novoElemento.textContent = 'Novo Elemento criado!';
//     document.body.appendChild(novoElemento);
// });

// function criaElemento(){
//     let nomeElemento = prompt('Digite o nome do elemento a ser criado! Ex: (p)');
//     //const novoElemento = document.createElement('p');
//     //const novoElemento = document.createElement('div');
//     //const novoElemento = document.createElement('table');
//     const novoElemento = document.createElement(nomeElemento);
//     novoElemento.textContent = 'Novo Elemento criado!';
//     document.body.appendChild(novoElemento);
// }

/*

//OBJETOS
let pessoa = {
    nome: 'Ale',
    cpf: '12345678900',
    endereco:['Rua: Da Vdd','Estado: SP', 'Cidade: São Paulo'],
    profissao: 'professor',
    validaCpf: function(nr){
        //....
        this.cpf = nr;
    }
}

console.log('Nome Pessoa : ' + pessoa.nome);
console.log('CPF Pessoa : ' + pessoa.cpf);
console.log('Endereço');
console.log(pessoa.endereco[0]);
console.log(pessoa.endereco[1]);
console.log(pessoa.endereco[2]);
pessoa.validaCpf(11111);
console.log('CPF Pessoa : ' + pessoa.cpf);


//Declaração de Variáveis!
var nr1 = 100;
var nr2 = 109;
nr1 = "ALE";

//HOYSTING = ELEVAR/IÇAR/
//O hoysting ocorre sempre que se declara as variáveis ou constantes
//E faz com que as atribuições sejam içadas antes das declarações.

//Atrelando um elemento a uma variável - Através de ID.
const btn = document.querySelector('#btnSend');
const elementoP = document.querySelector('p');

//Atrelando um evento ao botão
btn.addEventListener('click', alteraNome);

function alteraNome() {
    let nome = prompt("Digite o nome!");
    elementoP.textContent = 'Player 1:' + nome;
}

//Vetores / Arrays
var frutas = ['maçã', 'banana', 'laranja', 'pêra'];

console.log('Posição 1 do vetor de Frutas - ' + frutas[0]);
console.log('Posição 2 do vetor de Frutas - ' + frutas[1]);
console.log('Posição 3 do vetor de Frutas - ' + frutas[2]);
//Estruturas de leitura para Vetores
console.table("Posição - " + frutas);
//for-in
//for(variavel in array){}
for (f in frutas) {
    console.log("Fruta - " + frutas[f]);
}

//for-of
//for(variavel of array){}
for (f of frutas) {
    console.log("Fruta - " + f);
}

//Verificando o resultado!
//Utilizando o caractére de concatenação na operação de adição,
// ele não vai realizar a operação e sim concatenar, então devemos
// utilizar a função do JS parseInt no caso se o valor for inteiro,
// ou parseDouble se for double e etc;
//alert("Resultado da operação! " + (parseInt(nr1) + parseInt(nr2)));

*/