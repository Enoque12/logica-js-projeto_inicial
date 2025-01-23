//Ponto 1 do Desafio 3
console.log("Seja Bem vindo!!");

//Ponto 2 do Desafio 3
let nome = "Enoque";
console.log(`Olá, ${nome}!`);

//Ponto 3 do Desafio 3
alert(`Olá, ${nome}!`);

//Ponto 4 do Desafio 3
let linguagemMaisGosta = prompt(
  "Qual é a linguagem de Programação que tu mais gostas??"
);
console.log(linguagemMaisGosta);

//Ponto 5 do Desafio 3
let valor1 = 4;
let valor2 = 5;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

//Ponto 6 do Desafio 3
valor1 = 5;
valor2 = 4;
resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

//Ponto 7 do Desafio 3
let idade = prompt("Qual é a sua idade??");
let maiorMenor = idade > 17 ? "Maior de Idade" : "Menor de idade";
alert(maiorMenor);

//Ponto 8 do Desafio 3
let positivoNegativo = prompt("Digite um numero: ");
if (positivoNegativo > 0) {
  alert("Numero Positivo!");
} else {
  if (positivoNegativo < 0) {
    alert("Numero Negativo!!");
  } else {
    alert("Igual a zero!");
  }
}

//Ponto 9 do Desafio 3
let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}

//Ponto 10 do Desafio 3
let nota = prompt("Introduza a sua nota!");
if (nota > 7) {
  console.log("Aprovado!!");
} else {
  console.log("Reprovado!!");
}

//Ponto 11 do Desafio 3
let numero = parseInt(Math.random());
console.log(`O numero aleatorio gerado e ${numero}.`);

//Ponto 12 do Desafio 3
numero = parseInt(Math.random() * 10 + 1);
console.log(`O numero aleatorio gerado e ${numero}.`);

//Ponto 13 do Desafio 3
numero = parseInt(Math.random() * 1000 + 1);
console.log(`O numero aleatorio gerado e ${numero}.`);
