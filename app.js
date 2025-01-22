alert("Bem vindo ao jogo do numero sorteiado!!");
let numeroSecreto = 4;
console.log(numeroSecreto);

let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
  chute = prompt("Escolha um numero entre 1 a 10");

  if (chute == numeroSecreto) {
    alert(
      `Isso mesmo!!Voce acertou o numero Secreto e de facto ${numeroSecreto} e voce tentou ${tentativas}`
    );
  } else {
    if (chute > numeroSecreto) {
      alert(`O numero secreto e menor que ${chute}`);
    } else {
      alert(`O numero Secreto e maior que ${chute}`);
    }
  }
  tentativas++;
}
