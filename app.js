alert("Desafio Sobre a estrutura de repeticao While");
let contador = 1;

//Desafio 1
while (contador <= 10) {
  alert(contador);
  contador++;
}

// Desafio 2
contador = 10;

while (contador >= 0) {
  alert(contador);
  contador--;
}

//Desafio 3
contador = prompt("Digite um numero!");
while (contador >= 0) {
  console.log(contador);
  contador--;
}

//Desafio 4
let aux = 1;
contador = prompt("Digite um numero!");
while (aux <= contador) {
  console.log(aux);
  aux++;
}
